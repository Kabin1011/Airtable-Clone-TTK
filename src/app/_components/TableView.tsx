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
import type { Field, Record as PrismaRecord, Cell } from "@prisma/client";

type RecordWithCells = PrismaRecord & {
  cells: (Cell & { field: Field })[];
};

export function TableView({ baseId, tableId }: { baseId: string; tableId: string }) {
  const [isCreatingField, setIsCreatingField] = useState(false);
  const [newFieldName, setNewFieldName] = useState("");
  const [newFieldType, setNewFieldType] = useState<"TEXT" | "NUMBER">("TEXT");

  const utils = api.useUtils();

  const { data: base } = api.base.getById.useQuery({ id: baseId });
  const { data: table } = api.table.getById.useQuery({ id: tableId });
  const { data: fields } = api.field.getByTableId.useQuery({ tableId });
  const { data: recordsData } = api.record.getByTableId.useQuery({
    tableId,
    limit: 50,
  });

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
    onSuccess: async () => {
      await utils.record.getByTableId.invalidate({ tableId });
    },
  });

  const handleCreateField = () => {
    if (!newFieldName.trim()) return;
    createField.mutate({
      tableId,
      name: newFieldName,
      type: newFieldType,
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
              value={value as string | number | null}
              fieldType={field.type}
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
    data: recordsData?.items ?? [],
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

      {/* Toolbar */}
      <div className="border-b border-gray-200 bg-white px-6 py-2">
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
        </div>
      </div>

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
      </div>

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
                onChange={(e) => setNewFieldType(e.target.value as "TEXT" | "NUMBER")}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none"
              >
                <option value="TEXT">Text</option>
                <option value="NUMBER">Number</option>
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
  onUpdate,
}: {
  recordId: string;
  fieldId: string;
  value: string | number | null;
  fieldType: string;
  onUpdate: (value: string | number) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value?.toString() ?? "");

  const handleSave = () => {
    const finalValue = fieldType === "NUMBER" ? parseFloat(editValue) || 0 : editValue;
    onUpdate(finalValue);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <input
        type={fieldType === "NUMBER" ? "number" : "text"}
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        onBlur={handleSave}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSave();
          if (e.key === "Escape") setIsEditing(false);
        }}
        className="w-full border-0 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        autoFocus
      />
    );
  }

  return (
    <div
      onClick={() => {
        setEditValue(value?.toString() ?? "");
        setIsEditing(true);
      }}
      className="min-h-[40px] cursor-text px-4 py-2 hover:bg-blue-50"
    >
      {value?.toString() || ""}
    </div>
  );
}
