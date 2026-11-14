"use client";

/* "Pull my face": the portrait in the hero.

   The photo is drawn on a 2D canvas as a mesh of 20 x 25 cells. Every mesh point is a small spring. Grabbing gives
   the points near the pointer a weight (a Gaussian around the grab point), dragging moves each point by its weight
   times the pull, and letting go lets the springs carry everything home with a wobble. Sizes all come from the
   portrait's own box. A scripted "visitor" cursor pulls the face now and then until a real person does.

   Ported from the Version E prototype: constants, physics and drawing are the prototype's. */

import { Component, createRef, type PointerEvent, type RefObject } from "react";
import { PortraitView } from "./PortraitView";

const FACE_COLS = 20,
  FACE_ROWS = 25; /* mesh cells across and down */
const FACE_SIGMA = 0.19; /* grab falloff, as a share of the photo width */
const FACE_LIMIT = 0.26; /* soft pull limit, as a share of the photo width */
const FACE_SQUEEZE = 0.25; /* no mesh triangle may shrink below this share of its area, so the mesh never folds */
const FACE_HOLD_FROM = 0.62; /* from this share of the photo height down, the grab weight fades */
const FACE_HOLD_TO = 0.96; /* from here down it is 0, so the flat cut at the bottom never moves */
const FACE_GROW = 0.6; /* px that every edge of a clip triangle moves outward, so no seams show */
const FACE_FADE = 0.06; /* below the circle's centre line, pixels outside the circle fade out over this share of the box width */
const FACE_STIFF = 150; /* spring stiffness */
const FACE_HOME = [1.02, 0.7]; /* where the visitor cursor waits, as a share of the box */
const FACE_PAUSE = 3200; /* ms between two visitor pulls */
const FACE_BACK_OFF = 4000; /* ms the visitor stays away after a real person lets go */
const FACE_REACH = 1; /* the prototype's "faceStretch" tweak, 0.4 to 1.6 */
const FACE_WOBBLE = 0.6; /* the prototype's "faceWobble" tweak, 0 to 1 */
const FACE_TINT = "#3DDC97";
/* The visitor's pulls. u, v: grab point as a share of the photo (1024 x 1284 px).
   dx, dy: pull as a share of the photo width, before the soft limit. */
const FACE_GHOST = [
  { u: 0.674, v: 0.483, dx: 0.2, dy: -0.05 } /* cheek, right of the nose */,
  { u: 0.518, v: 0.086, dx: -0.03, dy: -0.19 } /* hair */,
  { u: 0.376, v: 0.483, dx: -0.2, dy: 0.03 } /* the other cheek */,
  { u: 0.53, v: 0.65, dx: 0.02, dy: 0.16 } /* chin */,
];

/* A pull that gets harder the further you go and never passes the limit. */
function faceSoft(dx: number, dy: number, limit: number): [number, number] {
  const len = Math.sqrt(dx * dx + dy * dy);
  if (len < 0.001 || !(limit > 0)) return [0, 0];
  const s = (limit * (1 - Math.exp(-len / limit))) / len;
  return [dx * s, dy * s];
}
function faceEase(k: number) {
  k = k < 0 ? 0 : k > 1 ? 1 : k;
  return k * k * (3 - 2 * k);
}
function facePx(value: string, fallback: number) {
  const n = parseFloat(value);
  return isFinite(n) ? n : fallback;
}

export type PortraitVals = {
  faceBox: RefObject<HTMLDivElement | null>;
  faceDisc: RefObject<HTMLDivElement | null>;
  faceImg: RefObject<HTMLImageElement | null>;
  faceCanvas: RefObject<HTMLCanvasElement | null>;
  faceGhost: RefObject<HTMLDivElement | null>;
  faceDown: (e: PointerEvent<HTMLDivElement>) => void;
  faceMove: (e: PointerEvent<HTMLDivElement>) => void;
  faceUp: (e: PointerEvent<HTMLDivElement>) => void;
  faceLoaded: () => void;
  faceTint: string;
  faceImgOpacity: number;
};

