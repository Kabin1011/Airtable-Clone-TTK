import { z } from "zod";
import { Prisma, type FieldType } from "../../../../generated/prisma";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import type { db as Db } from "~/server/db";

type FilterWithField = {
  fieldId: string;
  operator: string;
  value: Prisma.JsonValue;
  field: { type: FieldType } | null;
};

type SortWithField = {
  fieldId: string;
  direction: string;
  field: { type: FieldType } | null;
};

// Builds a SQL condition (referencing the outer "r" Record alias) that mirrors
// the semantics of the previous in-memory filter logic, but runs entirely in Postgres.
function buildFilterCondition(filter: FilterWithField): Prisma.Sql {
  const fieldType = filter.field?.type;
  let value: Prisma.JsonValue = filter.value;

  if (value !== null && value !== undefined) {
    if (fieldType === "NUMBER" && typeof value === "string") {
      value = Number(value);
    } else if (fieldType === "CHECKBOX" && typeof value === "string") {
      value = value === "true" || value === "1";
    }
  }

  const hasCell = Prisma.sql`SELECT 1 FROM "Cell" c WHERE c."recordId" = r.id AND c."fieldId" = ${filter.fieldId}`;

  switch (filter.operator) {
    case "EQUALS":
      if (value === null || value === undefined) return Prisma.sql`TRUE`;
      return Prisma.sql`EXISTS (${hasCell} AND c.value = ${JSON.stringify(value)}::jsonb)`;
    case "NOT_EQUALS":
      if (value === null || value === undefined) return Prisma.sql`TRUE`;
      return Prisma.sql`NOT EXISTS (${hasCell} AND c.value = ${JSON.stringify(value)}::jsonb)`;
    case "CONTAINS":
      if (typeof value !== "string" || value === "") return Prisma.sql`FALSE`;
      return Prisma.sql`EXISTS (${hasCell} AND jsonb_typeof(c.value) = 'string' AND strpos(lower(c.value #>> '{}'), lower(${value})) > 0)`;
    case "NOT_CONTAINS":
      if (typeof value !== "string" || value === "") return Prisma.sql`TRUE`;
      return Prisma.sql`NOT EXISTS (${hasCell} AND jsonb_typeof(c.value) = 'string' AND strpos(lower(c.value #>> '{}'), lower(${value})) > 0)`;
    case "GREATER_THAN":
      if (typeof value !== "number" || Number.isNaN(value)) return Prisma.sql`FALSE`;
      return Prisma.sql`EXISTS (${hasCell} AND jsonb_typeof(c.value) = 'number' AND (c.value #>> '{}')::numeric > ${value})`;
    case "LESS_THAN":
      if (typeof value !== "number" || Number.isNaN(value)) return Prisma.sql`FALSE`;
      return Prisma.sql`EXISTS (${hasCell} AND jsonb_typeof(c.value) = 'number' AND (c.value #>> '{}')::numeric < ${value})`;
    case "IS_EMPTY":
      return Prisma.sql`NOT EXISTS (${hasCell} AND c.value IS NOT NULL AND c.value <> 'null'::jsonb AND c.value <> '""'::jsonb)`;
    case "IS_NOT_EMPTY":
      return Prisma.sql`EXISTS (${hasCell} AND c.value IS NOT NULL AND c.value <> 'null'::jsonb AND c.value <> '""'::jsonb)`;
    default:
      return Prisma.sql`TRUE`;
  }
}

// Builds a LEFT JOIN + ORDER BY expression for one sort, using a unique alias
// so multiple sorts on different fields don't collide.
function buildSortJoinAndExpr(sort: SortWithField, alias: string): { join: Prisma.Sql; orderExpr: Prisma.Sql } {
  const fieldType = sort.field?.type;
  const aliasIdent = Prisma.raw(`"${alias}"`);

  const join = Prisma.sql`LEFT JOIN "Cell" ${aliasIdent} ON ${aliasIdent}."recordId" = r.id AND ${aliasIdent}."fieldId" = ${sort.fieldId}`;

  const rawText = Prisma.sql`NULLIF(${aliasIdent}.value #>> '{}', '')`;

  let valueExpr: Prisma.Sql;
  if (fieldType === "DATE") {
    // Guard the cast so a malformed date string doesn't fail the whole query.
    valueExpr = Prisma.sql`(CASE WHEN ${rawText} ~ '^\\d{4}-\\d{2}-\\d{2}' THEN (${rawText})::timestamptz ELSE NULL END)`;
  } else if (fieldType === "NUMBER") {
    valueExpr = Prisma.sql`(CASE WHEN ${rawText} ~ '^-?\\d+(\\.\\d+)?$' THEN (${rawText})::numeric ELSE NULL END)`;
  } else if (fieldType === "CHECKBOX") {
    valueExpr = Prisma.sql`(CASE WHEN ${rawText} IN ('true','false') THEN (${rawText})::boolean ELSE NULL END)`;
  } else {
    valueExpr = rawText;
  }

  const dir = sort.direction === "DESC" ? Prisma.sql`DESC` : Prisma.sql`ASC`;
  // Nulls always sort last, regardless of direction, matching the previous behavior.
  const orderExpr = Prisma.sql`${valueExpr} ${dir} NULLS LAST`;
  return { join, orderExpr };
}

