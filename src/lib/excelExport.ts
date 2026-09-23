// Builds the .xlsx workbook for a table export. Used server-side by the
// export route (src/app/api/tables/[tableId]/export/route.ts), which streams the
// view's full result set through it. Kept free of browser-only code so it can
// be imported on the server.
import * as XLSX from "xlsx";
import type { FieldType } from "../../generated/prisma";

export type ExportField = { name: string; type: FieldType; config?: unknown };

const MIN_COLUMN_WIDTH = 10;
const MAX_COLUMN_WIDTH = 50;
const DATE_FORMAT = "yyyy-mm-dd";
const DATE_TIME_FORMAT = "yyyy-mm-dd hh:mm";

// Text form of an arbitrary cell value (objects as JSON, not "[object Object]").
function toText(value: unknown): string {
  if (value === null || value === undefined) return "";
  if (typeof value === "object") return JSON.stringify(value);
  return String(value as string | number | boolean);
}

function includesTime(field: ExportField): boolean {
  return !!(field.config as { includeTime?: boolean } | null)?.includeTime;
}

// Format a raw cell value for the sheet based on its field type.
function formatExportValue(value: unknown, field: ExportField): unknown {
  switch (field.type) {
    case "DATE": {
      if (!value) return null;
      const date = new Date(value as string);
      // Keep unparseable values as text rather than writing an invalid date.
      if (Number.isNaN(date.getTime())) return toText(value);
      // Excel dates have no time zone, and SheetJS converts a Date using the
      // local time zone of wherever this runs (the server). Rebuild it from
      // the stored UTC parts so the sheet shows the stored calendar date
      // (e.g. 2014-10-08T00:00Z stays Oct 8, not Oct 8 11:00 on an AEDT host).
      return includesTime(field)
        ? new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes())
        : new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
    }
    case "CHECKBOX":
      return value ? "Yes" : "No";
    case "NUMBER":
      return value !== null && value !== undefined ? Number(value) : null;
    case "ATTACHMENT":
      // For attachments, export the URLs
      return Array.isArray(value) ? value.map((v: { url?: string }) => v.url).join(", ") : value;
    case "SELECT":
    case "MULTI_SELECT":
      return Array.isArray(value) ? value.join(", ") : value;
    default:
      return value ?? "";
  }
}

/**
 * Build a single-sheet workbook. `rows` holds raw cell values in the same
 * order as `fields`.
 */
export function buildExportWorkbook(fields: ExportField[], rows: unknown[][]): XLSX.WorkBook {
  const headers = fields.map((field) => field.name);
  const formattedRows = rows.map((row) => fields.map((field, i) => formatExportValue(row[i], field)));

  const worksheet = XLSX.utils.aoa_to_sheet([headers, ...formattedRows], { dateNF: DATE_FORMAT });

  // Date-time fields need a format with the time; dateNF applies to all dates.
  fields.forEach((field, colIndex) => {
    if (field.type !== "DATE" || !includesTime(field)) return;
    for (let rowIndex = 1; rowIndex <= formattedRows.length; rowIndex++) {
      const cell = worksheet[XLSX.utils.encode_cell({ r: rowIndex, c: colIndex })] as XLSX.CellObject | undefined;
      if (cell?.t === "n") cell.z = DATE_TIME_FORMAT;
    }
  });

  // Auto-size columns. A plain loop rather than Math.max(...widths): spreading
  // one argument per row overflows the call stack on large exports.
  worksheet["!cols"] = headers.map((header, colIndex) => {
    let width = Math.max(header.length, MIN_COLUMN_WIDTH);
    for (const row of formattedRows) {
      if (width >= MAX_COLUMN_WIDTH) break;
      const value = row[colIndex];
      const length = value instanceof Date ? 10 : toText(value).length;
      if (length > width) width = length;
    }
    return { wch: Math.min(width, MAX_COLUMN_WIDTH) };
  });

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  return workbook;
}
