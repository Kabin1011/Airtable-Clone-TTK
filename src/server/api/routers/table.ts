import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const tableRouter = createTRPCRouter({
  // Get all tables in a base
  getByBaseId: publicProcedure
    .input(z.object({ baseId: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.table.findMany({
        where: { baseId: input.baseId },
        orderBy: { order: "asc" },
        include: {
          fields: {
            orderBy: { order: "asc" },
          },
          _count: {
            select: { records: true },
          },
        },
      });
    }),

  // Get a single table by ID with all its data
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.table.findUnique({
        where: { id: input.id },
        include: {
          fields: {
            orderBy: { order: "asc" },
          },
          views: {
            orderBy: { order: "asc" },
          },
        },
      });
    }),

  // Create a new table
  create: publicProcedure
    .input(
      z.object({
        baseId: z.string(),
        name: z.string().min(1).max(100),
        description: z.string().optional(),
        icon: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // Get the highest order number for tables in this base
      const lastTable = await ctx.db.table.findFirst({
        where: { baseId: input.baseId },
        orderBy: { order: "desc" },
        select: { order: true },
      });

      return ctx.db.table.create({
        data: {
          baseId: input.baseId,
          name: input.name,
          description: input.description,
          icon: input.icon ?? "📋",
          order: (lastTable?.order ?? -1) + 1,
        },
      });
    }),

  // Update a table
  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().min(1).max(100).optional(),
        description: z.string().optional(),
        icon: z.string().optional(),
        order: z.number().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      return ctx.db.table.update({
        where: { id },
        data,
      });
    }),

  // Delete a table
  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.table.delete({
        where: { id: input.id },
      });
    }),
});
