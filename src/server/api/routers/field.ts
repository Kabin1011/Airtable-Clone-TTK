import { z } from "zod";
import { FieldType } from "../../../../generated/prisma";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const fieldRouter = createTRPCRouter({
  // Get all fields in a table
  getByTableId: publicProcedure
    .input(z.object({ tableId: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.field.findMany({
        where: { tableId: input.tableId },
        orderBy: { order: "asc" },
      });
    }),

  // Create a new field
  create: publicProcedure
    .input(
      z.object({
        tableId: z.string(),
        name: z.string().min(1).max(100),
        type: z.nativeEnum(FieldType),
        description: z.string().optional(),
        config: z.any().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // Get the highest order number for fields in this table
      const lastField = await ctx.db.field.findFirst({
        where: { tableId: input.tableId },
        orderBy: { order: "desc" },
        select: { order: true },
      });

      return ctx.db.field.create({
        data: {
          tableId: input.tableId,
          name: input.name,
          type: input.type,
          description: input.description,
          config: input.config,
          order: (lastField?.order ?? -1) + 1,
        },
      });
    }),

  // Update a field
  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().min(1).max(100).optional(),
        type: z.nativeEnum(FieldType).optional(),
        description: z.string().optional(),
        config: z.any().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      return ctx.db.field.update({
        where: { id },
        data,
      });
    }),

  // Delete a field
  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.field.delete({
        where: { id: input.id },
      });
    }),

  // Reorder a field
  reorder: publicProcedure
    .input(
      z.object({
        id: z.string(),
        order: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.field.update({
        where: { id: input.id },
        data: { order: input.order },
      });
    }),
});