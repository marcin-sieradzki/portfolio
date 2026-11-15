/* One project card of the Work section: the dashed frame that waits for the build, the card itself, the selection
   frame, the review line, the agent cursors and the "verified" badge. Every card has this one shape.
   The markup and its numbers come from the Version E prototype. */
import type { CSSProperties, MouseEvent, RefObject } from "react";
import { AGENTS, type AgentKey, type WorkProject } from "@/lib/works";
import type { Move, WorkUnit } from "./Work";

const POINTER = "M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z";
const CHIP: CSSProperties = {
  padding: "3px 10px",
  borderRadius: "var(--perron-radius-full)",
  font: "600 11px/1.3 var(--perron-font-family-body)",
  letterSpacing: "0.88px",
  textTransform: "uppercase",
};
/* The corner a selection frame is dragged out from. */
const DRAG_FROM: Record<string, CSSProperties> = {
  dragTL: { left: "0", top: "0" },
  dragTR: { right: "0", top: "0" },
  dragBR: { right: "0", bottom: "0" },
};

/* Where a part is at this build step. */
function at(m: Move | undefined, transition: string): CSSProperties {
  return m ? { opacity: m.o, transform: m.t, clipPath: m.c, transition } : {};
}

/* An agent's pointer with its name tag, on the left or the right of the pointer. */
function Agent({ agent, side }: { agent: AgentKey; side: "left" | "right" }) {
  const a = AGENTS[agent];
  return (
    <>
      <svg
        width="16"
        height="20"
        viewBox="0 0 16 20"
        aria-hidden="true"
        style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
      >
        <path d={POINTER} fill={a.color} stroke="#0A0C10" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
      <span
        style={{
          position: "absolute",
          ...(side === "left" ? { left: "12px" } : { right: "2px" }),
          top: "16px",
          padding: "3px 7px",
          borderRadius: "var(--perron-radius-xs)",
          background: a.color,
          color: "var(--perron-color-text-on-color-dark)",
          font: "600 11px/1.3 var(--perron-font-family-data)",
          whiteSpace: "nowrap",
        }}
      >
        {a.name}
      </span>
    </>
  );
}

function LinkArrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 11l6-6M6 5h5v5" />
    </svg>
  );
}

