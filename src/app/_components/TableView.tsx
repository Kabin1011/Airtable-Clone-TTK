"use client";

import { useState, useMemo, useRef, useEffect, useCallback, memo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import { api, type RouterOutputs } from "~/trpc/react";
import Link from "next/link";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  type ColumnDef,
} from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";
import type { FieldType } from "../../../generated/prisma";
import { CellDisplay } from "./cells/CellDisplay";
import { CellEditor } from "./cells/CellEditor";
import { FIELD_TYPE_CONFIGS } from "~/lib/fieldTypes";
import { useKeyboardShortcuts, type KeyboardShortcut } from "~/hooks/useKeyboardShortcuts";
import { useExcelImport } from "~/hooks/useExcelImport";
import { useAutoSave } from "~/hooks/useAutoSave";

type GridRow = RouterOutputs["record"]["getRows"][number];
type GridCell = GridRow["cells"][number];

// A loaded grid row plus its absolute position in the view's result set
// (rows are fetched in independent pages, so the position can't be derived
// from an index into the loaded array) and an O(1) fieldId -> cell lookup.
type RecordWithCellMap = GridRow & {
  absIndex: number;
  cellsByFieldId: Map<string, GridCell>;
};

// Returns a record updater that sets one cell's value, creating the cell
// if the record had no value for that field yet.
function withCellValue(fieldId: string, value: unknown) {
  return (record: GridRow): GridRow => {
    const cellValue = value as GridCell["value"];
    return record.cells.some((c) => c.fieldId === fieldId)
      ? { ...record, cells: record.cells.map((c) => (c.fieldId === fieldId ? { ...c, value: cellValue } : c)) }
      : { ...record, cells: [...record.cells, { fieldId, value: cellValue }] };
  };
}

// Absolute row index (position in the view's full result set) + column index.
type CellPosition = { rowIndex: number; columnIndex: number };

type GridField = RouterOutputs["field"]["getByTableId"][number];

// Unsaved edits, keyed by record id then field id. Nested per record so an
// edit replaces only that record's entry: every other row keeps the same
// object and its memoized GridRowView skips re-rendering.
type OptimisticChanges = Map<string, Record<string, unknown>>;

// TanStack Table only renders the header now (see reactTable below), so it
// never needs row data.
const NO_RECORDS: RecordWithCellMap[] = [];

// Rows are fetched as independent fixed-size pages keyed by page index, and
// the virtualizer is sized to the view's full row count, so the scrollbar
// covers the whole table and any position can be jumped to directly.
const PAGE_SIZE = 100;
// Extra rows (beyond the virtualizer's overscan) to have loaded in each
// direction, so the next page is usually already in cache when scrolled to.
const PREFETCH_ROWS = PAGE_SIZE;
// Pages that scroll out of the prefetch range lose their observer; after this
// long unobserved they're garbage-collected, which is what evicts scrolled-past
// rows in both directions. Scrolling back within the window is a cache hit.
const PAGE_GC_TIME = 30_000;
// A scrollbar drag can cross dozens of pages in a moment. Wait until a
// non-contiguous jump settles for this long before fetching, instead of
// requesting every page flown past.
const JUMP_SETTLE_MS = 120;
const ROW_HEIGHT = 40; // must match rowVirtualizer's estimateSize below

