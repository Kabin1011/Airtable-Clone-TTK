import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const baseRouter = createTRPCRouter({
  // Get all bases
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.base.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        tables: {
          select: {
            id: true,
            name: true,
            icon: true,
          },
        },
      },
    });
  }),

  // Get a single base by ID
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.base.findUnique({
        where: { id: input.id },
        include: {
          tables: {
            orderBy: { order: "asc" },
          },
        },
      });
    }),

  // Create a new base
  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1).max(100),
        description: z.string().optional(),
        icon: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.base.create({
        data: {
          name: input.name,
          description: input.description,
          icon: input.icon ?? "📊",
        },
      });
    }),

  // Update a base
  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().min(1).max(100).optional(),
        description: z.string().optional(),
        icon: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      return ctx.db.base.update({
        where: { id },
        data,
      });
    }),

  // Delete a base
  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.base.delete({
        where: { id: input.id },
      });
    }),
});