export function WorkCard({
  p,
  u,
  agents,
  boxRef,
  btnRef,
  onOpen,
  onCard,
}: {
  p: WorkProject;
  u: WorkUnit;
  agents: boolean;
  boxRef: RefObject<HTMLDivElement | null>;
  btnRef: RefObject<HTMLButtonElement | null>;
  onOpen: () => void;
  onCard: (e: MouseEvent<HTMLElement>) => void;
}) {
  const lead = AGENTS[p.lead];
  const typed = p.build.parts.h?.[0] === "type"; /* a typed title is as wide as its text, so the caret stops there */
  const down = p.sweep.dir === "down";
  const sweepColor = AGENTS[p.sweep.agent].color;
  const links = p.links ?? [];
  return (
    <div ref={boxRef} style={{ position: "relative", minWidth: "0", display: "flex", flexDirection: "column" }}>
      {/* the dashed frame that waits for the build */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "0",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: `1px dashed ${u.wire}`,
          borderRadius: "var(--perron-radius-lg)",
          opacity: u.wireO,
          transition: "opacity 400ms ease, border-color 250ms ease",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            font: "500 12.5px/1 var(--perron-font-family-data)",
            color: "var(--perron-color-text-tertiary)",
            opacity: u.tagO,
            transition: "opacity 200ms ease",
          }}
        >
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: lead.color }} />
          {lead.name} · queued
        </span>
      </div>
      <article
        className="wk-card"
        onClick={onCard}
        style={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          boxSizing: "border-box",
          padding: "28px",
          background: "var(--perron-color-surface-raised)",
          border: "1px solid var(--perron-color-border-subtle)",
          borderRadius: "var(--perron-radius-lg)",
          flex: "1 1 auto",
          ...at(u.sh, u.tr),
        }}
      >
        <span
          style={{
            font: "600 12px/1.3 var(--perron-font-family-body)",
            letterSpacing: "0.88px",
            textTransform: "uppercase",
            color: "var(--perron-color-text-secondary)",
            ...at(u.k, u.tr),
          }}
        >
          {p.kicker}
        </span>
        <h3
          style={{
            fontFamily: "var(--perron-font-family-display)",
            margin: "0",
            fontSize: "24px",
            lineHeight: "1.15",
            letterSpacing: "-0.02em",
            fontWeight: "700",
            ...(typed ? { alignSelf: "flex-start" } : {}),
            ...at(u.h, typed ? u.tt : u.tr),
          }}
        >
          {p.name}
        </h3>
        <p
          style={{
            margin: "0",
            fontSize: "15.5px",
            lineHeight: "1.6",
            color: "var(--perron-color-text-secondary)",
            ...at(u.p, u.tr),
          }}
        >
          {p.body}
        </p>
        <div
          style={{
            marginTop: "auto",
            paddingTop: "10px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "6px",
            font: "500 12px/1 var(--perron-font-family-data)",
            ...at(u.c, u.tr),
          }}
        >
          {p.chips.map((chip, i) => (
            <span
              key={chip}
              style={{
                ...CHIP,
                border: i === 0 ? "1px solid transparent" : "1px dashed var(--perron-color-border-strong)",
                background: i === 0 ? "var(--perron-color-surface-inset)" : "transparent",
                color: "var(--perron-color-text-primary)",
              }}
            >
              {chip}
            </span>
          ))}
        </div>
        {links.length ? (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0 20px", ...at(u.x, u.tr) }}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "8px 0 0",
                  fontSize: "15px",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                {l.label} <LinkArrow />
              </a>
            ))}
          </div>
        ) : null}
        {/* opens the project modal */}
        <div style={{ alignSelf: "flex-start", marginTop: "6px", ...at(u.b, u.tr) }}>
          <button
            ref={btnRef}
            type="button"
            className="wk-open"
            onClick={onOpen}
            aria-haspopup="dialog"
            aria-label={`View project: ${p.name}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              minHeight: "44px",
              boxSizing: "border-box",
              margin: "0",
              padding: "0 16px",
              border: "1px solid var(--perron-color-border-control)",
              borderRadius: "var(--perron-radius-md)",
              background: "transparent",
              color: "var(--perron-color-text-primary)",
              font: "600 14.5px/1 var(--perron-font-family-body)",
              cursor: "pointer",
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              style={{ flex: "none" }}
            >
              <path d="M9.5 2.5h4v4M13.5 2.5L9 7M6.5 13.5h-4v-4M2.5 13.5L7 9" />
            </svg>{" "}
            View project{" "}
          </button>
        </div>
      </article>
      {/* the selection frame the Architect drags out together with the card */}
      {p.build.drag ? (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            ...DRAG_FROM[p.build.shell[0]],
            zIndex: "1",
            boxSizing: "border-box",
            width: u.dg.w,
            height: u.dg.h,
            border: `1.5px solid ${AGENTS.architect.color}`,
            borderRadius: "var(--perron-radius-lg)",
            background: `${AGENTS.architect.color}1F`,
            opacity: u.dg.o,
            transition: u.dtr,
            pointerEvents: "none",
          }}
        />
      ) : null}
      {/* review: an agent follows a line down or across the card */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          ...(down
            ? { left: "0", right: "0", top: u.sw.p, height: "0" }
            : { top: "0", bottom: "0", left: u.sw.p, width: "0" }),
          zIndex: "2",
          opacity: u.sw.o,
          transition: u.str,
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            position: "absolute",
            ...(down
              ? { left: "0", right: "0", top: "-1px", height: "2px" }
              : { top: "0", bottom: "0", left: "-1px", width: "2px" }),
            background: sweepColor,
            boxShadow: `0 0 14px 1px ${sweepColor}`,
          }}
        />
        {agents ? (
          <span
            style={{
              position: "absolute",
              ...(down ? { right: "22px", top: "0" } : { left: "0" }),
              width: "0",
              height: "0",
            }}
          >
            <Agent agent={p.sweep.agent} side="right" />
          </span>
        ) : null}
      </div>
      {agents
        ? p.cursors.map((c, j) => {
            const cur = u.cur[j];
            return (
              <div
                key={j}
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: cur.x,
                  top: cur.y,
                  zIndex: "3",
                  width: "0",
                  height: "0",
                  pointerEvents: "none",
                  opacity: cur.o,
                  transition: u.ctr,
                }}
              >
                <Agent agent={c.agent} side={c.side} />
              </div>
            );
          })
        : null}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "18px",
          top: "-11px",
          zIndex: "2",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          padding: "3px 9px 3px 7px",
          borderRadius: "var(--perron-radius-full)",
          background: "var(--perron-color-surface-default)",
          border: "1px solid var(--perron-color-status-success)",
          color: "var(--perron-color-text-success)",
          font: "600 11px/1.3 var(--perron-font-family-data)",
          opacity: u.okO,
          transform: u.okT,
          transition: "opacity 250ms ease, transform 350ms cubic-bezier(0.2, 1.4, 0.4, 1)",
          pointerEvents: "none",
        }}
      >
        <svg
          width="11"
          height="11"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 8.5l3.2 3.2L13 4.8" />
        </svg>{" "}
        verified
      </span>
    </div>
  );
}
