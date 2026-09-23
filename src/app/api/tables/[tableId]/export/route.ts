import * as XLSX from "xlsx";
import { buildExportWorkbook } from "~/lib/excelExport";
import { loadViewConfig, queryViewRowValues } from "~/server/api/routers/record";
import { db } from "~/server/db";

// Rows fetched per query. The grid pages at 100 rows; an export reads the
// whole view, so larger chunks mean far fewer round trips (and, for sorted
// views, far fewer re-sorts of the filtered set).
const CHUNK_SIZE = 10_000;

// Size of each piece of the streamed response body.
const STREAM_CHUNK_BYTES = 256 * 1024;

// A 100K-row export takes ~10-15s; leave generous headroom.
export const maxDuration = 120;

/**
 * GET /api/tables/:tableId/export?viewId=...
 *
 * Downloads the view's full result set as .xlsx: every row that passes the
 * view's filters, in its sort order, with its visible fields. The grid only
 * ever holds the few pages around the viewport, so this has to run
 * server-side rather than from the rows the client has loaded.
 */
export async function GET(request: Request, { params }: { params: Promise<{ tableId: string }> }) {
  const { tableId } = await params;
  const viewId = new URL(request.url).searchParams.get("viewId") ?? undefined;

  const table = await db.table.findUnique({ where: { id: tableId }, select: { name: true } });
  if (!table) return new Response("Table not found", { status: 404 });

  const view = await loadViewConfig(db, viewId);
  if (viewId && view?.tableId !== tableId) return new Response("View not found", { status: 404 });

  const hiddenFieldIds = new Set(view?.hiddenFields.map((hf) => hf.fieldId) ?? []);
  const fields = (
    await db.field.findMany({
      where: { tableId },
      orderBy: { order: "asc" },
      select: { id: true, name: true, type: true, config: true },
    })
  ).filter((field) => !hiddenFieldIds.has(field.id));

  // Read every chunk from one snapshot, so edits landing mid-export can't
  // shift offsets and duplicate or skip rows between chunks.
  const rows = await db.$transaction(
    async (tx) => {
      const collected: unknown[][] = [];
      for (let offset = 0; ; offset += CHUNK_SIZE) {
        const chunk = await queryViewRowValues(tx, tableId, view, offset, CHUNK_SIZE);
        for (const record of chunk) {
          collected.push(fields.map((field) => record.values[field.id] ?? null));
        }
        if (chunk.length < CHUNK_SIZE) return collected;
      }
    },
    { isolationLevel: "RepeatableRead", timeout: 100_000 },
  );

  const workbook = buildExportWorkbook(fields, rows);
  // Zip-compressed: SheetJS writes stored (uncompressed) entries by default,
  // which is ~2.5x larger for 100K rows (55MB vs 22MB).
  const file = XLSX.write(workbook, { type: "buffer", bookType: "xlsx", compression: true }) as Buffer;

  // Streamed rather than sent as one body: Vercel caps non-streaming function
  // responses at 4.5MB, and a large export is well past that.
  let position = 0;
  const body = new ReadableStream<Uint8Array>({
    pull(controller) {
      if (position >= file.length) {
        controller.close();
        return;
      }
      controller.enqueue(file.subarray(position, position + STREAM_CHUNK_BYTES));
      position += STREAM_CHUNK_BYTES;
    },
  });

  const filename = `${table.name}_${new Date().toISOString().slice(0, 10)}.xlsx`;
  // Plain filename for old clients (ASCII only, no quotes), UTF-8 one for the rest.
  const asciiFilename = filename.replace(/[^\x20-\x7E]|"/g, "_");
  return new Response(body, {
    headers: {
      "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": `attachment; filename="${asciiFilename}"; filename*=UTF-8''${encodeURIComponent(filename)}`,
      "Cache-Control": "no-store",
    },
  });
}