export class Portrait extends Component<object, { faceLive: boolean }> {
  /* faceLive: the canvas has taken over from the still photo. */
  state = { faceLive: false };

  private faceBox = createRef<HTMLDivElement>();
  private faceDisc = createRef<HTMLDivElement>();
  private faceImg = createRef<HTMLImageElement>();
  private faceCanvas = createRef<HTMLCanvasElement>();
  private faceGhost = createRef<HTMLDivElement>();
  private faceDown = (e: PointerEvent<HTMLDivElement>) => this.facePointerDown(e);
  private faceMove = (e: PointerEvent<HTMLDivElement>) => this.facePointerMove(e);
  private faceUp = (e: PointerEvent<HTMLDivElement>) => this.facePointerUp(e);
  private faceLoaded = () => this.faceImageReady();
  private faceLoop = (now: number) => this.faceFrame(now);
  private facePull: [number, number] = [0, 0]; /* current pull in box px */
  private faceStart: [number, number] = [0, 0]; /* where the pointer went down */
  private faceCursor: [number, number] = [0, 0]; /* visitor cursor position */
  private faceFrom: [number, number] = [0, 0];
  private faceGrab = false; /* something holds the mesh: a person or the visitor */
  private faceUser = false; /* a real pointer is down */
  private facePointerId = -1;
  private faceGhostOn = false; /* the visitor is in the middle of a pull */
  private faceGhostFree = false; /* the visitor has let go in this run */
  private faceGhostIndex = 0;
  private faceGhostT0 = 0;
  private faceResumeAt = 0;
  private faceNear = 0; /* mesh point closest to the grab */
  private faceRaf = 0;
  private faceTimer: ReturnType<typeof setTimeout> | 0 = 0;
  private faceLast = 0;
  private faceReady = false; /* the photo has loaded */
  private faceShown = false; /* the canvas has drawn at least one frame */
  private faceBroken = false; /* the canvas failed: the still photo stays */
  private faceFlat = false; /* the canvas shows the plain photo, nothing to redraw */
  private faceVisible = true;
  private faceMounted = false;
  private faceStill = false; /* prefers-reduced-motion */

  /* elements and observers */
  private faceBoxEl: HTMLDivElement | null = null;
  private faceCv: HTMLCanvasElement | null = null;
  private faceImgEl: HTMLImageElement | null = null;
  private faceCtx: CanvasRenderingContext2D | null = null;
  private faceRO: ResizeObserver | null = null;
  private faceIO: IntersectionObserver | null = null;

  /* geometry */
  private faceW = 0;
  private faceH = 0;
  private faceCw = 0;
  private faceCh = 0;
  private facePadX = 0;
  private facePadY = 0;
  private faceSx = 1;
  private faceSy = 1;
  private faceIw = 1024;
  private faceIh = 1284;
  private faceDw = 0;
  private faceDh = 0;
  private faceOx = 0;
  private faceOy = 0;
  private faceMask: { cx: number; cy: number; r: number } | null = null;

  /* the mesh: rest position, position, velocity, grab weight, hold-down, source pixel */
  private faceX: Float64Array | null = null;
  private faceX0 = new Float64Array(0);
  private faceY0 = new Float64Array(0);
  private faceY = new Float64Array(0);
  private faceVx = new Float64Array(0);
  private faceVy = new Float64Array(0);
  private faceWt = new Float64Array(0);
  private faceHold = new Float64Array(0);
  private faceU = new Float64Array(0);
  private faceV = new Float64Array(0);

  componentDidMount() {
    this.faceMounted = true;
    this.faceStill = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    this.faceAttach();
  }

  componentDidUpdate() {
    this.faceAttach();
  }

  componentWillUnmount() {
    this.faceGhostStop(); /* clears the timer and hides the visitor */
    this.faceUser = false;
    this.faceGrab = false;
    this.facePull = [0, 0];
    this.faceMounted = false;
    this.faceDetach(); /* disconnects both observers */
    if (this.faceRaf) cancelAnimationFrame(this.faceRaf);
    this.faceRaf = 0;
  }