// Lean row shape for the grid: cells carry only what the grid renders. The
// grid already has every Field from field.getByTableId, so shipping the full
// Field row inside every cell (as getByTableId does) is pure payload bloat.
export type GridCell = { fieldId: string; value: Prisma.JsonValue };
export type GridRow = { id: string; order: number; cells: GridCell[] };

async function loadViewConfig(db: typeof Db, viewId: string | undefined) {
    if (!viewId) return null;
    return db.view.findUnique({
        where: { id: viewId },
        include: {
            filters: { orderBy: { order: "asc" }, include: { field: true } },
            sorts: { orderBy: { order: "asc" }, include: { field: true } },
        },
    });
}

function buildWhereClause(tableId: string, filters: FilterWithField[]): Prisma.Sql {
    return Prisma.join(
        [Prisma.sql`r."tableId" = ${tableId}`, ...filters.map((f) => buildFilterCondition(f))],
        " AND ",
    );
}

// Wraps a page subquery (which must yield `id` and a `rn` sort key) and
// attaches each row's cells as one jsonb array, so a page is a single round
// trip. The subquery carries the LIMIT, which stops Postgres flattening it, so
// the per-row cell aggregation only runs for the rows actually returned rather
// than for every row skipped over on the way to the offset.
function selectRowsWithCells(pageQuery: Prisma.Sql): Prisma.Sql {
    return Prisma.sql`
        SELECT p.id, p."order",
            COALESCE(
                (SELECT jsonb_agg(jsonb_build_object('fieldId', c."fieldId", 'value', c.value))
                 FROM "Cell" c WHERE c."recordId" = p.id),
                '[]'::jsonb
            ) AS cells
        FROM (${pageQuery}) p
        ORDER BY p.rn
    `;
}

