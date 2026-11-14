"use client";

/* The Contact section with the lanyard badge: it hangs from a strap at the card's top edge, sways on its own,
   swings like a damped pendulum when dragged, leans toward the pointer and flips on a tap.
   Ported from the Version E prototype: constants and physics are the prototype's. */

import { Component, createRef, type PointerEvent, type RefObject } from "react";
import { ContactView } from "./ContactView";

const BADGE_FIT_W = 354; // design px the unit wants: the 330 px badge plus 12 px each side
const BADGE_STAGE_H = 730; // design px from the top of the unit's box to under the badge
const BADGE_CENTRE_Y = 480; // design px from the top of the unit's box to the badge centre
const BADGE_CLICK_PX = 6; // a press that travels less than this is a click, more is a drag
const BADGE_OMEGA2 = 21.7; // (2 * PI / 1.35 s) squared: one full swing takes about 1.35 s
const BADGE_DAMP = 1.4; // per second: the swing loses half its width in about a second
const BADGE_MAX_ANGLE = 0.9; // rad: a drag pulls the badge toward this angle and never past it (about 50 degrees)
const BADGE_MAX_VEL = 4; // rad per second: cap on the speed a flick hands to the pendulum
const BADGE_WALL = 1.1; // rad: a free swing never goes past this, it bounces back softly
const BADGE_TILT_X = 8; // deg: most the card leans up or down toward the pointer
const BADGE_TILT_Y = 12; // deg: most the card turns left or right toward the pointer
const BADGE_TILT_REACH = 520; // px from the badge centre at which the tilt reaches its most
const BADGE_BARS = [
  2, 1, 3, 1, 2, 2, 1, 3, 1, 1, 2, 3, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 2, 3, 1, 1, 2, 1, 3, 2, 1, 2, 1, 3,
];
const BADGE_STRAP = "#3DDC97";
const BADGE_PHOTO = "#4C8DFF";

function badgeClamp(v: number, lo: number, hi: number) {
  return v < lo ? lo : v > hi ? hi : v;
}

type Press = { id: number; x0: number; y0: number; x: number; y: number; phi: number; grab: number; drag: boolean };
type Div = RefObject<HTMLDivElement | null>;

export type ContactVals = {
  badgeStrap: string;
  badgePhoto: string;
  badgeSwayAnim: string;
  badgeFlipped: boolean;
  badgeFlipTf: string;
  badgeFlipMs: string;
  badgeBars: { w: number }[];
  badgeRuler: Div;
  badgeStage: Div;
  badgeScaler: Div;
  badgeSway: Div;
  badgeArm: Div;
  badgePivot: RefObject<HTMLSpanElement | null>;
  badgeBtn: RefObject<HTMLButtonElement | null>;
  badgeTilt: RefObject<HTMLSpanElement | null>;
  badgeDown: (e: PointerEvent) => void;
  badgeMove: (e: PointerEvent) => void;
  badgeUp: (e: PointerEvent) => void;
  badgeFlip: () => void;
  badgeHover: (e: PointerEvent) => void;
  badgeLeave: () => void;
};

export class Contact extends Component<object, { badgeFlipped: boolean; badgeReduced: boolean }> {
  state = { badgeFlipped: false, badgeReduced: false };