export function TableView({ baseId, tableId }: { baseId: string; tableId: string }) {
  const [isCreatingField, setIsCreatingField] = useState(false);
  const [newFieldName, setNewFieldName] = useState("");
  const [newFieldType, setNewFieldType] = useState<FieldType>("TEXT");

  // View state
  const [selectedViewId, setSelectedViewId] = useState<string | null>(null);
  const [isCreatingView, setIsCreatingView] = useState(false);
  const [newViewName, setNewViewName] = useState("");

  // Filter state
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [newFilterFieldId, setNewFilterFieldId] = useState("");
  const [newFilterOperator, setNewFilterOperator] = useState<"EQUALS" | "CONTAINS" | "IS_NOT_EMPTY">("CONTAINS");
  const [newFilterValue, setNewFilterValue] = useState("");

  // Sort state
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [newSortFieldId, setNewSortFieldId] = useState("");
  const [newSortDirection, setNewSortDirection] = useState<"ASC" | "DESC">("ASC");

  // Field edit state
  const [editingFieldId, setEditingFieldId] = useState<string | null>(null);
  const [editFieldName, setEditFieldName] = useState("");
  const [fieldMenuOpenId, setFieldMenuOpenId] = useState<string | null>(null);
  const [isHiddenFieldsOpen, setIsHiddenFieldsOpen] = useState(false);

  // Keyboard shortcuts help modal
  const [showShortcutsHelp, setShowShortcutsHelp] = useState(false);

  // Cell navigation state
  const [focusedCell, setFocusedCell] = useState<{ rowIndex: number; columnIndex: number } | null>(null);
  const [editingCell, setEditingCell] = useState<{ rowIndex: number; columnIndex: number } | null>(null);

  // Local optimistic updates (for immediate UI feedback without database saves)
  const [optimisticChanges, setOptimisticChanges] = useState<OptimisticChanges>(new Map());
  // What the editor opens with: the typed character, "" for Backspace/Delete,
  // or undefined to start from the cell's current value.
  const [editSeed, setEditSeed] = useState<unknown>(undefined);

  // Excel import/export using dedicated hook
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { handleImport: importExcel, isImporting, importError, importProgress, clearError } = useExcelImport(tableId);

  const utils = api.useUtils();

  const { data: base } = api.base.getById.useQuery({ id: baseId }, { enabled: !!baseId });
  const { data: table } = api.table.getById.useQuery({ id: tableId }, { enabled: !!tableId });
  const { data: fields } = api.field.getByTableId.useQuery({ tableId }, { enabled: !!tableId });

  // Fetch views for this table
  const { data: views } = api.view.getByTableId.useQuery({ tableId }, { enabled: !!tableId });

  // Auto-select first view or default view.
  // This must be a useEffect, not useMemo: useMemo runs its callback
  // synchronously during render, so calling setSelectedViewId in it is a
  // render-phase state update — React re-renders immediately to reflect it,
  // and if that doesn't converge before the guard re-checks (e.g. `views`
  // getting a new array reference on a render triggered by something else),
  // it can hit React's "Too many re-renders" render-loop limit. useEffect
  // defers the update to the commit phase, which is the correct place for
  // this kind of derived-state side effect.
  useEffect(() => {
    if (views && views.length > 0 && !selectedViewId) {
      const defaultView = views.find(v => v.isDefault) || views[0];
      if (defaultView) setSelectedViewId(defaultView.id);
    }
  }, [views, selectedViewId]);

  // Get current view data
  const currentView = views?.find(v => v.id === selectedViewId);

  const viewId = selectedViewId ?? undefined;
  // Don't fetch rows until the default view is chosen, otherwise the first
  // round of requests goes out for "no view" and is immediately thrown away.
  const isViewResolved = views !== undefined && (views.length === 0 || !!selectedViewId);

  // Total rows in the view (after filters). This sizes the virtualizer, so
  // the scrollbar represents the whole table rather than just loaded rows.
  const { data: totalRowsData } = api.record.countForView.useQuery(
    { tableId, viewId },
    { enabled: !!tableId && isViewResolved },
  );
  const totalRows = totalRowsData ?? 0;
  // Until the count arrives, still fetch page 0 so both requests run in parallel.
  const lastPageIndex = totalRowsData === undefined ? 0 : Math.ceil(totalRows / PAGE_SIZE) - 1;

  // Inclusive range of page indexes that should be loaded. Driven by the
  // virtualizer's visible range (see the effect after rowVirtualizer).
  const [pageRange, setPageRange] = useState({ first: 0, last: 0 });
  const pageIndexes = useMemo(() => {
    const pages: number[] = [];
    for (let page = pageRange.first; page <= Math.min(pageRange.last, lastPageIndex); page++) pages.push(page);
    return pages;
  }, [pageRange, lastPageIndex]);

  // One query per page. Only pages in pageIndexes are observed; the rest
  // expire after PAGE_GC_TIME, so memory stays bounded to about the viewport
  // plus the prefetch margin no matter how far the user scrolls.
  const pageQueries = api.useQueries((t) =>
    pageIndexes.map((page) =>
      t.record.getRows(
        { tableId, viewId, offset: page * PAGE_SIZE, limit: PAGE_SIZE },
        { enabled: !!tableId && isViewResolved, gcTime: PAGE_GC_TIME },
      ),
    ),
  );
  const isFetchingRows = pageQueries.some((q) => q.isFetching);

  // Flatten loaded pages into one array, tagging each record with its absolute
  // row index and precomputing a fieldId -> cell Map for O(1) cell lookups.
  // Built objects are cached per raw record. React Query's structural sharing
  // keeps unchanged records' identity across refetches and optimistic
  // patches, so they map to the same built object and their memoized rows
  // skip re-rendering; only records that actually changed are rebuilt.
  // The flattened array itself keeps its identity until some page's data
  // changes.
  const builtRecordsRef = useRef(new WeakMap<GridRow, RecordWithCellMap>());
  const recordsRef = useRef<{ deps: unknown[]; records: RecordWithCellMap[] }>({ deps: [], records: [] });
  const recordDeps = pageIndexes.flatMap((page, i) => [page, pageQueries[i]?.data]);
  if (
    recordDeps.length !== recordsRef.current.deps.length ||
    recordDeps.some((dep, i) => dep !== recordsRef.current.deps[i])
  ) {
    recordsRef.current = {
      deps: recordDeps,
      records: pageIndexes.flatMap((page, i) => {
        const data = pageQueries[i]?.data;
        if (!data) return [];
        return data.map((record, j) => {
          const absIndex = page * PAGE_SIZE + j;
          let built = builtRecordsRef.current.get(record);
          if (built?.absIndex !== absIndex) {
            built = {
              ...record,
              absIndex,
              cellsByFieldId: new Map(record.cells.map((c) => [c.fieldId, c])),
            };
            builtRecordsRef.current.set(record, built);
          }
          return built;
        });
      }),
    };
  }
  const records = recordsRef.current.records;

  // Cache helpers for page queries. Pages live under separate query keys, so
  // optimistic edits patch every cached page of this table (a no-op for pages
  // that don't contain the record, which keeps their data reference intact).
  const queryClient = useQueryClient();
  const rowsQueryFilter = useMemo(
    () => ({ queryKey: getQueryKey(api.record.getRows, { tableId }, "query") }),
    [tableId]
  );
  const patchCachedRows = useCallback(
    (recordId: string, update: (record: GridRow) => GridRow | null) => {
      queryClient.setQueriesData<GridRow[]>(rowsQueryFilter, (rows) => {
        if (!rows?.some((r) => r.id === recordId)) return rows;
        return rows.flatMap((r) => (r.id === recordId ? (update(r) ?? []) : [r]));
      });
    },
    [queryClient, rowsQueryFilter]
  );
  const snapshotCachedRows = useCallback(() => {
    const snapshot = queryClient.getQueriesData<GridRow[]>(rowsQueryFilter);
    return () => snapshot.forEach(([key, data]) => queryClient.setQueryData(key, data));
  }, [queryClient, rowsQueryFilter]);
  const invalidateRows = useCallback(
    () =>
      Promise.all([
        utils.record.getRows.invalidate({ tableId }),
        utils.record.countForView.invalidate({ tableId }),
      ]),
    [utils, tableId]
  );

  const createField = api.field.create.useMutation({
    onSuccess: async () => {
      await utils.field.getByTableId.invalidate({ tableId });
      await invalidateRows();
      setIsCreatingField(false);
      setNewFieldName("");
      setNewFieldType("TEXT");
    },
  });

  const updateField = api.field.update.useMutation({
    onSuccess: async () => {
      await Promise.all([
        utils.field.getByTableId.invalidate({ tableId }),
        invalidateRows(),
      ]);
    },
  });

  const deleteField = api.field.delete.useMutation({
    onSuccess: async () => {
      await Promise.all([
        utils.field.getByTableId.invalidate({ tableId }),
        invalidateRows(),
      ]);
    },
  });

  const createRecord = api.record.create.useMutation({
    onSuccess: async () => {
      await invalidateRows();
    },
  });

  const deleteRecord = api.record.delete.useMutation({
    onMutate: async (variables) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries(rowsQueryFilter);

      // Snapshot previous data, then optimistically remove the record. Rows
      // after it in the same page shift up until the onSettled refetch
      // re-aligns every page to the new offsets.
      const rollback = snapshotCachedRows();
      patchCachedRows(variables.id, () => null);

      return { rollback };
    },
    onError: (err, variables, context) => {
      context?.rollback();
    },
    onSettled: () => {
      void invalidateRows();
    },
  });

  const updateCell = api.cell.update.useMutation({
    // Optimistic update - update UI immediately without waiting for server
    onMutate: async (newData) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries(rowsQueryFilter);

      // Snapshot the previous value, then optimistically apply the new one
      const rollback = snapshotCachedRows();
      patchCachedRows(newData.recordId, withCellValue(newData.fieldId, newData.value));

      return { rollback };
    },
    // If mutation fails, rollback to previous value
    onError: (err, newData, context) => {
      context?.rollback();
    },
  });

  // Global auto-save that batches multiple cell updates
  const { trackChange, forceSave, getPendingCount, notifyEditingStart, notifyEditingEnd } = useAutoSave({
    onSave: async (changes) => {
      console.log(`Auto-saving ${changes.length} changes in background...`);

      // Save changes silently in the background WITHOUT triggering React Query invalidation
      // This is key to Airtable-like performance - changes persist but UI never blocks
      try {
        // Update the React Query cache directly without triggering mutations
        changes.forEach((change) => {
          patchCachedRows(change.recordId, withCellValue(change.fieldId, change.value));
        });

        // Clear optimistic changes after updating cache
        setOptimisticChanges(new Map());

        // Save to database. Awaited so forceSave() resolves only once the
        // writes have landed (export relies on this); the timer-driven save
        // doesn't await onSave, so this still never blocks the UI.
        await Promise.all(
          changes.map((change) =>
            updateCell.mutateAsync({
              recordId: change.recordId,
              fieldId: change.fieldId,
              value: change.value,
            })
          )
        ).catch((error) => {
          console.error('Background save failed:', error);
        });
        console.log('Auto-save complete!');
      } catch (error) {
        console.error('Auto-save failed:', error);
        // Keep optimistic changes if save fails
      }
    },
    delay: 30000, // 30 seconds of inactivity before auto-save
  });

  // View mutations
  const createView = api.view.create.useMutation({
    onSuccess: async (newView) => {
      await utils.view.getByTableId.invalidate({ tableId });
      setSelectedViewId(newView.id);
      setIsCreatingView(false);
      setNewViewName("");
    },
  });

  const deleteView = api.view.delete.useMutation({
    onSuccess: async () => {
      await utils.view.getByTableId.invalidate({ tableId });
      setSelectedViewId(null);
    },
  });

  // Filter mutations
  const createFilter = api.filter.create.useMutation({
    onSuccess: async () => {
      // Invalidate both views and records to refresh filtered data
      await Promise.all([
        utils.view.getByTableId.invalidate({ tableId }),
        invalidateRows()
      ]);
      setNewFilterFieldId("");
      setNewFilterValue("");
      setIsFilterOpen(false);
    },
  });

  const deleteFilter = api.filter.delete.useMutation({
    onSuccess: async () => {
      // Invalidate both views and records to refresh filtered data
      await Promise.all([
        utils.view.getByTableId.invalidate({ tableId }),
        invalidateRows()
      ]);
    },
  });

  // Sort mutations
  const createSort = api.sort.create.useMutation({
    onSuccess: async () => {
      // Invalidate both views and records to refresh sorted data
      await Promise.all([
        utils.view.getByTableId.invalidate({ tableId }),
        invalidateRows()
      ]);
      setNewSortFieldId("");
      setIsSortOpen(false);
    },
  });

  const deleteSort = api.sort.delete.useMutation({
    onSuccess: async () => {
      // Invalidate both views and records to refresh sorted data
      await Promise.all([
        utils.view.getByTableId.invalidate({ tableId }),
        invalidateRows()
      ]);
    },
  });

  // Hidden field mutations
  const hideField = api.view.hideField.useMutation({
    onSuccess: async () => {
      await utils.view.getByTableId.invalidate({ tableId });
    },
  });

  const showField = api.view.showField.useMutation({
    onSuccess: async () => {
      await utils.view.getByTableId.invalidate({ tableId });
    },
  });

  const handleCreateField = () => {
    if (!newFieldName.trim()) return;

    // Get default config for this field type
    const fieldConfig = FIELD_TYPE_CONFIGS[newFieldType];
    const config = fieldConfig?.defaultConfig ?? null;

    createField.mutate({
      tableId,
      name: newFieldName,
      type: newFieldType,
      config,
    });
  };

  const handleCreateView = () => {
    if (!newViewName.trim()) return;
    createView.mutate({
      tableId,
      name: newViewName,
    });
  };

  const handleCreateFilter = () => {
    if (!selectedViewId || !newFilterFieldId) return;
    const needsValue = !["IS_EMPTY", "IS_NOT_EMPTY"].includes(newFilterOperator);
    if (needsValue && !newFilterValue.trim()) return;

    createFilter.mutate({
      viewId: selectedViewId,
      fieldId: newFilterFieldId,
      operator: newFilterOperator,
      value: needsValue ? newFilterValue : undefined,
    });
  };

  const handleCreateSort = () => {
    if (!selectedViewId || !newSortFieldId) return;
    createSort.mutate({
      viewId: selectedViewId,
      fieldId: newSortFieldId,
      direction: newSortDirection,
    });
  };

  // Cell edits commit/cancel through these. Stable (their deps are stable
  // useAutoSave callbacks), so passing them to every row doesn't break the
  // rows' memoization.
  const commitEdit = useCallback((recordId: string, fieldId: string, value: unknown) => {
    // Store change in local optimistic state for immediate UI feedback
    setOptimisticChanges((prev) => {
      const next = new Map(prev);
      next.set(recordId, { ...prev.get(recordId), [fieldId]: value });
      return next;
    });
    // Track change for batch auto-save
    trackChange(recordId, fieldId, value);
    setEditingCell(null);
    notifyEditingEnd();
  }, [trackChange, notifyEditingEnd]);

  const cancelEdit = useCallback(() => {
    setEditingCell(null);
    notifyEditingEnd();
  }, [notifyEditingEnd]);

  // Keyboard shortcuts
  const shortcuts: KeyboardShortcut[] = [
    {
      key: 'Escape',
      description: 'Close modals and panels',
      action: () => {
        // This shortcut listens in the capture phase and stops propagation,
        // so the cell editor never sees Escape itself; cancel the edit here.
        if (editingCell) cancelEdit();
        setIsCreatingField(false);
        setIsCreatingView(false);
        setIsFilterOpen(false);
        setIsSortOpen(false);
        setIsHiddenFieldsOpen(false);
        setFieldMenuOpenId(null);
        setShowShortcutsHelp(false);
      },
    },
    {
      key: 'n',
      meta: true,
      description: 'Add new record',
      action: () => {
        if (!tableId) return;
        createRecord.mutate({ tableId });
      },
    },
    {
      key: 'f',
      meta: true,
      description: 'Toggle filters',
      action: () => {
        if (!selectedViewId) return;
        setIsFilterOpen(!isFilterOpen);
      },
    },
    {
      key: 's',
      meta: true,
      shift: true,
      description: 'Toggle sorts',
      action: () => {
        if (!selectedViewId) return;
        setIsSortOpen(!isSortOpen);
      },
    },
    {
      key: 'h',
      meta: true,
      description: 'Toggle hidden fields',
      action: () => {
        if (!selectedViewId) return;
        setIsHiddenFieldsOpen(!isHiddenFieldsOpen);
      },
    },
    {
      key: '/',
      meta: true,
      description: 'Show keyboard shortcuts',
      action: () => {
        setShowShortcutsHelp(true);
      },
    },
    {
      key: '?',
      shift: true,
      description: 'Show keyboard shortcuts',
      action: () => {
        setShowShortcutsHelp(true);
      },
    },
  ];

  useKeyboardShortcuts(shortcuts);


  // Navigation handler - memoized to prevent recreating on every render
  const handleCellNavigate = useCallback((rowIndex: number, columnIndex: number, direction: 'up' | 'down' | 'left' | 'right' | 'tab' | 'shift-tab', totalRows: number, totalCols: number) => {
    let newRow = rowIndex;
    let newCol = columnIndex;

    switch (direction) {
      case 'up':
        newRow = Math.max(0, rowIndex - 1);
        break;
      case 'down':
        newRow = Math.min(totalRows - 1, rowIndex + 1);
        break;
      case 'left':
        newCol = Math.max(1, columnIndex - 1); // Skip row number column (index 0)
        break;
      case 'right':
      case 'tab':
        newCol = columnIndex + 1;
        if (newCol >= totalCols) {
          // Move to first cell of next row
          newCol = 1;
          newRow = Math.min(totalRows - 1, rowIndex + 1);
        }
        break;
      case 'shift-tab':
        newCol = columnIndex - 1;
        if (newCol < 1) {
          // Move to last cell of previous row
          newCol = totalCols - 1;
          newRow = Math.max(0, rowIndex - 1);
        }
        break;
    }

    setFocusedCell({ rowIndex: newRow, columnIndex: newCol });
  }, []);

  // Handle Excel import
  const handleImport = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      await importExcel(file);

      // Reset file input on success
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      // Error is already handled by the hook
      console.error('Import failed:', error);
    }
  }, [importExcel]);

  // Handle Excel export. The grid only holds the pages around the viewport,
  // so the file is built server-side from the view's full result set
  // (filters, sort order and hidden fields applied).
  const [isExporting, setIsExporting] = useState(false);
  const handleExport = useCallback(async () => {
    setIsExporting(true);
    try {
      // Edits wait up to 30s in the auto-save queue; flush them first so the
      // export includes everything the user sees.
      await forceSave();

      const query = viewId ? `?viewId=${encodeURIComponent(viewId)}` : '';
      const response = await fetch(`/api/tables/${encodeURIComponent(tableId)}/export${query}`);
      if (!response.ok) throw new Error((await response.text()) || `Export failed (${response.status})`);

      // Trigger the download
      const url = URL.createObjectURL(await response.blob());
      const link = document.createElement('a');
      link.href = url;
      // en-CA formats as YYYY-MM-DD, in the user's local time zone
      link.download = `${table?.name ?? 'table'}_${new Date().toLocaleDateString('en-CA')}.xlsx`;
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 0);
    } catch (error) {
      console.error('Export failed:', error);
      alert(error instanceof Error ? error.message : 'Export failed');
    } finally {
      setIsExporting(false);
    }
  }, [forceSave, viewId, tableId, table?.name]);

  // Fields shown in the current view, in order. Body column i + 1 is
  // visibleFields[i]; column 0 is the row number.
  const visibleFields = useMemo<GridField[]>(() => {
    if (!fields) return [];
    const hiddenFieldIds = new Set(currentView?.hiddenFields?.map((hf) => hf.fieldId) ?? []);
    return fields.filter((field) => !hiddenFieldIds.has(field.id));
  }, [fields, currentView]);

  // Column defs for the header row. The body is rendered by GridRowView.
  const columns = useMemo<ColumnDef<RecordWithCellMap>[]>(() => {
    if (!fields) return [];

    const cols: ColumnDef<RecordWithCellMap>[] = [
      {
        id: "rowNumber",
        header: () => <div className="px-4 py-2 text-xs font-medium text-gray-500">#</div>,
        size: 60,
      },
    ];

    visibleFields.forEach((field) => {
      cols.push({
        id: field.id,
        header: () => (
          <div className="group relative flex items-center justify-between px-4 py-2">
            {editingFieldId === field.id ? (
              <input
                type="text"
                value={editFieldName}
                onChange={(e) => setEditFieldName(e.target.value)}
                onBlur={() => {
                  if (editFieldName.trim() && editFieldName !== field.name) {
                    updateField.mutate({ id: field.id, name: editFieldName });
                  }
                  setEditingFieldId(null);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    if (editFieldName.trim() && editFieldName !== field.name) {
                      updateField.mutate({ id: field.id, name: editFieldName });
                    }
                    setEditingFieldId(null);
                  } else if (e.key === 'Escape') {
                    setEditingFieldId(null);
                  }
                }}
                autoFocus
                className="w-full rounded border border-blue-500 px-2 py-1 text-sm font-medium focus:outline-none"
              />
            ) : (
              <>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">{field.name}</span>
                  <span className="text-xs text-gray-400">{field.type}</span>
                </div>
                <div className="relative">
                  <button
                    onClick={() => setFieldMenuOpenId(fieldMenuOpenId === field.id ? null : field.id)}
                    className="opacity-0 transition-opacity hover:text-gray-900 group-hover:opacity-100"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                  {fieldMenuOpenId === field.id && (
                    <div className="absolute right-0 top-full z-20 mt-1 w-48 rounded-lg border border-gray-200 bg-white shadow-lg">
                      <button
                        onClick={() => {
                          setEditFieldName(field.name);
                          setEditingFieldId(field.id);
                          setFieldMenuOpenId(null);
                        }}
                        className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm hover:bg-gray-50"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Rename field
                      </button>
                      {selectedViewId && (
                        <button
                          onClick={() => {
                            hideField.mutate({ viewId: selectedViewId, fieldId: field.id });
                            setFieldMenuOpenId(null);
                          }}
                          className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm hover:bg-gray-50"
                        >
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          </svg>
                          Hide field
                        </button>
                      )}
                      <button
                        onClick={() => {
                          if (confirm(`Delete field "${field.name}"? All data in this field will be lost.`)) {
                            deleteField.mutate({ id: field.id });
                          }
                          setFieldMenuOpenId(null);
                        }}
                        className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Delete field
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        ),
        size: 200,
      });
    });

    return cols;
  }, [
    fields,
    visibleFields,
    editingFieldId,
    editFieldName,
    fieldMenuOpenId,
    selectedViewId,
    // Only each mutation's .mutate is used in here, and it's stable. Depending
    // on the mutation result objects themselves (new objects every render)
    // rebuilt every column def on every render, including every scroll frame.
    deleteField.mutate,
    updateField.mutate,
    hideField.mutate,
  ]);

  // Header only. TanStack Table rebuilds every row object whenever its data
  // changes, which would defeat GridRowView's memo on every page load or
  // edit, so rows are rendered straight from records instead.
  const reactTable = useReactTable({
    data: NO_RECORDS,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // The virtualizer works in absolute row indexes; look loaded records up by
  // position. Indexes with no entry are rows whose page hasn't arrived yet
  // and render as placeholders.
  const recordsByAbsIndex = useMemo(
    () => new Map(records.map((record) => [record.absIndex, record])),
    [records]
  );

  // Virtual scrolling setup
  const tableContainerRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    // Sized to the whole view, not just loaded rows, so the scrollbar never
    // runs out before the data does. 100K rows * 40px = 4M px, well under
    // browser element-height limits (~17M px in Firefox, ~33M px in Chrome).
    count: totalRows,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => ROW_HEIGHT,
    overscan: 10, // Render 10 extra rows above and below viewport for smooth scrolling
    // Default index-based item keys are correct here: indexes are absolute
    // row positions, so they don't shift when pages load or evict.
  });

  // Drive which pages are loaded from the rendered range, padded by
  // PREFETCH_ROWS in both directions so scrolling either way usually lands
  // on rows that are already cached.
  const virtualItems = rowVirtualizer.getVirtualItems();
  const firstRenderedRow = virtualItems[0]?.index ?? 0;
  const lastRenderedRow = virtualItems[virtualItems.length - 1]?.index ?? 0;
  const wantedFirstPage = Math.max(0, Math.floor((firstRenderedRow - PREFETCH_ROWS) / PAGE_SIZE));
  const wantedLastPage = Math.floor((lastRenderedRow + PREFETCH_ROWS) / PAGE_SIZE);
  useEffect(() => {
    const apply = () =>
      setPageRange((prev) =>
        prev.first === wantedFirstPage && prev.last === wantedLastPage
          ? prev
          : { first: wantedFirstPage, last: wantedLastPage }
      );
    // Ordinary scrolling moves the range contiguously: fetch immediately.
    const isContiguous = wantedFirstPage <= pageRange.last + 1 && wantedLastPage >= pageRange.first - 1;
    if (isContiguous) {
      apply();
      return;
    }
    // A jump (scrollbar drag, Ctrl+End): wait for it to settle first.
    const timer = setTimeout(apply, JUMP_SETTLE_MS);
    return () => clearTimeout(timer);
  }, [wantedFirstPage, wantedLastPage, pageRange]);

  // A new view is a different result set: start it from the top.
  useEffect(() => {
    tableContainerRef.current?.scrollTo({ top: 0 });
  }, [selectedViewId]);

  // Keyboard navigation can move focus onto a row that isn't rendered (or
  // isn't loaded yet); bring it into view so the virtualizer renders it.
  const focusedRowIndex = focusedCell?.rowIndex;
  useEffect(() => {
    if (focusedRowIndex !== undefined) rowVirtualizer.scrollToIndex(focusedRowIndex, { align: "auto" });
  }, [focusedRowIndex, rowVirtualizer]);

  // One set of handlers on <tbody> for every cell, instead of listeners and
  // callbacks in each cell (which re-attached on every render and kept cells
  // from being memoized). Cells identify themselves with data-row/data-col.
  const cellPositionFromEvent = (target: EventTarget): CellPosition | null => {
    const el = (target as HTMLElement).closest<HTMLElement>("[data-col]");
    return el ? { rowIndex: Number(el.dataset.row), columnIndex: Number(el.dataset.col) } : null;
  };

  const startEditing = (position: CellPosition, seed: unknown) => {
    setEditSeed(seed);
    setFocusedCell(position);
    setEditingCell(position);
    notifyEditingStart();
  };

  const handleGridClick = (e: React.MouseEvent) => {
    const deleteButton = (e.target as HTMLElement).closest<HTMLElement>('[data-action="delete-row"]');
    if (deleteButton) {
      const recordId = deleteButton.dataset.recordId;
      if (recordId && confirm('Delete this record?')) deleteRecord.mutate({ id: recordId });
      return;
    }
    const position = cellPositionFromEvent(e.target);
    if (position) setFocusedCell(position);
  };

  const handleGridDoubleClick = (e: React.MouseEvent) => {
    const position = cellPositionFromEvent(e.target);
    if (!position) return;
    e.preventDefault();
    startEditing(position, undefined);
  };

  const handleGridKeyDown = (e: React.KeyboardEvent) => {
    // While editing, keys belong to the editor (its events bubble up here too).
    if (editingCell) return;
    const position = cellPositionFromEvent(e.target);
    if (!position) return;

    const isPrintableChar = e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey;
    if (isPrintableChar) {
      e.preventDefault();
      startEditing(position, e.key);
      return;
    }

    const direction =
      e.key === "ArrowUp" ? "up"
      : e.key === "ArrowDown" ? "down"
      : e.key === "ArrowLeft" ? "left"
      : e.key === "ArrowRight" ? "right"
      : e.key === "Tab" ? (e.shiftKey ? "shift-tab" : "tab")
      : null;
    if (direction) {
      e.preventDefault();
      handleCellNavigate(position.rowIndex, position.columnIndex, direction, totalRows, visibleFields.length + 1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      startEditing(position, undefined);
    } else if (e.key === "Backspace" || e.key === "Delete") {
      e.preventDefault();
      startEditing(position, "");
    }
  };

  if (!base || !table) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    // h-screen (not min-h-screen) is load-bearing: the grid container below
    // must be height-constrained so it scrolls itself. With only a min-height
    // it grows to its full content height (100K rows * 40px), the window
    // scrolls instead, and the virtualizer sees every row as "in view" and
    // renders them all.
    <div className="flex h-screen flex-col bg-gray-50">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-4">
            <Link href={`/base/${baseId}`} className="text-gray-600 hover:text-gray-900">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-xl">{base.icon}</span>
              <span className="text-sm text-gray-600">{base.name}</span>
              <span className="text-gray-400">/</span>
              <span className="text-xl">{table.icon}</span>
              <span className="font-semibold text-gray-900">{table.name}</span>
            </div>
          </div>
          <button
            onClick={() => setShowShortcutsHelp(true)}
            className="flex items-center gap-1 rounded px-2 py-1 text-sm text-gray-600 hover:bg-gray-100"
            title="Keyboard shortcuts"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="hidden sm:inline">?</span>
          </button>
        </div>
      </div>

      {/* View Switcher */}
      <div className="border-b border-gray-200 bg-gray-50 px-6 py-2">
        <div className="flex items-center gap-2">
          {/* View Tabs */}
          <div className="flex items-center gap-1">
            {views && views.map((view) => (
              <button
                key={view.id}
                onClick={() => setSelectedViewId(view.id)}
                className={`group relative flex items-center gap-2 rounded px-3 py-1.5 text-sm font-medium transition ${
                  selectedViewId === view.id
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <span>{view.name}</span>
                {selectedViewId === view.id && views.length > 1 && (
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      if (confirm(`Delete view "${view.name}"?`)) {
                        deleteView.mutate({ id: view.id });
                      }
                    }}
                    className="cursor-pointer opacity-0 hover:text-red-600 group-hover:opacity-100"
                  >
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                )}
              </button>
            ))}
            <button
              onClick={() => setIsCreatingView(true)}
              className="flex items-center gap-1 rounded px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-100"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="border-b border-gray-200 bg-white px-6 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => createRecord.mutate({ tableId })}
              disabled={createRecord.isPending}
              className="rounded px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              + Add row
            </button>
            <button
              onClick={() => setIsCreatingField(true)}
              className="rounded px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              + Add field
            </button>

            {/* Excel Import/Export */}
            <div className="ml-2 flex items-center gap-2 border-l border-gray-200 pl-2">
              <input
                ref={fileInputRef}
                type="file"
                accept=".xlsx,.xls"
                onChange={handleImport}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={isImporting}
                className="flex items-center gap-1.5 rounded px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                title="Import from Excel"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                {isImporting ? 'Importing...' : 'Import'}
              </button>
              <button
                onClick={() => void handleExport()}
                disabled={!totalRowsData || isExporting}
                className="flex items-center gap-1.5 rounded px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                title="Export to Excel"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
                {isExporting ? 'Exporting...' : 'Export'}
              </button>
            </div>

            {selectedViewId && (
              <>
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className={`flex items-center gap-1 rounded px-3 py-1.5 text-sm font-medium ${
                    isFilterOpen || (currentView?.filters && currentView.filters.length > 0)
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  Filter
                  {currentView?.filters && currentView.filters.length > 0 && (
                    <span className="rounded-full bg-blue-600 px-1.5 py-0.5 text-xs text-white">
                      {currentView.filters.length}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className={`flex items-center gap-1 rounded px-3 py-1.5 text-sm font-medium ${
                    isSortOpen || (currentView?.sorts && currentView.sorts.length > 0)
                      ? "bg-purple-50 text-purple-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                  </svg>
                  Sort
                  {currentView?.sorts && currentView.sorts.length > 0 && (
                    <span className="rounded-full bg-purple-600 px-1.5 py-0.5 text-xs text-white">
                      {currentView.sorts.length}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => setIsHiddenFieldsOpen(!isHiddenFieldsOpen)}
                  className={`flex items-center gap-1 rounded px-3 py-1.5 text-sm font-medium ${
                    isHiddenFieldsOpen || (currentView?.hiddenFields && currentView.hiddenFields.length > 0)
                      ? "bg-gray-50 text-gray-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Hide fields
                  {currentView?.hiddenFields && currentView.hiddenFields.length > 0 && (
                    <span className="rounded-full bg-gray-600 px-1.5 py-0.5 text-xs text-white">
                      {currentView.hiddenFields.length}
                    </span>
                  )}
                </button>
              </>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            {isFetchingRows && (
              <svg className="h-4 w-4 animate-spin text-blue-600" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
            <span>{totalRows.toLocaleString()} rows</span>
          </div>
        </div>
      </div>

      {/* Import Progress Display */}
      {importProgress && (
        <div className="border-b border-blue-200 bg-blue-50 px-6 py-3">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 animate-spin text-blue-600" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="text-sm font-medium text-blue-900">{importProgress.status}</p>
              </div>
              <span className="text-sm text-blue-700">{importProgress.current}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-blue-200">
              <div
                className="h-full bg-blue-600 transition-all duration-300"
                style={{ width: `${importProgress.current}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Import Error Display */}
      {importError && (
        <div className="border-b border-red-200 bg-red-50 px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm font-medium text-red-900">Import Error: {importError}</p>
            </div>
            <button
              onClick={clearError}
              className="rounded p-1 text-red-600 hover:bg-red-100"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Filter Panel */}
      {isFilterOpen && selectedViewId && (
        <div className="border-b border-gray-200 bg-gray-50 px-6 py-3">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900">Filters</h3>
            {currentView?.filters && currentView.filters.length > 0 && (
              <span className="text-xs text-gray-500">
                {currentView.filters.length} filter{currentView.filters.length !== 1 ? 's' : ''}
              </span>
            )}
          </div>

          {/* Existing Filters */}
          {currentView?.filters && currentView.filters.length > 0 && (
            <div className="mb-3 space-y-2">
              {currentView.filters.map((filter) => {
                if (!filter.field) return null;
                return (
                  <div
                    key={filter.id}
                    className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm"
                  >
                    <span className="font-medium text-gray-900">{filter.field.name}</span>
                    <span className="text-gray-600">{filter.operator.replace(/_/g, ' ').toLowerCase()}</span>
                    {filter.value && (
                      <span className="rounded bg-blue-50 px-2 py-0.5 font-medium text-blue-900">
                        {JSON.stringify(filter.value).replace(/"/g, '')}
                      </span>
                    )}
                    <button
                      onClick={() => deleteFilter.mutate({ id: filter.id })}
                      className="ml-auto cursor-pointer rounded p-1.5 text-gray-400 transition hover:bg-red-50 hover:text-red-600"
                      disabled={deleteFilter.isPending}
                      title="Delete filter"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {/* Add Filter Form */}
          <div className="flex items-end gap-2">
            <div className="flex-1">
              <label className="mb-1 block text-xs font-medium text-gray-700">Field</label>
              <select
                value={newFilterFieldId}
                onChange={(e) => setNewFilterFieldId(e.target.value)}
                className="w-full rounded border border-gray-300 px-2 py-1.5 text-sm focus:border-blue-500 focus:outline-none"
              >
                <option value="">Select field...</option>
                {fields?.map((field) => (
                  <option key={field.id} value={field.id}>
                    {field.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="mb-1 block text-xs font-medium text-gray-700">Operator</label>
              <select
                value={newFilterOperator}
                onChange={(e) => setNewFilterOperator(e.target.value as any)}
                className="w-full rounded border border-gray-300 px-2 py-1.5 text-sm focus:border-blue-500 focus:outline-none"
              >
                <option value="EQUALS">Equals</option>
                <option value="NOT_EQUALS">Not Equals</option>
                <option value="CONTAINS">Contains</option>
                <option value="NOT_CONTAINS">Not Contains</option>
                <option value="IS_EMPTY">Is Empty</option>
                <option value="IS_NOT_EMPTY">Is Not Empty</option>
                <option value="GREATER_THAN">Greater Than</option>
                <option value="LESS_THAN">Less Than</option>
              </select>
            </div>
            {!["IS_EMPTY", "IS_NOT_EMPTY"].includes(newFilterOperator) && (
              <div className="flex-1">
                <label className="mb-1 block text-xs font-medium text-gray-700">Value</label>
                <input
                  type="text"
                  value={newFilterValue}
                  onChange={(e) => setNewFilterValue(e.target.value)}
                  placeholder="Enter value..."
                  className="w-full rounded border border-gray-300 px-2 py-1.5 text-sm focus:border-blue-500 focus:outline-none"
                />
              </div>
            )}
            <button
              onClick={handleCreateFilter}
              disabled={!newFilterFieldId || createFilter.isPending}
              className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {createFilter.isPending ? "Adding..." : "Add"}
            </button>
          </div>
        </div>
      )}

      {/* Sort Panel */}
      {isSortOpen && selectedViewId && (
        <div className="border-b border-gray-200 bg-gray-50 px-6 py-3">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900">Sorts</h3>
            {currentView?.sorts && currentView.sorts.length > 0 && (
              <span className="text-xs text-gray-500">
                {currentView.sorts.length} sort{currentView.sorts.length !== 1 ? 's' : ''}
              </span>
            )}
          </div>

          {/* Existing Sorts */}
          {currentView?.sorts && currentView.sorts.length > 0 && (
            <div className="mb-3 space-y-2">
              {currentView.sorts.map((sort) => {
                if (!sort.field) return null;
                return (
                  <div
                    key={sort.id}
                    className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm"
                  >
                    <span className="font-medium text-gray-900">{sort.field.name}</span>
                    <span className="rounded bg-purple-50 px-2 py-0.5 font-medium text-purple-900">
                      {sort.direction === "ASC" ? "Ascending" : "Descending"}
                    </span>
                    <button
                      onClick={() => deleteSort.mutate({ id: sort.id })}
                      className="ml-auto cursor-pointer rounded p-1.5 text-gray-400 transition hover:bg-red-50 hover:text-red-600"
                      disabled={deleteSort.isPending}
                      title="Delete sort"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {/* Add Sort Form */}
          <div className="flex items-end gap-2">
            <div className="flex-1">
              <label className="mb-1 block text-xs font-medium text-gray-700">Field</label>
              <select
                value={newSortFieldId}
                onChange={(e) => setNewSortFieldId(e.target.value)}
                className="w-full rounded border border-gray-300 px-2 py-1.5 text-sm focus:border-purple-500 focus:outline-none"
              >
                <option value="">Select field...</option>
                {fields?.map((field) => (
                  <option key={field.id} value={field.id}>
                    {field.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="mb-1 block text-xs font-medium text-gray-700">Direction</label>
              <select
                value={newSortDirection}
                onChange={(e) => setNewSortDirection(e.target.value as "ASC" | "DESC")}
                className="w-full rounded border border-gray-300 px-2 py-1.5 text-sm focus:border-purple-500 focus:outline-none"
              >
                <option value="ASC">Ascending (A to Z, 1 to 9)</option>
                <option value="DESC">Descending (Z to A, 9 to 1)</option>
              </select>
            </div>
            <button
              onClick={handleCreateSort}
              disabled={!newSortFieldId || createSort.isPending}
              className="rounded bg-purple-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-purple-700 disabled:opacity-50"
            >
              {createSort.isPending ? "Adding..." : "Add"}
            </button>
          </div>
        </div>
      )}

      {/* Hidden Fields Panel */}
      {isHiddenFieldsOpen && selectedViewId && (
        <div className="border-b border-gray-200 bg-gray-50 px-6 py-3">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900">Hidden Fields</h3>
            {currentView?.hiddenFields && currentView.hiddenFields.length > 0 && (
              <span className="text-xs text-gray-500">
                {currentView.hiddenFields.length} hidden
              </span>
            )}
          </div>

          {currentView?.hiddenFields && currentView.hiddenFields.length > 0 ? (
            <div className="space-y-2">
              {currentView.hiddenFields.map((hiddenField) => {
                const field = fields?.find((f) => f.id === hiddenField.fieldId);
                if (!field) return null;
                return (
                  <div
                    key={hiddenField.id}
                    className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">{field.name}</span>
                      <span className="text-xs text-gray-400">{field.type}</span>
                    </div>
                    <button
                      onClick={() => showField.mutate({ viewId: selectedViewId, fieldId: field.id })}
                      className="flex items-center gap-1 rounded bg-blue-600 px-2 py-1 text-xs text-white hover:bg-blue-700"
                      disabled={showField.isPending}
                    >
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Show
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-gray-500">No hidden fields. Click the menu on any field header to hide it.</p>
          )}
        </div>
      )}

      {/* Table Grid with Virtual Scrolling */}
      <div ref={tableContainerRef} className="min-h-0 flex-1 overflow-auto bg-white">
        <div className="inline-block min-w-full">
          {/* table-fixed: column widths come from the header alone. With the
              default auto layout the browser re-measured every rendered row's
              content to size columns, so each batch of rows scrolling in
              forced a relayout and could make columns jitter. Fixed layout
              only applies with a definite width, hence the explicit one. */}
          <table className="min-w-full table-fixed border-collapse" style={{ width: reactTable.getTotalSize() }}>
            <thead className="sticky top-0 z-10 bg-gray-50">
              {reactTable.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      style={{ width: header.getSize() }}
                      className="border border-gray-200 bg-gray-50 text-left"
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody onClick={handleGridClick} onDoubleClick={handleGridDoubleClick} onKeyDown={handleGridKeyDown}>
              {totalRowsData === 0 ? (
                <tr>
                  <td colSpan={columns.length} className="px-6 py-12 text-center text-gray-500">
                    No records yet. Click &quot;Add row&quot; to get started.
                  </td>
                </tr>
              ) : (
                <>
                  {/* Spacer for rows above viewport */}
                  {(virtualItems[0]?.start ?? 0) > 0 && (
                    <tr>
                      <td colSpan={columns.length} style={{ height: `${virtualItems[0]?.start ?? 0}px` }} />
                    </tr>
                  )}

                  {/* Only render visible rows */}
                  {virtualItems.map((virtualRow) => {
                    const record = recordsByAbsIndex.get(virtualRow.index);

                    // Page not loaded yet: hold the row's space with a
                    // placeholder so nothing shifts when the data lands.
                    if (!record) {
                      return (
                        <tr key={`placeholder-${virtualRow.index}`} style={{ height: ROW_HEIGHT }}>
                          <td className="border border-gray-200 px-4">
                            <span className="text-xs text-gray-400">{virtualRow.index + 1}</span>
                          </td>
                          {visibleFields.map((field) => (
                            <td key={field.id} className="border border-gray-200 px-4">
                              <div className="h-3 w-3/4 animate-pulse rounded bg-gray-100" />
                            </td>
                          ))}
                        </tr>
                      );
                    }

                    return (
                      <GridRowView
                        key={record.id}
                        record={record}
                        fields={visibleFields}
                        focusedColumn={focusedCell?.rowIndex === virtualRow.index ? focusedCell.columnIndex : null}
                        editingColumn={editingCell?.rowIndex === virtualRow.index ? editingCell.columnIndex : null}
                        editSeed={editingCell?.rowIndex === virtualRow.index ? editSeed : undefined}
                        optimistic={optimisticChanges.get(record.id)}
                        onCommitEdit={commitEdit}
                        onCancelEdit={cancelEdit}
                      />
                    );
                  })}

                  {/* Spacer for rows below viewport */}
                  {virtualItems.length > 0 && (
                    <tr>
                      <td
                        colSpan={columns.length}
                        style={{
                          height: `${rowVirtualizer.getTotalSize() - (virtualItems[virtualItems.length - 1]?.end ?? 0)}px`
                        }}
                      />
                    </tr>
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create View Modal */}
      {isCreatingView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">Create a view</h3>

            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                View Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={newViewName}
                onChange={(e) => setNewViewName(e.target.value)}
                placeholder="My View"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none"
                autoFocus
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setIsCreatingView(false);
                  setNewViewName("");
                }}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                disabled={createView.isPending}
              >
                Cancel
              </button>
              <button
                onClick={handleCreateView}
                disabled={!newViewName.trim() || createView.isPending}
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
              >
                {createView.isPending ? "Creating..." : "Create view"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Field Modal */}
      {isCreatingField && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">Create a field</h3>

            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Field Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={newFieldName}
                onChange={(e) => setNewFieldName(e.target.value)}
                placeholder="Field name"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none"
                autoFocus
              />
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-gray-700">Field Type</label>
              <select
                value={newFieldType}
                onChange={(e) => setNewFieldType(e.target.value as FieldType)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none"
              >
                <option value="TEXT">Single line text</option>
                <option value="LONG_TEXT">Long text</option>
                <option value="NUMBER">Number</option>
                <option value="DATE">Date</option>
                <option value="CHECKBOX">Checkbox</option>
                <option value="SELECT">Single select</option>
                <option value="MULTI_SELECT">Multiple select</option>
                <option value="URL">URL</option>
                <option value="EMAIL">Email</option>
                <option value="PHONE">Phone</option>
                <option value="ATTACHMENT">Attachment (coming soon)</option>
              </select>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setIsCreatingField(false);
                  setNewFieldName("");
                  setNewFieldType("TEXT");
                }}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                disabled={createField.isPending}
              >
                Cancel
              </button>
              <button
                onClick={handleCreateField}
                disabled={!newFieldName.trim() || createField.isPending}
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
              >
                {createField.isPending ? "Creating..." : "Create field"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Keyboard Shortcuts Help Modal */}
      {showShortcutsHelp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setShowShortcutsHelp(false)}>
          <div className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">Keyboard Shortcuts</h3>
              <button
                onClick={() => setShowShortcutsHelp(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="mb-2 text-sm font-semibold text-gray-700">General</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Show keyboard shortcuts</span>
                    <kbd className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">?</kbd>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Close modals and panels</span>
                    <kbd className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">Esc</kbd>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-2 text-sm font-semibold text-gray-700">Records</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Add new record</span>
                    <kbd className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">Cmd+N / Ctrl+N</kbd>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-2 text-sm font-semibold text-gray-700">Views</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Toggle filters</span>
                    <kbd className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">Cmd+F / Ctrl+F</kbd>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Toggle sorts</span>
                    <kbd className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">Cmd+Shift+S / Ctrl+Shift+S</kbd>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Toggle hidden fields</span>
                    <kbd className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">Cmd+H / Ctrl+H</kbd>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-2 text-sm font-semibold text-gray-700">Cell Navigation</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Navigate between cells</span>
                    <kbd className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">Arrow Keys</kbd>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Move to next cell</span>
                    <kbd className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">Tab</kbd>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Move to previous cell</span>
                    <kbd className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">Shift+Tab</kbd>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Edit selected cell</span>
                    <kbd className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">Enter</kbd>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-2 text-sm font-semibold text-gray-700">Cell Editing</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Save and close cell</span>
                    <kbd className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">Enter</kbd>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Cancel cell editing</span>
                    <kbd className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">Esc</kbd>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-gray-200 pt-4">
              <p className="text-xs text-gray-500">
                Tip: Click anywhere outside this modal or press <kbd className="rounded bg-gray-100 px-1 py-0.5">Esc</kbd> to close
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Editable Cell Component
type GridRowViewProps = {
  record: RecordWithCellMap;
  fields: GridField[];
  // Per-row slices of grid-wide state (null/undefined for rows they don't
  // touch), so memo re-renders only the rows a change actually affects.
  focusedColumn: number | null;
  editingColumn: number | null;
  editSeed: unknown;
  optimistic: Record<string, unknown> | undefined;
  onCommitEdit: (recordId: string, fieldId: string, value: unknown) => void;
  onCancelEdit: () => void;
};

// One loaded grid row. Memoized because the virtualizer re-renders TableView
// on every scroll event: a scroll frame renders only rows that just came into
// view, moving focus re-renders just the two rows involved, and committing an
// edit re-renders just the edited row.
const GridRowView = memo(function GridRowView({
  record,
  fields,
  focusedColumn,
  editingColumn,
  editSeed,
  optimistic,
  onCommitEdit,
  onCancelEdit,
}: GridRowViewProps) {
  return (
    <tr className="hover:bg-gray-50" style={{ height: ROW_HEIGHT }}>
      <td className="border border-gray-200">
        <div className="group flex items-center justify-between px-4 py-2 text-xs text-gray-500">
          <span>{record.absIndex + 1}</span>
          {/* Handled by TableView's delegated click handler */}
          <button
            data-action="delete-row"
            data-record-id={record.id}
            className="opacity-0 transition-opacity hover:text-red-600 group-hover:opacity-100"
            title="Delete record"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </td>
      {fields.map((field, i) => {
        const columnIndex = i + 1;
        const isEditing = editingColumn === columnIndex;
        // Use optimistic value if available, otherwise use database value
        const value =
          optimistic && field.id in optimistic ? optimistic[field.id] : record.cellsByFieldId.get(field.id)?.value;
        return (
          <td key={field.id} className="border border-gray-200">
            <GridCellView
              recordId={record.id}
              field={field}
              value={value}
              rowIndex={record.absIndex}
              columnIndex={columnIndex}
              isFocused={focusedColumn === columnIndex}
              isEditing={isEditing}
              editSeed={isEditing ? editSeed : undefined}
              onCommitEdit={onCommitEdit}
              onCancelEdit={onCancelEdit}
            />
          </td>
        );
      })}
    </tr>
  );
});

type GridCellViewProps = {
  recordId: string;
  field: GridField;
  value: unknown;
  rowIndex: number;
  columnIndex: number;
  isFocused: boolean;
  isEditing: boolean;
  editSeed: unknown;
  onCommitEdit: (recordId: string, fieldId: string, value: unknown) => void;
  onCancelEdit: () => void;
};

// A single cell: a lightweight display by default; only the one cell being
// edited mounts a CellEditor. Clicks and keys are handled by TableView's
// delegated <tbody> handlers, found via data-row/data-col.
const GridCellView = memo(function GridCellView({
  recordId,
  field,
  value,
  rowIndex,
  columnIndex,
  isFocused,
  isEditing,
  editSeed,
  onCommitEdit,
  onCancelEdit,
}: GridCellViewProps) {
  const cellRef = useRef<HTMLDivElement>(null);

  // Auto-focus cell when it becomes focused programmatically
  useEffect(() => {
    if (isFocused && !isEditing && cellRef.current && document.activeElement !== cellRef.current) {
      cellRef.current.focus();
    }
  }, [isFocused, isEditing]);

  if (isEditing) {
    return (
      <div className="min-h-[40px] px-4 py-2">
        <CellEditor
          // Use the seed if set (the user typed a key), otherwise the current value
          value={editSeed !== undefined ? editSeed : value}
          fieldType={field.type}
          fieldConfig={field.config}
          onSave={(newValue) => onCommitEdit(recordId, field.id, newValue)}
          onCancel={onCancelEdit}
        />
      </div>
    );
  }

  return (
    <div
      ref={cellRef}
      data-row={rowIndex}
      data-col={columnIndex}
      // Roving tabindex: only the focused cell is in the tab order.
      tabIndex={isFocused ? 0 : -1}
      className={`min-h-[40px] cursor-cell px-4 py-2 hover:bg-blue-50 focus:outline-none ${
        isFocused ? 'ring-2 ring-blue-500 ring-inset' : ''
      }`}
      style={{ userSelect: 'none' }}
    >
      <div className="pointer-events-none">
        <CellDisplay value={value} fieldType={field.type} fieldConfig={field.config} />
      </div>
    </div>
  );
});
