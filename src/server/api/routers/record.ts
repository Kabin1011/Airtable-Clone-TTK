import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const recordRouter = createTRPCRouter({
    getByTableId: publicProcedure
    .input(
    z.object({
        tableId: z.string(),
        limit: z.number().min(1).max(100).default(50),
        cursor: z.string().optional(),
    }),
    )
    .query(async ({ ctx, input }) => {
    const { tableId, limit, cursor } = input;

    const items = await ctx.db.record.findMany({
        take: limit + 1, 
        where: { tableId },
        cursor: cursor ? { id: cursor } : undefined, 
        orderBy: { order: "asc" },
        include: {
        cells: {
            include: {
            field: true, // Include field info for each cell
            },
        },
        },
    });

    let nextCursor: string | undefined = undefined;
    if (items.length > limit) {
        const nextItem = items.pop(); // Remove extra item
        nextCursor = nextItem!.id; // Use its ID as next cursor
    }

    return {
        items,
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
