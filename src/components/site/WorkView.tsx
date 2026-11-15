/* Markup generated from the Version E prototype (Site-E-Face.dc.html) by scripts/dc-to-jsx. Edit it here freely: the generator was a one-off. */
import { Fragment, type ReactNode } from "react";
import type { WorkVals } from "./Work";
import { CaseGdsStudio } from "./cases/CaseGdsStudio";
import { CasePerronMylder } from "./cases/CasePerronMylder";
import { CaseSoftwareFactory } from "./cases/CaseSoftwareFactory";
import { CaseGrundfos } from "./cases/CaseGrundfos";
import { CaseMaerskDesignSystem } from "./cases/CaseMaerskDesignSystem";
import { CaseSchedules } from "./cases/CaseSchedules";
import { CaseVendorMasterData } from "./cases/CaseVendorMasterData";
import { CaseMicroFrontends } from "./cases/CaseMicroFrontends";
import { PROJECTS, type ProjectId } from "@/lib/works";
import { WorkCard } from "./WorkCard";
import { MotionToggle } from "./MotionToggle";

/* The modal of each project: its drawing and its copy. */
const CASE_VIEWS: Record<ProjectId, () => ReactNode> = {
  studio: CaseGdsStudio,
  "grundfos-ds": CaseGrundfos,
  "maersk-ds": CaseMaerskDesignSystem,
  "perron-mylder": CasePerronMylder,
  schedules: CaseSchedules,
  vendor: CaseVendorMasterData,
  factory: CaseSoftwareFactory,
  "vml-map": CaseMicroFrontends,
};

/* The Work section, then whatever follows it on the page (children), then the project modal.
   The modal stays last in the page so it paints over everything, as in the prototype. */
