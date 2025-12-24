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
      });
    }),

  // Bulk update multiple cells
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
      // Execute all upserts in parallel
      return Promise.all(
        input.updates.map((update) =>
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
          }),
        ),
      );
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
