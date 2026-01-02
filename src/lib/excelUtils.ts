import * as XLSX from 'xlsx';
import type { FieldType } from "../../generated/prisma";

export interface ExcelImportResult {
  fields: Array<{
    name: string;
    type: FieldType;
  }>;
  records: Array<Record<string, any>>;
}

/**
 * Import data from an Excel file
 */
export async function importFromExcel(file: File): Promise<ExcelImportResult> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const data = e.target?.result;
        if (!data) {
          reject(new Error('Failed to read file'));
          return;
        }

        // Read the workbook
        const workbook = XLSX.read(data, { type: 'binary' });

        // Get the first sheet
        const firstSheetName = workbook.SheetNames[0];
        if (!firstSheetName) {
          reject(new Error('No sheets found in Excel file'));
          return;
        }

        const worksheet = workbook.Sheets[firstSheetName];
        if (!worksheet) {
          reject(new Error('Failed to read worksheet'));
          return;
        }

        // Convert sheet to JSON
        const jsonData = XLSX.utils.sheet_to_json(worksheet, {
          header: 1, // Use array of arrays format
          defval: null, // Default value for empty cells
        }) as any[][];

        if (jsonData.length === 0) {
          reject(new Error('Excel file is empty'));
          return;
        }

        // First row is headers
        const headers = jsonData[0] as string[];
        if (!headers || headers.length === 0) {
          reject(new Error('No headers found in Excel file'));
          return;
        }

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

        resolve({ fields, records });
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };

    reader.readAsBinaryString(file);
  });
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
