// Pure Excel parsing, shared by the import worker (excelImport.worker.ts) and
// the main-thread fallback in excelUtils.ts. Kept separate from excelUtils so
// the worker doesn't import the module that constructs it: that cycle made
// Turbopack hang compiling any route that used importFromExcel.
import * as XLSX from 'xlsx';
import type { FieldType } from "../../generated/prisma";

export interface ExcelImportResult {
  fields: Array<{
    name: string;
    type: FieldType;
  }>;
  records: Array<Record<string, any>>;
}

export type ExcelWorkerResponse =
  | { ok: true; result: ExcelImportResult }
  | { ok: false; error: string };

/**
 * Parse an .xlsx/.xls/.csv file's bytes into fields (with inferred types)
 * and records keyed by field name. Pure and synchronous, so it can run in a
 * worker or on the main thread.
 */
export function parseExcelWorkbook(data: ArrayBuffer): ExcelImportResult {
  // Read the workbook
  const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });

  // Get the first sheet
  const firstSheetName = workbook.SheetNames[0];
  if (!firstSheetName) throw new Error('No sheets found in Excel file');

  const worksheet = workbook.Sheets[firstSheetName];
  if (!worksheet) throw new Error('Failed to read worksheet');

  // Convert sheet to JSON
  const jsonData = XLSX.utils.sheet_to_json(worksheet, {
    header: 1, // Use array of arrays format
    defval: null, // Default value for empty cells
  }) as any[][];

  if (jsonData.length === 0) throw new Error('Excel file is empty');

  // First row is headers
  const headers = jsonData[0] as string[];
  if (!headers || headers.length === 0) throw new Error('No headers found in Excel file');

  // Infer field types from the first few data rows
  const dataRows = jsonData.slice(1);
  const fields = headers.map((header, index) => {
    const fieldType = inferFieldType(dataRows, index);
    return {
      name: String(header || `Column ${index + 1}`),
      type: fieldType,
    };
  });

  // Convert data rows to records
  const records = dataRows.map((row) => {
    const record: Record<string, any> = {};
    headers.forEach((header, index) => {
      const fieldName = String(header || `Column ${index + 1}`);
      record[fieldName] = row[index] ?? null;
    });
    return record;
  });

  return { fields, records };
}

/**
 * Infer field type from sample data
 */
function inferFieldType(rows: any[][], columnIndex: number): FieldType {
  const samples = rows
    .slice(0, 10) // Check first 10 rows
    .map((row) => row[columnIndex])
    .filter((val) => val !== null && val !== undefined && val !== '');

  if (samples.length === 0) {
    return 'TEXT';
  }

  // Check if all values are numbers
  const allNumbers = samples.every((val) => {
    const num = Number(val);
    return !isNaN(num) && isFinite(num);
  });

  if (allNumbers) {
    return 'NUMBER';
  }

  // Check if all values are valid dates
  const allDates = samples.every((val) => {
    const date = new Date(val);
    return date instanceof Date && !isNaN(date.getTime());
  });

  if (allDates) {
    return 'DATE';
  }

  // Check if values look like URLs
  const allUrls = samples.every((val) => {
    const str = String(val);
    return str.startsWith('http://') || str.startsWith('https://');
  });

  if (allUrls) {
    return 'URL';
  }

  // Check if values look like emails
  const allEmails = samples.every((val) => {
    const str = String(val);
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
  });

  if (allEmails) {
    return 'EMAIL';
  }

  // Check if values are checkboxes (boolean-like)
  const allCheckboxes = samples.every((val) => {
    const str = String(val).toLowerCase();
    return ['true', 'false', 'yes', 'no', '1', '0', 'checked', 'unchecked'].includes(str);
  });

  if (allCheckboxes) {
    return 'CHECKBOX';
  }

  // Default to text for long content, otherwise single line text
  const hasLongText = samples.some((val) => String(val).length > 200);
  return hasLongText ? 'LONG_TEXT' : 'TEXT';
}
