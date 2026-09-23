import * as XLSX from 'xlsx';
import type { FieldType } from "../../generated/prisma";
import { parseExcelWorkbook, type ExcelImportResult, type ExcelWorkerResponse } from './excelParse';

export type { ExcelImportResult } from './excelParse';

/**
 * Import data from an Excel file.
 *
 * Parsing runs in a Web Worker: XLSX.read + sheet_to_json on a large sheet
 * can take seconds of solid CPU, which on the main thread froze the whole
 * tab (including the import progress UI). Falls back to parsing on the main
 * thread if a worker can't be started.
 */
export async function importFromExcel(file: File): Promise<ExcelImportResult> {
  const data = await file.arrayBuffer();
  if (typeof Worker === 'undefined') return parseExcelWorkbook(data);

  let worker: Worker;
  try {
    worker = new Worker(new URL('./excelImport.worker.ts', import.meta.url), { type: 'module' });
  } catch {
    return parseExcelWorkbook(data);
  }

  return new Promise<ExcelImportResult>((resolve, reject) => {
    worker.onmessage = (e: MessageEvent<ExcelWorkerResponse>) => {
      worker.terminate();
      if (e.data.ok) resolve(e.data.result);
      else reject(new Error(e.data.error));
    };
    // The worker script itself failed to load or crashed: parse here instead.
    worker.onerror = (e) => {
      e.preventDefault();
      worker.terminate();
      try {
        resolve(parseExcelWorkbook(data));
      } catch (error) {
        reject(error instanceof Error ? error : new Error(String(error)));
      }
    };
    // Structured-cloned rather than transferred, so the buffer stays usable
    // for the fallback above.
    worker.postMessage(data);
  });
}

/**
 * Export data to Excel file
 */
export function exportToExcel(
  data: Array<Record<string, any>>,
  fields: Array<{ name: string; type: FieldType }>,
  filename: string = 'export.xlsx'
) {
  // Create headers
  const headers = fields.map((field) => field.name);

  // Convert data to array format
  const rows = data.map((record) => {
    return fields.map((field) => {
      const value = record[field.name];

      // Format based on field type
      switch (field.type) {
        case 'DATE':
          return value ? new Date(value) : null;
        case 'CHECKBOX':
          return value ? 'Yes' : 'No';
        case 'NUMBER':
          return value !== null && value !== undefined ? Number(value) : null;
        case 'ATTACHMENT':
          // For attachments, export the URLs
          return Array.isArray(value) ? value.map((v: any) => v.url).join(', ') : value;
        case 'SELECT':
        case 'MULTI_SELECT':
          return Array.isArray(value) ? value.join(', ') : value;
        default:
          return value ?? '';
      }
    });
  });

  // Combine headers and rows
  const worksheetData = [headers, ...rows];

  // Create worksheet
  const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

  // Auto-size columns
  const maxWidths = headers.map((header, colIndex) => {
    const headerWidth = header.length;
    const dataWidths = rows.map((row) => {
      const cellValue = String(row[colIndex] ?? '');
      return cellValue.length;
    });
    return Math.max(headerWidth, ...dataWidths, 10); // Min width of 10
  });

  worksheet['!cols'] = maxWidths.map((width) => ({
    wch: Math.min(width, 50), // Max width of 50
  }));

  // Create workbook
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

  // Generate Excel file and trigger download
  XLSX.writeFile(workbook, filename);
}

/**
 * Convert Excel value to appropriate field type
 */
export function convertExcelValue(value: any, fieldType: FieldType): any {
  if (value === null || value === undefined || value === '') {
    return null;
  }

  switch (fieldType) {
    case 'TEXT':
    case 'LONG_TEXT':
    case 'EMAIL':
    case 'PHONE':
    case 'URL':
      return String(value);

    case 'NUMBER':
      const num = Number(value);
      return isNaN(num) ? null : num;

    case 'CHECKBOX':
      const str = String(value).toLowerCase();
      return ['true', 'yes', '1', 'checked'].includes(str);

    case 'DATE':
      const date = new Date(value);
      return date instanceof Date && !isNaN(date.getTime()) ? date.toISOString() : null;

    case 'SELECT':
      return String(value);

    case 'MULTI_SELECT':
      // Split by comma if it's a string
      if (typeof value === 'string') {
        return value.split(',').map((v) => v.trim()).filter(Boolean);
      }
      return Array.isArray(value) ? value : [String(value)];

    default:
      return value;
  }
}
