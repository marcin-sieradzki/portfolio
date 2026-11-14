"use client";

/* The Work section: every project card is built by a few agent cursors when it scrolls into view, the status bar
   counts the builds and runs four checks, and each card opens a project modal. Ported from the Version E prototype:
   the timings, moves and the modal behaviour are the prototype's. */

import { Component, createRef, type KeyboardEvent, type MouseEvent, type ReactNode, type RefObject } from "react";
import { WORKS, type MoveKind, type PartKey } from "@/lib/works";
import { WorkView } from "./WorkView";

const WORKS_TICK = 320; /* ms per build step */
const WORKS_EVERY = 2; /* steps between two starts when several projects are in view at once */
const WORKS_CHECK = 420; /* ms between two checks once every project is built */
const WORKS_SEEN = 0.18; /* share of a project that must be in view before its agents start */
const WORKS_EASE = "cubic-bezier(0.4, 0, 0.6, 1)";

const WORKS_TR = `opacity 320ms ease, transform 440ms cubic-bezier(0.2, 0.9, 0.3, 1.2), clip-path 420ms ${WORKS_EASE}`;
const WORKS_TT = "clip-path 420ms steps(14, end)"; /* typed text appears in small jumps */
const WORKS_CTR = `left 420ms ${WORKS_EASE}, top 420ms ${WORKS_EASE}, opacity 220ms ease`;
const WORKS_DTR = `width 420ms ${WORKS_EASE}, height 420ms ${WORKS_EASE}, opacity 220ms ease`;
const WORKS_STR = `left ${2 * WORKS_TICK}ms linear, top ${2 * WORKS_TICK}ms linear, opacity 180ms ease`;

export type Move = { o: string; t: string; c: string };
type Cursor = { x: string; y: string; o: string };

const WORKS_SHOWN: Move = { o: "1", t: "none", c: "none" };
const WORKS_MOVES: Record<MoveKind, { off: Move; on: Move }> = {
  fade: { off: { o: "0", t: "translateY(14px)", c: "none" }, on: WORKS_SHOWN },
  drop: { off: { o: "0", t: "translateY(-22px) scale(1.04)", c: "none" }, on: WORKS_SHOWN },
  pop: { off: { o: "0", t: "scale(0.84)", c: "none" }, on: WORKS_SHOWN },
  slide: { off: { o: "0", t: "translateX(-28px)", c: "none" }, on: WORKS_SHOWN },
  slideR: { off: { o: "0", t: "translateX(28px)", c: "none" }, on: WORKS_SHOWN },
  type: {
    off: { o: "1", t: "none", c: "inset(-12px 100% -12px -12px)" },
    on: { o: "1", t: "none", c: "inset(-12px 0% -12px -12px)" },
  },
  wipeL: {
    off: { o: "1", t: "none", c: "inset(-12px 100% -12px -12px)" },
    on: { o: "1", t: "none", c: "inset(-12px 0% -12px -12px)" },
  },
  wipe: {
    off: { o: "1", t: "none", c: "inset(-12px -12px 100% -12px)" },
    on: { o: "1", t: "none", c: "inset(-12px -12px 0% -12px)" },
  },
  dragTL: {
    off: { o: "1", t: "none", c: "inset(0% 100% 100% 0%)" },
    on: { o: "1", t: "none", c: "inset(0% 0% 0% 0%)" },
  },
  dragTR: {
    off: { o: "1", t: "none", c: "inset(0% 0% 100% 100%)" },
    on: { o: "1", t: "none", c: "inset(0% 0% 0% 0%)" },
  },
  dragBR: {
    off: { o: "1", t: "none", c: "inset(100% 0% 0% 100%)" },
    on: { o: "1", t: "none", c: "inset(0% 0% 0% 0%)" },
  },
};

function worksMove(kind: MoveKind, on: boolean, done: boolean): Move {
  if (done) return WORKS_SHOWN;
  return on ? WORKS_MOVES[kind].on : WORKS_MOVES[kind].off;
}

