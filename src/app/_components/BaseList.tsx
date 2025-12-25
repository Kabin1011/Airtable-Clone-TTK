"use client";

import { useState } from "react";
import { api } from "~/trpc/react";
import Link from "next/link";

export function BaseList() {
  const [isCreating, setIsCreating] = useState(false);
  const [newBaseName, setNewBaseName] = useState("");
  const [newBaseDescription, setNewBaseDescription] = useState("");
  const [newBaseIcon, setNewBaseIcon] = useState("📊");

  const utils = api.useUtils();
  const { data: bases, isLoading } = api.base.getAll.useQuery();

  const createBase = api.base.create.useMutation({
    onSuccess: async () => {
      await utils.base.getAll.invalidate();
      setIsCreating(false);
      setNewBaseName("");
      setNewBaseDescription("");
      setNewBaseIcon("📊");
    },
  });

  const deleteBase = api.base.delete.useMutation({
    onSuccess: async () => {
      await utils.base.getAll.invalidate();
    },
  });

  const handleCreateBase = () => {
    if (!newBaseName.trim()) return;
    createBase.mutate({
      name: newBaseName,
      description: newBaseDescription || undefined,
      icon: newBaseIcon,
    });
  };

  const commonIcons = ["📊", "📈", "📋", "🗂️", "💼", "🎯", "🚀", "⚡", "🔥", "💡"];

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <h1 className="text-2xl font-semibold text-gray-900">Home</h1>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">My Bases</h2>
          <button
            onClick={() => setIsCreating(true)}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            + Create a base
          </button>
        </div>

        {/* Create Base Modal */}
        {isCreating && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Create a base</h3>

              {/* Icon Selector */}
              <div className="mb-4">
                <label className="mb-2 block text-sm font-medium text-gray-700">Icon</label>
                <div className="flex flex-wrap gap-2">
                  {commonIcons.map((icon) => (
                    <button
                      key={icon}
                      onClick={() => setNewBaseIcon(icon)}
                      className={`rounded border-2 p-2 text-2xl ${
                        newBaseIcon === icon
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
              <div className="mb-4">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={newBaseName}
                  onChange={(e) => setNewBaseName(e.target.value)}
                  placeholder="My New Base"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none"
                  autoFocus
                />
              </div>

              {/* Description Input */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={newBaseDescription}
                  onChange={(e) => setNewBaseDescription(e.target.value)}
                  placeholder="What is this base for?"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none"
                  rows={3}
                />
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => {
                    setIsCreating(false);
                    setNewBaseName("");
                    setNewBaseDescription("");
                    setNewBaseIcon("📊");
                  }}
                  className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  disabled={createBase.isPending}
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateBase}
                  disabled={!newBaseName.trim() || createBase.isPending}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
                >
                  {createBase.isPending ? "Creating..." : "Create base"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Base Grid */}
        {!bases || bases.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 py-12">
            <p className="mb-4 text-gray-500">No bases yet</p>
            <button
              onClick={() => setIsCreating(true)}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Create your first base
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {bases.map((base) => (
              <div
                key={base.id}
                className="group relative flex flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
              >
                <Link href={`/base/${base.id}`} className="flex-1">
                  <div className="mb-3 flex items-start justify-between">
                    <div className="text-3xl">{base.icon}</div>
                    <div className="opacity-0 transition group-hover:opacity-100">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          if (confirm(`Delete "${base.name}"?`)) {
                            deleteBase.mutate({ id: base.id });
                          }
                        }}
                        className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-red-600"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <h3 className="mb-1 font-semibold text-gray-900">{base.name}</h3>
                  {base.description && (
                    <p className="text-sm text-gray-500 line-clamp-2">{base.description}</p>
                  )}
                </Link>
                <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3 text-xs text-gray-400">
                  <span>{base.tables.length} tables</span>
                  <span>Modified {new Date(base.updatedAt).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
