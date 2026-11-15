"use client";
/* Pauses and plays all the looping motion on the page (src/lib/motion.ts). Two looks: a round icon button for the
   project modal, beside its close button, and a text button under the badge. Hidden when the system already asks for
   less motion, since nothing loops then. */
import { useEffect, useSyncExternalStore } from "react";
import { useT } from "@/i18n/LocaleProvider";
import { motionPaused, restoreMotion, setMotionPaused, subscribeMotion } from "@/lib/motion";

let restored = false;

export function MotionToggle({ look }: { look: "round" | "text" }) {
  const paused = useSyncExternalStore(subscribeMotion, motionPaused, () => false);
  useEffect(() => {
    if (restored) return;
    restored = true;
    restoreMotion();
  }, []);
  const t = useT();
  const label = paused ? t("Play motion") : t("Pause motion");
  const toggle = () => setMotionPaused(!paused);
  if (look === "text")
    return (
      <button type="button" className="mo-toggle mo-text" onClick={toggle}>
        {label}
      </button>
    );
  return (
    <button type="button" className="mo-toggle cs-x mo-round" onClick={toggle} aria-label={label} title={label}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        {paused ? <path d="M5 3.2v9.6L12.8 8z" /> : <path d="M4 3h3v10H4zM9 3h3v10H9z" />}
      </svg>
    </button>
  );
}