  private badgeRulerRef = createRef<HTMLDivElement>();
  private badgeStageRef = createRef<HTMLDivElement>();
  private badgeScalerRef = createRef<HTMLDivElement>();
  private badgeSwayRef = createRef<HTMLDivElement>();
  private badgeArmRef = createRef<HTMLDivElement>();
  private badgePivotRef = createRef<HTMLSpanElement>();
  private badgeBtnRef = createRef<HTMLButtonElement>();
  private badgeTiltRef = createRef<HTMLSpanElement>();
  private badgeAngle = 0; // rad, rotation of the arm around the pivot (CSS direction)
  private badgeVel = 0; // rad per second
  private badgeTiltX = 0; // deg, where the card is
  private badgeTiltY = 0;
  private badgeTiltTX = 0; // deg, where the card is heading
  private badgeTiltTY = 0;
  private badgeScale = 1;
  private badgeFit = false; // the ruler has been measured at least once
  private badgeBarList = BADGE_BARS.map((w) => ({ w })); // built once
  private badgePress: Press | null = null; // the pointer that is down on the badge, if any
  private badgeSkipClick = false;
  private badgeDragEndAt = -1e9;
  private badgeRaf = 0;
  private badgeLast = 0;
  private badgeLive = false;
  private badgeRO: ResizeObserver | null = null;
  private badgeWatched: Element | null = null;
  private badgeMq: MediaQueryList | null = null;
  private badgeReduced = false;
  private badgeTick = (now: number) => this.badgeFrame(now);
  private badgeOnDown = (e: PointerEvent) => this.badgeDown(e);
  private badgeOnMove = (e: PointerEvent) => this.badgeMove(e);
  private badgeOnUp = (e: PointerEvent) => this.badgeEnd(e);
  private badgeOnFlip = () => this.badgeToggle();
  private badgeOnHover = (e: PointerEvent) => this.badgeHover(e);
  private badgeOnLeave = () => this.badgeLeave();
  private badgeMqFn = () => {
    this.badgeReduced = !!this.badgeMq?.matches;
    this.badgeTiltTX = 0;
    this.badgeTiltTY = 0;
    this.setState({ badgeReduced: this.badgeReduced });
    this.badgeWake();
  };

  componentDidMount() {
    this.badgeLive = true;
    if (window.matchMedia) {
      this.badgeMq = window.matchMedia("(prefers-reduced-motion: reduce)");
      this.badgeReduced = this.badgeMq.matches;
      if (this.badgeReduced) this.setState({ badgeReduced: true });
      this.badgeMq.addEventListener?.("change", this.badgeMqFn);
    }
    if (typeof ResizeObserver !== "undefined") {
      this.badgeRO = new ResizeObserver(() => this.badgeLayout());
    }
    this.badgeWatch();
    this.badgeLayout();
    this.badgeApply();
  }

  componentDidUpdate() {
    // A render can reset an element's inline style, so put back what the loop writes by ref. No measuring here:
    // the ResizeObserver reports every real change of width. badgeSize and badgeApply only write.
    this.badgeWatch();
    if (this.badgeRO && this.badgeFit) this.badgeSize();
    else this.badgeLayout();
    this.badgeApply();
  }

  componentWillUnmount() {
    this.badgeLive = false;
    if (this.badgeRaf) cancelAnimationFrame(this.badgeRaf);
    this.badgeRaf = 0;
    if (this.badgeRO) this.badgeRO.disconnect();
    this.badgeRO = null;
    this.badgeWatched = null;
    this.badgeMq?.removeEventListener?.("change", this.badgeMqFn);
    this.badgePress = null;
  }

  render() {
    return <ContactView v={this.badgeVals()} />;
  }

  badgeVals(): ContactVals {
    const flipped = this.state.badgeFlipped;
    const reduced = this.state.badgeReduced;
    return {
      badgeStrap: BADGE_STRAP,
      badgePhoto: BADGE_PHOTO,
      badgeSwayAnim: reduced ? "none" : "badgeSway 5.6s ease-in-out -2.8s infinite alternate",
      badgeFlipped: flipped,
      badgeFlipTf: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
      badgeFlipMs: reduced ? "0ms" : "620ms",
      badgeBars: this.badgeBarList,
      badgeRuler: this.badgeRulerRef,
      badgeStage: this.badgeStageRef,
      badgeScaler: this.badgeScalerRef,
      badgeSway: this.badgeSwayRef,
      badgeArm: this.badgeArmRef,
      badgePivot: this.badgePivotRef,
      badgeBtn: this.badgeBtnRef,
      badgeTilt: this.badgeTiltRef,
      badgeDown: this.badgeOnDown,
      badgeMove: this.badgeOnMove,
      badgeUp: this.badgeOnUp,
      badgeFlip: this.badgeOnFlip,
      badgeHover: this.badgeOnHover,
      badgeLeave: this.badgeOnLeave,
    };
  }

  /* ---------- size from its own container ---------- */
  badgeWatch() {
    // The ruler is a zero-height line as wide as the unit, so the observer only fires on width.
    const ruler = this.badgeRulerRef.current;
    if (!this.badgeRO || ruler === this.badgeWatched) return;
    if (this.badgeWatched) this.badgeRO.unobserve(this.badgeWatched);
    this.badgeWatched = ruler;
    if (ruler) this.badgeRO.observe(ruler);
  }

