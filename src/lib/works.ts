/* The build of every project card in the Work section, in page order. Copied from the Version E prototype.
     n      how many steps the build takes. The project is built at step n.
     color  the lead agent's colour
     shell  [move, step] for the card itself
     parts  { key: [move, step] } for the pieces inside the card
            (k kicker, m meta row, h title, l lead line, p body, c chips, x links, s1.. stats, pn side panel,
             f1.. flow steps, e evals line, g legend, b the button that opens the modal)
     drag   the step where a selection frame is dragged out together with the card, or 0
     curs   the agent cursors: each is shown from step show until step hide, and path says where it is from which step
     sweep  the step where the review line starts to cross the card. It takes two steps. */
export type MoveKind =
  "fade" | "drop" | "pop" | "slide" | "slideR" | "type" | "wipeL" | "wipe" | "dragTL" | "dragTR" | "dragBR";
export type PartKey =
  | "b"
  | "c"
  | "e"
  | "f1"
  | "f2"
  | "f3"
  | "f4"
  | "g"
  | "h"
  | "k"
  | "l"
  | "m"
  | "p"
  | "pn"
  | "s1"
  | "s2"
  | "s3"
  | "s4"
  | "x";
export interface WorkBuild {
  n: number;
  color: string;
  shell: [MoveKind, number];
  parts: Partial<Record<PartKey, [MoveKind, number]>>;
  drag: number;
  curs: { show: number; hide: number; path: [number, string, string][] }[];
  sweep: number;
}

export const WORKS: WorkBuild[] = [
  /* GDS Studio */
  {
    n: 12,
    color: "#3DDC97",
    shell: ["dragTL", 1],
    parts: {
      b: ["fade", 9],
      m: ["fade", 2],
      h: ["type", 3],
      pn: ["dragTL", 4],
      l: ["fade", 4],
      p: ["wipe", 5],
      f1: ["slideR", 5],
      f2: ["slideR", 6],
      f3: ["slideR", 7],
      f4: ["slideR", 8],
      s1: ["pop", 6],
      s2: ["pop", 7],
      s3: ["pop", 8],
      e: ["fade", 9],
    },
    drag: 1,
    curs: [
      {
        show: 1,
        hide: 6,
        path: [
          [0, "1%", "2%"],
          [1, "99%", "97%"],
          [3, "51%", "8%"],
          [4, "96%", "92%"],
        ],
      },
      {
        show: 2,
        hide: 99,
        path: [
          [2, "4%", "19%"],
          [3, "21%", "19%"],
          [5, "58%", "17%"],
          [6, "58%", "31%"],
          [7, "58%", "50%"],
          [8, "58%", "67%"],
          [9, "70%", "82%"],
          [12, "88%", "calc(100% - 20px)"],
        ],
      },
      {
        show: 4,
        hide: 8,
        path: [
          [4, "14%", "31%"],
          [5, "30%", "52%"],
        ],
      },
      {
        show: 6,
        hide: 10,
        path: [
          [6, "8%", "76%"],
          [7, "20%", "76%"],
          [8, "33%", "76%"],
        ],
      },
    ],
    sweep: 10,
  },
  /* Perron + Mylder */
  {
    n: 11,
    color: "#5B9DFF",
    shell: ["drop", 1],
    parts: {
      b: ["fade", 9],
      pn: ["pop", 2],
      g: ["fade", 3],
      m: ["slideR", 3],
      h: ["type", 4],
      l: ["slideR", 5],
      p: ["fade", 6],
      s1: ["drop", 7],
      s2: ["drop", 7],
      s3: ["drop", 8],
      s4: ["drop", 8],
      x: ["slide", 8],
    },
    drag: 0,
    curs: [
      {
        show: 1,
        hide: 99,
        path: [
          [1, "26%", "38%"],
          [3, "20%", "72%"],
          [8, "60%", "89%"],
          [11, "88%", "calc(100% - 20px)"],
        ],
      },
      {
        show: 3,
        hide: 8,
        path: [
          [3, "54.5%", "18%"],
          [4, "78%", "18%"],
          [6, "72%", "50%"],
        ],
      },
      {
        show: 6,
        hide: 10,
        path: [
          [6, "56%", "74%"],
          [7, "60%", "76%"],
          [8, "76%", "76%"],
        ],
      },
    ],
    sweep: 9,
  },
  /* Software factory and Component Factory */
  {
    n: 8,
    color: "#FF8A5B",
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
  /* Grundfos design system */
  {
    n: 8,
    color: "#5ED3F0",
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
  /* Maersk Design System */
  {
    n: 9,
    color: "#FFD166",
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
  /* Schedules on Maersk.com */
  {
    n: 9,
    color: "#B58CFF",
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
  /* Vendor Master Data */
  {
    n: 8,
    color: "#FF7EB6",
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
  /* Micro-frontends */
  {
    n: 8,
    color: "#C8F560",
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
];
