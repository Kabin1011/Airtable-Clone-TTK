"use client";

import { useState, useMemo } from "react";
import { api } from "~/trpc/react";
import Link from "next/link";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  type ColumnDef,
} from "@tanstack/react-table";
import type { Field, Record as PrismaRecord, Cell, FieldType } from "../../../generated/prisma";
import { CellDisplay } from "./cells/CellDisplay";
import { CellEditor } from "./cells/CellEditor";
import { FIELD_TYPE_CONFIGS } from "~/lib/fieldTypes";

type RecordWithCells = PrismaRecord & {
  cells: (Cell & { field: Field })[];
};

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

  const utils = api.useUtils();

  const { data: base } = api.base.getById.useQuery({ id: baseId }, { enabled: !!baseId });
  const { data: table } = api.table.getById.useQuery({ id: tableId }, { enabled: !!tableId });
  const { data: fields } = api.field.getByTableId.useQuery({ tableId }, { enabled: !!tableId });

  // Fetch views for this table
  const { data: views } = api.view.getByTableId.useQuery({ tableId }, { enabled: !!tableId });

  // Auto-select first view or default view
  useMemo(() => {
    if (views && views.length > 0 && !selectedViewId) {
      const defaultView = views.find(v => v.isDefault) || views[0];
      if (defaultView) setSelectedViewId(defaultView.id);
    }
  }, [views, selectedViewId]);

  // Get current view data
  const currentView = views?.find(v => v.id === selectedViewId);

  // Use infinite query for pagination
  const {
    data: infiniteData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isFetching,
  } = api.record.getByTableId.useInfiniteQuery(
    { tableId, limit: 50, viewId: selectedViewId ?? undefined },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      enabled: !!tableId,
      placeholderData: (previousData) => previousData, // Keep previous data while loading new data
    }
  );

  // Flatten all pages into a single array
  const records = useMemo(() => {
    return infiniteData?.pages.flatMap((page) => page.items) ?? [];
  }, [infiniteData]);

  const createField = api.field.create.useMutation({
    onSuccess: async () => {
      await utils.field.getByTableId.invalidate({ tableId });
      await utils.record.getByTableId.invalidate({ tableId });
      setIsCreatingField(false);
      setNewFieldName("");
      setNewFieldType("TEXT");
    },
  });

  const createRecord = api.record.create.useMutation({
    onSuccess: async () => {
      await utils.record.getByTableId.invalidate({ tableId });
    },
  });

  const updateCell = api.cell.update.useMutation({
    // Optimistic update - update UI immediately without waiting for server
    onMutate: async (newData) => {
      // Cancel any outgoing refetches
      await utils.record.getByTableId.cancel({ tableId });

      // Snapshot the previous value
      const previousData = utils.record.getByTableId.getInfiniteData({
        tableId,
        limit: 50,
        viewId: selectedViewId ?? undefined
      });

      // Optimistically update to the new value
      utils.record.getByTableId.setInfiniteData(
        { tableId, limit: 50, viewId: selectedViewId ?? undefined },
        (old) => {
          if (!old) return old;

          return {
            ...old,
            pages: old.pages.map((page) => ({
              ...page,
              items: page.items.map((record) => {
                if (record.id !== newData.recordId) return record;

                // Find if cell exists
                const existingCell = record.cells.find((c) => c.fieldId === newData.fieldId);
                const field = fields?.find((f) => f.id === newData.fieldId);

                if (existingCell) {
                  // Update existing cell
                  return {
                    ...record,
                    cells: record.cells.map((cell) => {
                      if (cell.fieldId !== newData.fieldId) return cell;
                      return { ...cell, value: newData.value };
                    }),
                  };
                } else if (field) {
                  // Create new cell optimistically (for empty cells)
                  return {
                    ...record,
                    cells: [
                      ...record.cells,
                      {
                        id: `temp-${newData.recordId}-${newData.fieldId}`,
                        fieldId: newData.fieldId,
                        recordId: newData.recordId,
                        value: newData.value,
                        field,
                      },
                    ],
                  };
                }

                return record;
              }),
            })),
          };
        }
      );

      // Return context with previous data
      return { previousData };
    },
    // If mutation fails, rollback to previous value
    onError: (err, newData, context) => {
      if (context?.previousData) {
        utils.record.getByTableId.setInfiniteData(
          { tableId, limit: 50, viewId: selectedViewId ?? undefined },
          context.previousData
        );
      }
    },
    // Always refetch after error or success to ensure sync with server
    onSettled: () => {
      void utils.record.getByTableId.invalidate({ tableId });
    },
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
        utils.record.getByTableId.invalidate({ tableId })
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
        utils.record.getByTableId.invalidate({ tableId })
      ]);
    },
  });

  // Sort mutations
  const createSort = api.sort.create.useMutation({
    onSuccess: async () => {
      // Invalidate both views and records to refresh sorted data
      await Promise.all([
        utils.view.getByTableId.invalidate({ tableId }),
        utils.record.getByTableId.invalidate({ tableId })
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
        utils.record.getByTableId.invalidate({ tableId })
      ]);
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

  // Build columns for TanStack Table
  const columns = useMemo<ColumnDef<RecordWithCells>[]>(() => {
    if (!fields) return [];

    const cols: ColumnDef<RecordWithCells>[] = [
      {
        id: "rowNumber",
        header: () => <div className="px-4 py-2 text-xs font-medium text-gray-500">#</div>,
        cell: ({ row }) => (
          <div className="px-4 py-2 text-xs text-gray-500">{row.index + 1}</div>
        ),
        size: 50,
      },
    ];

    fields.forEach((field) => {
      cols.push({
        id: field.id,
        accessorFn: (record) => {
          const cell = record.cells.find((c) => c.fieldId === field.id);
          return cell?.value;
        },
        header: () => (
          <div className="group relative flex items-center justify-between px-4 py-2">
            <span className="font-medium text-gray-900">{field.name}</span>
            <span className="ml-2 text-xs text-gray-400">{field.type}</span>
          </div>
        ),
        cell: ({ row, getValue }) => {
          const value = getValue();
          const record = row.original;

          return (
            <EditableCell
              recordId={record.id}
              fieldId={field.id}
              value={value}
              fieldType={field.type}
              fieldConfig={field.config}
              onUpdate={(newValue) => {
                updateCell.mutate({
                  recordId: record.id,
                  fieldId: field.id,
                  value: newValue,
                });
              }}
            />
          );
        },
        size: 200,
      });
    });

    return cols;
  }, [fields, updateCell]);

  const reactTable = useReactTable({
    data: records,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (!base || !table) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
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
              </>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            {isFetching && !isFetchingNextPage && (
              <svg className="h-4 w-4 animate-spin text-blue-600" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
            <span>Showing {records.length} rows</span>
            {hasNextPage && <span className="ml-2 text-gray-400">(more available)</span>}
          </div>
        </div>
      </div>

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

      {/* Table Grid */}
      <div className="flex-1 overflow-auto bg-white">
        <div className="inline-block min-w-full">
          <table className="min-w-full border-collapse">
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
            <tbody>
              {reactTable.getRowModel().rows.length === 0 ? (
                <tr>
                  <td colSpan={columns.length} className="px-6 py-12 text-center text-gray-500">
                    No records yet. Click &quot;Add row&quot; to get started.
                  </td>
                </tr>
              ) : (
                reactTable.getRowModel().rows.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50">
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="border border-gray-200"
                        style={{ width: cell.column.getSize() }}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Load More Button */}
        {hasNextPage && (
          <div className="border-t border-gray-200 bg-gray-50 p-4 text-center">
            <button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {isFetchingNextPage ? "Loading..." : "Load More Rows"}
            </button>
          </div>
        )}
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
    </div>
  );
}

// Editable Cell Component
function EditableCell({
  recordId,
  fieldId,
  value,
  fieldType,
  fieldConfig,
  onUpdate,
}: {
  recordId: string;
  fieldId: string;
  value: any;
  fieldType: FieldType;
  fieldConfig?: any;
  onUpdate: (value: any) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (newValue: any) => {
    onUpdate(newValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="min-h-[40px] px-4 py-2">
        <CellEditor
          value={value}
          fieldType={fieldType}
          fieldConfig={fieldConfig}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </div>
    );
  }

  return (
    <div
      onClick={() => setIsEditing(true)}
      className="min-h-[40px] cursor-pointer px-4 py-2 hover:bg-blue-50"
    >
      <CellDisplay value={value} fieldType={fieldType} fieldConfig={fieldConfig} />
    </div>
  );
}
