"use client";

import { useState } from "react";
import { api } from "~/trpc/react";

export default function TestPage() {
  const [baseId, setBaseId] = useState("");
  const [tableId, setTableId] = useState("");

  // Test Base API
  const utils = api.useUtils();
  const { data: bases } = api.base.getAll.useQuery();
  const createBase = api.base.create.useMutation({
    onSuccess: async () => {
      await utils.base.getAll.invalidate();
    },
  });

  // Test Table API
  const { data: tables } = api.table.getByBaseId.useQuery(
    { baseId },
    { enabled: !!baseId }
  );
  const createTable = api.table.create.useMutation({
    onSuccess: async () => {
      await utils.table.getByBaseId.invalidate({ baseId });
    },
  });

  // Test Field API
  const { data: fields } = api.field.getByTableId.useQuery(
    { tableId },
    { enabled: !!tableId }
  );
  const createField = api.field.create.useMutation({
    onSuccess: async () => {
      await utils.field.getByTableId.invalidate({ tableId });
    },
  });

  // Test Record API
  const { data: recordsData } = api.record.getByTableId.useQuery(
    { tableId, limit: 10 },
    { enabled: !!tableId }
  );
  const { data: totalCount } = api.record.count.useQuery(
    { tableId },
    { enabled: !!tableId }
  );
  const createRecord = api.record.create.useMutation({
    onSuccess: async () => {
      await utils.record.getByTableId.invalidate({ tableId });
      await utils.record.count.invalidate({ tableId });
    },
  });
  const bulkCreateRecords = api.record.bulkCreate.useMutation({
    onSuccess: async () => {
      await utils.record.getByTableId.invalidate({ tableId });
      await utils.record.count.invalidate({ tableId });
    },
  });

  // Test Cell API
  const updateCell = api.cell.update.useMutation({
    onSuccess: async () => {
      await utils.record.getByTableId.invalidate({ tableId });
    },
  });
  const bulkUpdateCells = api.cell.bulkUpdate.useMutation({
    onSuccess: async () => {
      await utils.record.getByTableId.invalidate({ tableId });
    },
  });

  return (
    <div className="min-h-screen bg-gray-900 p-8 text-white">
      <h1 className="mb-8 text-4xl font-bold">API Test Page</h1>

      {/* Test Base CRUD */}
      <section className="mb-8 rounded-lg bg-gray-800 p-6">
        <h2 className="mb-4 text-2xl font-bold">Bases</h2>
        <button
          onClick={() =>
            createBase.mutate({
              name: `Test Base ${Date.now()}`,
              description: "Created from test page",
            })
          }
          className="mb-4 rounded bg-blue-600 px-4 py-2 hover:bg-blue-700"
        >
          Create Test Base
        </button>
        <div className="space-y-2">
          {bases?.map((base) => (
            <div
              key={base.id}
              onClick={() => setBaseId(base.id)}
              className="cursor-pointer rounded bg-gray-700 p-3 hover:bg-gray-600"
            >
              {base.icon} {base.name} ({base.tables.length} tables)
              {baseId === base.id && " ← Selected"}
            </div>
          ))}
        </div>
      </section>

      {/* Test Table CRUD */}
      {baseId && (
        <section className="mb-8 rounded-lg bg-gray-800 p-6">
          <h2 className="mb-4 text-2xl font-bold">Tables in Selected Base</h2>
          <button
            onClick={() =>
              createTable.mutate({
                baseId,
                name: `Test Table ${Date.now()}`,
              })
            }
            className="mb-4 rounded bg-green-600 px-4 py-2 hover:bg-green-700"
          >
            Create Test Table
          </button>
          <div className="space-y-2">
            {tables?.map((table) => (
              <div
                key={table.id}
                onClick={() => setTableId(table.id)}
                className="cursor-pointer rounded bg-gray-700 p-3 hover:bg-gray-600"
              >
                {table.icon} {table.name} ({table.fields?.length || 0} fields)
                {tableId === table.id && " ← Selected"}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Test Field CRUD */}
      {tableId && (
        <section className="mb-8 rounded-lg bg-gray-800 p-6">
          <h2 className="mb-4 text-2xl font-bold">Fields in Selected Table</h2>
          <button
            onClick={() =>
              createField.mutate({
                tableId,
                name: `Column ${Date.now()}`,
                type: "TEXT",
              })
            }
            className="mb-4 rounded bg-purple-600 px-4 py-2 hover:bg-purple-700"
          >
            Create Test Field (TEXT)
          </button>
          <button
            onClick={() =>
              createField.mutate({
                tableId,
                name: `Number ${Date.now()}`,
                type: "NUMBER",
              })
            }
            className="mb-4 ml-2 rounded bg-purple-600 px-4 py-2 hover:bg-purple-700"
          >
            Create Test Field (NUMBER)
          </button>
          <div className="space-y-2">
            {fields?.map((field, idx) => (
              <div key={field.id} className="rounded bg-gray-700 p-3">
                Order: {field.order} | {field.name} ({field.type})
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Test Cell CRUD */}
      {tableId && fields && fields.length > 0 && recordsData && recordsData.items.length > 0 && (
        <section className="mb-8 rounded-lg bg-gray-800 p-6">
          <h2 className="mb-4 text-2xl font-bold">Cell Updates (Test Editing)</h2>
          <p className="mb-4 text-sm text-gray-400">
            This tests the upsert pattern - it will create cells if they don't exist, or update them if they do.
          </p>
          <div className="mb-4 space-x-2">
            <button
              onClick={() => {
                const firstField = fields[0];
                const firstRecord = recordsData.items[0];
                if (firstField && firstRecord) {
                  updateCell.mutate({
                    fieldId: firstField.id,
                    recordId: firstRecord.id,
                    value: `Updated at ${new Date().toLocaleTimeString()}`,
                  });
                }
              }}
              className="rounded bg-yellow-600 px-4 py-2 hover:bg-yellow-700"
              disabled={updateCell.isPending}
            >
              {updateCell.isPending ? "Updating..." : "Update First Cell"}
            </button>
            <button
              onClick={() => {
                const updates = [];
                for (let i = 0; i < Math.min(5, recordsData.items.length); i++) {
                  for (let j = 0; j < Math.min(3, fields.length); j++) {
                    updates.push({
                      fieldId: fields[j]!.id,
                      recordId: recordsData.items[i]!.id,
                      value: `Bulk ${i}-${j} at ${new Date().toLocaleTimeString()}`,
                    });
                  }
                }
                bulkUpdateCells.mutate({ updates });
              }}
              className="rounded bg-yellow-600 px-4 py-2 hover:bg-yellow-700"
              disabled={bulkUpdateCells.isPending}
            >
              {bulkUpdateCells.isPending ? "Updating..." : "Bulk Update 15 Cells"}
            </button>
          </div>
          {updateCell.isSuccess && (
            <p className="text-sm text-green-400">Single cell updated successfully!</p>
          )}
          {bulkUpdateCells.isSuccess && (
            <p className="text-sm text-green-400">Bulk cells updated successfully!</p>
          )}
          {(updateCell.error || bulkUpdateCells.error) && (
            <p className="text-sm text-red-400">
              Error: {updateCell.error?.message || bulkUpdateCells.error?.message}
            </p>
          )}
        </section>
      )}

      {/* Test Record CRUD */}
      {tableId && (
        <section className="mb-8 rounded-lg bg-gray-800 p-6">
          <h2 className="mb-4 text-2xl font-bold">Records (Rows) in Selected Table</h2>
          <div className="mb-4 space-x-2">
            <button
              onClick={() => createRecord.mutate({ tableId })}
              className="rounded bg-orange-600 px-4 py-2 hover:bg-orange-700"
            >
              Create 1 Row
            </button>
            <button
              onClick={() => bulkCreateRecords.mutate({ tableId, count: 10 })}
              className="rounded bg-orange-600 px-4 py-2 hover:bg-orange-700"
            >
              Create 10 Rows
            </button>
            <button
              onClick={() => bulkCreateRecords.mutate({ tableId, count: 100 })}
              className="rounded bg-orange-600 px-4 py-2 hover:bg-orange-700"
            >
              Create 100 Rows
            </button>
            <button
              onClick={() => bulkCreateRecords.mutate({ tableId, count: 1000 })}
              className="rounded bg-red-600 px-4 py-2 hover:bg-red-700"
            >
              Create 1,000 Rows 🔥
            </button>
          </div>
          <div className="space-y-2">
            <p className="text-lg font-bold text-green-400">
              Total Records in Database: {totalCount ?? 0}
            </p>
            <p className="text-sm text-gray-400">
              Showing: {recordsData?.items.length || 0} of {totalCount ?? 0}
              {recordsData?.nextCursor && " (More available - pagination working!)"}
            </p>
            {recordsData?.items.slice(0, 5).map((record) => (
              <div key={record.id} className="rounded bg-gray-700 p-3 text-sm">
                <div className="font-bold">
                  Order: {record.order} | ID: {record.id.slice(0, 8)}... | Cells: {record.cells.length}
                </div>
                {record.cells.length > 0 && (
                  <div className="mt-2 space-y-1 pl-4 text-xs text-gray-300">
                    {record.cells.map((cell) => (
                      <div key={cell.id}>
                        {cell.field.name}: {JSON.stringify(cell.value)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {recordsData && recordsData.items.length > 5 && (
              <p className="text-sm text-gray-500">
                ... and {recordsData.items.length - 5} more records
              </p>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
