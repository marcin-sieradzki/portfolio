// Fails when a colour literal (#hex, rgb(), rgba(), hsl()) appears in src/ outside the token file, app/tokens.css.
// Colours come from the design tokens as CSS custom properties, so both themes stay in one place. A line that must
// hold a literal (metadata cannot read a CSS variable) ends with the comment "color-check: allow".
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("../src/", import.meta.url).pathname;
const ALLOWED_FILES = new Set(["app/tokens.css"]);
const COLOUR = /#[0-9a-fA-F]{3,8}\b(?![-\w])|\b(?:rgba?|hsla?)\(/;

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* walk(p);
    else if (/\.(tsx?|css)$/.test(name)) yield p;
  }
}

const hits = [];
for (const file of walk(ROOT)) {
  const rel = relative(ROOT, file);
  if (ALLOWED_FILES.has(rel)) continue;
  readFileSync(file, "utf8")
    .split("\n")
    .forEach((line, i) => {
      if (line.includes("color-check: allow")) return;
      const m = line.match(COLOUR);
      if (m) hits.push(`src/${rel}:${i + 1}: ${m[0]}`);
    });
}
if (hits.length) {
  console.error(
    `Colour literals outside src/app/tokens.css. Use a token (var(--perron-color-…) or var(--site-color-…)), adding one to tokens.css with a light and a dark value if none fits:\n${hits.join("\n")}`,
  );
  process.exit(1);
}
console.log("color-check: no colour literals outside the tokens.");
