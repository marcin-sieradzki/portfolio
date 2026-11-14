# dc-to-jsx

One-off converter that turned the Version E prototype (`Site-E-Face.dc.html` from the design canvas) into the JSX views under `src/components/site/`. It mirrors the prototype runtime's rules for whitespace, `{{holes}}`, `<sc-if>`, `<sc-for>` and inline styles, so the port renders pixel for pixel like the prototype.

```sh
python3 scripts/dc-to-jsx/gen.py path/to/Site-E-Face.dc.html src/components/site
npx prettier --write src/components/site
```

Running it again overwrites the generated views (`*View.tsx`, the static sections and `cases/`). The logic lives in `Portrait.tsx`, `Work.tsx` and `Contact.tsx` and is not touched.
