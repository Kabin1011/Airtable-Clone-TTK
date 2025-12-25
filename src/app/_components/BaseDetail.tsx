"use client";

import { useState } from "react";
import { api } from "~/trpc/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function BaseDetail({ baseId }: { baseId: string }) {
  const router = useRouter();
  const [isCreatingTable, setIsCreatingTable] = useState(false);
  const [newTableName, setNewTableName] = useState("");
  const [newTableIcon, setNewTableIcon] = useState("📋");

  const utils = api.useUtils();
  const { data: base, isLoading } = api.base.getById.useQuery({ id: baseId });

  const createTable = api.table.create.useMutation({
    onSuccess: async (newTable) => {
      await utils.base.getById.invalidate({ id: baseId });
      setIsCreatingTable(false);
      setNewTableName("");
      setNewTableIcon("📋");
      // Redirect to the new table
      router.push(`/base/${baseId}/table/${newTable.id}`);
    },
  });

  const deleteTable = api.table.delete.useMutation({
    onSuccess: async () => {
      await utils.base.getById.invalidate({ id: baseId });
    },
  });

  const handleCreateTable = () => {
    if (!newTableName.trim()) return;
    createTable.mutate({
      baseId,
      name: newTableName,
      icon: newTableIcon,
    });
  };

  const commonIcons = ["📋", "📝", "📊", "📈", "👥", "🏢", "💼", "🎯", "✅", "📦"];

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!base) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="mb-4 text-gray-500">Base not found</p>
          <Link href="/" className="text-blue-600 hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-200 bg-white">
        <div className="p-4">
          <Link href="/" className="mb-4 flex items-center text-sm text-gray-600 hover:text-gray-900">
            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All bases
          </Link>
          <div className="mb-4 flex items-center gap-3">
            <div className="text-3xl">{base.icon}</div>
            <div>
              <h1 className="font-semibold text-gray-900">{base.name}</h1>
              {base.description && (
                <p className="text-xs text-gray-500">{base.description}</p>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 p-4">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-500">Tables</h2>
            <button
              onClick={() => setIsCreatingTable(true)}
              className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-900"
              title="Add table"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>

          <div className="space-y-1">
            {base.tables.length === 0 ? (
              <p className="text-sm text-gray-400">No tables yet</p>
            ) : (
              base.tables.map((table) => (
                <div
                  key={table.id}
                  className="group flex items-center justify-between rounded px-2 py-1.5 text-sm hover:bg-gray-100"
                >
                  <Link href={`/base/${baseId}/table/${table.id}`} className="flex flex-1 items-center gap-2">
                    <span>{table.icon}</span>
                    <span className="text-gray-700">{table.name}</span>
                  </Link>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (confirm(`Delete table "${table.name}"?`)) {
                        deleteTable.mutate({ id: table.id });
                      }
                    }}
                    className="opacity-0 rounded p-1 text-gray-400 hover:bg-gray-200 hover:text-red-600 group-hover:opacity-100"
                  >
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="flex h-full items-center justify-center">
          <div className="text-center">
            <div className="mb-4 text-6xl">{base.icon}</div>
            <h2 className="mb-2 text-2xl font-semibold text-gray-900">{base.name}</h2>
            {base.description && (
              <p className="mb-6 text-gray-600">{base.description}</p>
            )}
            {base.tables.length === 0 ? (
              <div>
                <p className="mb-4 text-gray-500">Create your first table to get started</p>
                <button
                  onClick={() => setIsCreatingTable(true)}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  + Create a table
                </button>
              </div>
            ) : (
              <p className="text-gray-500">Select a table from the sidebar</p>
            )}
          </div>
        </div>
      </div>

      {/* Create Table Modal */}
      {isCreatingTable && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">Create a table</h3>

            {/* Icon Selector */}
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-gray-700">Icon</label>
              <div className="flex flex-wrap gap-2">
                {commonIcons.map((icon) => (
                  <button
                    key={icon}
                    onClick={() => setNewTableIcon(icon)}
                    className={`rounded border-2 p-2 text-2xl ${
                      newTableIcon === icon
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Name Input */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={newTableName}
                onChange={(e) => setNewTableName(e.target.value)}
                placeholder="My New Table"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none"
                autoFocus
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setIsCreatingTable(false);
                  setNewTableName("");
                  setNewTableIcon("📋");
                }}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                disabled={createTable.isPending}
              >
                Cancel
              </button>
              <button
                onClick={handleCreateTable}
                disabled={!newTableName.trim() || createTable.isPending}
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
              >
                {createTable.isPending ? "Creating..." : "Create table"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
