import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const viewRouter = createTRPCRouter({
  // Get all views for a table
  getByTableId: publicProcedure
    .input(z.object({ tableId: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.view.findMany({
        where: { tableId: input.tableId },
        orderBy: { order: "asc" },
        include: {
          filters: {
            orderBy: { order: "asc" },
            include: { field: true },
          },
          sorts: {
            orderBy: { order: "asc" },
            include: { field: true },
          },
          hiddenFields: true,
        },
      });
    }),

  // Get a single view by ID
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.view.findUnique({
        where: { id: input.id },
        include: {
          filters: {
            orderBy: { order: "asc" },
          },
          sorts: {
            orderBy: { order: "asc" },
          },
          hiddenFields: true,
        },
      });
    }),

  // Create a new view
  create: publicProcedure
    .input(
      z.object({
        tableId: z.string(),
        name: z.string().min(1).max(100),
        description: z.string().optional(),
        isDefault: z.boolean().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Find the highest order number
      const lastView = await ctx.db.view.findFirst({
        where: { tableId: input.tableId },
        orderBy: { order: "desc" },
        select: { order: true },
      });

      return ctx.db.view.create({
        data: {
          tableId: input.tableId,
          name: input.name,
          description: input.description,
          isDefault: input.isDefault ?? false,
          order: (lastView?.order ?? -1) + 1,
        },
      });
    }),

  // Update a view
  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().min(1).max(100).optional(),
        description: z.string().optional(),
        isDefault: z.boolean().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      return ctx.db.view.update({
        where: { id },
        data,
      });
    }),

  // Delete a view
  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.view.delete({
        where: { id: input.id },
      });
    }),

  // Hide a field in a view
  hideField: publicProcedure
    .input(
      z.object({
        viewId: z.string(),
        fieldId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.hiddenField.create({
        data: {
          viewId: input.viewId,
          fieldId: input.fieldId,
        },
      });
    }),

  // Show a field in a view (unhide)
  showField: publicProcedure
    .input(
      z.object({
        viewId: z.string(),
        fieldId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.hiddenField.deleteMany({
        where: {
          viewId: input.viewId,
          fieldId: input.fieldId,
        },
      });
    }),
});
