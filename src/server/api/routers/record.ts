import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const recordRouter = createTRPCRouter({
    getByTableId: publicProcedure
    .input(
    z.object({
        tableId: z.string(),
        limit: z.number().min(1).max(100).default(50),
        cursor: z.string().optional(),
        viewId: z.string().optional(), // Add viewId for filtering/sorting
    }),
    )
    .query(async ({ ctx, input }) => {
    const { tableId, limit, cursor, viewId } = input;

    // Fetch all records with cells first
    const allRecords = await ctx.db.record.findMany({
        where: { tableId },
        include: {
        cells: {
            include: {
            field: true,
            },
        },
        },
    });

    let filteredRecords = allRecords;

    // Apply view filters and sorts if viewId is provided
    if (viewId) {
        const view = await ctx.db.view.findUnique({
        where: { id: viewId },
        include: {
            filters: {
            orderBy: { order: "asc" },
            include: { field: true },
            },
            sorts: {
            orderBy: { order: "asc" },
            include: { field: true },
            },
        },
        });

        if (view) {
        // Apply filters
        if (view.filters.length > 0) {
            filteredRecords = filteredRecords.filter((record) => {
            // All filters must pass (AND logic)
            return view.filters.every((filter) => {
                const cell = record.cells.find((c) => c.fieldId === filter.fieldId);
                const cellValue = cell?.value;
                let filterValue = filter.value;
                const fieldType = filter.field?.type;

                // Convert filter value to match field type
                if (filterValue !== null && filterValue !== undefined) {
                  if (fieldType === "NUMBER" && typeof filterValue === "string") {
                    filterValue = Number(filterValue);
                  } else if (fieldType === "CHECKBOX" && typeof filterValue === "string") {
                    filterValue = filterValue === "true" || filterValue === "1";
                  }
                }

                switch (filter.operator) {
                case "EQUALS":
                    return cellValue === filterValue;
                case "NOT_EQUALS":
                    return cellValue !== filterValue;
                case "CONTAINS":
                    return (
                    typeof cellValue === "string" &&
                    typeof filterValue === "string" &&
                    cellValue.toLowerCase().includes(filterValue.toLowerCase())
                    );
                case "NOT_CONTAINS":
                    return (
                    typeof cellValue === "string" &&
                    typeof filterValue === "string" &&
                    !cellValue.toLowerCase().includes(filterValue.toLowerCase())
                    );
                case "GREATER_THAN":
                    return (
                    typeof cellValue === "number" &&
                    typeof filterValue === "number" &&
                    cellValue > filterValue
                    );
                case "LESS_THAN":
                    return (
                    typeof cellValue === "number" &&
                    typeof filterValue === "number" &&
                    cellValue < filterValue
                    );
                case "IS_EMPTY":
                    return cellValue === null || cellValue === undefined || cellValue === "";
                case "IS_NOT_EMPTY":
                    return cellValue !== null && cellValue !== undefined && cellValue !== "";
                default:
                    return true;
                }
            });
            });
        }

        // Apply sorts
        if (view.sorts.length > 0) {
            filteredRecords.sort((a, b) => {
            for (const sort of view.sorts) {
                const aCell = a.cells.find((c) => c.fieldId === sort.fieldId);
                const bCell = b.cells.find((c) => c.fieldId === sort.fieldId);
                const aValue = aCell?.value;
                const bValue = bCell?.value;

                // Handle null/undefined values - always sort to bottom
                if (aValue === null || aValue === undefined) return 1;
                if (bValue === null || bValue === undefined) return -1;

                let comparison = 0;
                const fieldType = sort.field?.type;

                // Sort based on field type
                if (fieldType === "DATE") {
                // Parse as dates
                const aDate = new Date(aValue as string).getTime();
                const bDate = new Date(bValue as string).getTime();
                comparison = aDate - bDate;
                } else if (fieldType === "NUMBER") {
                // Numeric comparison
                comparison = (aValue as number) - (bValue as number);
                } else if (fieldType === "CHECKBOX") {
                // Boolean comparison (true first when ascending)
                comparison = (aValue ? 1 : 0) - (bValue ? 1 : 0);
                } else {
                // String comparison for TEXT, SELECT, etc.
                const aStr = String(aValue);
                const bStr = String(bValue);
                comparison = aStr.localeCompare(bStr);
                }

                if (comparison !== 0) {
                return sort.direction === "ASC" ? comparison : -comparison;
                }
            }
            return 0;
            });
        }
        }
    }

    // Apply default order if no sorts applied
    if (!viewId || !filteredRecords.length) {
        filteredRecords.sort((a, b) => a.order - b.order);
    }

    // Apply cursor-based pagination
    let startIndex = 0;
    if (cursor) {
        const cursorIndex = filteredRecords.findIndex((r) => r.id === cursor);
        if (cursorIndex !== -1) {
        startIndex = cursorIndex + 1;
        }
    }

    const paginatedRecords = filteredRecords.slice(startIndex, startIndex + limit + 1);

    let nextCursor: string | undefined = undefined;
    if (paginatedRecords.length > limit) {
        const nextItem = paginatedRecords.pop();
        nextCursor = nextItem!.id;
    }

    return {
        items: paginatedRecords,
        nextCursor,
    };
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
