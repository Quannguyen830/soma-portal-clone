import { headers } from "next/headers";
import { createTRPCContext } from "~/server/api/trpc";
import { createCaller, type AppRouter } from "~/server/api/root";
import { cache } from "react";

const createContext = cache(async () => {
  const heads = new Headers(await headers());
  heads.set("x-trpc-source", "rsc");

  return createTRPCContext({
    headers: heads,
  });
});

export const api = createCaller(createContext);
