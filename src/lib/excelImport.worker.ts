// Web Worker that parses an Excel file off the main thread. Started by
// importFromExcel in excelUtils.ts; receives the file's bytes and replies
// with an ExcelWorkerResponse.
import { parseExcelWorkbook, type ExcelWorkerResponse } from "./excelParse";

// tsconfig only includes the DOM lib, so type the worker scope by hand.
const workerScope = self as unknown as {
  onmessage: ((e: MessageEvent<ArrayBuffer>) => void) | null;
  postMessage: (message: ExcelWorkerResponse) => void;
};

workerScope.onmessage = (e) => {
  try {
    workerScope.postMessage({ ok: true, result: parseExcelWorkbook(e.data) });
  } catch (error) {
    workerScope.postMessage({ ok: false, error: error instanceof Error ? error.message : String(error) });
  }
};
