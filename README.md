# Marcin Sieradzki, personal site

Next.js (App Router) site, exported as static HTML (`output: "export"`).

```sh
npm install
npm run dev     # http://localhost:3000
npm run build   # writes the static site to out/
npm run lint
```

## Layout

- `src/app/page.tsx` composes the page. `globals.css` holds the theme tokens (Perron token names), keyframes and hover states.
- `src/components/site/` has one component per section. The static ones render at build time. Three are client components:
  - `Portrait.tsx`: the hero photo drawn as a spring mesh on a canvas that you can grab and pull, plus the scripted "visitor" cursor.
  - `Work.tsx`: agent cursors build each project card when it scrolls into view, the sticky status bar runs the checks, and every card opens a project modal (`cases/`).
  - `Contact.tsx`: the lanyard badge that sways, swings when dragged, tilts toward the pointer and flips on a tap.
- `src/lib/works.ts` is the project list: the text of each card and its build script.
- `src/assets/` holds the portrait. It is imported, so the built file has a hashed name and can be cached for good.
- `scripts/dc-to-jsx/` is the one-off converter from the design prototype.

## Audits

`.mcp.json` adds the Chrome DevTools MCP server, so Claude Code can run Lighthouse and performance traces against the page (`lighthouse_audit`, `performance_start_trace`). Build first and serve `out/`, or point it at the live site.
