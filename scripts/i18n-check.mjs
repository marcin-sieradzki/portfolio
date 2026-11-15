/* Checks the translations before a build (npm run i18n:check, also run by prebuild).
   1. Every t("…") with literal text in src/ has an entry in each dictionary.
   2. Every text in the data that is translated where it is shown (src/lib/works.ts, the layers of FactoryDrawing)
      has an entry, unless it is listed in SAME below as reading the same in every language.
   3. No dictionary entry is left over that nothing uses.
   Exits with 1 when anything is missing, so a page never ships half in English. */
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const ROOT = path.resolve(import.meta.dirname, "..");
const DICTS = ["pl"];
/* Data text that stays as it is in every language: product names, tech and links. */
const SAME = new Set([
  "GDS Studio",
  "Maersk Design System",
  "Perron + Mylder",
  "Vendor Master Data",
  "A11y",
  "Vue 2",
  "Vue 3",
  "Azure Functions",
  "open source",
  "GitHub",
  "designsystem.maersk.com",
  "maersk.com/schedules",
]);
const DATA_FIELDS = new Set(["name", "kicker", "body", "label", "chips", "note"]);
const DATA_FILES = ["src/lib/works.ts", "src/components/site/cases/FactoryDrawing.tsx"];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : /\.tsx?$/.test(e.name) && !p.includes(`${path.sep}i18n${path.sep}`) ? [p] : [];
  });
}
function source(p) {
  return ts.createSourceFile(p, fs.readFileSync(p, "utf8"), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
}
function dictionary(name) {
  const sf = source(path.join(ROOT, `src/i18n/${name}.ts`));
  const keys = new Set();
  const visit = (n) => {
    if (ts.isPropertyAssignment(n) && (ts.isStringLiteral(n.name) || ts.isIdentifier(n.name))) keys.add(n.name.text);
    ts.forEachChild(n, visit);
  };
  visit(sf);
  return keys;
}

const used = new Map(); /* text -> where */
for (const file of walk(path.join(ROOT, "src"))) {
  const sf = source(file);
  const rel = path.relative(ROOT, file);
  const data = DATA_FILES.includes(rel.split(path.sep).join("/"));
  const visit = (n) => {
    if (ts.isCallExpression(n) && ts.isIdentifier(n.expression) && n.expression.text === "t" && n.arguments[0]) {
      const a = n.arguments[0];
      if (ts.isStringLiteral(a) || ts.isNoSubstitutionTemplateLiteral(a)) used.set(a.text, rel);
    }
    if (data && ts.isPropertyAssignment(n) && DATA_FIELDS.has(n.name.getText())) {
      const v = n.initializer;
      const texts = ts.isStringLiteral(v)
        ? [v]
        : ts.isArrayLiteralExpression(v)
          ? v.elements.filter(ts.isStringLiteral)
          : [];
      for (const s of texts) if (!SAME.has(s.text) && !/^\d+$/.test(s.text)) used.set(s.text, rel);
    }
    ts.forEachChild(n, visit);
  };
  visit(sf);
}

let failed = false;
for (const name of DICTS) {
  const keys = dictionary(name);
  const missing = [...used].filter(([k]) => !keys.has(k));
  const unused = [...keys].filter((k) => !used.has(k));
  for (const [k, where] of missing) console.error(`${name}: missing "${k}" (${where})`);
  for (const k of unused) console.error(`${name}: unused entry "${k}"`);
  if (missing.length || unused.length) failed = true;
  else console.log(`${name}: ${keys.size} entries, all used, none missing`);
}
process.exit(failed ? 1 : 0);
