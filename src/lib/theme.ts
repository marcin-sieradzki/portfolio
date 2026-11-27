/* Light or dark. The theme is data-theme on <html>, which the tokens in app/tokens.css read. THEME_SCRIPT sets it
   before the first paint, so the page never flashes the other theme: the visitor's stored choice if there is one,
   else the system's prefers-color-scheme. Without a stored choice the page follows the system as it changes. */

export type Theme = "light" | "dark";

const KEY = "theme";
const SYSTEM_LIGHT = "(prefers-color-scheme: light)";
const listeners = new Set<() => void>();

/* Runs inline in <head>, before the body paints. Keep it small, and in step with readStored() and systemTheme(). */
export const THEME_SCRIPT = `(function(){var t;try{t=localStorage.getItem("${KEY}")}catch(e){}if(t!=="light"&&t!=="dark")t=matchMedia("${SYSTEM_LIGHT}").matches?"light":"dark";document.documentElement.dataset.theme=t})()`;

export function currentTheme(): Theme {
  return typeof document !== "undefined" && document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function readStored(): Theme | null {
  try {
    const t = localStorage.getItem(KEY);
    return t === "light" || t === "dark" ? t : null;
  } catch {
    return null; // storage blocked
  }
}

function systemTheme(): Theme {
  return matchMedia(SYSTEM_LIGHT).matches ? "light" : "dark";
}

function apply(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  listeners.forEach((fn) => fn());
}

/* The visitor's choice. It is kept for the next visit when storage allows. */
export function setTheme(theme: Theme) {
  try {
    localStorage.setItem(KEY, theme);
  } catch {
    // storage blocked: the choice lasts until the page is left
  }
  apply(theme);
}

export function subscribeTheme(fn: () => void) {
  listeners.add(fn);
  /* Until the visitor picks one, follow the system when it switches (say, at sunset). */
  const mq = matchMedia(SYSTEM_LIGHT);
  const onSystem = () => {
    if (!readStored()) apply(systemTheme());
  };
  mq.addEventListener("change", onSystem);
  return () => {
    listeners.delete(fn);
    mq.removeEventListener("change", onSystem);
  };
}