  // Measure the ruler and work out the scale. Called on mount and by the ResizeObserver.
  badgeLayout() {
    const ruler = this.badgeRulerRef.current;
    if (!ruler) return;
    const w = ruler.clientWidth;
    if (!w) return;
    this.badgeScale = badgeClamp(w / BADGE_FIT_W, 0.5, 1);
    this.badgeFit = true;
    this.badgeSize();
  }

  // Write the size the last measurement gave. It reads nothing from layout, so it is free to call after every render.
  badgeSize() {
    const stage = this.badgeStageRef.current,
      scaler = this.badgeScalerRef.current,
      s = this.badgeScale;
    if (!stage || !scaler) return;
    stage.style.height = Math.round(BADGE_STAGE_H * s) + "px";
    scaler.style.transform = "scale(" + s.toFixed(4) + ")";
  }

  /* ---------- one animation loop, asleep when nothing moves ---------- */
  badgeApply() {
    const arm = this.badgeArmRef.current,
      tilt = this.badgeTiltRef.current;
    if (arm) arm.style.transform = "rotate(" + (this.badgeAngle * 57.29578).toFixed(3) + "deg)";
    if (tilt)
      tilt.style.transform =
        "rotateX(" + this.badgeTiltX.toFixed(2) + "deg) rotateY(" + this.badgeTiltY.toFixed(2) + "deg)";
  }

  badgeWake() {
    if (this.badgeRaf || !this.badgeLive) return;
    this.badgeLast = performance.now();
    this.badgeRaf = requestAnimationFrame(this.badgeTick);
  }

  badgeFrame(now: number) {
    this.badgeRaf = 0;
    if (!this.badgeLive) return;
    const dt = badgeClamp((now - this.badgeLast) / 1000, 0.001, 0.034);
    this.badgeLast = now;
    const p = this.badgePress;
    let a = this.badgeAngle,
      v = this.badgeVel,
      busy = false;

    if (p && p.drag) {
      // Held: the arm follows the pointer's angle around the pivot, and we remember how fast it moved.
      // tanh makes the strap feel elastic: one to one near the middle, then it resists.
      const target = BADGE_MAX_ANGLE * Math.tanh((p.phi - p.grab) / BADGE_MAX_ANGLE);
      const next = a + (target - a) * (1 - Math.exp(-dt * 30));
      v = v * 0.55 + ((next - a) / dt) * 0.45;
      a = next;
      if (Math.abs(target - a) > 0.0004) busy = true;
      else {
        a = target;
        v = 0;
      }
    } else if (this.badgeReduced) {
      // Reduced motion: glide straight back, no swinging.
      a += (0 - a) * (1 - Math.exp(-dt * 10));
      v = 0;
      if (Math.abs(a) > 0.001) busy = true;
      else a = 0;
    } else if (a !== 0 || v !== 0) {
      // Free: a damped pendulum, stepped in small slices so it stays stable on slow frames.
      const n = Math.ceil(dt / 0.004),
        h = dt / n;
      for (let i = 0; i < n; i++) {
        v += (-BADGE_OMEGA2 * Math.sin(a) - BADGE_DAMP * v) * h;
        a += v * h;
        if (a > BADGE_WALL) {
          a = BADGE_WALL;
          v = -0.3 * v;
        } else if (a < -BADGE_WALL) {
          a = -BADGE_WALL;
          v = -0.3 * v;
        }
      }
      if (Math.abs(a) < 0.001 && Math.abs(v) < 0.006) {
        a = 0;
        v = 0;
      } else busy = true;
    }
    this.badgeAngle = a;
    this.badgeVel = v;

    // Tilt eases toward its target in the same loop.
    const k = 1 - Math.exp(-dt * 9),
      tx = this.badgeTiltTX,
      ty = this.badgeTiltTY;
    this.badgeTiltX += (tx - this.badgeTiltX) * k;
    this.badgeTiltY += (ty - this.badgeTiltY) * k;
    if (Math.abs(tx - this.badgeTiltX) > 0.02 || Math.abs(ty - this.badgeTiltY) > 0.02) busy = true;
    else {
      this.badgeTiltX = tx;
      this.badgeTiltY = ty;
    }

    this.badgeApply();
    if (busy) this.badgeRaf = requestAnimationFrame(this.badgeTick);
  }