  render() {
    const v: PortraitVals = {
      faceBox: this.faceBox,
      faceDisc: this.faceDisc,
      faceImg: this.faceImg,
      faceCanvas: this.faceCanvas,
      faceGhost: this.faceGhost,
      faceDown: this.faceDown,
      faceMove: this.faceMove,
      faceUp: this.faceUp,
      faceLoaded: this.faceLoaded,
      faceTint: FACE_TINT,
      /* The <img> is the fallback. It hides once the canvas has drawn the same photo. */
      faceImgOpacity: this.state.faceLive ? 0 : 1,
    };
    return <PortraitView v={v} />;
  }

  /* Bind to the elements once they exist. Safe to call again: it only acts when they change. */
  faceAttach() {
    const box = this.faceBox.current,
      cv = this.faceCanvas.current,
      img = this.faceImg.current;
    if (!this.faceMounted || !box || !cv || !img) return;
    if (box === this.faceBoxEl && cv === this.faceCv && img === this.faceImgEl) return;
    this.faceDetach();
    this.faceBoxEl = box;
    this.faceCv = cv;
    this.faceImgEl = img;
    let ctx: CanvasRenderingContext2D | null = null;
    try {
      ctx = cv.getContext("2d");
    } catch {
      ctx = null;
    }
    this.faceCtx = ctx;
    if (!ctx) {
      this.faceBroken = true;
      return;
    }
    if (typeof ResizeObserver === "function") {
      this.faceRO = new ResizeObserver(() => this.faceMeasure());
      this.faceRO.observe(box);
    }
    if (typeof IntersectionObserver === "function") {
      this.faceIO = new IntersectionObserver((entries) => {
        this.faceVisible = entries[entries.length - 1].isIntersecting;
        if (this.faceVisible && !this.faceGhostOn && !this.faceTimer) this.faceSchedule(900);
      });
      this.faceIO.observe(box);
    }
    this.faceW = 0;
    this.faceMeasure();
    if (img.complete && img.naturalWidth > 0) this.faceImageReady();
    if (this.faceShown && !this.faceTimer && !this.faceGhostOn) this.faceSchedule(1400);
  }

  faceDetach() {
    if (this.faceRO) this.faceRO.disconnect();
    if (this.faceIO) this.faceIO.disconnect();
    this.faceRO = null;
    this.faceIO = null;
    this.faceBoxEl = null;
    this.faceCv = null;
    this.faceImgEl = null;
  }

  /* Read the box and canvas sizes, size the backing store, rebuild the mesh. */
  faceMeasure() {
    const box = this.faceBoxEl,
      cv = this.faceCv;
    if (!box || !cv || !this.faceCtx) return;
    const bs = getComputedStyle(box),
      cs = getComputedStyle(cv);
    const W = facePx(bs.width, box.clientWidth),
      H = facePx(bs.height, box.clientHeight);
    const CW = facePx(cs.width, cv.clientWidth),
      CH = facePx(cs.height, cv.clientHeight);
    if (!(W > 1 && H > 1 && CW > 1 && CH > 1)) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const bw = Math.max(1, Math.round(CW * dpr)),
      bh = Math.max(1, Math.round(CH * dpr));
    const same =
      !!this.faceX &&
      W === this.faceW &&
      H === this.faceH &&
      CW === this.faceCw &&
      CH === this.faceCh &&
      cv.width === bw &&
      cv.height === bh;
    if (same) return;
    this.faceW = W;
    this.faceH = H;
    this.faceCw = CW;
    this.faceCh = CH;
    /* The canvas is larger than the box. The pad is how far it reaches past the box on the left and top. */
    this.facePadX = -facePx(cs.left, (W - CW) / 2);
    this.facePadY = -facePx(cs.top, (H - CH) / 2);
    if (cv.width !== bw) cv.width = bw;
    if (cv.height !== bh) cv.height = bh;
    this.faceSx = bw / CW;
    this.faceSy = bh / CH;
    /* The brand circle behind the photo. Below its centre line the photo is cut to the circle. */
    this.faceMask = null;
    const disc = this.faceDisc.current;
    if (disc) {
      const ds = getComputedStyle(disc);
      const dw = facePx(ds.width, disc.offsetWidth),
        dh = facePx(ds.height, disc.offsetHeight);
      const dl = facePx(ds.left, disc.offsetLeft),
        dt = facePx(ds.top, disc.offsetTop);
      if (dw > 1 && dh > 1) this.faceMask = { cx: dl + dw / 2, cy: dt + dh / 2, r: Math.min(dw, dh) / 2 };
    }
    this.faceBuild();
    this.facePaint(false);
  }