/* Everything the markup of one card needs at one build step. */
export type WorkUnit = {
  tr: string;
  tt: string;
  ctr: string;
  dtr: string;
  str: string;
  sh: Move;
  wire: string;
  wireO: string;
  tagO: string;
  dg: { w: string; h: string; o: string };
  sw: { p: string; o: string };
  okO: string;
  okT: string;
  dot: string;
} & Record<PartKey, Move> &
  Record<"c0" | "c1" | "c2" | "c3", Cursor>;

/* ---------- project modals ---------- */

/* One row per project, in the order of the cards. name is read out on the Previous and Next buttons,
   color is the project's colour on the stop line in the modal's footer. The copy and the drawings are markup. */
const CASES = [
  { name: "GDS Studio", color: "#3DDC97" },
  { name: "Perron + Mylder", color: "#5B9DFF" },
  { name: "Software factory and Component Factory", color: "#FF8A5B" },
  { name: "Grundfos design system", color: "#5ED3F0" },
  { name: "Maersk Design System", color: "#FFD166" },
  { name: "Schedules on Maersk.com", color: "#B58CFF" },
  { name: "Vendor Master Data", color: "#FF7EB6" },
  { name: "Micro-frontends", color: "#C8F560" },
];
const CASE_FADE = 200; /* ms the modal takes to fade in and out */
const CASE_MOVE = 320; /* ms the panel takes to rise into place */
const CASE_BOX = { l: "0px", t: "0px", w: "100%", h: "100%" };

type Check = { passed: boolean; running: boolean; pending: boolean; color: string; bg: string; line: string };
type Stop = { d: string; bg: string; bd: string };
type CaseIs = Record<"p0" | "p1" | "p2" | "p3" | "p4" | "p5" | "p6" | "p7", boolean>;
type Idx = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type WorkVals = {
  agents: boolean;
  worksCk: Record<"c1" | "c2" | "c3" | "c4", Check>;
  worksCount: string;
  worksIsIdle: boolean;
  worksIsBuilding: boolean;
  worksIsChecking: boolean;
  worksIsVerified: boolean;
  worksStatusColor: string;
  worksReplay: () => void;
  caseOn: boolean;
  caseIs: CaseIs;
  caseO: string;
  caseT: string;
  caseMs: string;
  caseMoveMs: string;
  caseBlur: string;
  caseBox: typeof CASE_BOX;
  caseTitleId: string;
  caseNo: string;
  casePrevName: string;
  caseNextName: string;
  caseStops: Stop[];
  caseOverlay: RefObject<HTMLDivElement | null>;
  casePanel: RefObject<HTMLDivElement | null>;
  caseScroll: RefObject<HTMLDivElement | null>;
  caseBackdrop: (e: MouseEvent<HTMLDivElement>) => void;
  caseKey: (e: KeyboardEvent<HTMLDivElement>) => void;
  caseClose: () => void;
  casePrev: () => void;
  caseNext: () => void;
} & { [K in `wk${Idx}`]: WorkUnit } & { [K in `worksRef${Idx}`]: RefObject<HTMLDivElement | null> } & {
  [K in `caseBtn${Idx}`]: RefObject<HTMLButtonElement | null>;
} & { [K in `caseOpen${Idx}`]: () => void } & { [K in `caseCard${Idx}`]: (e: MouseEvent<HTMLElement>) => void };

type State = {
  works: number[]; /* one build step per project: 0 queued, then 1 up to its last step, where it is built */
  worksChecks: number; /* how many of the four checks have passed */
  caseAt: number; /* which project modal is open, or -1 */
  caseReady: boolean; /* it is shown */
  caseLeaving: boolean; /* it is fading out */
};

