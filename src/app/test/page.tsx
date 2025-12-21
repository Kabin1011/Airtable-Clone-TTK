"use client";

import { useState } from "react";
import { api } from "~/trpc/react";

export default function TestPage() {
  const [baseId, setBaseId] = useState("");
  const [tableId, setTableId] = useState("");

  // Test Base API
  const { data: bases } = api.base.getAll.useQuery();
  const createBase = api.base.create.useMutation();

  // Test Table API
  const { data: tables } = api.table.getByBaseId.useQuery(
    { baseId },
    { enabled: !!baseId }
  );
  const createTable = api.table.create.useMutation();

  // Test Field API
  const { data: fields } = api.field.getByTableId.useQuery(
    { tableId },
    { enabled: !!tableId }
  );
  const createField = api.field.create.useMutation();

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
    </div>
  );
}
