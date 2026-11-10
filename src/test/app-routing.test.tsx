import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { services } from "@/data/services";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
  for (const p of [
    "/",
    "/about",
    "/services",
    ...services.map((s) => `/services/${s.slug}`),
    "/projects",
    "/careers",
    "/contact",
    "/privacy-policy",
  ]) {
    it(`matches a page for ${p}`, () => {
      expect(router.matchRoutes(p).at(-1)?.routeId).not.toBe(rootRouteId);
    });
  }
});