export function WorkView({ v, children }: { v: WorkVals; children?: ReactNode }) {
  const CaseNow = v.caseAt >= 0 ? CASE_VIEWS[PROJECTS[v.caseAt].id] : null;
  return (
    <>
      <section
        id="work"
        style={{ maxWidth: "1240px", margin: "0 auto", boxSizing: "border-box", padding: "120px 32px 0" }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "24px 64px",
            marginBottom: "56px",
          }}
        >
          <div style={{ flex: "1 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
            <span
              style={{
                font: "600 12px/1.3 var(--perron-font-family-body)",
                letterSpacing: "0.88px",
                textTransform: "uppercase",
                color: "var(--perron-color-text-secondary)",
              }}
            >
              <span style={{ color: "var(--perron-color-text-brand)" }}>01</span> / Selected work
            </span>
            <h2
              style={{
                fontFamily: "var(--perron-font-family-display)",
                margin: "0",
                fontSize: "clamp(32px, 4vw, 56px)",
                lineHeight: "1.02",
                letterSpacing: "-0.035em",
                fontWeight: "700",
                textWrap: "balance",
              }}
            >
              Software, and the factories that build it.
            </h2>
          </div>
          <p
            style={{
              flex: "0 1 420px",
              margin: "0",
              fontSize: "17px",
              lineHeight: "1.55",
              color: "var(--perron-color-text-secondary)",
            }}
          >
            Agent pipelines inside the software lifecycle, the design systems they build from, and customer-facing
            products with millions of views a day. Built at Grundfos, Maersk and VML MAP, and in my own time.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {/* STATUS BAR. It sticks under the top edge while the visitor scrolls through the work. */}
          <div
            role="group"
            aria-label="Work build status"
            className="wk-status"
            style={{
              position: "sticky",
              top: "12px",
              zIndex: "4",
              alignSelf: "center",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px 16px",
              padding: "8px 8px 8px 18px",
              background: "var(--perron-color-surface-overlay)",
              backdropFilter: "blur(16px) saturate(1.3)",
              border: "1px solid var(--perron-color-border-subtle)",
              borderRadius: "var(--perron-radius-full)",
              boxShadow: "var(--perron-shadow-panel)",
              font: "500 12.5px/1 var(--perron-font-family-data)",
              color: "var(--perron-color-text-secondary)",
            }}
          >
            <span aria-hidden="true" className="wk-dots" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              {PROJECTS.map((p, i) => (
                <span
                  key={p.id}
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: p.build.color,
                    opacity: v.wk[i].dot,
                    transition: "opacity 300ms ease",
                  }}
                />
              ))}
            </span>
            <span className="wk-agents">
              <span style={{ color: "var(--perron-color-text-primary)" }}>8</span> agents
            </span>
            <span
              aria-hidden="true"
              className="wk-sep"
              style={{ width: "1px", height: "14px", background: "var(--perron-color-border-strong)" }}
            />
            <span className="wk-count" style={{ whiteSpace: "nowrap" }}>
              <span
                style={{
                  display: "inline-block",
                  minWidth: "1ch",
                  textAlign: "right",
                  color: "var(--perron-color-text-primary)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {v.worksCount}
              </span>
              <span style={{ color: "var(--perron-color-text-primary)" }}> / 8</span> projects built
            </span>
            <span
              aria-hidden="true"
              className="wk-sep"
              style={{ width: "1px", height: "14px", background: "var(--perron-color-border-strong)" }}
            />
            <ul
              aria-label="System checks"
              className="wk-checks"
              style={{
                margin: "0",
                padding: "0",
                listStyle: "none",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
              }}
            >
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "5px 10px",
                  borderRadius: "var(--perron-radius-full)",
                  border: `1px ${v.worksCk.c1.line}`,
                  background: v.worksCk.c1.bg,
                  color: v.worksCk.c1.color,
                  whiteSpace: "nowrap",
                  transition: "color 250ms ease, background-color 250ms ease, border-color 250ms ease",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "12px",
                    height: "12px",
                  }}
                >
                  {v.worksCk.c1.pending ? (
                    <>
                      <span
                        style={{
                          display: "block",
                          width: "7px",
                          height: "7px",
                          boxSizing: "border-box",
                          borderRadius: "50%",
                          border: "1.5px solid currentColor",
                        }}
                      />
                    </>
                  ) : null}
                  {v.worksCk.c1.running ? (
                    <>
                      <span
                        className="mv"
                        style={{
                          position: "absolute",
                          left: "3px",
                          top: "3px",
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "currentColor",
                          animation: "ping 900ms ease-out infinite",
                        }}
                      />
                      <span
                        style={{
                          display: "block",
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "currentColor",
                        }}
                      />
                    </>
                  ) : null}
                  {v.worksCk.c1.passed ? (
                    <>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M3 8.5l3.2 3.2L13 4.8" />
                      </svg>
                    </>
                  ) : null}
                </span>{" "}
                validator{" "}
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "5px 10px",
                  borderRadius: "var(--perron-radius-full)",
                  border: `1px ${v.worksCk.c2.line}`,
                  background: v.worksCk.c2.bg,
                  color: v.worksCk.c2.color,
                  whiteSpace: "nowrap",
                  transition: "color 250ms ease, background-color 250ms ease, border-color 250ms ease",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "12px",
                    height: "12px",
                  }}
                >
                  {v.worksCk.c2.pending ? (
                    <>
                      <span
                        style={{
                          display: "block",
                          width: "7px",
                          height: "7px",
                          boxSizing: "border-box",
                          borderRadius: "50%",
                          border: "1.5px solid currentColor",
                        }}
                      />
                    </>
                  ) : null}
                  {v.worksCk.c2.running ? (
                    <>
                      <span
                        className="mv"
                        style={{
                          position: "absolute",
                          left: "3px",
                          top: "3px",
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "currentColor",
                          animation: "ping 900ms ease-out infinite",
                        }}
                      />
                      <span
                        style={{
                          display: "block",
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "currentColor",
                        }}
                      />
                    </>
                  ) : null}
                  {v.worksCk.c2.passed ? (
                    <>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M3 8.5l3.2 3.2L13 4.8" />
                      </svg>
                    </>
                  ) : null}
                </span>{" "}
                typecheck{" "}
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "5px 10px",
                  borderRadius: "var(--perron-radius-full)",
                  border: `1px ${v.worksCk.c3.line}`,
                  background: v.worksCk.c3.bg,
                  color: v.worksCk.c3.color,
                  whiteSpace: "nowrap",
                  transition: "color 250ms ease, background-color 250ms ease, border-color 250ms ease",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "12px",
                    height: "12px",
                  }}
                >
                  {v.worksCk.c3.pending ? (
                    <>
                      <span
                        style={{
                          display: "block",
                          width: "7px",
                          height: "7px",
                          boxSizing: "border-box",
                          borderRadius: "50%",
                          border: "1.5px solid currentColor",
                        }}
                      />
                    </>
                  ) : null}
                  {v.worksCk.c3.running ? (
                    <>
                      <span
                        className="mv"
                        style={{
                          position: "absolute",
                          left: "3px",
                          top: "3px",
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "currentColor",
                          animation: "ping 900ms ease-out infinite",
                        }}
                      />
                      <span
                        style={{
                          display: "block",
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "currentColor",
                        }}
                      />
                    </>
                  ) : null}
                  {v.worksCk.c3.passed ? (
                    <>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M3 8.5l3.2 3.2L13 4.8" />
                      </svg>
                    </>
                  ) : null}
                </span>{" "}
                build{" "}
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "5px 10px",
                  borderRadius: "var(--perron-radius-full)",
                  border: `1px ${v.worksCk.c4.line}`,
                  background: v.worksCk.c4.bg,
                  color: v.worksCk.c4.color,
                  whiteSpace: "nowrap",
                  transition: "color 250ms ease, background-color 250ms ease, border-color 250ms ease",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "12px",
                    height: "12px",
                  }}
                >
                  {v.worksCk.c4.pending ? (
                    <>
                      <span
                        style={{
                          display: "block",
                          width: "7px",
                          height: "7px",
                          boxSizing: "border-box",
                          borderRadius: "50%",
                          border: "1.5px solid currentColor",
                        }}
                      />
                    </>
                  ) : null}
                  {v.worksCk.c4.running ? (
                    <>
                      <span
                        className="mv"
                        style={{
                          position: "absolute",
                          left: "3px",
                          top: "3px",
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "currentColor",
                          animation: "ping 900ms ease-out infinite",
                        }}
                      />
                      <span
                        style={{
                          display: "block",
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "currentColor",
                        }}
                      />
                    </>
                  ) : null}
                  {v.worksCk.c4.passed ? (
                    <>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M3 8.5l3.2 3.2L13 4.8" />
                      </svg>
                    </>
                  ) : null}
                </span>{" "}
                runtime sweep{" "}
              </li>
            </ul>
            <span
              className="wk-state"
              style={{
                display: "inline-block",
                minWidth: "62px",
                fontWeight: "600",
                color: v.worksStatusColor,
                transition: "color 250ms ease",
              }}
            >
              {v.worksIsIdle ? <>queued</> : null}
              {v.worksIsBuilding ? <>building</> : null}
              {v.worksIsChecking ? <>checking</> : null}
              {v.worksIsVerified ? <>verified</> : null}
            </span>
            <button
              type="button"
              className="wk-replay"
              onClick={v.worksReplay}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                minHeight: "44px",
                boxSizing: "border-box",
                margin: "0",
                padding: "0 16px",
                border: "0",
                borderRadius: "var(--perron-radius-full)",
                background: "var(--perron-color-surface-inverse)",
                color: "var(--perron-color-text-inverse)",
                font: "600 12.5px/1 var(--perron-font-family-data)",
                cursor: "pointer",
              }}
            >
              <svg width="11" height="11" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M4.5 2.8v10.4l8.5-5.2z" fill="currentColor" />
              </svg>{" "}
              Replay build{" "}
            </button>
          </div>
          {/* The projects, in the order of PROJECTS. Every card has the same shape. */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(420px, 100%), 1fr))",
              gap: "28px 20px",
            }}
          >
            {PROJECTS.map((p, i) => (
              <WorkCard
                key={p.id}
                p={p}
                u={v.wk[i]}
                agents={v.agents}
                boxRef={v.worksRefs[i]}
                btnRef={v.caseBtns[i]}
                onOpen={v.caseOpens[i]}
                onCard={v.caseCards[i]}
              />
            ))}
          </div>
        </div>
      </section>
      {children}
      {v.caseOn ? (
        <>
          <div
            ref={v.caseOverlay}
            data-case-backdrop=""
            onClick={v.caseBackdrop}
            onKeyDown={v.caseKey}
            style={{
              position: "fixed",
              inset: "0",
              zIndex: "60",
              background: "rgba(7,9,12,0.8)",
              backdropFilter: v.caseBlur,
              WebkitBackdropFilter: v.caseBlur,
              opacity: v.caseO,
              transition: `opacity ${v.caseMs} ease`,
            }}
          >
            {/* The box is the part of the page the visitor can see. In a window that is the whole overlay. On the canvas the artboard is shown whole, and the script moves the box to the part in view. */}
            <div
              data-case-backdrop=""
              style={{
                position: "absolute",
                left: v.caseBox.l,
                top: v.caseBox.t,
                width: v.caseBox.w,
                height: v.caseBox.h,
                boxSizing: "border-box",
                padding: "clamp(10px, 3vw, 32px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                ref={v.casePanel}
                className="cs-panel"
                role="dialog"
                aria-modal="true"
                aria-labelledby={v.caseTitleId}
                tabIndex={-1}
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "1080px",
                  maxHeight: "100%",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  boxSizing: "border-box",
                  background: "var(--perron-color-surface-raised)",
                  border: "1px solid var(--perron-color-border-strong)",
                  borderRadius: "var(--perron-radius-xl)",
                  boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.4), 0px 32px 90px 0px rgba(0,0,0,0.65)",
                  color: "var(--perron-color-text-primary)",
                  opacity: v.caseO,
                  transform: v.caseT,
                  transition: `opacity ${v.caseMs} ease, transform ${v.caseMoveMs} var(--perron-easing-sheet)`,
                }}
              >
                <button
                  type="button"
                  className="cs-x"
                  onClick={v.caseClose}
                  aria-label="Close project details"
                  style={{
                    position: "absolute",
                    right: "14px",
                    top: "14px",
                    zIndex: "2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "44px",
                    height: "44px",
                    boxSizing: "border-box",
                    margin: "0",
                    padding: "0",
                    border: "1px solid var(--perron-color-border-strong)",
                    borderRadius: "50%",
                    background: "var(--perron-color-surface-overlay)",
                    boxShadow: "0px 0px 0px 6px rgba(10,12,16,0.7)",
                    color: "var(--perron-color-text-primary)",
                    cursor: "pointer",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" />
                  </svg>
                </button>
                <MotionToggle look="round" />
                <div
                  ref={v.caseScroll}
                  className="cs-scroll"
                  tabIndex={0}
                  style={{ flex: "1 1 auto", minHeight: "0", overflowY: "auto", overscrollBehavior: "contain" }}
                >
                  {CaseNow ? <CaseNow /> : null}
                </div>
                {/* footer: step through the projects, drawn as stops on a line */}
                <div
                  style={{
                    flex: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    boxSizing: "border-box",
                    padding: "8px clamp(8px, 2vw, 14px)",
                    borderTop: "1px solid var(--perron-color-border-subtle)",
                    background: "var(--perron-color-surface-raised)",
                  }}
                >
                  <button
                    type="button"
                    className="cs-btn"
                    onClick={v.casePrev}
                    aria-label={`Previous project: ${v.casePrevName}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      flex: "1 1 0",
                      minWidth: "0",
                      minHeight: "48px",
                      boxSizing: "border-box",
                      margin: "0",
                      padding: "6px 12px",
                      border: "1px solid transparent",
                      borderRadius: "var(--perron-radius-md)",
                      background: "transparent",
                      color: "var(--perron-color-text-primary)",
                      font: "inherit",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      style={{ flex: "none" }}
                    >
                      <path d="M13 8H3M7 4L3 8l4 4" />
                    </svg>
                    <span
                      className="cs-wide"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "2px",
                        minWidth: "0",
                      }}
                    >
                      <span
                        style={{
                          font: "600 11px/1.3 var(--perron-font-family-body)",
                          letterSpacing: "0.88px",
                          textTransform: "uppercase",
                          color: "var(--perron-color-text-secondary)",
                        }}
                      >
                        Previous
                      </span>
                      <span
                        style={{
                          maxWidth: "100%",
                          fontSize: "15px",
                          lineHeight: "1.3",
                          fontWeight: "600",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {v.casePrevName}
                      </span>
                    </span>
                  </button>
                  <div
                    style={{
                      flex: "none",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "9px",
                      padding: "0 8px",
                    }}
                  >
                    <ol
                      className="cs-wide"
                      aria-hidden="true"
                      style={{
                        position: "relative",
                        margin: "0",
                        padding: "0",
                        listStyle: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        height: "14px",
                      }}
                    >
                      <li
                        style={{
                          position: "absolute",
                          left: "4px",
                          right: "4px",
                          top: "6px",
                          height: "2px",
                          background: "var(--perron-color-border-strong)",
                        }}
                      />
                      {v.caseStops.map((st, i) => (
                        <Fragment key={i}>
                          <li
                            style={{
                              position: "relative",
                              flex: "none",
                              width: st.d,
                              height: st.d,
                              boxSizing: "border-box",
                              borderRadius: "50%",
                              background: st.bg,
                              border: st.bd,
                            }}
                          />
                        </Fragment>
                      ))}
                    </ol>
                    <span
                      style={{
                        font: "500 12.5px/1 var(--perron-font-family-data)",
                        color: "var(--perron-color-text-secondary)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <span style={{ color: "var(--perron-color-text-primary)" }}>{v.caseNo}</span> / {v.caseCount}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="cs-btn"
                    onClick={v.caseNext}
                    aria-label={`Next project: ${v.caseNextName}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      flex: "1 1 0",
                      minWidth: "0",
                      minHeight: "48px",
                      boxSizing: "border-box",
                      margin: "0",
                      padding: "6px 12px",
                      border: "1px solid transparent",
                      borderRadius: "var(--perron-radius-md)",
                      background: "transparent",
                      color: "var(--perron-color-text-primary)",
                      font: "inherit",
                      cursor: "pointer",
                      justifyContent: "flex-end",
                      textAlign: "right",
                    }}
                  >
                    <span
                      className="cs-wide"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        gap: "2px",
                        minWidth: "0",
                      }}
                    >
                      <span
                        style={{
                          font: "600 11px/1.3 var(--perron-font-family-body)",
                          letterSpacing: "0.88px",
                          textTransform: "uppercase",
                          color: "var(--perron-color-text-secondary)",
                        }}
                      >
                        Next
                      </span>
                      <span
                        style={{
                          maxWidth: "100%",
                          fontSize: "15px",
                          lineHeight: "1.3",
                          fontWeight: "600",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {v.caseNextName}
                      </span>
                    </span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      style={{ flex: "none" }}
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
