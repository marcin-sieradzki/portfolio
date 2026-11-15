import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* A static site: `next build` writes plain HTML, CSS and JS to out/. */
  output: "export",
  images: { unoptimized: true },
  /* Each language has its own root layout, so the 404 page for unknown URLs is app/global-not-found.tsx. */
  experimental: { globalNotFound: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
