// @lovable.dev/vite-tanstack-config includes TanStack Start, React, Tailwind, tsConfigPaths,
// and Nitro (targeting Cloudflare Workers module).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR wrapper)
    server: { entry: "server" },
  },
  nitro: {
    preset: "cloudflare-module",
  },
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});
