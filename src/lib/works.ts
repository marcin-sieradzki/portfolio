/* The projects of the Work section, in page order: the words on each card, and how its agents build it.
   The order here is the order of the cards and of the project modals.

   build, the way a card is built step by step:
     n      how many steps the build takes. The project is built at step n.
     color  the lead agent's colour
     shell  [move, step] for the card itself
     parts  { key: [move, step] } for the pieces inside the card
            (k kicker, h title, p body, c chips, x links, b the button that opens the modal)
     drag   the step where a selection frame is dragged out together with the card, or 0
     curs   the agent cursors: each is shown from step show until step hide, and path says where it is from which step
     sweep  the step where the review line starts to cross the card. It takes two steps. */
export type MoveKind =
  "fade" | "drop" | "pop" | "slide" | "slideR" | "type" | "wipeL" | "wipe" | "dragTL" | "dragTR" | "dragBR";
export type PartKey = "b" | "c" | "h" | "k" | "p" | "x";
export interface WorkBuild {
  n: number;
  color: string;
  shell: [MoveKind, number];
  parts: Partial<Record<PartKey, [MoveKind, number]>>;
  drag: number;
  curs: { show: number; hide: number; path: [number, string, string][] }[];
  sweep: number;
}

/* The agents that build the cards. Each has a name and a colour of its own. */
export const AGENTS = {
  architect: { name: "Architect", color: "var(--site-color-accent-orange)" },
  code: { name: "Code Writer", color: "var(--site-color-accent-green)" },
  test: { name: "Test Author", color: "var(--site-color-accent-yellow)" },
  visual: { name: "Visual Reviewer", color: "var(--site-color-accent-lime)" },
  a11y: { name: "A11y", color: "var(--site-color-accent-pink)" },
  docs: { name: "Docs Author", color: "var(--site-color-accent-cyan)" },
  research: { name: "Researcher", color: "var(--site-color-accent-purple)" },
  capture: { name: "Source Capture", color: "var(--site-color-accent-blue)" },
} as const;
export type AgentKey = keyof typeof AGENTS;

/* id      also names the project's modal (see CASE_VIEWS in WorkView) and its title id, "case-title-<id>"
   name    the card's title, also read out on the modal's Previous and Next buttons
   lead    the agent named on the dashed frame while the card waits. The card's colour is this agent's.
   sweep   the review line: it runs down or across the card, with this agent on it
   cursors who each cursor in build.curs is, and on which side of the pointer its name tag sits */
export type ProjectId =
  "studio" | "grundfos-ds" | "maersk-ds" | "perron-mylder" | "schedules" | "vendor" | "factory" | "vml-map";
export interface WorkProject {
  id: ProjectId;
  name: string;
  kicker: string;
  body: string;
  chips: string[];
  links?: { href: string; label: string }[];
  lead: AgentKey;
  sweep: { dir: "down" | "across"; agent: AgentKey };
  cursors: { agent: AgentKey; side: "left" | "right" }[];
  build: WorkBuild;
}