export const recordRouter = createTRPCRouter({
    // Random-access page fetch for the virtualized grid: rows
    // [offset, offset + limit) of the view's filtered + sorted result set.
    getRows: publicProcedure
    .input(
        z.object({
            tableId: z.string(),
            viewId: z.string().optional(),
            offset: z.number().int().min(0),
            limit: z.number().int().min(1).max(500),
        }),
    )
    .query(async ({ ctx, input }): Promise<GridRow[]> => {
        const { tableId, viewId, offset, limit } = input;
        const view = await loadViewConfig(ctx.db, viewId);
        const filters = view?.filters ?? [];
        const sorts = view?.sorts ?? [];

        if (filters.length === 0 && sorts.length === 0) {
            // Seek, don't skip: find the "order" value at the offset with an
            // index-only scan over (tableId, order), then range-scan forward
            // from it. A plain OFFSET would fetch every skipped row from the
            // heap, so deep pages (row 99,900 of 100K) got linearly slower.
            // Relies on "order" being unique within a table, which create /
            // bulkCreate guarantee by always allocating max(order) + 1 upward.
            return ctx.db.$queryRaw<GridRow[]>(selectRowsWithCells(Prisma.sql`
                SELECT r.id, r."order", r."order" AS rn
                FROM "Record" r
                WHERE r."tableId" = ${tableId}
                  AND r."order" >= (
                      SELECT "order" FROM "Record"
                      WHERE "tableId" = ${tableId}
                      ORDER BY "order"
                      OFFSET ${offset} LIMIT 1
                  )
                ORDER BY r."order"
                LIMIT ${limit}
            `));
        }

        // Filtered/sorted path: the sort needs the whole filtered set ordered
        // anyway, so OFFSET is unavoidable here; rn preserves that order
        // through the outer cell-aggregating query.
        const sortJoinsAndExprs = sorts.map((s, i) => buildSortJoinAndExpr(s, `s${i}`));
        const joinClause = sortJoinsAndExprs.length
            ? Prisma.join(sortJoinsAndExprs.map((j) => j.join), " ")
            : Prisma.empty;
        const orderByClause = Prisma.join(
            [...sortJoinsAndExprs.map((j) => j.orderExpr), Prisma.sql`r."order" ASC`],
            ", ",
        );

        return ctx.db.$queryRaw<GridRow[]>(selectRowsWithCells(Prisma.sql`
            SELECT r.id, r."order", row_number() OVER (ORDER BY ${orderByClause}) AS rn
            FROM "Record" r
            ${joinClause}
            WHERE ${buildWhereClause(tableId, filters)}
            ORDER BY ${orderByClause}
            LIMIT ${limit}
            OFFSET ${offset}
        `));
    }),

    // Row count after the view's filters, which sizes the grid's scrollbar.
    countForView: publicProcedure
    .input(z.object({ tableId: z.string(), viewId: z.string().optional() }))
    .query(async ({ ctx, input }) => {
        const view = await loadViewConfig(ctx.db, input.viewId);
        const filters = view?.filters ?? [];
        if (filters.length === 0) {
            return ctx.db.record.count({ where: { tableId: input.tableId } });
        }
        const [row] = await ctx.db.$queryRaw<{ count: number }[]>(Prisma.sql`
            SELECT COUNT(*)::int AS count FROM "Record" r
            WHERE ${buildWhereClause(input.tableId, filters)}
        `);
        return row?.count ?? 0;
    }),

    getByTableId: publicProcedure
    .input(
    z.object({
        tableId: z.string(),
        limit: z.number().min(1).max(100).default(50),
        cursor: z.number().int().min(0).optional(), // offset into the ordered/filtered result set
        viewId: z.string().optional(), // Add viewId for filtering/sorting
    }),
    )
    .query(async ({ ctx, input }) => {
    const { tableId, limit, viewId } = input;
    const offset = input.cursor ?? 0;

    const view = viewId
        ? await ctx.db.view.findUnique({
            where: { id: viewId },
            include: {
              filters: { orderBy: { order: "asc" }, include: { field: true } },
              sorts: { orderBy: { order: "asc" }, include: { field: true } },
            },
          })
        : null;

    const hasFilters = !!view && view.filters.length > 0;
    const hasSorts = !!view && view.sorts.length > 0;

    // Fast path: no filters/sorts to push down, a single indexed query does the job.
    if (!hasFilters && !hasSorts) {
        const rows = await ctx.db.record.findMany({
            where: { tableId },
            orderBy: { order: "asc" },
            skip: offset,
            take: limit + 1,
            include: { cells: { include: { field: true } } },
        });

        let nextCursor: number | undefined = undefined;
        if (rows.length > limit) {
            rows.pop();
            nextCursor = offset + limit;
        }

        return { items: rows, nextCursor };
    }

    // Filtered/sorted path: resolve just the ordered record IDs for this page in SQL,
    // then fetch full records (with cells) for only those IDs.
    const filterConditions = view!.filters.map((f) => buildFilterCondition(f));
    const sortAliases = view!.sorts.map((_, i) => `s${i}`);
    const sortJoinsAndExprs = view!.sorts.map((s, i) => buildSortJoinAndExpr(s, sortAliases[i]!));

    const whereClause = Prisma.join(
        [Prisma.sql`r."tableId" = ${tableId}`, ...filterConditions],
        " AND ",
    );
    const joinClause = sortJoinsAndExprs.length
        ? Prisma.join(sortJoinsAndExprs.map((j) => j.join), " ")
        : Prisma.empty;
    const orderByClause = Prisma.join(
        [...sortJoinsAndExprs.map((j) => j.orderExpr), Prisma.sql`r."order" ASC`],
        ", ",
    );

    const idRows = await ctx.db.$queryRaw<{ id: string }[]>(Prisma.sql`
        SELECT r.id
        FROM "Record" r
        ${joinClause}
        WHERE ${whereClause}
        ORDER BY ${orderByClause}
        LIMIT ${limit + 1}
        OFFSET ${offset}
    `);

    let ids = idRows.map((r) => r.id);
    let nextCursor: number | undefined = undefined;
    if (ids.length > limit) {
        ids = ids.slice(0, limit);
        nextCursor = offset + limit;
    }

    const unorderedRecords = ids.length
        ? await ctx.db.record.findMany({
            where: { id: { in: ids } },
            include: { cells: { include: { field: true } } },
          })
        : [];

    const byId = new Map(unorderedRecords.map((rec) => [rec.id, rec]));
    const items = ids.map((id) => byId.get(id)).filter((r): r is NonNullable<typeof r> => !!r);

    return { items, nextCursor };
    }),


    create: publicProcedure
    .input(
        z.object({
        tableId: z.string(),
        }),
    )
    .mutation(async ({ ctx, input }) => {
        // Find the highest order number
        const lastRecord = await ctx.db.record.findFirst({
        where: { tableId: input.tableId },
        orderBy: { order: "desc" },
        select: { order: true },
        });

        return ctx.db.record.create({
        data: {
            tableId: input.tableId,
            order: (lastRecord?.order ?? -1) + 1,
        },
        });
    }),


    bulkCreate: publicProcedure
    .input(
        z.object({
        tableId: z.string(),
        count: z.number().min(1).max(100000),
        }),
    )
    .mutation(async ({ ctx, input }) => {
        const { tableId, count } = input;

        // Get highest order
        const lastRecord = await ctx.db.record.findFirst({
        where: { tableId },
        orderBy: { order: "desc" },
        select: { order: true },
        });

        const startOrder = (lastRecord?.order ?? -1) + 1;

        // Generate array of records
        const records = Array.from({ length: count }, (_, i) => ({
        tableId,
        order: startOrder + i,
        }));

        // Bulk insert
        return ctx.db.record.createMany({
        data: records,
        });
    }),


    delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
        return ctx.db.record.delete({
        where: { id: input.id },
        });
    }),

    // Get total count of records in a table
    count: publicProcedure
    .input(z.object({ tableId: z.string() }))
    .query(async ({ ctx, input }) => {
        return ctx.db.record.count({
        where: { tableId: input.tableId },
        });
    }),

}); 