  /* Lay the grid over the photo. Each point: rest position, position, velocity, grab weight, source pixel. */
  faceBuild() {
    const img = this.faceImgEl,
      cols = FACE_COLS,
      rows = FACE_ROWS,
      n = (cols + 1) * (rows + 1);
    const iw = (img && img.naturalWidth) || 1024,
      ih = (img && img.naturalHeight) || 1284;
    const fit = Math.min(this.faceW / iw, this.faceH / ih);
    this.faceIw = iw;
    this.faceIh = ih;
    this.faceDw = iw * fit; /* drawn size of the photo in the box */
    this.faceDh = ih * fit;
    this.faceOx = (this.faceW - this.faceDw) / 2; /* centred, standing on the bottom edge */
    this.faceOy = this.faceH - this.faceDh;
    if (!this.faceX || this.faceX.length !== n) {
      this.faceX0 = new Float64Array(n);
      this.faceY0 = new Float64Array(n);
      this.faceX = new Float64Array(n);
      this.faceY = new Float64Array(n);
      this.faceVx = new Float64Array(n);
      this.faceVy = new Float64Array(n);
      this.faceWt = new Float64Array(n);
      this.faceHold = new Float64Array(n);
      this.faceU = new Float64Array(n);
      this.faceV = new Float64Array(n);
    }
    for (let r = 0; r <= rows; r++) {
      const t = r / rows;
      const hold = 1 - faceEase((t - FACE_HOLD_FROM) / (FACE_HOLD_TO - FACE_HOLD_FROM));
      for (let c = 0; c <= cols; c++) {
        const i = r * (cols + 1) + c,
          s = c / cols;
        this.faceU[i] = s * iw;
        this.faceV[i] = t * ih;
        this.faceX0[i] = this.faceX[i] = this.faceOx + s * this.faceDw;
        this.faceY0[i] = this.faceY[i] = this.faceOy + t * this.faceDh;
        this.faceVx[i] = 0;
        this.faceVy[i] = 0;
        this.faceHold[i] = hold; /* 1 on the face, 0 on the bottom rows */
      }
    }
  }

  faceImageReady() {
    const img = this.faceImgEl || this.faceImg.current;
    if (!img || !(img.naturalWidth > 0)) return;
    this.faceReady = true;
    if (!this.faceCtx) return; /* not attached yet: faceAttach calls back */
    if (!this.faceW) this.faceMeasure();
    if (!this.faceW) return; /* not laid out yet: the ResizeObserver calls back */
    this.faceBuild();
    this.facePaint(false);
  }

  /* Grab at (gx, gy) in box px: Gaussian weight around the grab, times the hold-down at the bottom. */
  faceWeigh(gx: number, gy: number) {
    const sigma = FACE_SIGMA * this.faceDw * FACE_REACH,
      inv = 1 / (2 * sigma * sigma);
    const X0 = this.faceX0,
      Y0 = this.faceY0,
      Wt = this.faceWt,
      Hold = this.faceHold;
    let best = Infinity;
    for (let i = 0; i < X0.length; i++) {
      const ax = X0[i] - gx,
        ay = Y0[i] - gy,
        d = ax * ax + ay * ay;
      Wt[i] = Math.exp(-d * inv) * Hold[i];
      if (d < best) {
        best = d;
        this.faceNear = i;
      }
    }
  }

