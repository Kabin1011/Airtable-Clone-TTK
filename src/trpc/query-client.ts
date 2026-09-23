import {
  defaultShouldDehydrateQuery,
  MutationCache,
  QueryCache,
  QueryClient,
} from "@tanstack/react-query";
import SuperJSON from "superjson";

// httpBatchStreamLink shares one fetch across batched calls, so cancelling
// one query (e.g. via cancelQueries in an optimistic update) can abort a
// sibling query that was never explicitly cancelled. Swallow those instead
// of surfacing them as real errors.
const isAbortError = (error: unknown) =>
  error instanceof Error && error.name === "AbortError";

export const createQueryClient = () =>
  new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
        if (isAbortError(error)) return;
      },
    }),
    mutationCache: new MutationCache({
      onError: (error) => {
        if (isAbortError(error)) return;
      },
    }),
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 30 * 1000, // Data is fresh for 30 seconds
        gcTime: 5 * 60 * 1000, // Keep unused data in cache for 5 minutes
        refetchOnWindowFocus: false, // Don't refetch when window regains focus
        refetchOnReconnect: false, // Don't refetch on reconnect
        retry: 1, // Only retry failed requests once
      },
      mutations: {
        retry: 1, // Only retry failed mutations once
      },
      dehydrate: {
        serializeData: SuperJSON.serialize,
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
      hydrate: {
        deserializeData: SuperJSON.deserialize,
      },
    },
  });
