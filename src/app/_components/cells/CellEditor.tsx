"use client";

import { useState, useEffect, useRef } from "react";
import type { FieldType } from "../../../../generated/prisma";
import { SELECT_COLORS } from "~/lib/fieldTypes";
import { FileUpload } from "./FileUpload";

interface CellEditorProps {
  value: any;
  fieldType: FieldType;
  fieldConfig?: any;
  onSave: (value: any) => void;
  onCancel: () => void;
}

export function CellEditor({
  value: initialValue,
  fieldType,
  fieldConfig,
  onSave,
  onCancel,
}: CellEditorProps) {
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    // Auto-focus on mount
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && fieldType !== "LONG_TEXT") {
      e.preventDefault();
      onSave(value);
    } else if (e.key === "Escape") {
      e.preventDefault();
      onCancel();
    }
  };

  const handleSave = () => {
    onSave(value);
  };

  // Render different editors based on field type
  switch (fieldType) {
    case "TEXT":
    case "EMAIL":
    case "PHONE":
    case "URL":
      return (
        <input
          ref={inputRef as React.RefObject<HTMLInputElement>}
          type={fieldType === "EMAIL" ? "email" : fieldType === "URL" ? "url" : "text"}
          value={value ?? ""}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleSave}
          className="w-full border border-blue-500 px-2 py-1 text-sm focus:outline-none"
          placeholder={`Enter ${fieldType.toLowerCase()}...`}
        />
      );

    case "LONG_TEXT":
      return (
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          value={value ?? ""}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleSave}
          className="w-full border border-blue-500 px-2 py-1 text-sm focus:outline-none"
          placeholder="Enter text..."
          rows={3}
        />
      );

    case "NUMBER":
      return (
        <input
          ref={inputRef as React.RefObject<HTMLInputElement>}
          type="number"
          value={value ?? ""}
          onChange={(e) => setValue(e.target.value ? Number(e.target.value) : null)}
          onKeyDown={handleKeyDown}
          onBlur={handleSave}
          className="w-full border border-blue-500 px-2 py-1 text-sm focus:outline-none"
          placeholder="Enter number..."
          step={fieldConfig?.precision ? Math.pow(10, -fieldConfig.precision) : 1}
        />
      );

    case "DATE":
      return (
        <input
          ref={inputRef as React.RefObject<HTMLInputElement>}
          type={fieldConfig?.includeTime ? "datetime-local" : "date"}
          value={value ? new Date(value).toISOString().slice(0, fieldConfig?.includeTime ? 16 : 10) : ""}
          onChange={(e) => setValue(e.target.value ? new Date(e.target.value).toISOString() : null)}
          onKeyDown={handleKeyDown}
          onBlur={handleSave}
          className="w-full border border-blue-500 px-2 py-1 text-sm focus:outline-none"
        />
      );

    case "CHECKBOX":
      return (
        <div className="flex items-center justify-center py-1">
          <input
            type="checkbox"
            checked={value ?? false}
            onChange={(e) => {
              setValue(e.target.checked);
              onSave(e.target.checked);
            }}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
        </div>
      );

    case "SELECT":
      const options = fieldConfig?.options ?? [];
      return (
        <select
          ref={inputRef as React.RefObject<HTMLSelectElement>}
          value={value ?? ""}
          onChange={(e) => {
            setValue(e.target.value || null);
            onSave(e.target.value || null);
          }}
          onKeyDown={handleKeyDown}
          className="w-full border border-blue-500 px-2 py-1 text-sm focus:outline-none"
        >
          <option value="">Select an option...</option>
          {options.map((opt: any) => (
            <option key={opt.id} value={opt.id}>
              {opt.label}
            </option>
          ))}
        </select>
      );

    case "MULTI_SELECT":
      const multiOptions = fieldConfig?.options ?? [];
      const selectedIds = Array.isArray(value) ? value : [];

      return (
        <div className="border border-blue-500 p-2">
          <div className="mb-2 flex flex-wrap gap-1">
            {selectedIds.map((id: string) => {
              const opt = multiOptions.find((o: any) => o.id === id);
              if (!opt) return null;
              const colorConfig = SELECT_COLORS.find((c) => c.value === opt.color);
              return (
                <span
                  key={id}
                  className="inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs font-medium"
                  style={{
                    backgroundColor: colorConfig?.bg,
                    color: colorConfig?.text,
                  }}
                >
                  {opt.label}
                  <button
                    onClick={() => {
                      const newValue = selectedIds.filter((v: string) => v !== id);
                      setValue(newValue.length > 0 ? newValue : null);
                    }}
                    className="hover:opacity-70"
                  >
                    ×
                  </button>
                </span>
              );
            })}
          </div>
          <select
            onChange={(e) => {
              if (e.target.value) {
                const newValue = selectedIds.includes(e.target.value)
                  ? selectedIds
                  : [...selectedIds, e.target.value];
                setValue(newValue);
                e.target.value = "";
              }
            }}
            onBlur={handleSave}
            className="w-full text-sm focus:outline-none"
          >
            <option value="">Add an option...</option>
            {multiOptions
              .filter((opt: any) => !selectedIds.includes(opt.id))
              .map((opt: any) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
          </select>
        </div>
      );

    case "ATTACHMENT":
      const maxFiles = fieldConfig?.maxFiles ?? 10;
      const maxSizePerFile = fieldConfig?.maxSizePerFile ?? 10 * 1024 * 1024;

      return (
        <div className="border border-blue-500 p-2">
          <FileUpload
            value={value}
            onChange={(files) => {
              setValue(files);
              onSave(files);
            }}
            maxFiles={maxFiles}
            maxSizePerFile={maxSizePerFile}
          />
        </div>
      );

    default:
      return (
        <input
          ref={inputRef as React.RefObject<HTMLInputElement>}
          type="text"
          value={value ?? ""}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleSave}
          className="w-full border border-blue-500 px-2 py-1 text-sm focus:outline-none"
        />
      );
  }
}
