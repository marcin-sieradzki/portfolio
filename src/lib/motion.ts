/* The page's looping motion (the hero caret, the pulse dots, the badge's sway and the project drawings) can be
   paused by the visitor (WCAG 2.2.2). The choice is data-motion="paused" on <html>, which globals.css reads, and it
   is kept for the next visit when storage allows. */

const KEY = "motion";
const listeners = new Set<() => void>();

export function motionPaused(): boolean {
  return typeof document !== "undefined" && document.documentElement.dataset.motion === "paused";
}

export function setMotionPaused(paused: boolean) {
  if (paused) document.documentElement.dataset.motion = "paused";
  else delete document.documentElement.dataset.motion;
  try {
    if (paused) localStorage.setItem(KEY, "paused");
    else localStorage.removeItem(KEY);
  } catch {
    // storage blocked: the choice lasts until the page is left
  }
  listeners.forEach((fn) => fn());
}

/* Puts back a choice from an earlier visit. */
export function restoreMotion() {
  try {
    if (localStorage.getItem(KEY) === "paused") setMotionPaused(true);
  } catch {
    // storage blocked
  }
}

export function subscribeMotion(fn: () => void) {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}
