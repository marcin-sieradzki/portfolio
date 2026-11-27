"use client";
/* Switches the site between the light and dark theme (src/lib/theme.ts). An icon button in the header. Its name says
   what a press does, like the motion toggle's. Both icons are in the markup and globals.css shows the one for the
   theme on <html>, so the right one shows before React runs. */
import { useSyncExternalStore } from "react";
import { useT } from "@/i18n/LocaleProvider";
import { currentTheme, setTheme, subscribeTheme } from "@/lib/theme";

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeTheme, currentTheme, () => "dark" as const);
  const t = useT();
  const label = theme === "dark" ? t("Switch to light theme") : t("Switch to dark theme");
  return (
    <button
      type="button"
      className="th-toggle"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={label}
      title={label}
    >
      {/* A sun: shown in the dark theme, where a press brings the light one. */}
      <svg
        className="th-sun"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="9" cy="9" r="3.4" />
        <path d="M9 1.5v1.8M9 14.7v1.8M1.5 9h1.8M14.7 9h1.8M3.7 3.7l1.3 1.3M13 13l1.3 1.3M3.7 14.3L5 13M13 5l1.3-1.3" />
      </svg>
      {/* A moon: shown in the light theme. */}
      <svg
        className="th-moon"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M15.2 11.1A6.6 6.6 0 0 1 6.9 2.8a6.6 6.6 0 1 0 8.3 8.3z" />
      </svg>
    </button>
  );
}