export const PROJECTS: WorkProject[] = [
  {
    id: "studio",
    name: "GDS Studio",
    kicker: "Grundfos · 2025 to now",
    body: "A desktop app where a designer writes a brief and an AI agent builds a working React prototype from real design system components and tokens. It also connects to the company's RAG and its customer feedback platform. Designers take prototypes to stakeholder reviews without an engineer in the loop.",
    chips: ["150 prototypes built", "about 20 designers", "my own idea"],
    lead: "code",
    sweep: { dir: "down", agent: "visual" },
    cursors: [
      { agent: "architect", side: "right" },
      { agent: "code", side: "left" },
      { agent: "test", side: "left" },
    ],
    build: {
      n: 8,
      color: "var(--site-color-accent-green)",
      shell: ["dragTL", 1],
      parts: { b: ["fade", 6], k: ["fade", 2], h: ["type", 3], p: ["wipe", 4], c: ["pop", 5] },
      drag: 1,
      curs: [
        {
          show: 1,
          hide: 3,
          path: [
            [0, "2%", "3%"],
            [1, "98%", "97%"],
          ],
        },
        {
          show: 2,
          hide: 99,
          path: [
            [2, "8%", "21%"],
            [3, "36%", "21%"],
            [4, "50%", "48%"],
            [8, "56%", "calc(100% - 20px)"],
          ],
        },
        {
          show: 4,
          hide: 8,
          path: [
            [4, "14%", "84%"],
            [5, "40%", "86%"],
          ],
        },
      ],
      sweep: 6,
    },
  },
  {
    id: "grundfos-ds",
    name: "Grundfos design system",
    kicker: "Grundfos · Dec 2024 to now",
    body: "Built from zero on React Aria, and made for agents as much as for people. Registries say what exists, a validator blocks unknown components and invented tokens, and an MCP server and skills bring the system into coding agents.",
    chips: ["65 components", "adoption around 70%"],
    lead: "docs",
    sweep: { dir: "across", agent: "a11y" },
    cursors: [
      { agent: "test", side: "left" },
      { agent: "docs", side: "left" },
    ],
    build: {
      n: 8,
      color: "var(--site-color-accent-cyan)",
      shell: ["fade", 1],
      parts: { b: ["fade", 6], c: ["pop", 2], p: ["fade", 3], h: ["slide", 4], k: ["fade", 5] },
      drag: 0,
      curs: [
        {
          show: 1,
          hide: 5,
          path: [
            [1, "16%", "84%"],
            [2, "34%", "86%"],
          ],
        },
        {
          show: 2,
          hide: 99,
          path: [
            [2, "60%", "30%"],
            [3, "48%", "42%"],
            [4, "30%", "21%"],
            [5, "22%", "11%"],
            [8, "56%", "calc(100% - 20px)"],
          ],
        },
      ],
      sweep: 6,
    },
  },
  {
    id: "maersk-ds",
    name: "Maersk Design System",
    kicker: "Maersk · 2021 to 2024",
    body: "Framework-agnostic web components from one token source for 5 brands, light and dark, 3 densities. I was a developer on it from its early days, with 2,600+ commits, and I led the v1 to v2 upgrade.",
    chips: ["70 components", "467+ repositories", "90% adoption"],
    links: [{ href: "https://designsystem.maersk.com", label: "designsystem.maersk.com" }],
    lead: "test",
    sweep: { dir: "down", agent: "visual" },
    cursors: [
      { agent: "test", side: "right" },
      { agent: "code", side: "right" },
    ],
    build: {
      n: 9,
      color: "var(--site-color-accent-yellow)",
      shell: ["wipeL", 1],
      parts: { b: ["fade", 7], k: ["fade", 2], h: ["type", 3], p: ["wipe", 4], c: ["slideR", 5], x: ["fade", 6] },
      drag: 0,
      curs: [
        {
          show: 1,
          hide: 99,
          path: [
            [0, "2%", "48%"],
            [1, "97%", "48%"],
            [5, "30%", "74%"],
            [6, "40%", "89%"],
            [9, "56%", "calc(100% - 20px)"],
          ],
        },
        {
          show: 2,
          hide: 6,
          path: [
            [2, "8%", "20%"],
            [3, "74%", "20%"],
          ],
        },
      ],
      sweep: 7,
    },
  },
  {
    id: "perron-mylder",
    name: "Perron + Mylder",
    kicker: "Own time · 2026",
    body: "Perron is an open-source design system with an MCP server, so coding agents can read it directly. Mylder puts Copenhagen's buses, S-tog, metro and trains on one live map, and is honest about how fresh each position is. Built solo with coding agents.",
    chips: ["54 components", "280 tokens", "open source"],
    links: [
      { href: "https://mylder.marcinsieradzki.com/en", label: "Open Mylder" },
      { href: "https://perron.marcinsieradzki.com/", label: "Perron docs" },
      { href: "https://github.com/marcin-sieradzki/perron", label: "GitHub" },
    ],
    lead: "capture",
    sweep: { dir: "across", agent: "a11y" },
    cursors: [
      { agent: "capture", side: "left" },
      { agent: "docs", side: "right" },
    ],
    build: {
      n: 9,
      color: "var(--site-color-accent-blue)",
      shell: ["drop", 1],
      parts: { b: ["fade", 7], k: ["slideR", 2], h: ["type", 3], p: ["fade", 4], c: ["drop", 5], x: ["slide", 6] },
      drag: 0,
      curs: [
        {
          show: 1,
          hide: 99,
          path: [
            [1, "26%", "38%"],
            [3, "44%", "20%"],
            [5, "24%", "72%"],
            [6, "40%", "86%"],
            [9, "56%", "calc(100% - 20px)"],
          ],
        },
        {
          show: 3,
          hide: 7,
          path: [
            [3, "70%", "34%"],
            [4, "52%", "48%"],
          ],
        },
      ],
      sweep: 7,
    },
  },
  {
    id: "schedules",
    name: "Schedules on Maersk.com",
    kicker: "Maersk · 2021 to 2024",
    body: "One of the most visited pages on Maersk.com: routes, vessel schedules and port calls. Two brand builds, with an embeddable version of every view, and the page's first A/B experiments.",
    chips: ["millions of views every day", "Vue 3"],
    links: [{ href: "https://www.maersk.com/schedules", label: "maersk.com/schedules" }],
    lead: "research",
    sweep: { dir: "across", agent: "visual" },
    cursors: [
      { agent: "research", side: "left" },
      { agent: "a11y", side: "right" },
    ],
    build: {
      n: 9,
      color: "var(--site-color-accent-purple)",
      shell: ["pop", 1],
      parts: { b: ["fade", 7], k: ["slide", 2], h: ["slide", 3], p: ["fade", 4], c: ["pop", 5], x: ["slide", 6] },
      drag: 0,
      curs: [
        {
          show: 1,
          hide: 99,
          path: [
            [1, "14%", "10%"],
            [3, "20%", "20%"],
            [5, "24%", "74%"],
            [6, "36%", "89%"],
            [9, "56%", "calc(100% - 20px)"],
          ],
        },
        {
          show: 3,
          hide: 7,
          path: [
            [3, "70%", "32%"],
            [4, "52%", "46%"],
          ],
        },
      ],
      sweep: 7,
    },
  },
  {
    id: "vendor",
    name: "Vendor Master Data",
    kicker: "Maersk · 2021 to 2024",
    body: "I took what the business needed from the app, turned it into requirements, and built it: the RESTful APIs and the UI on top of a ruleset engine that decides at runtime, per country and entity, which fields exist and how they validate. A delta engine shows approvers exactly what changed.",
    chips: ["maker-checker approvals", ".NET APIs"],
    lead: "a11y",
    sweep: { dir: "down", agent: "visual" },
    cursors: [
      { agent: "architect", side: "right" },
      { agent: "a11y", side: "left" },
      { agent: "code", side: "left" },
    ],
    build: {
      n: 8,
      color: "var(--site-color-accent-pink)",
      shell: ["dragBR", 1],
      parts: { b: ["fade", 6], h: ["pop", 3], k: ["fade", 4], p: ["wipe", 4], c: ["slide", 5] },
      drag: 1,
      curs: [
        {
          show: 1,
          hide: 3,
          path: [
            [0, "98%", "97%"],
            [1, "2%", "3%"],
          ],
        },
        {
          show: 2,
          hide: 99,
          path: [
            [2, "60%", "30%"],
            [3, "40%", "21%"],
            [4, "50%", "48%"],
            [8, "56%", "calc(100% - 20px)"],
          ],
        },
        {
          show: 4,
          hide: 8,
          path: [
            [4, "10%", "84%"],
            [5, "56%", "86%"],
          ],
        },
      ],
      sweep: 6,
    },
  },
  {
    id: "factory",
    name: "Software factory",
    kicker: "Grundfos · 2025 to now",
    body: "Five layers of trust come first: the codebase, static analysis, verification, prose and human review. On top, a system of agents turns a spec into pull requests through three brakes. Every run ends with a triage of what went wrong, so the factory gets better over time.",
    chips: ["built for GDS Studio", "Component Factory: 22 merged"],
    lead: "architect",
    sweep: { dir: "down", agent: "visual" },
    cursors: [
      { agent: "architect", side: "right" },
      { agent: "code", side: "right" },
      { agent: "test", side: "left" },
    ],
    build: {
      n: 8,
      color: "var(--site-color-accent-orange)",
      shell: ["dragTR", 1],
      parts: { b: ["fade", 6], k: ["fade", 2], h: ["type", 3], p: ["wipe", 4], c: ["drop", 5] },
      drag: 1,
      curs: [
        {
          show: 1,
          hide: 99,
          path: [
            [0, "98%", "3%"],
            [1, "2%", "96%"],
            [4, "50%", "52%"],
            [8, "56%", "calc(100% - 20px)"],
          ],
        },
        {
          show: 2,
          hide: 6,
          path: [
            [2, "8%", "23%"],
            [3, "90%", "23%"],
          ],
        },
        {
          show: 4,
          hide: 8,
          path: [
            [4, "14%", "84%"],
            [5, "30%", "86%"],
          ],
        },
      ],
      sweep: 6,
    },
  },
  {
    id: "vml-map",
    name: "Email marketing apps",
    kicker: "VML MAP · 2020 to 2021",
    body: "A set of apps for email marketing automation and observability, such as a dashboard with live campaign statistics. Built as Vue 2 micro-frontends on .NET APIs and Azure Functions.",
    chips: ["Vue 2", "micro-frontends", ".NET APIs", "Azure Functions"],
    lead: "visual",
    sweep: { dir: "across", agent: "a11y" },
    cursors: [
      { agent: "visual", side: "left" },
      { agent: "docs", side: "left" },
      { agent: "test", side: "left" },
    ],
    build: {
      n: 8,
      color: "var(--site-color-accent-lime)",
      shell: ["wipe", 1],
      parts: { b: ["fade", 6], k: ["fade", 2], h: ["type", 3], p: ["fade", 4], c: ["drop", 5] },
      drag: 0,
      curs: [
        {
          show: 1,
          hide: 99,
          path: [
            [0, "50%", "2%"],
            [1, "50%", "96%"],
            [4, "56%", "44%"],
            [8, "48%", "calc(100% - 20px)"],
          ],
        },
        {
          show: 2,
          hide: 6,
          path: [
            [2, "8%", "20%"],
            [3, "57%", "20%"],
          ],
        },
        {
          show: 4,
          hide: 8,
          path: [
            [4, "14%", "84%"],
            [5, "30%", "86%"],
          ],
        },
      ],
      sweep: 6,
    },
  },
];
