/* Renders the link preview images (Open Graph / Twitter, 1200 x 630) into public/og/.
   It draws the card inside the built English page, so it uses the site's own fonts and colours.

   Run after a build:   npm run build && node scripts/og-image/render.mjs
   Needs Playwright with Chromium (npx playwright install chromium). */
import { createServer } from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { chromium } from "playwright";

const OUT = new URL("../../out/", import.meta.url).pathname;
const DEST = new URL("../../public/og/", import.meta.url).pathname;

/* The hero's own words in each language (the eyebrow is English on both pages). */
const CARDS = {
  en: { hi: "Hi, I'm Marcin.", line: "I ship software", accent: "with AI agents." },
  pl: { hi: "Cześć, jestem Marcin.", line: "Tworzę software", accent: "z agentami AI." },
};

const TYPES = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".woff2": "font/woff2",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".png": "image/png",
};
const server = createServer(async (req, res) => {
  let p = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname));
  if (p.endsWith("/")) p += "index.html";
  try {
    const body = await readFile(join(OUT, p));
    res.writeHead(200, { "content-type": TYPES[extname(p)] || "application/octet-stream" });
    res.end(body);
  } catch {
    res.writeHead(404).end();
  }
}).listen(0);
const base = `http://127.0.0.1:${server.address().port}`;

function card({ hi, line, accent }, portrait) {
  return `
  <div id="og" style="position:relative;width:1200px;height:630px;overflow:hidden;box-sizing:border-box;
      background-color:var(--perron-color-surface-default);
      background-image:radial-gradient(var(--perron-color-border-subtle) 1px, transparent 1px);background-size:24px 24px;
      color:var(--perron-color-text-primary);font-family:var(--perron-font-family-body)">
    <div style="position:absolute;left:72px;top:64px;display:flex;align-items:center;gap:14px;
        font:700 26px/1 var(--perron-font-family-display);letter-spacing:-0.01em">
      <span style="display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:8px;
          background:var(--perron-color-surface-brand);color:var(--perron-color-text-on-color-dark);
          font:700 22px/1 var(--perron-font-family-body)">M</span>
      <span>Marcin Sieradzki</span>
    </div>
    <div style="position:absolute;left:72px;top:176px;width:680px">
      <p style="margin:0 0 26px;font:600 17px/1.3 var(--perron-font-family-body);letter-spacing:1.2px;text-transform:uppercase;
          color:var(--perron-color-text-secondary)">Lead Software Engineer · AI Engineer · Design Engineer</p>
      <h1 style="margin:0;font:700 72px/1.02 var(--perron-font-family-display);letter-spacing:-0.03em">
        <span style="display:block">${hi}</span>
        <span style="display:block">${line}</span>
        <span style="display:block;color:var(--perron-color-text-success)">${accent}<span style="display:inline-block;width:0.07em;
            height:0.8em;margin-left:0.08em;vertical-align:-0.05em;background:var(--perron-color-status-success)"></span></span>
      </h1>
    </div>
    <p style="position:absolute;left:72px;bottom:56px;margin:0;font:500 20px/1 var(--font-jetbrains), monospace;
        color:var(--perron-color-text-secondary)">marcinsieradzki.com</p>
    <div style="position:absolute;right:56px;bottom:0;width:400px;aspect-ratio:1024/1284">
      <div style="position:absolute;left:0;right:0;bottom:0;aspect-ratio:1/1;border-radius:50%;background:var(--perron-color-surface-brand)"></div>
      <div style="position:absolute;inset:0;overflow:hidden;border-radius:0 0 50% 50% / 0 0 39.875% 39.875%">
        <img src="${portrait}" style="display:block;width:100%;height:100%;object-fit:contain;object-position:50% 100%">
      </div>
    </div>
  </div>`;
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.goto(`${base}/`);
const portrait = await page.$eval("img[fetchpriority=high]", (img) => img.getAttribute("src").split(" ")[0]);
await mkdir(DEST, { recursive: true });
for (const [lang, words] of Object.entries(CARDS)) {
  await page.evaluate(
    (html) => {
      document.body.innerHTML = html;
      document.body.style.margin = "0";
    },
    card(words, portrait),
  );
  await page.evaluate(() => Promise.all([document.fonts.ready, ...[...document.images].map((i) => i.decode())]));
  await page.locator("#og").screenshot({ path: join(DEST, `${lang}.png`) });
  console.log(`public/og/${lang}.png`);
}
await browser.close();
server.close();