function reducedMotion() {
  return (
    typeof window !== "undefined" &&
    !!window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export class Work extends Component<{ children?: ReactNode }, State> {
  /* works */
  private worksRefs = WORKS.map(() => createRef<HTMLDivElement>());
  private worksStill = false;
  private worksStep = WORKS.map(() => 0);
  private worksChecks = 0;
  private worksChecksOn = false;
  private worksSeen = WORKS.map(() => false);
  private worksQueue: number[] = [];
  private worksTimers: ReturnType<typeof setTimeout>[] = [];
  private worksTicking = false;
  private worksWait = 0;
  private worksCache: ({ s: number; v: WorkUnit } | undefined)[] = [];
  private worksIO: IntersectionObserver | null = null;
  private worksOnReplay = () => this.worksReplay();

  /* case */
  private caseOverlayRef = createRef<HTMLDivElement>();
  private casePanelRef = createRef<HTMLDivElement>();
  private caseScrollRef = createRef<HTMLDivElement>();
  private caseBtnRefs = CASES.map(() => createRef<HTMLButtonElement>());
  private caseOpeners = CASES.map((c, i) => () => this.caseShow(i));
  private caseCardClicks = CASES.map((c, i) => (e: MouseEvent<HTMLElement>) => this.caseCard(i, e));
  private caseStill = false;
  private caseTimers: ReturnType<typeof setTimeout>[] = [];
  private caseFrom: HTMLElement | null = null; /* what had focus before the modal opened */
  private caseLive = false; /* the modal is mounted and set up */
  private caseSeen = -1; /* the project the modal showed last */
  private caseLocked: { o: string; p: string } | null =
    null; /* the page's own overflow and padding, kept while it is locked */
  private caseIsCache: Record<number, CaseIs> = {};
  private caseStopsCache: Record<number, Stop[]> = {};
  private caseOnClose = () => this.caseHide();
  private caseOnPrev = () => this.caseStep(-1);
  private caseOnNext = () => this.caseStep(1);
  private caseOnKey = (e: KeyboardEvent<HTMLDivElement>) => this.caseKey(e);
  private caseOnBackdrop = (e: MouseEvent<HTMLDivElement>) => this.caseBackdrop(e);

  state: State = { works: this.worksStep.slice(), worksChecks: 0, caseAt: -1, caseReady: false, caseLeaving: false };

  componentDidMount() {
    this.caseStill = reducedMotion();
    this.worksMount();
  }

  componentDidUpdate() {
    this.caseUpdate();
  }

  componentWillUnmount() {
    this.worksUnmount();
    this.caseUnmount();
  }

  render() {
    return <WorkView v={this.renderVals()}>{this.props.children}</WorkView>;
  }

  renderVals(): WorkVals {
    return Object.assign({ agents: true }, this.worksVals(), this.caseVals()) as WorkVals;
  }

  /* ---------- WORKS: projects are built when they scroll into view ---------- */

  worksMount() {
    /* Reduced motion: the finished page straight away. */
    this.worksStill = reducedMotion();
    if (this.worksStill || typeof IntersectionObserver === "undefined") {
      this.worksAll();
      return;
    }
    this.worksIO = new IntersectionObserver(
      (entries) => {
        let added = false;
        entries.forEach((en) => {
          const i = this.worksIndexOf(en.target);
          if (i < 0) return;
          this.worksSeen[i] = !!en.isIntersecting;
          if (en.isIntersecting && this.worksStep[i] === 0 && this.worksQueue.indexOf(i) < 0) {
            this.worksQueue.push(i);
            added = true;
          }
        });
        if (added) {
          this.worksQueue.sort((a, b) => a - b);
          this.worksPump();
        }
      },
      { threshold: WORKS_SEEN },
    );
    this.worksRefs.forEach((r) => {
      if (r.current) this.worksIO!.observe(r.current);
    });
  }

  worksUnmount() {
    if (this.worksIO) this.worksIO.disconnect();
    this.worksIO = null;
    this.worksTimers.forEach((t) => clearTimeout(t));
    this.worksTimers = [];
    this.worksTicking = false;
  }

  worksIndexOf(el: Element) {
    for (let i = 0; i < this.worksRefs.length; i++) if (this.worksRefs[i].current === el) return i;
    return -1;
  }

  /* One timer, remembered so replay and unmount can cancel it. */
  worksLater(fn: () => void, ms: number) {
    const t = setTimeout(() => {
      const k = this.worksTimers.indexOf(t);
      if (k >= 0) this.worksTimers.splice(k, 1);
      fn();
    }, ms);
    this.worksTimers.push(t);
  }

  /* Start the clock if it is not running. One clock moves every project that is being built. */
  worksPump() {
    if (this.worksTicking) return;
    this.worksTicking = true;
    this.worksTick();
  }

  /* One build step: every project under construction moves on by one, and the next queued project may start.
     One setState per step. The motion between two steps is done by CSS transitions. */
  worksTick() {
    let changed = false,
      busy = false;
    for (let i = 0; i < WORKS.length; i++) {
      const s = this.worksStep[i];
      if (s > 0 && s < WORKS[i].n) {
        this.worksStep[i] = s + 1;
        changed = true;
      }
    }
    if (this.worksWait > 0) this.worksWait--;
    if (this.worksWait === 0) {
      let j = this.worksQueue.shift();
      while (j !== undefined && this.worksStep[j] !== 0) j = this.worksQueue.shift();
      if (j !== undefined) {
        this.worksStep[j] = 1;
        changed = true;
        this.worksWait = WORKS_EVERY;
      }
    }
    if (changed) this.setState({ works: this.worksStep.slice() });
    for (let i = 0; i < WORKS.length; i++) {
      const s = this.worksStep[i];
      if (s > 0 && s < WORKS[i].n) busy = true;
    }
    if (busy || this.worksQueue.length) {
      this.worksLater(() => this.worksTick(), WORKS_TICK);
    } else {
      this.worksTicking = false;
      this.worksWait = 0;
      this.worksAfter();
    }
  }

  /* When the last project is built, the four checks pass one after another. */
  worksAfter() {
    for (let k = 0; k < this.worksStep.length; k++) if (this.worksStep[k] < WORKS[k].n) return;
    if (this.worksChecksOn) return;
    this.worksChecksOn = true;
    [1, 2, 3, 4].forEach((n) => {
      this.worksLater(() => {
        this.worksChecks = n;
        this.setState({ worksChecks: n });
      }, n * WORKS_CHECK);
    });
  }

  /* No observer in this browser, or reduced motion: show everything built. */
  worksAll() {
    for (let i = 0; i < this.worksStep.length; i++) this.worksStep[i] = WORKS[i].n;
    this.worksChecks = 4;
    this.worksChecksOn = true;
    this.setState({ works: this.worksStep.slice(), worksChecks: 4 });
  }

  /* Back to dashed frames, then rebuild whatever is on screen. Projects further down build when they are reached. */
  worksReplay() {
    this.worksTimers.forEach((t) => clearTimeout(t));
    this.worksTimers = [];
    this.worksQueue = [];
    this.worksTicking = false;
    this.worksWait = 0;
    this.worksChecksOn = false;
    this.worksChecks = 0;
    for (let i = 0; i < this.worksStep.length; i++) this.worksStep[i] = 0;
    this.setState({ works: this.worksStep.slice(), worksChecks: 0 });
    this.worksLater(() => {
      for (let k = 0; k < this.worksStep.length; k++) if (this.worksSeen[k] || !this.worksIO) this.worksQueue.push(k);
      this.worksPump();
    }, 350);
  }

  /* Everything the markup of project i needs at step s. Kept until the step changes. */
  worksUnit(i: number, s: number): WorkUnit {
    const hit = this.worksCache[i];
    if (hit && hit.s === s) return hit.v;
    const w = WORKS[i],
      live = s > 0,
      done = s >= w.n;
    const v: Record<string, unknown> = {};
    /* Going back to queued is instant. Building is animated. */
    v.tr = live ? WORKS_TR : "none";
    v.tt = live ? WORKS_TT : "none";
    v.ctr = live ? WORKS_CTR : "none";
    v.dtr = live ? WORKS_DTR : "none";
    v.str = live ? WORKS_STR : "none";
    v.sh = worksMove(w.shell[0], s >= w.shell[1], done);
    for (const key of Object.keys(w.parts) as PartKey[]) {
      const part = w.parts[key]!;
      v[key] = worksMove(part[0], s >= part[1], done);
    }
    /* The dashed frame that waits for the build, and its "queued" label. */
    v.wire = live && !done ? w.color : "var(--perron-color-border-strong)";
    v.wireO = s >= w.shell[1] ? "0" : "1";
    v.tagO = live ? "0" : "1";
    /* The selection frame that is dragged out with the card. */
    const dragged = !!w.drag && s >= w.drag;
    v.dg = { w: dragged ? "100%" : "0%", h: dragged ? "100%" : "0%", o: dragged && s < w.drag + 2 ? "1" : "0" };
    /* The cursors: each stands where its latest path entry puts it. */
    w.curs.forEach((c, j) => {
      let at = c.path[0];
      for (const p of c.path) if (p[0] <= s) at = p;
      v["c" + j] = { x: at[1], y: at[2], o: s >= c.show && s < c.hide ? "1" : "0" };
    });
    /* The review line. */
    v.sw = { p: s >= w.sweep ? "100%" : "0%", o: s >= w.sweep && s < w.sweep + 2 ? "1" : "0" };
    v.okO = done ? "1" : "0";
    v.okT = done ? "scale(1)" : "scale(0.6)";
    v.dot = live ? "1" : "0.3";
    const unit = v as WorkUnit;
    this.worksCache[i] = { s, v: unit };
    return unit;
  }

  worksVals() {
    const steps = this.state.works;
    const checks = this.state.worksChecks;
    const out: Record<string, unknown> = {};
    let built = 0,
      started = 0;
    for (let i = 0; i < WORKS.length; i++) {
      const s = steps[i];
      if (s >= WORKS[i].n) built++;
      if (s > 0) started++;
      out["worksRef" + i] = this.worksRefs[i];
      out["wk" + i] = this.worksUnit(i, s);
    }
    const all = built === WORKS.length;
    const ck: Record<string, Check> = {};
    ["c1", "c2", "c3", "c4"].forEach((id, j) => {
      const passed = checks > j;
      const running = all && !passed && checks === j;
      ck[id] = {
        passed,
        running,
        pending: !passed && !running,
        color: passed
          ? "var(--perron-color-text-success)"
          : running
            ? "var(--perron-color-text-info)"
            : "var(--perron-color-text-secondary)",
        bg: passed
          ? "var(--perron-color-surface-success)"
          : running
            ? "var(--perron-color-surface-info)"
            : "transparent",
        line: passed || running ? "solid transparent" : "dashed var(--perron-color-border-strong)",
      };
    });
    out.worksCk = ck;
    out.worksCount = String(built);
    out.worksIsIdle = started === 0;
    out.worksIsBuilding = started > 0 && !all;
    out.worksIsChecking = all && checks < 4;
    out.worksIsVerified = all && checks >= 4;
    out.worksStatusColor = out.worksIsVerified
      ? "var(--perron-color-text-success)"
      : out.worksIsIdle
        ? "var(--perron-color-text-secondary)"
        : "var(--perron-color-text-info)";
    out.worksReplay = this.worksOnReplay;
    return out;
  }

  /* ---------- CASE: the project modals ---------- */

  caseUpdate() {
    const open = this.state.caseAt >= 0;
    if (open && !this.caseLive) {
      this.caseLive = true;
      this.caseSetup();
    } else if (!open && this.caseLive) {
      this.caseLive = false;
      this.caseTeardown();
    }
    if (!open) {
      this.caseSeen = -1;
      return;
    }
    if (this.caseSeen !== this.state.caseAt) {
      /* Another project: start at its top, and keep focus inside the dialog when the old project took it along. */
      const was = this.caseSeen;
      this.caseSeen = this.state.caseAt;
      const sc = this.caseScrollRef.current;
      const panel = this.casePanelRef.current;
      if (sc) sc.scrollTop = 0;
      if (was >= 0 && sc && panel && !panel.contains(document.activeElement)) sc.focus({ preventScroll: true });
    }
  }

  caseUnmount() {
    this.caseStopTimers();
    this.caseUnlockScroll();
    this.caseLive = false;
  }

  /* One timer, remembered so a new open, a close and unmount can cancel it. */
  caseLater(fn: () => void, ms: number) {
    const t = setTimeout(() => {
      const k = this.caseTimers.indexOf(t);
      if (k >= 0) this.caseTimers.splice(k, 1);
      fn();
    }, ms);
    this.caseTimers.push(t);
  }

  caseStopTimers() {
    this.caseTimers.forEach((t) => clearTimeout(t));
    this.caseTimers = [];
  }

  /* Open project i, or move to it when the modal is already open. */
  caseShow(i: number) {
    const mounted = this.state.caseAt >= 0;
    this.caseStopTimers();
    if (mounted) {
      this.setState({ caseAt: i, caseReady: true, caseLeaving: false });
      return;
    }
    const a = document.activeElement as HTMLElement | null;
    this.caseFrom = a && a !== document.body && a !== document.documentElement ? a : this.caseBtnRefs[i].current;
    this.setState({ caseAt: i, caseReady: false, caseLeaving: false });
  }

  caseStep(d: number) {
    const n = CASES.length,
      at = this.state.caseAt;
    if (at < 0) return;
    this.caseShow((at + d + n) % n);
  }

  /* Fade out, then take the modal off the page. */
  caseHide() {
    if (this.state.caseAt < 0 || this.state.caseLeaving) return;
    this.caseStopTimers();
    if (this.caseStill) {
      this.caseGone();
      return;
    }
    this.setState({ caseLeaving: true });
    this.caseLater(() => this.caseGone(), CASE_FADE);
  }

  caseGone() {
    this.setState({ caseAt: -1, caseReady: false, caseLeaving: false });
  }

  /* Runs once the modal is on the page: lock the page behind it, take focus and show it. */
  caseSetup() {
    const sc = this.caseScrollRef.current;
    this.caseSeen = this.state.caseAt;
    this.caseLockScroll();
    if (sc) sc.focus({ preventScroll: true });
    this.caseLater(() => this.caseReveal(), 20);
  }

  /* Show the modal. */
  caseReveal() {
    const el = this.caseOverlayRef.current;
    if (this.state.caseAt < 0 || this.state.caseLeaving) return;
    /* Reading the width makes the browser take in the hidden state first, so the fade has something to start from. */
    if (el) void el.offsetWidth;
    this.setState({ caseReady: true });
  }

  /* Runs once the modal is off the page: unlock the page and hand focus back. */
  caseTeardown() {
    const from = this.caseFrom;
    this.caseUnlockScroll();
    this.caseFrom = null;
    if (from && from.isConnected && typeof from.focus === "function") from.focus({ preventScroll: true });
  }

  /* The page behind the modal does not scroll. The padding stands in for the scrollbar, so nothing shifts sideways. */
  caseLockScroll() {
    if (this.caseLocked) return;
    const root = document.documentElement;
    const gap = window.innerWidth - root.clientWidth;
    this.caseLocked = { o: root.style.overflow, p: root.style.paddingRight };
    root.style.overflow = "hidden";
    if (gap > 0) root.style.paddingRight = gap + "px";
  }

  caseUnlockScroll() {
    if (!this.caseLocked) return;
    const root = document.documentElement;
    root.style.overflow = this.caseLocked.o;
    root.style.paddingRight = this.caseLocked.p;
    this.caseLocked = null;
  }

  /* A click anywhere on a project card opens its modal. Links and buttons keep their own job, and a text selection is left alone. */
  caseCard(i: number, e: MouseEvent<HTMLElement>) {
    const t = e.target as Element | null;
    if (e.defaultPrevented) return;
    if (t && t.closest && t.closest('a, button, input, select, textarea, [contenteditable="true"]')) return;
    const sel = window.getSelection ? window.getSelection() : null;
    if (sel && !sel.isCollapsed && String(sel).replace(/\s/g, "")) return;
    this.caseShow(i);
  }

  /* A click on the dimmed page closes the modal. A click inside the panel does not. */
  caseBackdrop(e: MouseEvent<HTMLDivElement>) {
    const t = e.target as Element | null;
    if (t && t.hasAttribute && t.hasAttribute("data-case-backdrop")) this.caseHide();
  }

  /* Keys inside the modal: Escape closes, the left and right arrows step through the projects, Tab stays inside. */
  caseKey(e: KeyboardEvent<HTMLDivElement>) {
    const t = e.target as HTMLElement | null,
      k = e.key;
    if (e.defaultPrevented) return;
    /* While text is being edited, the keys belong to the text. */
    if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName || ""))) return;
    if (k === "Escape" || k === "Esc") {
      e.preventDefault();
      e.stopPropagation();
      this.caseHide();
      return;
    }
    if ((k === "ArrowLeft" || k === "ArrowRight") && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
      e.preventDefault();
      this.caseStep(k === "ArrowLeft" ? -1 : 1);
      return;
    }
    if (k !== "Tab") return;
    const panel = this.casePanelRef.current;
    if (!panel) return;
    const list = panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex="0"]');
    if (!list.length) return;
    const first = list[0];
    const last = list[list.length - 1];
    const a = document.activeElement;
    if (e.shiftKey && (a === first || a === panel || !panel.contains(a))) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && (a === last || !panel.contains(a))) {
      e.preventDefault();
      first.focus();
    }
  }

  /* Which project block is shown. One object per project, kept. */
  caseIsFor(at: number): CaseIs {
    let hit = this.caseIsCache[at];
    if (hit) return hit;
    const o: Record<string, boolean> = {};
    for (let i = 0; i < CASES.length; i++) o["p" + i] = i === at;
    hit = o as CaseIs;
    this.caseIsCache[at] = hit;
    return hit;
  }

  /* The stops in the footer: the open project is the large one, in its own colour. */
  caseStopsFor(at: number): Stop[] {
    let hit = this.caseStopsCache[at];
    if (hit) return hit;
    hit = CASES.map((c, i) =>
      i === at
        ? { d: "14px", bg: "var(--perron-color-surface-raised)", bd: "3px solid " + c.color }
        : { d: "8px", bg: "var(--perron-color-border-control)", bd: "0 solid transparent" },
    );
    this.caseStopsCache[at] = hit;
    return hit;
  }

  caseVals() {
    const st = this.state,
      n = CASES.length;
    const at = st.caseAt;
    const shown = at >= 0 && st.caseReady && !st.caseLeaving;
    const out: Record<string, unknown> = {
      caseOn: at >= 0,
      caseIs: this.caseIsFor(at),
      caseO: shown ? "1" : "0",
      caseT: shown || this.caseStill ? "none" : "translateY(18px) scale(0.985)",
      caseMs: this.caseStill ? "0ms" : CASE_FADE + "ms",
      caseMoveMs: this.caseStill ? "0ms" : CASE_MOVE + "ms",
      caseBlur: "blur(6px)",
      caseBox: CASE_BOX,
      caseTitleId: "case-title-" + Math.max(at, 0),
      caseNo: String(at + 1),
      casePrevName: at >= 0 ? CASES[(at + n - 1) % n].name : "",
      caseNextName: at >= 0 ? CASES[(at + 1) % n].name : "",
      caseStops: this.caseStopsFor(at),
      caseOverlay: this.caseOverlayRef,
      casePanel: this.casePanelRef,
      caseScroll: this.caseScrollRef,
      caseBackdrop: this.caseOnBackdrop,
      caseKey: this.caseOnKey,
      caseClose: this.caseOnClose,
      casePrev: this.caseOnPrev,
      caseNext: this.caseOnNext,
    };
    for (let i = 0; i < n; i++) {
      out["caseBtn" + i] = this.caseBtnRefs[i];
      out["caseOpen" + i] = this.caseOpeners[i];
      out["caseCard" + i] = this.caseCardClicks[i];
    }
    return out;
  }
}
