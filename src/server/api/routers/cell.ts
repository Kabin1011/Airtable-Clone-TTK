import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const cellRouter = createTRPCRouter({
  // Update or create a single cell (upsert)
  update: publicProcedure
    .input(
      z.object({
        fieldId: z.string(),
        recordId: z.string(),
        value: z.any(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // Optimized: Only select id to reduce data transfer
      return ctx.db.cell.upsert({
        where: {
          fieldId_recordId: {
            fieldId: input.fieldId,
            recordId: input.recordId,
          },
        },
        update: {
          value: input.value,
        },
        create: {
          fieldId: input.fieldId,
          recordId: input.recordId,
          value: input.value,
        },
        select: {
          id: true,
          fieldId: true,
          recordId: true,
          value: true,
        },
      });
    }),

  // Bulk update multiple cells - optimized with transactions
  bulkUpdate: publicProcedure
    .input(
      z.object({
        updates: z.array(
          z.object({
            fieldId: z.string(),
            recordId: z.string(),
            value: z.any(),
          }),
        ),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // Use a transaction for better performance and atomicity
      // Process in larger batches for better throughput
      const BATCH_SIZE = 50; // Increased from 10 for better performance
      const results = [];

      for (let i = 0; i < input.updates.length; i += BATCH_SIZE) {
        const batch = input.updates.slice(i, i + BATCH_SIZE);
        
        // Use transaction for batch operations
        const batchResults = await ctx.db.$transaction(
          batch.map((update) =>
            ctx.db.cell.upsert({
              where: {
                fieldId_recordId: {
                  fieldId: update.fieldId,
                  recordId: update.recordId,
                },
              },
              update: { value: update.value },
              create: {
                fieldId: update.fieldId,
                recordId: update.recordId,
                value: update.value,
              },
              select: {
                id: true,
                fieldId: true,
                recordId: true,
                value: true,
              },
            }),
          ),
        );
        results.push(...batchResults);
      }

      return results;
    }),

  // Delete a cell
  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.cell.delete({
        where: { id: input.id },
      });
    }),
});
