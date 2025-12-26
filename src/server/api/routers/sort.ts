import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const sortRouter = createTRPCRouter({
  // Get all sorts for a view
  getByViewId: publicProcedure
    .input(z.object({ viewId: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.sort.findMany({
        where: { viewId: input.viewId },
        orderBy: { order: "asc" },
        include: {
          field: true,
        },
      });
    }),

  // Create a new sort
  create: publicProcedure
    .input(
      z.object({
        viewId: z.string(),
        fieldId: z.string(),
        direction: z.enum(["ASC", "DESC"]).default("ASC"),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Find the highest order number
      const lastSort = await ctx.db.sort.findFirst({
        where: { viewId: input.viewId },
        orderBy: { order: "desc" },
        select: { order: true },
      });

      return ctx.db.sort.create({
        data: {
          viewId: input.viewId,
          fieldId: input.fieldId,
          direction: input.direction,
          order: (lastSort?.order ?? -1) + 1,
        },
      });
    }),

  // Update a sort
  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        direction: z.enum(["ASC", "DESC"]).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      return ctx.db.sort.update({
        where: { id },
        data,
      });
    }),

  // Delete a sort
  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.sort.delete({
        where: { id: input.id },
      });
    }),
});