  /* How much of a pull is safe, 0 to 1. The warp is "rest + weight x pull", so a triangle's area changes
     by the factor 1 + pull . grad(weight): the most squeezed triangle must keep FACE_SQUEEZE of its area. */
  faceSafe(px: number, py: number) {
    const cols = FACE_COLS,
      rows = FACE_ROWS,
      stride = cols + 1,
      Wt = this.faceWt;
    const ix = (px * cols) / this.faceDw,
      iy = (py * rows) / this.faceDh;
    let worst = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const i = r * stride + c,
          a = Wt[i],
          b = Wt[i + 1],
          d = Wt[i + stride],
          e = Wt[i + stride + 1];
        const q1 = (b - a) * ix + (d - a) * iy; /* triangle: top left, top right, bottom left */
        const q2 = (e - d) * ix + (e - b) * iy; /* triangle: bottom right, bottom left, top right */
        if (q1 < worst) worst = q1;
        if (q2 < worst) worst = q2;
      }
    }
    let safe = worst < FACE_SQUEEZE - 1 ? (FACE_SQUEEZE - 1) / worst : 1;
    /* Second guard: no moving point may leave the canvas, which is larger than the box by the pad. */
    const X0 = this.faceX0,
      Y0 = this.faceY0;
    const left = 1 - this.facePadX,
      right = this.faceCw - this.facePadX - 1,
      top = 1 - this.facePadY,
      bottom = this.faceCh - this.facePadY - 1;
    for (let n = 0; n < Wt.length; n++) {
      if (Wt[n] < 0.02) continue;
      const mx = Wt[n] * px,
        my = Wt[n] * py;
      if (mx > 0) safe = Math.min(safe, (right - X0[n]) / mx);
      else if (mx < 0) safe = Math.min(safe, (left - X0[n]) / mx);
      if (my > 0) safe = Math.min(safe, (bottom - Y0[n]) / my);
      else if (my < 0) safe = Math.min(safe, (top - Y0[n]) / my);
    }
    return safe > 0 ? safe : 0;
  }

  /* Set the pull from a raw drag (box px): soft limit first, then the fold guard. */
  facePullTo(dx: number, dy: number) {
    const p = faceSoft(dx, dy, FACE_LIMIT * this.faceDw * FACE_REACH);
    const s = this.faceSafe(p[0], p[1]);
    this.facePull = [p[0] * s, p[1] * s];
  }

  /* One spring step for every point. Returns true while anything still moves. */
  faceStep(dt: number) {
    const k = FACE_STIFF,
      c = this.faceGrab ? 20 : this.faceStill ? 24 : 22 - 16 * FACE_WOBBLE;
    const px = this.facePull[0],
      py = this.facePull[1];
    let busy = 0;
    const X0 = this.faceX0,
      Y0 = this.faceY0,
      X = this.faceX!,
      Y = this.faceY,
      Vx = this.faceVx,
      Vy = this.faceVy,
      Wt = this.faceWt;
    for (let i = 0; i < X.length; i++) {
      const tx = X0[i] + Wt[i] * px,
        ty = Y0[i] + Wt[i] * py;
      const vx = Vx[i] + (k * (tx - X[i]) - c * Vx[i]) * dt;
      const vy = Vy[i] + (k * (ty - Y[i]) - c * Vy[i]) * dt;
      Vx[i] = vx;
      Vy[i] = vy;
      X[i] += vx * dt;
      Y[i] += vy * dt;
      const off = Math.abs(tx - X[i]) + Math.abs(ty - Y[i]) + (Math.abs(vx) + Math.abs(vy)) * 0.03;
      if (off > busy) busy = off;
    }
    return busy > 0.06;
  }

  faceRest() {
    const X0 = this.faceX0,
      Y0 = this.faceY0,
      X = this.faceX!,
      Y = this.faceY,
      Vx = this.faceVx,
      Vy = this.faceVy;
    for (let i = 0; i < X.length; i++) {
      X[i] = X0[i];
      Y[i] = Y0[i];
      Vx[i] = 0;
      Vy[i] = 0;
    }
  }

  /* One textured triangle. a, b, c are mesh point indexes.
     Clip to the destination triangle, set the affine map source -> destination, draw the whole photo. */
  faceTri(ctx: CanvasRenderingContext2D, img: HTMLImageElement, a: number, b: number, c: number) {
    const X = this.faceX!,
      Y = this.faceY,
      U = this.faceU,
      V = this.faceV;
    const ax = X[a],
      ay = Y[a],
      bx = X[b] - ax,
      by = Y[b] - ay,
      cx = X[c] - ax,
      cy = Y[c] - ay;
    if (bx * cy - cx * by < 0.5) return; /* collapsed or folded over: skip it */
    const au = U[a],
      av = V[a],
      bu = U[b] - au,
      bv = V[b] - av,
      cu = U[c] - au,
      cv = V[c] - av;
    const det = bu * cv - cu * bv;
    const m11 = (bx * cv - cx * bv) / det,
      m12 = (by * cv - cy * bv) / det;
    const m21 = (cx * bu - bx * cu) / det,
      m22 = (cy * bu - by * cu) / det;
    /* Grow the clip: move each edge outward along its normal by FACE_GROW, with the corner miter capped. */
    const l0 = Math.sqrt(bx * bx + by * by) || 1;
    const l1 = Math.sqrt((cx - bx) * (cx - bx) + (cy - by) * (cy - by)) || 1;
    const l2 = Math.sqrt(cx * cx + cy * cy) || 1;
    const n0x = by / l0,
      n0y = -bx / l0; /* edge a to b */
    const n1x = (cy - by) / l1,
      n1y = (bx - cx) / l1; /* edge b to c */
    const n2x = -cy / l2,
      n2y = cx / l2; /* edge c to a */
    const k0 = FACE_GROW / Math.max(0.03, 1 + n2x * n0x + n2y * n0y);
    const k1 = FACE_GROW / Math.max(0.03, 1 + n0x * n1x + n0y * n1y);
    const k2 = FACE_GROW / Math.max(0.03, 1 + n1x * n2x + n1y * n2y);
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(ax + (n2x + n0x) * k0, ay + (n2y + n0y) * k0);
    ctx.lineTo(ax + bx + (n0x + n1x) * k1, ay + by + (n0y + n1y) * k1);
    ctx.lineTo(ax + cx + (n1x + n2x) * k2, ay + cy + (n1y + n2y) * k2);
    ctx.closePath();
    ctx.clip();
    ctx.transform(m11, m12, m21, m22, ax - m11 * au - m21 * av, ay - m12 * au - m22 * av);
    ctx.drawImage(img, 0, 0, this.faceIw, this.faceIh);
    ctx.restore();
  }

  /* Draw the photo: plain when at rest, as the warped mesh otherwise. */
  faceDraw(warped: boolean) {
    const ctx = this.faceCtx!,
      cv = this.faceCv!,
      img = this.faceImgEl!;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, cv.width, cv.height);
    /* From here on, coordinates are box px. */
    ctx.setTransform(this.faceSx, 0, 0, this.faceSy, this.facePadX * this.faceSx, this.facePadY * this.faceSy);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    if (!warped) {
      ctx.drawImage(img, this.faceOx, this.faceOy, this.faceDw, this.faceDh);
    } else {
      const cols = FACE_COLS,
        rows = FACE_ROWS,
        stride = cols + 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * stride + c;
          this.faceTri(ctx, img, i, i + 1, i + stride); /* top left, top right, bottom left */
          this.faceTri(ctx, img, i + stride + 1, i + stride, i + 1); /* bottom right, bottom left, top right */
        }
      }
    }
    /* Above the circle's centre line everything shows, so the stretched face may pass the circle's edge.
       Below it only the inside of the circle shows, so the flat cut of the shoulders is never seen.
       Erase the rest: the area under the centre line minus the lower half of the circle (even-odd),
       with a short fade so stretched skin that hangs outside the circle is not sliced off. */
    const m = this.faceMask;
    if (m) {
      const fade = ctx.createLinearGradient(0, m.cy, 0, m.cy + FACE_FADE * this.faceW);
      fade.addColorStop(0, "rgba(10,12,16,0)");
      fade.addColorStop(1, "rgba(10,12,16,1)");
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = fade;
      ctx.beginPath();
      ctx.rect(-this.facePadX, m.cy, this.faceCw, this.faceCh - this.facePadY - m.cy);
      ctx.moveTo(m.cx + m.r, m.cy);
      ctx.arc(m.cx, m.cy, m.r, 0, Math.PI);
      ctx.closePath();
      ctx.fill("evenodd");
      ctx.globalCompositeOperation = "source-over";
    }
  }

  /* Draw, and on the first good frame swap the still photo for the canvas. */
  facePaint(warped: boolean) {
    if (!this.faceReady || this.faceBroken || !this.faceCtx || !this.faceX || !this.faceW) return;
    try {
      this.faceDraw(warped);
    } catch {
      /* The canvas could not draw the photo. Give the still photo back and stop. */
      this.faceBroken = true;
      this.faceGhostStop();
      try {
        this.faceCtx.setTransform(1, 0, 0, 1, 0, 0);
        this.faceCtx.clearRect(0, 0, this.faceCv!.width, this.faceCv!.height);
      } catch {}
      if (this.faceShown && this.faceMounted) {
        this.faceShown = false;
        this.setState({ faceLive: false });
      }
      return;
    }
    this.faceFlat = !warped;
    if (!this.faceShown && this.faceMounted) {
      this.faceShown = true;
      this.setState({ faceLive: true });
      this.faceSchedule(1400);
    }
  }

  /* The one animation loop. It stops itself when every point is at rest. */
  faceWake() {
    if (this.faceRaf || !this.faceMounted) return;
    this.faceLast = performance.now();
    this.faceRaf = requestAnimationFrame(this.faceLoop);
  }

  faceFrame(now: number) {
    this.faceRaf = 0;
    if (!this.faceMounted || !this.faceReady || this.faceBroken || !this.faceX) return;
    const dt = Math.max(0.001, Math.min(0.033, (now - this.faceLast) / 1000));
    this.faceLast = now;
    this.faceGhostStep(now);
    const moving = this.faceStep(dt);
    if (moving) this.facePaint(true);
    else if (!this.faceGrab && !this.faceFlat) {
      this.faceRest();
      this.facePaint(false);
    }
    if (moving || this.faceGrab || this.faceGhostOn) this.faceRaf = requestAnimationFrame(this.faceLoop);
  }

  /* Pointer position in box px. Works when the page is scaled. */
  facePoint(e: PointerEvent): [number, number] | null {
    const el = this.faceBoxEl;
    if (!el || !this.faceW) return null;
    const r = el.getBoundingClientRect();
    if (!(r.width > 0 && r.height > 0)) return null;
    return [((e.clientX - r.left) * this.faceW) / r.width, ((e.clientY - r.top) * this.faceH) / r.height];
  }

  facePointerDown(e: PointerEvent<HTMLDivElement>) {
    if (!this.faceShown || this.faceBroken) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;
    const p = this.facePoint(e);
    if (!p) return;
    this.faceGhostStop();
    this.faceUser = true;
    this.facePointerId = e.pointerId;
    this.faceStart = p;
    this.faceWeigh(p[0], p[1]);
    this.faceGrab = true;
    this.facePull = [0, 0];
    const el = e.currentTarget;
    if (el && el.setPointerCapture) {
      try {
        el.setPointerCapture(e.pointerId);
      } catch {}
    }
    if (el && el.style) el.style.cursor = "grabbing";
    if (e.cancelable) e.preventDefault();
    this.faceWake();
  }

  facePointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!this.faceUser || e.pointerId !== this.facePointerId) return;
    const p = this.facePoint(e);
    if (!p) return;
    this.facePullTo(p[0] - this.faceStart[0], p[1] - this.faceStart[1]);
    this.faceWake();
  }

  facePointerUp(e: PointerEvent<HTMLDivElement>) {
    if (!this.faceUser || (e && e.pointerId !== this.facePointerId)) return;
    this.faceUser = false;
    this.facePointerId = -1;
    this.faceGrab = false;
    this.facePull = [0, 0];
    this.faceResumeAt = performance.now() + FACE_BACK_OFF;
    if (this.faceBoxEl) this.faceBoxEl.style.cursor = "grab";
    this.faceSchedule(FACE_BACK_OFF);
    this.faceWake();
  }

  /* ---------- the scripted visitor ---------- */

  faceAuto() {
    return this.faceMounted && !this.faceStill;
  }

  /* One timer, no ticking: wake the visitor after ms. */
  faceSchedule(ms: number) {
    if (this.faceTimer) clearTimeout(this.faceTimer);
    this.faceTimer = 0;
    if (!this.faceAuto()) return;
    this.faceTimer = setTimeout(() => {
      this.faceTimer = 0;
      this.faceGhostStart();
    }, ms);
  }

  faceGhostStart() {
    if (!this.faceAuto() || this.faceGhostOn || this.faceUser) return;
    if (!this.faceShown || this.faceBroken || !this.faceVisible) return;
    const now = performance.now();
    if (now < this.faceResumeAt) {
      this.faceSchedule(this.faceResumeAt - now + 60);
      return;
    }
    this.faceGhostOn = true;
    this.faceGhostFree = false;
    this.faceGhostT0 = now;
    this.faceWake();
  }

  faceGhostStop() {
    if (this.faceTimer) clearTimeout(this.faceTimer);
    this.faceTimer = 0;
    if (this.faceGhostOn) {
      this.faceGhostOn = false;
      if (!this.faceUser && this.faceGrab) {
        this.faceGrab = false;
        this.facePull = [0, 0];
      }
    }
    const el = this.faceGhost.current;
    if (el) el.style.opacity = "0";
  }

  /* The visitor: move in, grab, pull, hold, let go, watch the wobble, leave. */
  faceGhostStep(now: number) {
    if (!this.faceGhostOn) return;
    const g = FACE_GHOST[this.faceGhostIndex % FACE_GHOST.length];
    const s = (now - this.faceGhostT0) / 1000;
    const gx = this.faceOx + g.u * this.faceDw,
      gy = this.faceOy + g.v * this.faceDh;
    const hx = FACE_HOME[0] * this.faceW,
      hy = FACE_HOME[1] * this.faceH;
    const cur = this.faceCursor,
      from = this.faceFrom;
    let alpha = 1,
      k: number;
    if (s < 0.7) {
      k = faceEase(s / 0.7);
      cur[0] = hx + (gx - hx) * k;
      cur[1] = hy + (gy - hy) * k;
      alpha = Math.min(1, s / 0.25);
    } else if (s < 2.35) {
      if (!this.faceGrab) {
        this.faceWeigh(gx, gy);
        this.faceGrab = true;
      }
      k = 1 - Math.pow(1 - Math.min(1, (s - 0.7) / 1.3), 3);
      const unit = this.faceDw * FACE_REACH;
      this.facePullTo(g.dx * unit * k, g.dy * unit * k);
      /* Ride the grabbed point, so the cursor stays on the skin it holds. */
      const n = this.faceNear;
      cur[0] = gx + this.faceX![n] - this.faceX0[n];
      cur[1] = gy + this.faceY[n] - this.faceY0[n];
    } else {
      if (!this.faceGhostFree) {
        this.faceGhostFree = true;
        this.faceGrab = false;
        this.facePull = [0, 0];
        from[0] = cur[0];
        from[1] = cur[1];
      }
      if (s >= 3.85) {
        this.faceGhostOn = false;
        this.faceGhostIndex++;
        alpha = 0;
        this.faceSchedule(FACE_PAUSE);
      } else if (s >= 3.25) {
        k = faceEase((s - 3.25) / 0.6);
        cur[0] = from[0] + (hx - from[0]) * k;
        cur[1] = from[1] + (hy - from[1]) * k;
        alpha = 1 - k;
      }
    }
    const el = this.faceGhost.current;
    if (el) {
      el.style.transform = "translate(" + (cur[0] - 2).toFixed(1) + "px," + (cur[1] - 2).toFixed(1) + "px)";
      el.style.opacity = alpha < 0.01 ? "0" : alpha.toFixed(2);
    }
  }
}
