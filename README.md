# Airtable Clone

A full-stack spreadsheet–database app modelled on Airtable. It has bases, tables, typed fields, and saved views with filters, sorts and hidden fields. The grid stays smooth on tables of **100,000+ rows**.

Built with **Next.js 15 (App Router) · React 19 · TypeScript · tRPC 11 · Prisma · PostgreSQL · TanStack Table / Virtual / Query · Tailwind CSS 4**, deployed on **Vercel** with **Supabase** (Postgres + Storage).

---

## Contents

- [Features](#features)
- [Architecture](#architecture)
- [Engineering highlights](#engineering-highlights)
- [Data model](#data-model)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Limitations and next steps](#limitations-and-next-steps)

---

## Features

**Workspace**
- Bases → Tables → Fields → Records hierarchy, with create, rename and delete at every level (deletes cascade).

**11 field types**
- Single-line text, long text, number (precision, currency or percent formats), date (optional time), checkbox, single select, multi-select, URL, email, phone, and attachment (Supabase Storage).

**Views**
- Several saved views per table, each with its own **filters**, **multi-level sorts** and **hidden fields**.
- Filter operators: equals, not equals, contains, does not contain, is empty, is not empty, greater than, less than.
- All filtering and sorting runs **in PostgreSQL**, not in the browser.

**Grid editing**
- Spreadsheet-style keyboard navigation: arrow keys, Tab, Enter, and type-to-edit.
- Optimistic updates, with edits batched and auto-saved in the background.
- Keyboard shortcuts: `⌘/Ctrl+N` new record, `⌘/Ctrl+F` filters, `⌘/Ctrl+Shift+S` sorts, `⌘/Ctrl+H` hidden fields, `?` help.

**Excel import and export**
- Import `.xlsx` files. Parsing runs in a **Web Worker**, and field types are inferred from the data.
- Export any view to `.xlsx`, with its filters, sort order and hidden fields applied, built server-side from the full result set.

---

## Architecture

```
┌──────────────────────────── Browser ─────────────────────────────┐
│  TableView (React 19)                                            │
│   ├─ TanStack Virtual  → renders only the rows in the viewport   │
│   ├─ TanStack Query    → one cached query per 100-row page       │
│   ├─ useAutoSave       → batches cell edits, flushes in bulk     │
│   └─ Web Worker        → parses .xlsx files off the main thread  │
└───────────────┬──────────────────────────────────────────────────┘
                │ tRPC (type-safe end to end, superjson)
┌───────────────▼────────────── Next.js server ────────────────────┐
│  tRPC routers: base · table · field · record · cell · view ·     │
│                filter · sort · import                            │
│  Route handlers: /api/tables/:id/export (streamed .xlsx)         │
│                  /api/health (DB liveness)                       │
└───────────────┬──────────────────────────────────────────────────┘
                │ Prisma ORM + parameterised raw SQL
┌───────────────▼──────────────────────────────────────────────────┐
│  PostgreSQL (Supabase)          Supabase Storage (attachments)   │
└──────────────────────────────────────────────────────────────────┘
```

---

## Engineering highlights

These are the problems that took the most work. Each one is documented in the source files linked below.

### 1. Virtualised grid with random-access paging
[`TableView.tsx`](src/app/_components/TableView.tsx)

- The virtualiser is sized to the view's **full row count**, so the scrollbar covers the whole table and any position can be reached directly.
- Rows load as **independent 100-row pages**, each its own React Query entry.
- Pages outside the viewport and a prefetch margin are garbage-collected. Memory stays bounded however far the user scrolls.
- Dragging the scrollbar quickly waits for the jump to settle (about 120 ms) before fetching, so it doesn't request every page it passes.
- Row objects keep their identity across refetches, so memoised rows skip re-rendering and only changed cells repaint.

### 2. Filtering and sorting pushed into SQL
[`routers/record.ts`](src/server/api/routers/record.ts)

- Every view's filters and sorts compile to **parameterised SQL** (`Prisma.sql`), with no string concatenation of user input.
- Cell values are stored as `jsonb`. Sorting casts them by field type (`numeric`, `timestamptz`, `boolean`), with guarded casts so one malformed value can't fail the query. Nulls sort last.
- Each page is fetched in **one round trip**: a subquery selects the page's rows, then `jsonb_agg` attaches their cells.
- **Keyset-style seek on unfiltered views.** Deep pages (for example row 99,900 of 100,000) look up the start position with an index-only scan instead of `OFFSET`, so fetch time doesn't grow with scroll depth.

### 3. Consistent full-view export
[`api/tables/[tableId]/export/route.ts`](src/app/api/tables/[tableId]/export/route.ts)

- The client only holds the pages near the viewport, so the export runs on the server.
- It reads the view in 10,000-row chunks inside a **`REPEATABLE READ` transaction**. Edits made during the export can't shift offsets and duplicate or skip rows.
- The workbook is **streamed** back in 256 KB pieces.
- Any unsaved edits are flushed before the export starts, so the file matches what the user sees.

### 4. Responsive bulk import
[`lib/excelImport.worker.ts`](src/lib/excelImport.worker.ts) · [`routers/import.ts`](src/server/api/routers/import.ts)

- Large sheets can take seconds of CPU to parse. That work runs in a **Web Worker**, so the tab and its progress UI stay responsive. If a worker can't start, it falls back to the main thread.
- Fields, records and cells are written in **one transaction**, so a failed import leaves no partial data behind.

### 5. Batched auto-save with optimistic UI
[`hooks/useAutoSave.ts`](src/hooks/useAutoSave.ts)

- Edits appear immediately and are queued, **de-duplicated per cell**, and written in batches.
- The save timer pauses while a cell is being edited. Pending changes are flushed on unmount and before an export.
- If a save fails, the pending changes are kept rather than silently dropped.

---

## Data model

```
Base ─┬─< Table ─┬─< Field ──┐
      │          ├─< Record ─┼─< Cell  (value: jsonb, unique per field × record)
      │          └─< View ───┼─< Filter
      │                      ├─< Sort
      │                      └─< HiddenField
```

- **Cell values are `jsonb`.** One table stores every field type, and adding a column never needs a schema migration.
- **Composite indexes** (`[tableId, order]`, `[viewId, order]`, and a unique `[fieldId, recordId]`) support the paging and lookup patterns above.
- All child relations use `ON DELETE CASCADE`.

Full schema: [`prisma/schema.prisma`](prisma/schema.prisma)

---

## Project structure

```
src/
├── app/
│   ├── _components/        # BaseList, BaseDetail, TableView (grid), cells/*
│   ├── api/                # Route handlers: tRPC, export, health
│   ├── base/[baseId]/…     # Base and table pages
│   └── test/               # Dev playground (bulk-seeds up to 100K rows)
├── hooks/                  # useAutoSave, useExcelImport, useKeyboardShortcuts, useDebounce
├── lib/                    # Field-type config, Excel parse/export, Supabase storage
├── server/
│   ├── api/routers/        # tRPC routers (one per domain entity)
│   └── db.ts               # Prisma client
└── trpc/                   # Client and server tRPC bindings
prisma/                     # Schema and migrations
```

---

## Getting started

### Prerequisites
- Node.js 20+
- PostgreSQL 14+. Use a local instance, Docker (`./start-database.sh`), or a free Supabase project.

### Setup

```bash
git clone https://github.com/Kabin1011/Airtable-Clone-TTK.git
cd Airtable-Clone-TTK
npm install                 # also runs `prisma generate`

cp .env.example .env        # then fill in your own values
npm run db:migrate          # apply migrations
npm run dev                 # http://localhost:3000
```

### Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `DATABASE_URL` | ✅ | Postgres connection string. Use the pooled URL in production. |
| `DIRECT_URL` | ✅ | Direct, non-pooled connection used for migrations |
| `NEXT_PUBLIC_SUPABASE_URL` | Optional | Supabase project URL for attachment uploads |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Optional | Supabase anon key. Without it, attachment uploads are turned off. |

> Never commit `.env`. Only `.env.example`, which holds placeholder values, is tracked.

To try the app at scale, open `/test` and bulk-generate records into a table.

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server (Turbopack) |
| `npm run build` / `npm start` | Production build and serve |
| `npm run check` | Lint and type-check |
| `npm run db:generate` | Create a new migration (dev) |
| `npm run db:migrate` | Apply migrations (prod) |
| `npm run db:studio` | Open Prisma Studio |
| `npm run format:write` | Format with Prettier |

---

## Deployment

- **Vercel** hosts the Next.js app. The export route sets `maxDuration = 120` for large views.
- **Supabase** provides Postgres, through the connection pooler at runtime and a direct connection for migrations, plus Storage for attachments.
- A **GitHub Actions** workflow ([`.github/workflows/keep-alive.yml`](.github/workflows/keep-alive.yml)) and a Vercel cron both ping `/api/health` every few days, so the free-tier database isn't paused.

---

## Limitations and next steps

- **Authentication.** All procedures are currently public. Next steps are to add NextAuth and scope bases per user.
- **Real-time collaboration.** Subscribing to cell changes (for example with Supabase Realtime) would let several users edit together.
- **Filter indexing.** Adding expression or GIN indexes on `Cell.value` would speed up `contains` and range filters on very large tables.
- **Tests.** Priorities are integration tests for the SQL filter/sort builder and end-to-end tests for grid editing.

---

Bootstrapped with [create-t3-app](https://create.t3.gg/).
