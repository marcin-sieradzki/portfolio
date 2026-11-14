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

/* The Work section, then whatever follows it on the page (children), then the project modal.
   The modal stays last in the page so it paints over everything, as in the prototype. */
export function WorkView({ v, children }: { v: WorkVals; children?: ReactNode }) {
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
            products with millions of views a day. Built at Grundfos, Maersk and Wunderman, and in my own time.
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
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#3DDC97",
                  opacity: v.wk0.dot,
                  transition: "opacity 300ms ease",
                }}
              />
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#5B9DFF",
                  opacity: v.wk1.dot,
                  transition: "opacity 300ms ease",
                }}
              />
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#FF8A5B",
                  opacity: v.wk2.dot,
                  transition: "opacity 300ms ease",
                }}
              />
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#5ED3F0",
                  opacity: v.wk3.dot,
                  transition: "opacity 300ms ease",
                }}
              />
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#FFD166",
                  opacity: v.wk4.dot,
                  transition: "opacity 300ms ease",
                }}
              />
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#B58CFF",
                  opacity: v.wk5.dot,
                  transition: "opacity 300ms ease",
                }}
              />
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#FF7EB6",
                  opacity: v.wk6.dot,
                  transition: "opacity 300ms ease",
                }}
              />
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#C8F560",
                  opacity: v.wk7.dot,
                  transition: "opacity 300ms ease",
                }}
              />
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
          {/* GDS Studio */}
          {/* project 1, GDS Studio: built by Architect, Code Writer, Researcher, Test Author, Visual Reviewer when it scrolls into view */}
          <div
            ref={v.worksRef0}
            style={{ position: "relative", minWidth: "0", display: "flex", flexDirection: "column" }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: "0",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `1px dashed ${v.wk0.wire}`,
                borderRadius: "var(--perron-radius-xl)",
                opacity: v.wk0.wireO,
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
                  opacity: v.wk0.tagO,
                  transition: "opacity 200ms ease",
                }}
              >
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#3DDC97" }} />
                Code Writer · queued
              </span>
            </div>
            <article
              className="wk-card"
              onClick={v.caseCard0}
              style={{
                cursor: "pointer",
                display: "flex",
                flexWrap: "wrap",
                gap: "40px 48px",
                boxSizing: "border-box",
                padding: "40px",
                background: "var(--perron-color-surface-raised)",
                border: "1px solid var(--perron-color-border-subtle)",
                borderRadius: "var(--perron-radius-xl)",
                opacity: v.wk0.sh.o,
                transform: v.wk0.sh.t,
                clipPath: v.wk0.sh.c,
                transition: v.wk0.tr,
              }}
            >
              <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: "10px 14px",
                    font: "600 12px/1.3 var(--perron-font-family-body)",
                    letterSpacing: "0.88px",
                    textTransform: "uppercase",
                    color: "var(--perron-color-text-secondary)",
                    opacity: v.wk0.m.o,
                    transform: v.wk0.m.t,
                    clipPath: v.wk0.m.c,
                    transition: v.wk0.tr,
                  }}
                >
                  <span>Grundfos · 2025 to now</span>
                  <span
                    style={{
                      padding: "3px 10px",
                      borderRadius: "var(--perron-radius-full)",
                      font: "600 11px/1.3 var(--perron-font-family-body)",
                      letterSpacing: "0.88px",
                      textTransform: "uppercase",
                      border: "1px solid transparent",
                      background: "var(--perron-color-surface-info)",
                      color: "var(--perron-color-text-info)",
                    }}
                  >
                    My own idea
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--perron-font-family-display)",
                    margin: "0",
                    fontSize: "34px",
                    lineHeight: "1.05",
                    letterSpacing: "-0.03em",
                    fontWeight: "700",
                    alignSelf: "flex-start",
                    opacity: v.wk0.h.o,
                    transform: v.wk0.h.t,
                    clipPath: v.wk0.h.c,
                    transition: v.wk0.tt,
                  }}
                >
                  GDS Studio
                </h3>
                <p
                  style={{
                    margin: "0",
                    fontSize: "21px",
                    lineHeight: "1.35",
                    color: "var(--perron-color-text-primary)",
                    textWrap: "balance",
                    opacity: v.wk0.l.o,
                    transform: v.wk0.l.t,
                    clipPath: v.wk0.l.c,
                    transition: v.wk0.tr,
                  }}
                >
                  Designers describe a UI. An agent builds the working prototype.
                </p>
                <p
                  style={{
                    margin: "0",
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "var(--perron-color-text-secondary)",
                    opacity: v.wk0.p.o,
                    transform: v.wk0.p.t,
                    clipPath: v.wk0.p.c,
                    transition: v.wk0.tr,
                  }}
                >
                  A desktop app where a designer writes a brief and an AI agent builds a working React prototype from
                  real design system components and tokens, with its output streamed live. Designers take prototypes to
                  stakeholder reviews without an engineer in the loop.
                </p>
                <dl style={{ margin: "8px 0 0", display: "flex", flexWrap: "wrap", gap: "20px 40px" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                      opacity: v.wk0.s1.o,
                      transform: v.wk0.s1.t,
                      clipPath: v.wk0.s1.c,
                      transition: v.wk0.tr,
                    }}
                  >
                    <dd
                      style={{
                        margin: "0",
                        font: "600 28px/1.15 var(--perron-font-family-body)",
                        letterSpacing: "-0.84px",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      About 20
                    </dd>
                    <dt style={{ fontSize: "13.5px", color: "var(--perron-color-text-secondary)" }}>
                      designers in the pilot
                    </dt>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                      opacity: v.wk0.s2.o,
                      transform: v.wk0.s2.t,
                      clipPath: v.wk0.s2.c,
                      transition: v.wk0.tr,
                    }}
                  >
                    <dd
                      style={{
                        margin: "0",
                        font: "600 28px/1.15 var(--perron-font-family-body)",
                        letterSpacing: "-0.84px",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      150
                    </dd>
                    <dt style={{ fontSize: "13.5px", color: "var(--perron-color-text-secondary)" }}>
                      prototypes built
                    </dt>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                      opacity: v.wk0.s3.o,
                      transform: v.wk0.s3.t,
                      clipPath: v.wk0.s3.c,
                      transition: v.wk0.tr,
                    }}
                  >
                    <dd
                      style={{
                        margin: "0",
                        font: "600 28px/1.15 var(--perron-font-family-body)",
                        letterSpacing: "-0.84px",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      Minutes
                    </dd>
                    <dt style={{ fontSize: "13.5px", color: "var(--perron-color-text-secondary)" }}>
                      instead of hours
                    </dt>
                  </div>
                </dl>
                {/* opens the project modal */}
                <div
                  style={{
                    alignSelf: "flex-start",
                    marginTop: "4px",
                    opacity: v.wk0.b.o,
                    transform: v.wk0.b.t,
                    clipPath: v.wk0.b.c,
                    transition: v.wk0.tr,
                  }}
                >
                  <button
                    ref={v.caseBtn0}
                    type="button"
                    className="wk-open"
                    onClick={v.caseOpen0}
                    aria-haspopup="dialog"
                    aria-label="View project: GDS Studio"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      minHeight: "44px",
                      boxSizing: "border-box",
                      margin: "0",
                      padding: "0 18px",
                      border: "1px solid var(--perron-color-border-control)",
                      borderRadius: "var(--perron-radius-md)",
                      background: "transparent",
                      color: "var(--perron-color-text-primary)",
                      font: "600 15px/1 var(--perron-font-family-body)",
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
              </div>
              <div
                style={{
                  position: "relative",
                  flex: "1 1 420px",
                  minWidth: "0",
                  boxSizing: "border-box",
                  padding: "28px",
                  background: "var(--perron-color-surface-default)",
                  border: "1px solid var(--perron-color-border-subtle)",
                  borderRadius: "var(--perron-radius-lg)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "22px",
                  opacity: v.wk0.pn.o,
                  transform: v.wk0.pn.t,
                  clipPath: v.wk0.pn.c,
                  transition: v.wk0.tr,
                }}
              >
                <ol
                  style={{
                    margin: "0",
                    padding: "0",
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "18px",
                  }}
                >
                  <li
                    style={{
                      display: "flex",
                      gap: "16px",
                      opacity: v.wk0.f1.o,
                      transform: v.wk0.f1.t,
                      clipPath: v.wk0.f1.c,
                      transition: v.wk0.tr,
                    }}
                  >
                    <span
                      style={{
                        flex: "none",
                        width: "28px",
                        height: "28px",
                        boxSizing: "border-box",
                        borderRadius: "var(--perron-radius-md)",
                        border: "1px solid var(--perron-color-border-strong)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        font: "600 12px/1 var(--perron-font-family-data)",
                        color: "var(--perron-color-text-secondary)",
                      }}
                    >
                      1
                    </span>
                    <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                      <strong style={{ fontSize: "16px", fontWeight: "700" }}>Brief</strong>
                      <span
                        style={{ fontSize: "14.5px", lineHeight: "1.5", color: "var(--perron-color-text-secondary)" }}
                      >
                        A designer describes the UI in plain words.
                      </span>
                    </div>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      gap: "16px",
                      opacity: v.wk0.f2.o,
                      transform: v.wk0.f2.t,
                      clipPath: v.wk0.f2.c,
                      transition: v.wk0.tr,
                    }}
                  >
                    <span
                      style={{
                        flex: "none",
                        width: "28px",
                        height: "28px",
                        boxSizing: "border-box",
                        borderRadius: "var(--perron-radius-md)",
                        border: "1px solid var(--perron-color-border-strong)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        font: "600 12px/1 var(--perron-font-family-data)",
                        color: "var(--perron-color-text-secondary)",
                      }}
                    >
                      2
                    </span>
                    <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                      <strong style={{ fontSize: "16px", fontWeight: "700" }}>Agent</strong>
                      <span
                        style={{ fontSize: "14.5px", lineHeight: "1.5", color: "var(--perron-color-text-secondary)" }}
                      >
                        Builds from real components and tokens, in a sandbox with no network.
                      </span>
                    </div>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      gap: "16px",
                      opacity: v.wk0.f3.o,
                      transform: v.wk0.f3.t,
                      clipPath: v.wk0.f3.c,
                      transition: v.wk0.tr,
                    }}
                  >
                    <span
                      style={{
                        flex: "none",
                        width: "28px",
                        height: "28px",
                        boxSizing: "border-box",
                        borderRadius: "var(--perron-radius-md)",
                        background: "var(--perron-color-status-success)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        font: "700 12px/1 var(--perron-font-family-data)",
                        color: "var(--perron-color-text-on-color-dark)",
                      }}
                    >
                      3
                    </span>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", minWidth: "0" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                        <strong style={{ fontSize: "16px", fontWeight: "700" }}>System check</strong>
                        <span
                          style={{ fontSize: "14.5px", lineHeight: "1.5", color: "var(--perron-color-text-secondary)" }}
                        >
                          Decides the result, not the agent. The agent gets two fix rounds.
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "6px",
                          font: "500 12px/1 var(--perron-font-family-data)",
                          color: "var(--perron-color-text-success)",
                        }}
                      >
                        <span
                          style={{
                            padding: "4px 10px",
                            borderRadius: "var(--perron-radius-full)",
                            border: "1px solid transparent",
                            background: "var(--perron-color-surface-success)",
                          }}
                        >
                          validator
                        </span>
                        <span
                          style={{
                            padding: "4px 10px",
                            borderRadius: "var(--perron-radius-full)",
                            border: "1px solid transparent",
                            background: "var(--perron-color-surface-success)",
                          }}
                        >
                          typecheck
                        </span>
                        <span
                          style={{
                            padding: "4px 10px",
                            borderRadius: "var(--perron-radius-full)",
                            border: "1px solid transparent",
                            background: "var(--perron-color-surface-success)",
                          }}
                        >
                          build
                        </span>
                        <span
                          style={{
                            padding: "4px 10px",
                            borderRadius: "var(--perron-radius-full)",
                            border: "1px solid transparent",
                            background: "var(--perron-color-surface-success)",
                          }}
                        >
                          runtime sweep
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      gap: "16px",
                      opacity: v.wk0.f4.o,
                      transform: v.wk0.f4.t,
                      clipPath: v.wk0.f4.c,
                      transition: v.wk0.tr,
                    }}
                  >
                    <span
                      style={{
                        flex: "none",
                        width: "28px",
                        height: "28px",
                        boxSizing: "border-box",
                        borderRadius: "var(--perron-radius-md)",
                        border: "1px solid var(--perron-color-border-strong)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        font: "600 12px/1 var(--perron-font-family-data)",
                        color: "var(--perron-color-text-secondary)",
                      }}
                    >
                      4
                    </span>
                    <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                      <strong style={{ fontSize: "16px", fontWeight: "700" }}>Prototype</strong>
                      <span
                        style={{ fontSize: "14.5px", lineHeight: "1.5", color: "var(--perron-color-text-secondary)" }}
                      >
                        A working React prototype, streamed live while it is built.
                      </span>
                    </div>
                  </li>
                </ol>
                <p
                  style={{
                    margin: "0",
                    paddingTop: "18px",
                    borderTop: "1px solid var(--perron-color-border-subtle)",
                    font: "400 12.5px/1.6 var(--perron-font-family-data)",
                    color: "var(--perron-color-text-secondary)",
                    opacity: v.wk0.e.o,
                    transform: v.wk0.e.t,
                    clipPath: v.wk0.e.c,
                    transition: v.wk0.tr,
                  }}
                >
                  Evals measure every release: 12 cases in dev and holdout sets. 1,100+ tests. 23 ADRs.
                </p>
              </div>
            </article>
            {/* the selection frame the Architect drags out together with the card */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "0",
                top: "0",
                zIndex: "1",
                boxSizing: "border-box",
                width: v.wk0.dg.w,
                height: v.wk0.dg.h,
                border: "1.5px solid #FF8A5B",
                borderRadius: "var(--perron-radius-xl)",
                background: "#FF8A5B1F",
                opacity: v.wk0.dg.o,
                transition: v.wk0.dtr,
                pointerEvents: "none",
              }}
            />
            {/* review: the Visual Reviewer follows a line down the card */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "0",
                right: "0",
                top: v.wk0.sw.p,
                zIndex: "2",
                height: "0",
                opacity: v.wk0.sw.o,
                transition: v.wk0.str,
                pointerEvents: "none",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: "0",
                  right: "0",
                  top: "-1px",
                  height: "2px",
                  background: "#C8F560",
                  boxShadow: "0 0 14px 1px #C8F560",
                }}
              />
              {v.agents ? (
                <>
                  <span style={{ position: "absolute", right: "22px", top: "0", width: "0", height: "0" }}>
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      aria-hidden="true"
                      style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
                    >
                      <path
                        d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
                        fill="#C8F560"
                        stroke="#0A0C10"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      style={{
                        position: "absolute",
                        right: "2px",
                        top: "16px",
                        padding: "3px 7px",
                        borderRadius: "var(--perron-radius-xs)",
                        background: "#C8F560",
                        color: "var(--perron-color-text-on-color-dark)",
                        font: "600 11px/1.3 var(--perron-font-family-data)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Visual Reviewer
                    </span>
                  </span>
                </>
              ) : null}
            </div>
            {v.agents ? (
              <>
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: v.wk0.c0.x,
                    top: v.wk0.c0.y,
                    zIndex: "3",
                    width: "0",
                    height: "0",
                    pointerEvents: "none",
                    opacity: v.wk0.c0.o,
                    transition: v.wk0.ctr,
                  }}
                >
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
                  >
                    <path
                      d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
                      fill="#FF8A5B"
                      stroke="#0A0C10"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    style={{
                      position: "absolute",
                      right: "2px",
                      top: "16px",
                      padding: "3px 7px",
                      borderRadius: "var(--perron-radius-xs)",
                      background: "#FF8A5B",
                      color: "var(--perron-color-text-on-color-dark)",
                      font: "600 11px/1.3 var(--perron-font-family-data)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Architect
                  </span>
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: v.wk0.c1.x,
                    top: v.wk0.c1.y,
                    zIndex: "3",
                    width: "0",
                    height: "0",
                    pointerEvents: "none",
                    opacity: v.wk0.c1.o,
                    transition: v.wk0.ctr,
                  }}
                >
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
                  >
                    <path
                      d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
                      fill="#3DDC97"
                      stroke="#0A0C10"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    style={{
                      position: "absolute",
                      right: "2px",
                      top: "16px",
                      padding: "3px 7px",
                      borderRadius: "var(--perron-radius-xs)",
                      background: "#3DDC97",
                      color: "var(--perron-color-text-on-color-dark)",
                      font: "600 11px/1.3 var(--perron-font-family-data)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Code Writer
                  </span>
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: v.wk0.c2.x,
                    top: v.wk0.c2.y,
                    zIndex: "3",
                    width: "0",
                    height: "0",
                    pointerEvents: "none",
                    opacity: v.wk0.c2.o,
                    transition: v.wk0.ctr,
                  }}
                >
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
                  >
                    <path
                      d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
                      fill="#B58CFF"
                      stroke="#0A0C10"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    style={{
                      position: "absolute",
                      left: "12px",
                      top: "16px",
                      padding: "3px 7px",
                      borderRadius: "var(--perron-radius-xs)",
                      background: "#B58CFF",
                      color: "var(--perron-color-text-on-color-dark)",
                      font: "600 11px/1.3 var(--perron-font-family-data)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Researcher
                  </span>
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: v.wk0.c3.x,
                    top: v.wk0.c3.y,
                    zIndex: "3",
                    width: "0",
                    height: "0",
                    pointerEvents: "none",
                    opacity: v.wk0.c3.o,
                    transition: v.wk0.ctr,
                  }}
                >
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
                  >
                    <path
                      d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
                      fill="#FFD166"
                      stroke="#0A0C10"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    style={{
                      position: "absolute",
                      left: "12px",
                      top: "16px",
                      padding: "3px 7px",
                      borderRadius: "var(--perron-radius-xs)",
                      background: "#FFD166",
                      color: "var(--perron-color-text-on-color-dark)",
                      font: "600 11px/1.3 var(--perron-font-family-data)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Test Author
                  </span>
                </div>
              </>
            ) : null}
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
                opacity: v.wk0.okO,
                transform: v.wk0.okT,
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
          {/* Perron + Mylder */}
          {/* project 2, Perron + Mylder: built by Source Capture, Docs Author, Test Author, A11y Fixer when it scrolls into view */}
          <div
            ref={v.worksRef1}
            style={{ position: "relative", minWidth: "0", display: "flex", flexDirection: "column" }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: "0",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `1px dashed ${v.wk1.wire}`,
                borderRadius: "var(--perron-radius-xl)",
                opacity: v.wk1.wireO,
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
                  opacity: v.wk1.tagO,
                  transition: "opacity 200ms ease",
                }}
              >
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#5B9DFF" }} />
                Source Capture · queued
              </span>
            </div>
            <article
              className="wk-card"
              onClick={v.caseCard1}
              style={{
                cursor: "pointer",
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row-reverse",
                gap: "40px 48px",
                boxSizing: "border-box",
                padding: "40px",
                background: "var(--perron-color-surface-raised)",
                border: "1px solid var(--perron-color-border-subtle)",
                borderRadius: "var(--perron-radius-xl)",
                opacity: v.wk1.sh.o,
                transform: v.wk1.sh.t,
                clipPath: v.wk1.sh.c,
                transition: v.wk1.tr,
              }}
            >
              <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: "10px 14px",
                    font: "600 12px/1.3 var(--perron-font-family-body)",
                    letterSpacing: "0.88px",
                    textTransform: "uppercase",
                    color: "var(--perron-color-text-secondary)",
                    opacity: v.wk1.m.o,
                    transform: v.wk1.m.t,
                    clipPath: v.wk1.m.c,
                    transition: v.wk1.tr,
                  }}
                >
                  <span>Own time · 2026</span>
                  <span
                    style={{
                      padding: "3px 10px",
                      borderRadius: "var(--perron-radius-full)",
                      font: "600 11px/1.3 var(--perron-font-family-body)",
                      letterSpacing: "0.88px",
                      textTransform: "uppercase",
                      border: "1px solid transparent",
                      background: "var(--perron-color-surface-success)",
                      color: "var(--perron-color-text-success)",
                    }}
                  >
                    Open source
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--perron-font-family-display)",
                    margin: "0",
                    fontSize: "34px",
                    lineHeight: "1.05",
                    letterSpacing: "-0.03em",
                    fontWeight: "700",
                    alignSelf: "flex-start",
                    opacity: v.wk1.h.o,
                    transform: v.wk1.h.t,
                    clipPath: v.wk1.h.c,
                    transition: v.wk1.tt,
                  }}
                >
                  Perron + Mylder
                </h3>
                <p
                  style={{
                    margin: "0",
                    fontSize: "21px",
                    lineHeight: "1.35",
                    color: "var(--perron-color-text-primary)",
                    textWrap: "balance",
                    opacity: v.wk1.l.o,
                    transform: v.wk1.l.t,
                    clipPath: v.wk1.l.c,
                    transition: v.wk1.tr,
                  }}
                >
                  An open-source design system, and the live city map built on it.
                </p>
                <p
                  style={{
                    margin: "0",
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "var(--perron-color-text-secondary)",
                    opacity: v.wk1.p.o,
                    transform: v.wk1.p.t,
                    clipPath: v.wk1.p.c,
                    transition: v.wk1.tr,
                  }}
                >
                  Perron ships tokens, components and patterns with an MCP server, so coding agents can read the system
                  directly. Mylder puts Copenhagen&apos;s buses, S-tog, metro and trains on one live map, and is honest
                  about how fresh each position is. Built solo with coding agents.
                </p>
                <dl style={{ margin: "8px 0 0", display: "flex", flexWrap: "wrap", gap: "20px 40px" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                      opacity: v.wk1.s1.o,
                      transform: v.wk1.s1.t,
                      clipPath: v.wk1.s1.c,
                      transition: v.wk1.tr,
                    }}
                  >
                    <dd
                      style={{
                        margin: "0",
                        font: "600 28px/1.15 var(--perron-font-family-body)",
                        letterSpacing: "-0.84px",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      54
                    </dd>
                    <dt style={{ fontSize: "13.5px", color: "var(--perron-color-text-secondary)" }}>components</dt>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                      opacity: v.wk1.s2.o,
                      transform: v.wk1.s2.t,
                      clipPath: v.wk1.s2.c,
                      transition: v.wk1.tr,
                    }}
                  >
                    <dd
                      style={{
                        margin: "0",
                        font: "600 28px/1.15 var(--perron-font-family-body)",
                        letterSpacing: "-0.84px",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      14
                    </dd>
                    <dt style={{ fontSize: "13.5px", color: "var(--perron-color-text-secondary)" }}>patterns</dt>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                      opacity: v.wk1.s3.o,
                      transform: v.wk1.s3.t,
                      clipPath: v.wk1.s3.c,
                      transition: v.wk1.tr,
                    }}
                  >
                    <dd
                      style={{
                        margin: "0",
                        font: "600 28px/1.15 var(--perron-font-family-body)",
                        letterSpacing: "-0.84px",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      280
                    </dd>
                    <dt style={{ fontSize: "13.5px", color: "var(--perron-color-text-secondary)" }}>tokens</dt>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                      opacity: v.wk1.s4.o,
                      transform: v.wk1.s4.t,
                      clipPath: v.wk1.s4.c,
                      transition: v.wk1.tr,
                    }}
                  >
                    <dd
                      style={{
                        margin: "0",
                        font: "600 28px/1.15 var(--perron-font-family-body)",
                        letterSpacing: "-0.84px",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      4
                    </dd>
                    <dt style={{ fontSize: "13.5px", color: "var(--perron-color-text-secondary)" }}>languages</dt>
                  </div>
                </dl>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "4px 24px",
                    fontSize: "15.5px",
                    fontWeight: "600",
                    opacity: v.wk1.x.o,
                    transform: v.wk1.x.t,
                    clipPath: v.wk1.x.c,
                    transition: v.wk1.tr,
                  }}
                >
                  <a
                    href="https://mylder-liard.vercel.app/en"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "11px 0",
                      textDecoration: "none",
                    }}
                  >
                    Open Mylder{" "}
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
                  </a>
                  <a
                    href="https://perron-pearl.vercel.app/"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "11px 0",
                      textDecoration: "none",
                    }}
                  >
                    Perron docs{" "}
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
                  </a>
                  <a
                    href="https://github.com/marcin-sieradzki/perron"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "11px 0",
                      textDecoration: "none",
                    }}
                  >
                    GitHub{" "}
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
                  </a>
                </div>
                {/* opens the project modal */}
                <div
                  style={{
                    alignSelf: "flex-start",
                    marginTop: "4px",
                    opacity: v.wk1.b.o,
                    transform: v.wk1.b.t,
                    clipPath: v.wk1.b.c,
                    transition: v.wk1.tr,
                  }}
                >
                  <button
                    ref={v.caseBtn1}
                    type="button"
                    className="wk-open"
                    onClick={v.caseOpen1}
                    aria-haspopup="dialog"
                    aria-label="View project: Perron + Mylder"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      minHeight: "44px",
                      boxSizing: "border-box",
                      margin: "0",
                      padding: "0 18px",
                      border: "1px solid var(--perron-color-border-control)",
                      borderRadius: "var(--perron-radius-md)",
                      background: "transparent",
                      color: "var(--perron-color-text-primary)",
                      font: "600 15px/1 var(--perron-font-family-body)",
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
              </div>
              <div
                style={{
                  position: "relative",
                  flex: "1 1 420px",
                  minWidth: "0",
                  boxSizing: "border-box",
                  padding: "20px",
                  background: "var(--perron-color-surface-default)",
                  border: "1px solid var(--perron-color-border-subtle)",
                  borderRadius: "var(--perron-radius-lg)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                  opacity: v.wk1.pn.o,
                  transform: v.wk1.pn.t,
                  clipPath: v.wk1.pn.c,
                  transition: v.wk1.tr,
                }}
              >
                <svg
                  viewBox="0 0 520 320"
                  role="img"
                  aria-label="Schematic of the Mylder live map: four transit lines crossing Copenhagen with vehicle dots in different freshness states"
                  style={{ display: "block", width: "100%", height: "auto", borderRadius: "var(--perron-radius-md)" }}
                >
                  <rect width="520" height="320" fill="#0B0F16" />
                  <path d="M338 0C322 62 356 112 340 172S300 262 324 320H520V0z" fill="#0D1827" />
                  <path d="M0 78H334M0 262H318M84 0V320M408 0V320" stroke="#141A25" strokeWidth="1" fill="none" />
                  <polyline
                    points="110,320 150,250 205,215 250,170 268,100 236,40 226,0"
                    fill="none"
                    stroke="#5B9DFF"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                  <polyline
                    points="20,262 120,236 200,196 250,170 300,120 316,60 300,10"
                    fill="none"
                    stroke="#F0616D"
                    strokeWidth="3.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                  <polyline
                    points="40,118 150,132 250,170 330,214 420,256 500,248"
                    fill="none"
                    stroke="#FFD166"
                    strokeWidth="3.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                  <ellipse cx="250" cy="170" rx="90" ry="62" fill="none" stroke="#3DDC97" strokeWidth="3.5" />
                  <circle cx="250" cy="170" r="8" fill="#0B0F16" stroke="#F2F4F7" strokeWidth="2.5" />
                  <circle cx="340" cy="170" r="4.5" fill="#0B0F16" stroke="#F2F4F7" strokeWidth="2" />
                  <circle cx="160" cy="170" r="4.5" fill="#0B0F16" stroke="#F2F4F7" strokeWidth="2" />
                  <circle cx="120" cy="236" r="6" fill="#F2F4F7" />
                  <circle cx="300" cy="120" r="6" fill="#F2F4F7" />
                  <circle cx="295" cy="223.7" r="6" fill="#F2F4F7" />
                  <circle cx="150" cy="132" r="6" fill="#F2F4F7" />
                  <circle cx="205" cy="215" r="6" fill="#F2F4F7" opacity="0.5" />
                  <circle cx="181" cy="130.1" r="6" fill="#F2F4F7" opacity="0.5" />
                  <circle cx="420" cy="256" r="5" fill="#0B0F16" stroke="#F2F4F7" strokeWidth="2" />
                  <circle cx="295" cy="116.3" r="5" fill="#0B0F16" stroke="#F2F4F7" strokeWidth="2" />
                  <circle
                    cx="268"
                    cy="100"
                    r="5"
                    fill="#0B0F16"
                    stroke="#F2F4F7"
                    strokeWidth="2"
                    strokeDasharray="2.4 2.4"
                  />
                  <path
                    d="M232 36l8 8M240 36l-8 8"
                    stroke="#A4ADBB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path d="M120 229V206" stroke="#F2F4F7" strokeWidth="1" fill="none" />
                  <rect x="62" y="184" width="130" height="22" rx="5" fill="#F2F4F7" />
                  <text
                    x="127"
                    y="199"
                    textAnchor="middle"
                    fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                    fontSize="10.5"
                    fontWeight="600"
                    fill="#0A0C10"
                  >
                    Reported 20 s ago
                  </text>
                </svg>
                <ul
                  aria-label="Position freshness states"
                  style={{
                    margin: "0",
                    padding: "0",
                    listStyle: "none",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px 20px",
                    font: "500 12px/1 var(--perron-font-family-data)",
                    color: "var(--perron-color-text-secondary)",
                    opacity: v.wk1.g.o,
                    transform: v.wk1.g.t,
                    clipPath: v.wk1.g.c,
                    transition: v.wk1.tr,
                  }}
                >
                  <li style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: "var(--perron-color-surface-inverse)",
                      }}
                    />
                    Live
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: "var(--perron-color-surface-inverse)",
                        opacity: "0.5",
                      }}
                    />
                    Ageing
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        width: "10px",
                        height: "10px",
                        boxSizing: "border-box",
                        borderRadius: "50%",
                        border: "2px solid var(--perron-color-text-primary)",
                      }}
                    />
                    Estimated
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        width: "10px",
                        height: "10px",
                        boxSizing: "border-box",
                        borderRadius: "50%",
                        border: "2px dotted var(--perron-color-text-primary)",
                      }}
                    />
                    Timetable only
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                      <path
                        d="M1.5 1.5l7 7M8.5 1.5l-7 7"
                        stroke="#A4ADBB"
                        strokeWidth="2"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                    No signal
                  </li>
                </ul>
              </div>
            </article>
            {/* review: the A11y Fixer follows a line across the card */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "0",
                bottom: "0",
                left: v.wk1.sw.p,
                zIndex: "2",
                width: "0",
                opacity: v.wk1.sw.o,
                transition: v.wk1.str,
                pointerEvents: "none",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: "-1px",
                  width: "2px",
                  background: "#FF7EB6",
                  boxShadow: "0 0 14px 1px #FF7EB6",
                }}
              />
              {v.agents ? (
                <>
                  <span style={{ position: "absolute", left: "0", width: "0", height: "0" }}>
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      aria-hidden="true"
                      style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
                    >
                      <path
                        d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
                        fill="#FF7EB6"
                        stroke="#0A0C10"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      style={{
                        position: "absolute",
                        right: "2px",
                        top: "16px",
                        padding: "3px 7px",
                        borderRadius: "var(--perron-radius-xs)",
                        background: "#FF7EB6",
                        color: "var(--perron-color-text-on-color-dark)",
                        font: "600 11px/1.3 var(--perron-font-family-data)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      A11y Fixer
                    </span>
                  </span>
                </>
              ) : null}
            </div>
            {v.agents ? (
              <>
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: v.wk1.c0.x,
                    top: v.wk1.c0.y,
                    zIndex: "3",
                    width: "0",
                    height: "0",
                    pointerEvents: "none",
                    opacity: v.wk1.c0.o,
                    transition: v.wk1.ctr,
                  }}
                >
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
                  >
                    <path
                      d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
                      fill="#5B9DFF"
                      stroke="#0A0C10"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    style={{
                      position: "absolute",
                      right: "2px",
                      top: "16px",
                      padding: "3px 7px",
                      borderRadius: "var(--perron-radius-xs)",
                      background: "#5B9DFF",
                      color: "var(--perron-color-text-on-color-dark)",
                      font: "600 11px/1.3 var(--perron-font-family-data)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Source Capture
                  </span>
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: v.wk1.c1.x,
                    top: v.wk1.c1.y,
                    zIndex: "3",
                    width: "0",
                    height: "0",
                    pointerEvents: "none",
                    opacity: v.wk1.c1.o,
                    transition: v.wk1.ctr,
                  }}
                >
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
                  >
                    <path
                      d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
                      fill="#5ED3F0"
                      stroke="#0A0C10"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    style={{
                      position: "absolute",
                      left: "12px",
                      top: "16px",
                      padding: "3px 7px",
                      borderRadius: "var(--perron-radius-xs)",
                      background: "#5ED3F0",
                      color: "var(--perron-color-text-on-color-dark)",
                      font: "600 11px/1.3 var(--perron-font-family-data)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Docs Author
                  </span>
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: v.wk1.c2.x,
                    top: v.wk1.c2.y,
                    zIndex: "3",
                    width: "0",
                    height: "0",
                    pointerEvents: "none",
                    opacity: v.wk1.c2.o,
                    transition: v.wk1.ctr,
                  }}
                >
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
                  >
                    <path
                      d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
                      fill="#FFD166"
                      stroke="#0A0C10"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    style={{
                      position: "absolute",
                      left: "12px",
                      top: "16px",
                      padding: "3px 7px",
                      borderRadius: "var(--perron-radius-xs)",
                      background: "#FFD166",
                      color: "var(--perron-color-text-on-color-dark)",
                      font: "600 11px/1.3 var(--perron-font-family-data)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Test Author
                  </span>
                </div>
              </>
            ) : null}
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
                opacity: v.wk1.okO,
                transform: v.wk1.okT,
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
          {/* Smaller cases */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))",
              gap: "28px 20px",
            }}
          >
            {/* project 3, Software factory and Component Factory: built by Architect, Code Writer, Test Author, Visual Reviewer when it scrolls into view */}
            <div
              ref={v.worksRef2}
              style={{ position: "relative", minWidth: "0", display: "flex", flexDirection: "column" }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: "0",
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `1px dashed ${v.wk2.wire}`,
                  borderRadius: "var(--perron-radius-lg)",
                  opacity: v.wk2.wireO,
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
                    opacity: v.wk2.tagO,
                    transition: "opacity 200ms ease",
                  }}
                >
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FF8A5B" }} />
                  Architect · queued
                </span>
              </div>
              <article
                className="wk-card"
                onClick={v.caseCard2}
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
                  opacity: v.wk2.sh.o,
                  transform: v.wk2.sh.t,
                  clipPath: v.wk2.sh.c,
                  transition: v.wk2.tr,
                }}
              >
                <span
                  style={{
                    font: "600 12px/1.3 var(--perron-font-family-body)",
                    letterSpacing: "0.88px",
                    textTransform: "uppercase",
                    color: "var(--perron-color-text-secondary)",
                    opacity: v.wk2.k.o,
                    transform: v.wk2.k.t,
                    clipPath: v.wk2.k.c,
                    transition: v.wk2.tr,
                  }}
                >
                  Grundfos · 2025 to now
                </span>
                <h3
                  style={{
                    fontFamily: "var(--perron-font-family-display)",
                    margin: "0",
                    fontSize: "24px",
                    lineHeight: "1.15",
                    letterSpacing: "-0.02em",
                    fontWeight: "700",
                    alignSelf: "flex-start",
                    opacity: v.wk2.h.o,
                    transform: v.wk2.h.t,
                    clipPath: v.wk2.h.c,
                    transition: v.wk2.tt,
                  }}
                >
                  Software factory and Component Factory
                </h3>
                <p
                  style={{
                    margin: "0",
                    fontSize: "15.5px",
                    lineHeight: "1.6",
                    color: "var(--perron-color-text-secondary)",
                    opacity: v.wk2.p.o,
                    transform: v.wk2.p.t,
                    clipPath: v.wk2.p.c,
                    transition: v.wk2.tr,
                  }}
                >
                  Two agent pipelines inside the software lifecycle. A ticket goes in, and a human-reviewed pull request
                  comes out. An agreed Figma component and its docs page go in, and a draft pull request with code,
                  tests, stories and docs comes out.
                </p>
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: "10px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    font: "500 12px/1 var(--perron-font-family-data)",
                    opacity: v.wk2.c.o,
                    transform: v.wk2.c.t,
                    clipPath: v.wk2.c.c,
                    transition: v.wk2.tr,
                  }}
                >
                  <span
                    style={{
                      padding: "3px 10px",
                      borderRadius: "var(--perron-radius-full)",
                      font: "600 11px/1.3 var(--perron-font-family-body)",
                      letterSpacing: "0.88px",
                      textTransform: "uppercase",
                      border: "1px solid transparent",
                      background: "var(--perron-color-surface-inset)",
                      color: "var(--perron-color-text-primary)",
                    }}
                  >
                    18 components merged
                  </span>
                  <span
                    style={{
                      padding: "3px 10px",
                      borderRadius: "var(--perron-radius-full)",
                      font: "600 11px/1.3 var(--perron-font-family-body)",
                      letterSpacing: "0.88px",
                      textTransform: "uppercase",
                      border: "1px dashed var(--perron-color-border-strong)",
                      background: "transparent",
                      color: "var(--perron-color-text-primary)",
                    }}
                  >
                    about 60 min each
                  </span>
                </div>
                {/* opens the project modal */}
                <div
                  style={{
                    alignSelf: "flex-start",
                    marginTop: "6px",
                    opacity: v.wk2.b.o,
                    transform: v.wk2.b.t,
                    clipPath: v.wk2.b.c,
                    transition: v.wk2.tr,
                  }}
                >
                  <button
                    ref={v.caseBtn2}
                    type="button"
                    className="wk-open"
                    onClick={v.caseOpen2}
                    aria-haspopup="dialog"
                    aria-label="View project: Software factory and Component Factory"
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
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  right: "0",
                  top: "0",
                  zIndex: "1",
                  boxSizing: "border-box",
                  width: v.wk2.dg.w,
                  height: v.wk2.dg.h,
                  border: "1.5px solid #FF8A5B",
                  borderRadius: "var(--perron-radius-lg)",
                  background: "#FF8A5B1F",
                  opacity: v.wk2.dg.o,
                  transition: v.wk2.dtr,
                  pointerEvents: "none",
                }}
              />
              {/* review: the Visual Reviewer follows a line down the card */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "0",
                  right: "0",
                  top: v.wk2.sw.p,
                  zIndex: "2",
                  height: "0",
                  opacity: v.wk2.sw.o,
                  transition: v.wk2.str,
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: "0",
                    right: "0",
                    top: "-1px",
                    height: "2px",
                    background: "#C8F560",
                    boxShadow: "0 0 14px 1px #C8F560",
                  }}
                />
                {v.agents ? (
                  <>
                    <span style={{ position: "absolute", right: "22px", top: "0", width: "0", height: "0" }}>
                      <svg
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        aria-hidden="true"
                        style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
                      >
                        <path
                          d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
                          fill="#C8F560"
                          stroke="#0A0C10"
                          strokeWidth="1.2"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        style={{
                          position: "absolute",
                          right: "2px",
                          top: "16px",
                          padding: "3px 7px",
                          borderRadius: "var(--perron-radius-xs)",
                          background: "#C8F560",
                          color: "var(--perron-color-text-on-color-dark)",
                          font: "600 11px/1.3 var(--perron-font-family-data)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Visual Reviewer
                      </span>
                    </span>
                  </>
                ) : null}
              </div>
              {v.agents ? (
                <>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: v.wk2.c0.x,
                      top: v.wk2.c0.y,
                      zIndex: "3",
                      width: "0",
                      height: "0",
                      pointerEvents: "none",
                      opacity: v.wk2.c0.o,
                      transition: v.wk2.ctr,
                    }}
                  >
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      aria-hidden="true"
                      style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
                    >
                      <path
                        d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
                        fill="#FF8A5B"
                        stroke="#0A0C10"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      style={{
                        position: "absolute",
                        right: "2px",
                        top: "16px",
                        padding: "3px 7px",
                        borderRadius: "var(--perron-radius-xs)",
                        background: "#FF8A5B",
                        color: "var(--perron-color-text-on-color-dark)",
                        font: "600 11px/1.3 var(--perron-font-family-data)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Architect
                    </span>
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: v.wk2.c1.x,
                      top: v.wk2.c1.y,
                      zIndex: "3",
                      width: "0",
                      height: "0",
                      pointerEvents: "none",
                      opacity: v.wk2.c1.o,
                      transition: v.wk2.ctr,
                    }}
                  >
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      aria-hidden="true"
                      style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
                    >
                      <path
                        d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
                        fill="#3DDC97"
                        stroke="#0A0C10"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      style={{
                        position: "absolute",
                        right: "2px",
                        top: "16px",
                        padding: "3px 7px",
                        borderRadius: "var(--perron-radius-xs)",
                        background: "#3DDC97",
                        color: "var(--perron-color-text-on-color-dark)",
                        font: "600 11px/1.3 var(--perron-font-family-data)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Code Writer
                    </span>
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: v.wk2.c2.x,
                      top: v.wk2.c2.y,
                      zIndex: "3",
                      width: "0",
                      height: "0",
                      pointerEvents: "none",
                      opacity: v.wk2.c2.o,
                      transition: v.wk2.ctr,
                    }}
                  >
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      aria-hidden="true"
                      style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
                    >
                      <path
                        d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
                        fill="#FFD166"
                        stroke="#0A0C10"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      style={{
                        position: "absolute",
                        left: "12px",
                        top: "16px",
                        padding: "3px 7px",
                        borderRadius: "var(--perron-radius-xs)",
                        background: "#FFD166",
                        color: "var(--perron-color-text-on-color-dark)",
                        font: "600 11px/1.3 var(--perron-font-family-data)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Test Author
                    </span>
                  </div>
                </>
              ) : null}
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
                  opacity: v.wk2.okO,
                  transform: v.wk2.okT,
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
            {/* project 4, Grundfos design system: built by Test Author, Docs Author, A11y Fixer when it scrolls into view */}
            <div
              ref={v.worksRef3}
              style={{ position: "relative", minWidth: "0", display: "flex", flexDirection: "column" }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: "0",
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `1px dashed ${v.wk3.wire}`,
                  borderRadius: "var(--perron-radius-lg)",
                  opacity: v.wk3.wireO,
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
                    opacity: v.wk3.tagO,
                    transition: "opacity 200ms ease",
                  }}
                >
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#5ED3F0" }} />
                  Docs Author · queued
                </span>
              </div>
              <article
                className="wk-card"
                onClick={v.caseCard3}
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
                  opacity: v.wk3.sh.o,
                  transform: v.wk3.sh.t,
                  clipPath: v.wk3.sh.c,
                  transition: v.wk3.tr,
                }}
              >
                <span
                  style={{
                    font: "600 12px/1.3 var(--perron-font-family-body)",
                    letterSpacing: "0.88px",
                    textTransform: "uppercase",
                    color: "var(--perron-color-text-secondary)",
                    opacity: v.wk3.k.o,
                    transform: v.wk3.k.t,
                    clipPath: v.wk3.k.c,
                    transition: v.wk3.tr,
                  }}
                >
                  Grundfos · Dec 2024 to now
                </span>
                <h3
                  style={{
                    fontFamily: "var(--perron-font-family-display)",
                    margin: "0",
                    fontSize: "24px",
                    lineHeight: "1.15",
                    letterSpacing: "-0.02em",
                    fontWeight: "700",
                    opacity: v.wk3.h.o,
                    transform: v.wk3.h.t,
                    clipPath: v.wk3.h.c,
                    transition: v.wk3.tr,
                  }}
                >
                  Grundfos design system
                </h3>
                <p
                  style={{
                    margin: "0",
                    fontSize: "15.5px",
                    lineHeight: "1.6",
                    color: "var(--perron-color-text-secondary)",
                    opacity: v.wk3.p.o,
                    transform: v.wk3.p.t,
                    clipPath: v.wk3.p.c,
                    transition: v.wk3.tr,
                  }}
                >
                  Built from zero on React Aria, and machine-readable: a component registry, a token registry, and a
                  validator that blocks unknown components and invented tokens.
                </p>
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: "10px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    font: "500 12px/1 var(--perron-font-family-data)",
                    opacity: v.wk3.c.o,
                    transform: v.wk3.c.t,
                    clipPath: v.wk3.c.c,
                    transition: v.wk3.tr,
                  }}
                >
                  <span
                    style={{
                      padding: "3px 10px",
                      borderRadius: "var(--perron-radius-full)",
                      font: "600 11px/1.3 var(--perron-font-family-body)",
                      letterSpacing: "0.88px",
                      textTransform: "uppercase",
                      border: "1px solid transparent",
                      background: "var(--perron-color-surface-inset)",
                      color: "var(--perron-color-text-primary)",
                    }}
                  >
                    65 components
                  </span>
                  <span
                    style={{
                      padding: "3px 10px",
                      borderRadius: "var(--perron-radius-full)",
                      font: "600 11px/1.3 var(--perron-font-family-body)",
                      letterSpacing: "0.88px",
                      textTransform: "uppercase",
                      border: "1px dashed var(--perron-color-border-strong)",
                      background: "transparent",
                      color: "var(--perron-color-text-primary)",
                    }}
                  >
                    adoption around 70%
                  </span>
                </div>
                {/* opens the project modal */}
                <div
                  style={{
                    alignSelf: "flex-start",
                    marginTop: "6px",
                    opacity: v.wk3.b.o,
                    transform: v.wk3.b.t,
                    clipPath: v.wk3.b.c,
                    transition: v.wk3.tr,
                  }}
                >
                  <button
                    ref={v.caseBtn3}
                    type="button"
                    className="wk-open"
                    onClick={v.caseOpen3}
                    aria-haspopup="dialog"
                    aria-label="View project: Grundfos design system"
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
              {/* review: the A11y Fixer follows a line across the card */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: v.wk3.sw.p,
                  zIndex: "2",
                  width: "0",
                  opacity: v.wk3.sw.o,
                  transition: v.wk3.str,
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    left: "-1px",
                    width: "2px",
                    background: "#FF7EB6",
                    boxShadow: "0 0 14px 1px #FF7EB6",
                  }}
                />
                {v.agents ? (
                  <>
                    <span style={{ position: "absolute", left: "0", width: "0", height: "0" }}>
                      <svg
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        aria-hidden="true"
                        style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
                      >
                        <path
                          d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
                          fill="#FF7EB6"
                          stroke="#0A0C10"
                          strokeWidth="1.2"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        style={{
                          position: "absolute",
                          right: "2px",
                          top: "16px",
                          padding: "3px 7px",
                          borderRadius: "var(--perron-radius-xs)",
                          background: "#FF7EB6",
                          color: "var(--perron-color-text-on-color-dark)",
                          font: "600 11px/1.3 var(--perron-font-family-data)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        A11y Fixer
                      </span>
                    </span>
                  </>
                ) : null}
              </div>
              {v.agents ? (
                <>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: v.wk3.c0.x,
                      top: v.wk3.c0.y,
                      zIndex: "3",
                      width: "0",
                      height: "0",
                      pointerEvents: "none",
                      opacity: v.wk3.c0.o,
                      transition: v.wk3.ctr,
                    }}
                  >
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      aria-hidden="true"
                      style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
                    >
                      <path
                        d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
                        fill="#FFD166"
                        stroke="#0A0C10"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      style={{
                        position: "absolute",
                        left: "12px",
                        top: "16px",
                        padding: "3px 7px",
                        borderRadius: "var(--perron-radius-xs)",
                        background: "#FFD166",
                        color: "var(--perron-color-text-on-color-dark)",
                        font: "600 11px/1.3 var(--perron-font-family-data)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Test Author
                    </span>
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: v.wk3.c1.x,
                      top: v.wk3.c1.y,
                      zIndex: "3",
                      width: "0",
                      height: "0",
                      pointerEvents: "none",
                      opacity: v.wk3.c1.o,
                      transition: v.wk3.ctr,
                    }}
                  >
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      aria-hidden="true"
                      style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
                    >
                      <path
                        d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
                        fill="#5ED3F0"
                        stroke="#0A0C10"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      style={{
                        position: "absolute",
                        left: "12px",
                        top: "16px",
                        padding: "3px 7px",
                        borderRadius: "var(--perron-radius-xs)",
                        background: "#5ED3F0",
                        color: "var(--perron-color-text-on-color-dark)",
                        font: "600 11px/1.3 var(--perron-font-family-data)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Docs Author
                    </span>
                  </div>
                </>
              ) : null}
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
                  opacity: v.wk3.okO,
                  transform: v.wk3.okT,
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
            {/* project 5, Maersk Design System: built by Test Author, Code Writer, Visual Reviewer when it scrolls into view */}
            <div
              ref={v.worksRef4}
              style={{ position: "relative", minWidth: "0", display: "flex", flexDirection: "column" }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: "0",
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `1px dashed ${v.wk4.wire}`,
                  borderRadius: "var(--perron-radius-lg)",
                  opacity: v.wk4.wireO,
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
                    opacity: v.wk4.tagO,
                    transition: "opacity 200ms ease",
                  }}
                >
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FFD166" }} />
                  Test Author · queued
                </span>
              </div>
              <article
                className="wk-card"
                onClick={v.caseCard4}
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
                  opacity: v.wk4.sh.o,
                  transform: v.wk4.sh.t,
                  clipPath: v.wk4.sh.c,
                  transition: v.wk4.tr,
                }}
              >
                <span
                  style={{
                    font: "600 12px/1.3 var(--perron-font-family-body)",
                    letterSpacing: "0.88px",
                    textTransform: "uppercase",
                    color: "var(--perron-color-text-secondary)",
                    opacity: v.wk4.k.o,
                    transform: v.wk4.k.t,
                    clipPath: v.wk4.k.c,
                    transition: v.wk4.tr,
                  }}
                >
                  Maersk · 2021 to 2024
                </span>
                <h3
                  style={{
                    fontFamily: "var(--perron-font-family-display)",
                    margin: "0",
                    fontSize: "24px",
                    lineHeight: "1.15",
                    letterSpacing: "-0.02em",
                    fontWeight: "700",
                    alignSelf: "flex-start",
                    opacity: v.wk4.h.o,
                    transform: v.wk4.h.t,
                    clipPath: v.wk4.h.c,
                    transition: v.wk4.tt,
                  }}
                >
                  Maersk Design System
                </h3>
                <p
                  style={{
                    margin: "0",
                    fontSize: "15.5px",
                    lineHeight: "1.6",
                    color: "var(--perron-color-text-secondary)",
                    opacity: v.wk4.p.o,
                    transform: v.wk4.p.t,
                    clipPath: v.wk4.p.c,
                    transition: v.wk4.tr,
                  }}
                >
                  Framework-agnostic web components from one token source for 5 brands, light and dark, 3 densities.
                  Third-largest contributor with 2,600+ commits, and I led the v1 to v2 upgrade.
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
                    opacity: v.wk4.c.o,
                    transform: v.wk4.c.t,
                    clipPath: v.wk4.c.c,
                    transition: v.wk4.tr,
                  }}
                >
                  <span
                    style={{
                      padding: "3px 10px",
                      borderRadius: "var(--perron-radius-full)",
                      font: "600 11px/1.3 var(--perron-font-family-body)",
                      letterSpacing: "0.88px",
                      textTransform: "uppercase",
                      border: "1px solid transparent",
                      background: "var(--perron-color-surface-inset)",
                      color: "var(--perron-color-text-primary)",
                    }}
                  >
                    70 components
                  </span>
                  <span
                    style={{
                      padding: "3px 10px",
                      borderRadius: "var(--perron-radius-full)",
                      font: "600 11px/1.3 var(--perron-font-family-body)",
                      letterSpacing: "0.88px",
                      textTransform: "uppercase",
                      border: "1px dashed var(--perron-color-border-strong)",
                      background: "transparent",
                      color: "var(--perron-color-text-primary)",
                    }}
                  >
                    467+ repositories
                  </span>
                  <span
                    style={{
                      padding: "3px 10px",
                      borderRadius: "var(--perron-radius-full)",
                      font: "600 11px/1.3 var(--perron-font-family-body)",
                      letterSpacing: "0.88px",
                      textTransform: "uppercase",
                      border: "1px dashed var(--perron-color-border-strong)",
                      background: "transparent",
                      color: "var(--perron-color-text-primary)",
                    }}
                  >
                    90% adoption
                  </span>
                </div>
                <a
                  href="https://designsystem.maersk.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 0 0",
                    fontSize: "15px",
                    fontWeight: "600",
                    textDecoration: "none",
                    opacity: v.wk4.x.o,
                    transform: v.wk4.x.t,
                    clipPath: v.wk4.x.c,
                    transition: v.wk4.tr,
                  }}
                >
                  designsystem.maersk.com{" "}
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
                </a>
                {/* opens the project modal */}
                <div
                  style={{
                    alignSelf: "flex-start",
                    marginTop: "6px",
                    opacity: v.wk4.b.o,
                    transform: v.wk4.b.t,
                    clipPath: v.wk4.b.c,
                    transition: v.wk4.tr,
                  }}
                >
                  <button
                    ref={v.caseBtn4}
                    type="button"
                    className="wk-open"
                    onClick={v.caseOpen4}
                    aria-haspopup="dialog"
                    aria-label="View project: Maersk Design System"
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
              {/* review: the Visual Reviewer follows a line down the card */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "0",
                  right: "0",
                  top: v.wk4.sw.p,
                  zIndex: "2",
                  height: "0",
                  opacity: v.wk4.sw.o,
                  transition: v.wk4.str,
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: "0",
                    right: "0",
                    top: "-1px",
                    height: "2px",
                    background: "#C8F560",
                    boxShadow: "0 0 14px 1px #C8F560",
                  }}
                />
                {v.agents ? (
                  <>
                    <span style={{ position: "absolute", right: "22px", top: "0", width: "0", height: "0" }}>
                      <svg
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        aria-hidden="true"
                        style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
                      >
                        <path
                          d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
                          fill="#C8F560"
                          stroke="#0A0C10"
                          strokeWidth="1.2"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        style={{
                          position: "absolute",
                          right: "2px",
                          top: "16px",
                          padding: "3px 7px",
                          borderRadius: "var(--perron-radius-xs)",
                          background: "#C8F560",
                          color: "var(--perron-color-text-on-color-dark)",
                          font: "600 11px/1.3 var(--perron-font-family-data)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Visual Reviewer
                      </span>
                    </span>
                  </>
                ) : null}
              </div>
              {v.agents ? (
                <>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: v.wk4.c0.x,
                      top: v.wk4.c0.y,
                      zIndex: "3",
                      width: "0",
                      height: "0",
                      pointerEvents: "none",
                      opacity: v.wk4.c0.o,
                      transition: v.wk4.ctr,
                    }}
                  >
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      aria-hidden="true"
                      style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
                    >
                      <path
                        d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
                        fill="#FFD166"
                        stroke="#0A0C10"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      style={{
                        position: "absolute",
                        right: "2px",
                        top: "16px",
                        padding: "3px 7px",
                        borderRadius: "var(--perron-radius-xs)",
                        background: "#FFD166",
                        color: "var(--perron-color-text-on-color-dark)",
                        font: "600 11px/1.3 var(--perron-font-family-data)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Test Author
                    </span>
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: v.wk4.c1.x,
                      top: v.wk4.c1.y,
                      zIndex: "3",
                      width: "0",
                      height: "0",
                      pointerEvents: "none",
                      opacity: v.wk4.c1.o,
                      transition: v.wk4.ctr,
                    }}
                  >
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      aria-hidden="true"
                      style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
                    >
                      <path
                        d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
                        fill="#3DDC97"
                        stroke="#0A0C10"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      style={{
                        position: "absolute",
                        right: "2px",
                        top: "16px",
                        padding: "3px 7px",
                        borderRadius: "var(--perron-radius-xs)",
                        background: "#3DDC97",
                        color: "var(--perron-color-text-on-color-dark)",
                        font: "600 11px/1.3 var(--perron-font-family-data)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Code Writer
                    </span>
                  </div>
                </>
              ) : null}
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
                  opacity: v.wk4.okO,
                  transform: v.wk4.okT,
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
            {/* project 6, Schedules on Maersk.com: built by Researcher, A11y Fixer, Visual Reviewer when it scrolls into view */}
            <div
              ref={v.worksRef5}
              style={{ position: "relative", minWidth: "0", display: "flex", flexDirection: "column" }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: "0",
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `1px dashed ${v.wk5.wire}`,
                  borderRadius: "var(--perron-radius-lg)",
                  opacity: v.wk5.wireO,
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
                    opacity: v.wk5.tagO,
                    transition: "opacity 200ms ease",
                  }}
                >
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#B58CFF" }} />
                  Researcher · queued
                </span>
              </div>
              <article
                className="wk-card"
                onClick={v.caseCard5}
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
                  opacity: v.wk5.sh.o,
                  transform: v.wk5.sh.t,
                  clipPath: v.wk5.sh.c,
                  transition: v.wk5.tr,
                }}
              >
                <span
                  style={{
                    font: "600 12px/1.3 var(--perron-font-family-body)",
                    letterSpacing: "0.88px",
                    textTransform: "uppercase",
                    color: "var(--perron-color-text-secondary)",
                    opacity: v.wk5.k.o,
                    transform: v.wk5.k.t,
                    clipPath: v.wk5.k.c,
                    transition: v.wk5.tr,
                  }}
                >
                  Maersk · 2021 to 2024
                </span>
                <h3
                  style={{
                    fontFamily: "var(--perron-font-family-display)",
                    margin: "0",
                    fontSize: "24px",
                    lineHeight: "1.15",
                    letterSpacing: "-0.02em",
                    fontWeight: "700",
                    opacity: v.wk5.h.o,
                    transform: v.wk5.h.t,
                    clipPath: v.wk5.h.c,
                    transition: v.wk5.tr,
                  }}
                >
                  Schedules on Maersk.com
                </h3>
                <p
                  style={{
                    margin: "0",
                    fontSize: "15.5px",
                    lineHeight: "1.6",
                    color: "var(--perron-color-text-secondary)",
                    opacity: v.wk5.p.o,
                    transform: v.wk5.p.t,
                    clipPath: v.wk5.p.c,
                    transition: v.wk5.tr,
                  }}
                >
                  One of the most visited pages on Maersk.com: routes, vessel schedules and port calls. Two brand
                  builds, with an embeddable version of every view, and the page&apos;s first A/B experiments.
                </p>
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: "10px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    font: "500 12px/1 var(--perron-font-family-data)",
                    opacity: v.wk5.c.o,
                    transform: v.wk5.c.t,
                    clipPath: v.wk5.c.c,
                    transition: v.wk5.tr,
                  }}
                >
                  <span
                    style={{
                      padding: "3px 10px",
                      borderRadius: "var(--perron-radius-full)",
                      font: "600 11px/1.3 var(--perron-font-family-body)",
                      letterSpacing: "0.88px",
                      textTransform: "uppercase",
                      border: "1px solid transparent",
                      background: "var(--perron-color-surface-inset)",
                      color: "var(--perron-color-text-primary)",
                    }}
                  >
                    millions of views every day
                  </span>
                  <span
                    style={{
                      padding: "3px 10px",
                      borderRadius: "var(--perron-radius-full)",
                      font: "600 11px/1.3 var(--perron-font-family-body)",
                      letterSpacing: "0.88px",
                      textTransform: "uppercase",
                      border: "1px dashed var(--perron-color-border-strong)",
                      background: "transparent",
                      color: "var(--perron-color-text-primary)",
                    }}
                  >
                    Vue 3
                  </span>
                </div>
                <a
                  href="https://www.maersk.com/schedules"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 0 0",
                    fontSize: "15px",
                    fontWeight: "600",
                    textDecoration: "none",
                    opacity: v.wk5.x.o,
                    transform: v.wk5.x.t,
                    clipPath: v.wk5.x.c,
                    transition: v.wk5.tr,
                  }}
                >
                  maersk.com/schedules{" "}
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
                </a>
                {/* opens the project modal */}
                <div
                  style={{
                    alignSelf: "flex-start",
                    marginTop: "6px",
                    opacity: v.wk5.b.o,
                    transform: v.wk5.b.t,
                    clipPath: v.wk5.b.c,
                    transition: v.wk5.tr,
                  }}
                >
                  <button
                    ref={v.caseBtn5}
                    type="button"
                    className="wk-open"
                    onClick={v.caseOpen5}
                    aria-haspopup="dialog"
                    aria-label="View project: Schedules on Maersk.com"
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
              {/* review: the Visual Reviewer follows a line across the card */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: v.wk5.sw.p,
                  zIndex: "2",
                  width: "0",
                  opacity: v.wk5.sw.o,
                  transition: v.wk5.str,
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    left: "-1px",
                    width: "2px",
                    background: "#C8F560",
                    boxShadow: "0 0 14px 1px #C8F560",
                  }}
                />
                {v.agents ? (
                  <>
                    <span style={{ position: "absolute", left: "0", width: "0", height: "0" }}>
                      <svg
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        aria-hidden="true"
                        style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
                      >
                        <path
                          d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
                          fill="#C8F560"
                          stroke="#0A0C10"
                          strokeWidth="1.2"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        style={{
                          position: "absolute",
                          right: "2px",
                          top: "16px",
                          padding: "3px 7px",
                          borderRadius: "var(--perron-radius-xs)",
                          background: "#C8F560",
                          color: "var(--perron-color-text-on-color-dark)",
                          font: "600 11px/1.3 var(--perron-font-family-data)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Visual Reviewer
                      </span>
                    </span>
                  </>
                ) : null}
              </div>
              {v.agents ? (
                <>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: v.wk5.c0.x,
                      top: v.wk5.c0.y,
                      zIndex: "3",
                      width: "0",
                      height: "0",
                      pointerEvents: "none",
                      opacity: v.wk5.c0.o,
                      transition: v.wk5.ctr,
                    }}
                  >
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      aria-hidden="true"
                      style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
                    >
                      <path
                        d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
                        fill="#B58CFF"
                        stroke="#0A0C10"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      style={{
                        position: "absolute",
                        left: "12px",
                        top: "16px",
                        padding: "3px 7px",
                        borderRadius: "var(--perron-radius-xs)",
                        background: "#B58CFF",
                        color: "var(--perron-color-text-on-color-dark)",
                        font: "600 11px/1.3 var(--perron-font-family-data)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Researcher
                    </span>
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: v.wk5.c1.x,
                      top: v.wk5.c1.y,
                      zIndex: "3",
                      width: "0",
                      height: "0",
                      pointerEvents: "none",
                      opacity: v.wk5.c1.o,
                      transition: v.wk5.ctr,
                    }}
                  >
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      aria-hidden="true"
                      style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
                    >
                      <path
                        d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
                        fill="#FF7EB6"
                        stroke="#0A0C10"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      style={{
                        position: "absolute",
                        right: "2px",
                        top: "16px",
                        padding: "3px 7px",
                        borderRadius: "var(--perron-radius-xs)",
                        background: "#FF7EB6",
                        color: "var(--perron-color-text-on-color-dark)",
                        font: "600 11px/1.3 var(--perron-font-family-data)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      A11y Fixer
                    </span>
                  </div>
                </>
              ) : null}
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
                  opacity: v.wk5.okO,
                  transform: v.wk5.okT,
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
            {/* project 7, Vendor Master Data: built by Architect, A11y Fixer, Code Writer, Visual Reviewer when it scrolls into view */}
            <div
              ref={v.worksRef6}
              style={{ position: "relative", minWidth: "0", display: "flex", flexDirection: "column" }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: "0",
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `1px dashed ${v.wk6.wire}`,
                  borderRadius: "var(--perron-radius-lg)",
                  opacity: v.wk6.wireO,
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
                    opacity: v.wk6.tagO,
                    transition: "opacity 200ms ease",
                  }}
                >
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FF7EB6" }} />
                  A11y Fixer · queued
                </span>
              </div>
              <article
                className="wk-card"
                onClick={v.caseCard6}
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
                  opacity: v.wk6.sh.o,
                  transform: v.wk6.sh.t,
                  clipPath: v.wk6.sh.c,
                  transition: v.wk6.tr,
                }}
              >
                <span
                  style={{
                    font: "600 12px/1.3 var(--perron-font-family-body)",
                    letterSpacing: "0.88px",
                    textTransform: "uppercase",
                    color: "var(--perron-color-text-secondary)",
                    opacity: v.wk6.k.o,
                    transform: v.wk6.k.t,
                    clipPath: v.wk6.k.c,
                    transition: v.wk6.tr,
                  }}
                >
                  Maersk · 2021 to 2024
                </span>
                <h3
                  style={{
                    fontFamily: "var(--perron-font-family-display)",
                    margin: "0",
                    fontSize: "24px",
                    lineHeight: "1.15",
                    letterSpacing: "-0.02em",
                    fontWeight: "700",
                    opacity: v.wk6.h.o,
                    transform: v.wk6.h.t,
                    clipPath: v.wk6.h.c,
                    transition: v.wk6.tr,
                  }}
                >
                  Vendor Master Data
                </h3>
                <p
                  style={{
                    margin: "0",
                    fontSize: "15.5px",
                    lineHeight: "1.6",
                    color: "var(--perron-color-text-secondary)",
                    opacity: v.wk6.p.o,
                    transform: v.wk6.p.t,
                    clipPath: v.wk6.p.c,
                    transition: v.wk6.tr,
                  }}
                >
                  Built the RESTful APIs and designed the UI on top of a ruleset engine that decides at runtime, per
                  country and entity, which fields exist and how they validate. A delta engine shows approvers exactly
                  what changed.
                </p>
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: "10px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    font: "500 12px/1 var(--perron-font-family-data)",
                    opacity: v.wk6.c.o,
                    transform: v.wk6.c.t,
                    clipPath: v.wk6.c.c,
                    transition: v.wk6.tr,
                  }}
                >
                  <span
                    style={{
                      padding: "3px 10px",
                      borderRadius: "var(--perron-radius-full)",
                      font: "600 11px/1.3 var(--perron-font-family-body)",
                      letterSpacing: "0.88px",
                      textTransform: "uppercase",
                      border: "1px solid transparent",
                      background: "var(--perron-color-surface-inset)",
                      color: "var(--perron-color-text-primary)",
                    }}
                  >
                    maker-checker approvals
                  </span>
                  <span
                    style={{
                      padding: "3px 10px",
                      borderRadius: "var(--perron-radius-full)",
                      font: "600 11px/1.3 var(--perron-font-family-body)",
                      letterSpacing: "0.88px",
                      textTransform: "uppercase",
                      border: "1px dashed var(--perron-color-border-strong)",
                      background: "transparent",
                      color: "var(--perron-color-text-primary)",
                    }}
                  >
                    .NET APIs
                  </span>
                </div>
                {/* opens the project modal */}
                <div
                  style={{
                    alignSelf: "flex-start",
                    marginTop: "6px",
                    opacity: v.wk6.b.o,
                    transform: v.wk6.b.t,
                    clipPath: v.wk6.b.c,
                    transition: v.wk6.tr,
                  }}
                >
                  <button
                    ref={v.caseBtn6}
                    type="button"
                    className="wk-open"
                    onClick={v.caseOpen6}
                    aria-haspopup="dialog"
                    aria-label="View project: Vendor Master Data"
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
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  right: "0",
                  bottom: "0",
                  zIndex: "1",
                  boxSizing: "border-box",
                  width: v.wk6.dg.w,
                  height: v.wk6.dg.h,
                  border: "1.5px solid #FF8A5B",
                  borderRadius: "var(--perron-radius-lg)",
                  background: "#FF8A5B1F",
                  opacity: v.wk6.dg.o,
                  transition: v.wk6.dtr,
                  pointerEvents: "none",
                }}
              />
              {/* review: the Visual Reviewer follows a line down the card */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "0",
                  right: "0",
                  top: v.wk6.sw.p,
                  zIndex: "2",
                  height: "0",
                  opacity: v.wk6.sw.o,
                  transition: v.wk6.str,
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: "0",
                    right: "0",
                    top: "-1px",
                    height: "2px",
                    background: "#C8F560",
                    boxShadow: "0 0 14px 1px #C8F560",
                  }}
                />
                {v.agents ? (
                  <>
                    <span style={{ position: "absolute", right: "22px", top: "0", width: "0", height: "0" }}>
                      <svg
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        aria-hidden="true"
                        style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
                      >
                        <path
                          d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
                          fill="#C8F560"
                          stroke="#0A0C10"
                          strokeWidth="1.2"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        style={{
                          position: "absolute",
                          right: "2px",
                          top: "16px",
                          padding: "3px 7px",
                          borderRadius: "var(--perron-radius-xs)",
                          background: "#C8F560",
                          color: "var(--perron-color-text-on-color-dark)",
                          font: "600 11px/1.3 var(--perron-font-family-data)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Visual Reviewer
                      </span>
                    </span>
                  </>
                ) : null}
              </div>
              {v.agents ? (
                <>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: v.wk6.c0.x,
                      top: v.wk6.c0.y,
                      zIndex: "3",
                      width: "0",
                      height: "0",
                      pointerEvents: "none",
                      opacity: v.wk6.c0.o,
                      transition: v.wk6.ctr,
                    }}
                  >
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      aria-hidden="true"
                      style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
                    >
                      <path
                        d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
                        fill="#FF8A5B"
                        stroke="#0A0C10"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      style={{
                        position: "absolute",
                        right: "2px",
                        top: "16px",
                        padding: "3px 7px",
                        borderRadius: "var(--perron-radius-xs)",
                        background: "#FF8A5B",
                        color: "var(--perron-color-text-on-color-dark)",
                        font: "600 11px/1.3 var(--perron-font-family-data)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Architect
                    </span>
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: v.wk6.c1.x,
                      top: v.wk6.c1.y,
                      zIndex: "3",
                      width: "0",
                      height: "0",
                      pointerEvents: "none",
                      opacity: v.wk6.c1.o,
                      transition: v.wk6.ctr,
                    }}
                  >
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      aria-hidden="true"
                      style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
                    >
                      <path
                        d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
                        fill="#FF7EB6"
                        stroke="#0A0C10"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      style={{
                        position: "absolute",
                        left: "12px",
                        top: "16px",
                        padding: "3px 7px",
                        borderRadius: "var(--perron-radius-xs)",
                        background: "#FF7EB6",
                        color: "var(--perron-color-text-on-color-dark)",
                        font: "600 11px/1.3 var(--perron-font-family-data)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      A11y Fixer
                    </span>
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: v.wk6.c2.x,
                      top: v.wk6.c2.y,
                      zIndex: "3",
                      width: "0",
                      height: "0",
                      pointerEvents: "none",
                      opacity: v.wk6.c2.o,
                      transition: v.wk6.ctr,
                    }}
                  >
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      aria-hidden="true"
                      style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
                    >
                      <path
                        d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
                        fill="#3DDC97"
                        stroke="#0A0C10"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      style={{
                        position: "absolute",
                        left: "12px",
                        top: "16px",
                        padding: "3px 7px",
                        borderRadius: "var(--perron-radius-xs)",
                        background: "#3DDC97",
                        color: "var(--perron-color-text-on-color-dark)",
                        font: "600 11px/1.3 var(--perron-font-family-data)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Code Writer
                    </span>
                  </div>
                </>
              ) : null}
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
                  opacity: v.wk6.okO,
                  transform: v.wk6.okT,
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
            {/* project 8, Micro-frontends: built by Visual Reviewer, Docs Author, Test Author, A11y Fixer when it scrolls into view */}
            <div
              ref={v.worksRef7}
              style={{ position: "relative", minWidth: "0", display: "flex", flexDirection: "column" }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: "0",
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `1px dashed ${v.wk7.wire}`,
                  borderRadius: "var(--perron-radius-lg)",
                  opacity: v.wk7.wireO,
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
                    opacity: v.wk7.tagO,
                    transition: "opacity 200ms ease",
                  }}
                >
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#C8F560" }} />
                  Visual Reviewer · queued
                </span>
              </div>
              <article
                className="wk-card"
                onClick={v.caseCard7}
                style={{
                  cursor: "pointer",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  boxSizing: "border-box",
                  padding: "28px",
                  background: "var(--perron-color-surface-raised)",
                  border: "1px solid var(--perron-color-border-subtle)",
                  borderRadius: "var(--perron-radius-lg)",
                  flex: "1 1 auto",
                  opacity: v.wk7.sh.o,
                  transform: v.wk7.sh.t,
                  clipPath: v.wk7.sh.c,
                  transition: v.wk7.tr,
                }}
              >
                <span
                  style={{
                    font: "600 12px/1.3 var(--perron-font-family-body)",
                    letterSpacing: "0.88px",
                    textTransform: "uppercase",
                    color: "var(--perron-color-text-secondary)",
                    opacity: v.wk7.k.o,
                    transform: v.wk7.k.t,
                    clipPath: v.wk7.k.c,
                    transition: v.wk7.tr,
                  }}
                >
                  Wunderman Nordic · 2020 to 2021
                </span>
                <h3
                  style={{
                    fontFamily: "var(--perron-font-family-display)",
                    margin: "0",
                    fontSize: "24px",
                    lineHeight: "1.15",
                    letterSpacing: "-0.02em",
                    fontWeight: "700",
                    alignSelf: "flex-start",
                    opacity: v.wk7.h.o,
                    transform: v.wk7.h.t,
                    clipPath: v.wk7.h.c,
                    transition: v.wk7.tt,
                  }}
                >
                  Micro-frontends
                </h3>
                <p
                  style={{
                    margin: "0",
                    fontSize: "15.5px",
                    lineHeight: "1.6",
                    color: "var(--perron-color-text-secondary)",
                    opacity: v.wk7.p.o,
                    transform: v.wk7.p.t,
                    clipPath: v.wk7.p.c,
                    transition: v.wk7.tr,
                  }}
                >
                  Re-architected a monolithic Vue 2 frontend into micro-frontends with Module Federation, so each team
                  deploys on its own. Also built a KPI dashboard platform with a live campaign view over WebSockets.
                </p>
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: "10px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    font: "500 12px/1 var(--perron-font-family-data)",
                    opacity: v.wk7.c.o,
                    transform: v.wk7.c.t,
                    clipPath: v.wk7.c.c,
                    transition: v.wk7.tr,
                  }}
                >
                  <span
                    style={{
                      padding: "3px 10px",
                      borderRadius: "var(--perron-radius-full)",
                      font: "600 11px/1.3 var(--perron-font-family-body)",
                      letterSpacing: "0.88px",
                      textTransform: "uppercase",
                      border: "1px solid transparent",
                      background: "var(--perron-color-surface-inset)",
                      color: "var(--perron-color-text-primary)",
                    }}
                  >
                    35% smaller bundles
                  </span>
                  <span
                    style={{
                      padding: "3px 10px",
                      borderRadius: "var(--perron-radius-full)",
                      font: "600 11px/1.3 var(--perron-font-family-body)",
                      letterSpacing: "0.88px",
                      textTransform: "uppercase",
                      border: "1px dashed var(--perron-color-border-strong)",
                      background: "transparent",
                      color: "var(--perron-color-text-primary)",
                    }}
                  >
                    Module Federation
                  </span>
                </div>
                {/* opens the project modal */}
                <div
                  style={{
                    alignSelf: "flex-start",
                    marginTop: "6px",
                    opacity: v.wk7.b.o,
                    transform: v.wk7.b.t,
                    clipPath: v.wk7.b.c,
                    transition: v.wk7.tr,
                  }}
                >
                  <button
                    ref={v.caseBtn7}
                    type="button"
                    className="wk-open"
                    onClick={v.caseOpen7}
                    aria-haspopup="dialog"
                    aria-label="View project: Micro-frontends"
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
              {/* review: the A11y Fixer follows a line across the card */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: v.wk7.sw.p,
                  zIndex: "2",
                  width: "0",
                  opacity: v.wk7.sw.o,
                  transition: v.wk7.str,
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    left: "-1px",
                    width: "2px",
                    background: "#FF7EB6",
                    boxShadow: "0 0 14px 1px #FF7EB6",
                  }}
                />
                {v.agents ? (
                  <>
                    <span style={{ position: "absolute", left: "0", width: "0", height: "0" }}>
                      <svg
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        aria-hidden="true"
                        style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
                      >
                        <path
                          d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
                          fill="#FF7EB6"
                          stroke="#0A0C10"
                          strokeWidth="1.2"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        style={{
                          position: "absolute",
                          right: "2px",
                          top: "16px",
                          padding: "3px 7px",
                          borderRadius: "var(--perron-radius-xs)",
                          background: "#FF7EB6",
                          color: "var(--perron-color-text-on-color-dark)",
                          font: "600 11px/1.3 var(--perron-font-family-data)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        A11y Fixer
                      </span>
                    </span>
                  </>
                ) : null}
              </div>
              {v.agents ? (
                <>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: v.wk7.c0.x,
                      top: v.wk7.c0.y,
                      zIndex: "3",
                      width: "0",
                      height: "0",
                      pointerEvents: "none",
                      opacity: v.wk7.c0.o,
                      transition: v.wk7.ctr,
                    }}
                  >
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      aria-hidden="true"
                      style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
                    >
                      <path
                        d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
                        fill="#C8F560"
                        stroke="#0A0C10"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      style={{
                        position: "absolute",
                        left: "12px",
                        top: "16px",
                        padding: "3px 7px",
                        borderRadius: "var(--perron-radius-xs)",
                        background: "#C8F560",
                        color: "var(--perron-color-text-on-color-dark)",
                        font: "600 11px/1.3 var(--perron-font-family-data)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Visual Reviewer
                    </span>
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: v.wk7.c1.x,
                      top: v.wk7.c1.y,
                      zIndex: "3",
                      width: "0",
                      height: "0",
                      pointerEvents: "none",
                      opacity: v.wk7.c1.o,
                      transition: v.wk7.ctr,
                    }}
                  >
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      aria-hidden="true"
                      style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
                    >
                      <path
                        d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
                        fill="#5ED3F0"
                        stroke="#0A0C10"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      style={{
                        position: "absolute",
                        left: "12px",
                        top: "16px",
                        padding: "3px 7px",
                        borderRadius: "var(--perron-radius-xs)",
                        background: "#5ED3F0",
                        color: "var(--perron-color-text-on-color-dark)",
                        font: "600 11px/1.3 var(--perron-font-family-data)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Docs Author
                    </span>
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: v.wk7.c2.x,
                      top: v.wk7.c2.y,
                      zIndex: "3",
                      width: "0",
                      height: "0",
                      pointerEvents: "none",
                      opacity: v.wk7.c2.o,
                      transition: v.wk7.ctr,
                    }}
                  >
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      aria-hidden="true"
                      style={{ position: "absolute", left: "-2px", top: "-2px", overflow: "visible" }}
                    >
                      <path
                        d="M2.2 1.6v15.2l4-3.6 2.7 5.6 2.6-1.2-2.6-5.5 5.3-.3z"
                        fill="#FFD166"
                        stroke="#0A0C10"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      style={{
                        position: "absolute",
                        left: "12px",
                        top: "16px",
                        padding: "3px 7px",
                        borderRadius: "var(--perron-radius-xs)",
                        background: "#FFD166",
                        color: "var(--perron-color-text-on-color-dark)",
                        font: "600 11px/1.3 var(--perron-font-family-data)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Test Author
                    </span>
                  </div>
                </>
              ) : null}
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
                  opacity: v.wk7.okO,
                  transform: v.wk7.okT,
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
                <div
                  ref={v.caseScroll}
                  className="cs-scroll"
                  tabIndex={0}
                  style={{ flex: "1 1 auto", minHeight: "0", overflowY: "auto", overscrollBehavior: "contain" }}
                >
                  {/* project 1, GDS Studio */}
                  {v.caseIs.p0 ? (
                    <>
                      <CaseGdsStudio />
                    </>
                  ) : null}
                  {/* project 2, Perron + Mylder */}
                  {v.caseIs.p1 ? (
                    <>
                      <CasePerronMylder />
                    </>
                  ) : null}
                  {/* project 3, Software factory and Component Factory */}
                  {v.caseIs.p2 ? (
                    <>
                      <CaseSoftwareFactory />
                    </>
                  ) : null}
                  {/* project 4, Grundfos design system */}
                  {v.caseIs.p3 ? (
                    <>
                      <CaseGrundfos />
                    </>
                  ) : null}
                  {/* project 5, Maersk Design System */}
                  {v.caseIs.p4 ? (
                    <>
                      <CaseMaerskDesignSystem />
                    </>
                  ) : null}
                  {/* project 6, Schedules on Maersk.com */}
                  {v.caseIs.p5 ? (
                    <>
                      <CaseSchedules />
                    </>
                  ) : null}
                  {/* project 7, Vendor Master Data */}
                  {v.caseIs.p6 ? (
                    <>
                      <CaseVendorMasterData />
                    </>
                  ) : null}
                  {/* project 8, Micro-frontends */}
                  {v.caseIs.p7 ? (
                    <>
                      <CaseMicroFrontends />
                    </>
                  ) : null}
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
                      <span style={{ color: "var(--perron-color-text-primary)" }}>{v.caseNo}</span> / 8
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
