import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const filterRouter = createTRPCRouter({
  // Get all filters for a view
  getByViewId: publicProcedure
    .input(z.object({ viewId: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.filter.findMany({
        where: { viewId: input.viewId },
        orderBy: { order: "asc" },
        include: {
          field: true,
        },
      });
    }),

  // Create a new filter
  create: publicProcedure
    .input(
      z.object({
        viewId: z.string(),
        fieldId: z.string(),
        operator: z.enum([
          "EQUALS",
          "NOT_EQUALS",
          "CONTAINS",
          "NOT_CONTAINS",
          "GREATER_THAN",
          "LESS_THAN",
          "IS_EMPTY",
          "IS_NOT_EMPTY",
        ]),
        value: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Find the highest order number
      const lastFilter = await ctx.db.filter.findFirst({
        where: { viewId: input.viewId },
        orderBy: { order: "desc" },
        select: { order: true },
      });

      return ctx.db.filter.create({
        data: {
          viewId: input.viewId,
          fieldId: input.fieldId,
          operator: input.operator,
          value: input.value,
          order: (lastFilter?.order ?? -1) + 1,
        },
      });
    }),

  // Update a filter
  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        operator: z
          .enum([
            "EQUALS",
            "NOT_EQUALS",
            "CONTAINS",
            "NOT_CONTAINS",
            "GREATER_THAN",
            "LESS_THAN",
            "IS_EMPTY",
            "IS_NOT_EMPTY",
          ])
          .optional(),
        value: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      return ctx.db.filter.update({
        where: { id },
        data,
      });
    }),

  // Delete a filter
  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.filter.delete({
        where: { id: input.id },
      });
    }),
});