  /* ---------- pointer input ---------- */
  badgeAim(p: Press) {
    // Angle of the pointer around the pivot, in the direction CSS rotate() turns, kept continuous.
    const pivot = this.badgePivotRef.current;
    if (!pivot) return;
    const r = pivot.getBoundingClientRect();
    const phi = Math.atan2(r.left + r.width / 2 - p.x, p.y - (r.top + r.height / 2));
    const d = phi - p.phi;
    p.phi += d - 6.283185307 * Math.round(d / 6.283185307);
  }

  badgeDown(e: PointerEvent) {
    if (this.badgePress || e.button !== 0 || e.isPrimary === false) return;
    this.badgeSkipClick = false;
    this.badgePress = {
      id: e.pointerId,
      x0: e.clientX,
      y0: e.clientY,
      x: e.clientX,
      y: e.clientY,
      phi: 0,
      grab: 0,
      drag: false,
    };
    const btn = this.badgeBtnRef.current;
    if (btn && btn.setPointerCapture) {
      try {
        btn.setPointerCapture(e.pointerId);
      } catch {}
    }
  }

  badgeMove(e: PointerEvent) {
    const p = this.badgePress;
    if (!p || e.pointerId !== p.id) return;
    p.x = e.clientX;
    p.y = e.clientY;
    if (!p.drag) {
      const dx = p.x - p.x0,
        dy = p.y - p.y0;
      if (dx * dx + dy * dy < BADGE_CLICK_PX * BADGE_CLICK_PX) return;
      // Past the click distance: this press is a drag. Grab the arm where it is, so nothing jumps
      // (atanh undoes the tanh that the loop applies to the pull).
      p.drag = true;
      this.badgeAim(p);
      p.grab = p.phi - BADGE_MAX_ANGLE * Math.atanh(badgeClamp(this.badgeAngle / BADGE_MAX_ANGLE, -0.98, 0.98));
      this.badgeVel = 0;
      const sway = this.badgeSwayRef.current,
        btn = this.badgeBtnRef.current;
      if (sway) sway.style.animationPlayState = "paused";
      if (btn) btn.style.cursor = "grabbing";
    } else {
      this.badgeAim(p);
    }
    this.badgeWake();
  }

  badgeEnd(e: PointerEvent) {
    const p = this.badgePress;
    if (!p || (e && e.pointerId !== p.id)) return;
    this.badgePress = null;
    if (!p.drag) return; // a click: the button's own click event does the flip
    this.badgeSkipClick = true;
    this.badgeDragEndAt = performance.now();
    this.badgeVel = badgeClamp(this.badgeVel, -BADGE_MAX_VEL, BADGE_MAX_VEL);
    const sway = this.badgeSwayRef.current,
      btn = this.badgeBtnRef.current;
    if (sway) sway.style.animationPlayState = "running";
    if (btn) btn.style.cursor = "grab";
    this.badgeWake();
  }

  badgeToggle() {
    // The click that a browser sends at the end of a drag is not a flip. Keyboard clicks always are.
    if (this.badgeSkipClick && performance.now() - this.badgeDragEndAt < 500) {
      this.badgeSkipClick = false;
      return;
    }
    this.badgeSkipClick = false;
    this.setState((s) => ({ badgeFlipped: !s.badgeFlipped }));
  }

  badgeHover(e: PointerEvent) {
    if (this.badgeReduced) return;
    const stage = this.badgeStageRef.current;
    if (!stage) return;
    const r = stage.getBoundingClientRect();
    if (!r.width) return;
    const nx = (e.clientX - (r.left + r.width / 2)) / BADGE_TILT_REACH;
    const ny = (e.clientY - (r.top + BADGE_CENTRE_Y * this.badgeScale)) / BADGE_TILT_REACH;
    this.badgeTiltTY = badgeClamp(nx, -1, 1) * BADGE_TILT_Y;
    this.badgeTiltTX = -badgeClamp(ny, -1, 1) * BADGE_TILT_X;
    this.badgeWake();
  }

  badgeLeave() {
    this.badgeTiltTX = 0;
    this.badgeTiltTY = 0;
    this.badgeWake();
  }
}
