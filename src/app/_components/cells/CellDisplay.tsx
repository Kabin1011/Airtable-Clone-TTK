"use client";

import type { FieldType } from "../../../../generated/prisma";
import { formatFieldValue, SELECT_COLORS } from "~/lib/fieldTypes";

interface CellDisplayProps {
  value: any;
  fieldType: FieldType;
  fieldConfig?: any;
}

export function CellDisplay({ value, fieldType, fieldConfig }: CellDisplayProps) {
  if (value === null || value === undefined || value === "") {
    return <span className="text-gray-400">—</span>;
  }

  switch (fieldType) {
    case "CHECKBOX":
      return (
        <div className="flex items-center justify-center">
          {value ? (
            <span className="text-green-600">✓</span>
          ) : (
            <span className="text-gray-300">✗</span>
          )}
        </div>
      );

    case "SELECT":
      const option = fieldConfig?.options?.find((o: any) => o.id === value);
      if (!option) return <span className="text-gray-400">{value}</span>;

      const colorConfig = SELECT_COLORS.find((c) => c.value === option.color);
      return (
        <span
          className="inline-block rounded px-2 py-0.5 text-xs font-medium"
          style={{
            backgroundColor: colorConfig?.bg ?? "#E5E7EB",
            color: colorConfig?.text ?? "#1F2937",
          }}
        >
          {option.label}
        </span>
      );

    case "MULTI_SELECT":
      if (!Array.isArray(value) || value.length === 0) {
        return <span className="text-gray-400">—</span>;
      }

      return (
        <div className="flex flex-wrap gap-1">
          {value.map((id: string) => {
            const opt = fieldConfig?.options?.find((o: any) => o.id === id);
            if (!opt) return null;

            const colorConfig = SELECT_COLORS.find((c) => c.value === opt.color);
            return (
              <span
                key={id}
                className="inline-block rounded px-2 py-0.5 text-xs font-medium"
                style={{
                  backgroundColor: colorConfig?.bg ?? "#E5E7EB",
                  color: colorConfig?.text ?? "#1F2937",
                }}
              >
                {opt.label}
              </span>
            );
          })}
        </div>
      );

    case "URL":
      return (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
          onClick={(e) => e.stopPropagation()}
        >
          {value}
        </a>
      );

    case "EMAIL":
      return (
        <a
          href={`mailto:${value}`}
          className="text-blue-600 hover:underline"
          onClick={(e) => e.stopPropagation()}
        >
          {value}
        </a>
      );

    case "PHONE":
      return (
        <a
          href={`tel:${value}`}
          className="text-blue-600 hover:underline"
          onClick={(e) => e.stopPropagation()}
        >
          {value}
        </a>
      );

    case "DATE":
      const date = new Date(value);
      const includeTime = fieldConfig?.includeTime ?? false;

      return (
        <span className="text-gray-900">
          {includeTime
            ? date.toLocaleString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })
            : date.toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
        </span>
      );

    case "NUMBER":
      const num = Number(value);
      const precision = fieldConfig?.precision ?? 0;
      const format = fieldConfig?.format ?? "decimal";

      let formattedNumber = "";
      if (format === "currency") {
        const symbol = fieldConfig?.currencySymbol ?? "$";
        formattedNumber = `${symbol}${num.toFixed(precision)}`;
      } else if (format === "percent") {
        formattedNumber = `${(num * 100).toFixed(precision)}%`;
      } else {
        formattedNumber = num.toFixed(precision);
      }

      return <span className="font-mono text-gray-900">{formattedNumber}</span>;

    case "LONG_TEXT":
      return (
        <div className="max-h-20 overflow-auto whitespace-pre-wrap text-sm text-gray-900">
          {value}
        </div>
      );

    case "ATTACHMENT":
      if (!Array.isArray(value) || value.length === 0) {
        return <span className="text-gray-400">—</span>;
      }
      return (
        <div className="flex flex-wrap gap-1">
          {value.map((file: any, index: number) => (
            <a
              key={index}
              href={file.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded bg-blue-50 px-2 py-1 text-xs text-blue-700 hover:bg-blue-100"
              onClick={(e) => e.stopPropagation()}
              title={file.name}
            >
              <span>📎</span>
              <span className="max-w-[100px] truncate">{file.name}</span>
            </a>
          ))}
        </div>
      );

    default:
      return <span className="text-gray-900">{formatFieldValue(value, fieldType, fieldConfig)}</span>;
  }
}
