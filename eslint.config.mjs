import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // The views get one object of values from their class component, and some of those values are refs.
    // The refs rule reads every v.x as a ref read, so it is off here. The portrait and badge photos are plain
    // <img> elements: the face mesh draws from the loaded <img>, and the site is a static export.
    files: ["src/components/site/*View.tsx"],
    rules: { "react-hooks/refs": "off", "@next/next/no-img-element": "off" },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
