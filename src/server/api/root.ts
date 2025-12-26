import { tableRouter } from "~/server/api/routers/table";
import { baseRouter } from "~/server/api/routers/base";
import { fieldRouter } from "~/server/api/routers/field";
import { recordRouter } from "~/server/api/routers/record";
import { cellRouter } from "~/server/api/routers/cell";
import { viewRouter } from "~/server/api/routers/view";
import { filterRouter } from "~/server/api/routers/filter";
import { sortRouter } from "~/server/api/routers/sort";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  table: tableRouter,
  base: baseRouter,
  field: fieldRouter,
  record: recordRouter,
  cell: cellRouter,
  view: viewRouter,
  filter: filterRouter,
  sort: sortRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
