/* Markup generated from the Version E prototype (Site-E-Face.dc.html) by scripts/dc-to-jsx. Edit it here freely: the generator was a one-off. */

import { FactoryDrawing } from "./FactoryDrawing";

export function CaseSoftwareFactory() {
  return (
    <article style={{ display: "flex", flexDirection: "column" }}>
      <figure style={{ margin: "0", flex: "none" }}>
        {/* On a narrow screen the drawing keeps a readable size and scrolls sideways. */}
        <div
          className="cs-stage"
          style={{
            position: "relative",
            overflowX: "auto",
            overflowY: "hidden",
            overscrollBehaviorX: "contain",
            backgroundColor: "var(--perron-color-surface-default)",
          }}
        >
          <div
            style={{
              width: "max(100%, 760px)",
              aspectRatio: "1040 / 380",
              backgroundImage: "radial-gradient(var(--perron-color-border-subtle) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          >
            <FactoryDrawing />
          </div>
        </div>
        <figcaption
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "10px",
            boxSizing: "border-box",
            padding: "12px clamp(20px, 4vw, 40px)",
            paddingRight: "clamp(20px, 4vw, 40px)",
            borderTop: "1px solid var(--perron-color-border-subtle)",
            borderBottom: "1px solid var(--perron-color-border-subtle)",
            font: "500 12.5px/1.55 var(--perron-font-family-data)",
            color: "var(--perron-color-text-secondary)",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              flex: "none",
              width: "8px",
              height: "8px",
              marginTop: "6px",
              borderRadius: "50%",
              background: "#FF8A5B",
            }}
          />
          <span>
            The main line is the software factory: a spec, its tickets, the implementer, three brakes and the human
            review. The triage pipe carries what a run learned back into the factory. The Component Factory is the side
            line underneath.
            <span className="cs-swipe"> Swipe sideways to see all of it.</span>
          </span>
        </figcaption>
      </figure>
      <div
        style={{
          boxSizing: "border-box",
          padding: "clamp(24px, 4vw, 40px)",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        <header style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
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
            }}
          >
            <span>Grundfos · 2025 to now</span>
          </div>
          <h2
            id="case-title-factory"
            style={{
              fontFamily: "var(--perron-font-family-display)",
              margin: "0",
              fontSize: "clamp(30px, 4vw, 44px)",
              lineHeight: "1.04",
              letterSpacing: "-0.03em",
              fontWeight: "700",
              textWrap: "balance",
            }}
          >
            Software factory
          </h2>
          <p
            style={{
              margin: "0",
              maxWidth: "760px",
              fontSize: "clamp(18px, 2vw, 21px)",
              lineHeight: "1.35",
              color: "var(--perron-color-text-primary)",
              textWrap: "balance",
            }}
          >
            A spec goes in. Pull requests for a person to review come out, one ticket at a time.
          </p>
        </header>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "32px 56px" }}>
          <div style={{ flex: "3 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "28px" }}>
            <section style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <h3
                style={{
                  margin: "0",
                  font: "600 12px/1.3 var(--perron-font-family-body)",
                  letterSpacing: "0.88px",
                  textTransform: "uppercase",
                  color: "var(--perron-color-text-secondary)",
                }}
              >
                What it is
              </h3>
              <p
                style={{
                  margin: "0",
                  fontSize: "16.5px",
                  lineHeight: "1.6",
                  color: "var(--perron-color-text-secondary)",
                }}
              >
                A system of agents that turns a spec into pull requests, one ticket at a time. I built it for the GDS
                Studio work. Every ticket passes three brakes before a person reviews it, and every run ends with a
                triage of what went wrong, so the factory gets better over time.
              </p>
            </section>
            <section style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h3
                style={{
                  margin: "0",
                  font: "600 12px/1.3 var(--perron-font-family-body)",
                  letterSpacing: "0.88px",
                  textTransform: "uppercase",
                  color: "var(--perron-color-text-secondary)",
                }}
              >
                How it works
              </h3>
              <ol style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column" }}>
                <li style={{ position: "relative", display: "flex", gap: "16px", paddingBottom: "20px" }}>
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "6px",
                      top: "14px",
                      bottom: "-8px",
                      width: "2px",
                      background: "#FF8A5B",
                    }}
                  />
                  <span
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      flex: "none",
                      width: "14px",
                      height: "14px",
                      marginTop: "5px",
                      boxSizing: "border-box",
                      borderRadius: "50%",
                      background: "var(--perron-color-surface-raised)",
                      border: "3px solid var(--perron-color-text-primary)",
                    }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
                    <strong style={{ fontSize: "15.5px", lineHeight: "1.45", fontWeight: "700" }}>
                      Spec to tickets
                    </strong>
                    <span style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--perron-color-text-secondary)" }}>
                      A spec is cut into small tickets, and the factory builds them one at a time.
                    </span>
                  </div>
                </li>
                <li style={{ position: "relative", display: "flex", gap: "16px", paddingBottom: "20px" }}>
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "6px",
                      top: "14px",
                      bottom: "-8px",
                      width: "2px",
                      background: "#FF8A5B",
                    }}
                  />
                  <span
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      flex: "none",
                      width: "14px",
                      height: "14px",
                      marginTop: "5px",
                      boxSizing: "border-box",
                      borderRadius: "50%",
                      background: "var(--perron-color-surface-raised)",
                      border: "3px solid var(--perron-color-text-primary)",
                    }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
                    <strong style={{ fontSize: "15.5px", lineHeight: "1.45", fontWeight: "700" }}>
                      An implementer builds it
                    </strong>
                    <span style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--perron-color-text-secondary)" }}>
                      Each ticket gets its own branch and pull request, and is built test-first.
                    </span>
                  </div>
                </li>
                <li style={{ position: "relative", display: "flex", gap: "16px", paddingBottom: "20px" }}>
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "6px",
                      top: "14px",
                      bottom: "-8px",
                      width: "2px",
                      background: "#FF8A5B",
                    }}
                  />
                  <span
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      flex: "none",
                      width: "14px",
                      height: "14px",
                      marginTop: "5px",
                      boxSizing: "border-box",
                      borderRadius: "50%",
                      background: "var(--perron-color-surface-raised)",
                      border: "3px solid var(--perron-color-text-primary)",
                    }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
                    <strong style={{ fontSize: "15.5px", lineHeight: "1.45", fontWeight: "700" }}>Three brakes</strong>
                    <span style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--perron-color-text-secondary)" }}>
                      Automated checks, a reviewer that reads the diff cold, and a verifier that never sees the code: it
                      drives the running app and gives a verdict.
                    </span>
                  </div>
                </li>
                <li style={{ position: "relative", display: "flex", gap: "16px", paddingBottom: "20px" }}>
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "6px",
                      top: "14px",
                      bottom: "-8px",
                      width: "2px",
                      background: "#FF8A5B",
                    }}
                  />
                  <span
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      flex: "none",
                      width: "14px",
                      height: "14px",
                      marginTop: "5px",
                      boxSizing: "border-box",
                      borderRadius: "50%",
                      background: "var(--perron-color-surface-raised)",
                      border: "3px solid var(--perron-color-text-primary)",
                    }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
                    <strong style={{ fontSize: "15.5px", lineHeight: "1.45", fontWeight: "700" }}>
                      Rework is capped
                    </strong>
                    <span style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--perron-color-text-secondary)" }}>
                      A ticket that fails a brake goes back to the implementer. After two rounds it stops and waits for
                      a person.
                    </span>
                  </div>
                </li>
                <li style={{ position: "relative", display: "flex", gap: "16px", paddingBottom: "20px" }}>
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "6px",
                      top: "14px",
                      bottom: "-8px",
                      width: "2px",
                      background: "#FF8A5B",
                    }}
                  />
                  <span
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      flex: "none",
                      width: "14px",
                      height: "14px",
                      marginTop: "5px",
                      boxSizing: "border-box",
                      borderRadius: "50%",
                      background: "var(--perron-color-surface-raised)",
                      border: "3px solid var(--perron-color-text-primary)",
                    }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
                    <strong style={{ fontSize: "15.5px", lineHeight: "1.45", fontWeight: "700" }}>
                      Triage after every run
                    </strong>
                    <span style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--perron-color-text-secondary)" }}>
                      Each run ends by going through what went wrong and ranking it. The fixes go into the
                      factory&apos;s own checks, briefs and skills, so the next run is better.
                    </span>
                  </div>
                </li>
                <li style={{ position: "relative", display: "flex", gap: "16px", paddingBottom: "0" }}>
                  <span
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      flex: "none",
                      width: "14px",
                      height: "14px",
                      marginTop: "5px",
                      boxSizing: "border-box",
                      borderRadius: "50%",
                      background: "var(--perron-color-surface-raised)",
                      border: "3px solid var(--perron-color-text-primary)",
                    }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
                    <strong style={{ fontSize: "15.5px", lineHeight: "1.45", fontWeight: "700" }}>
                      A side line: the Component Factory
                    </strong>
                    <span style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--perron-color-text-secondary)" }}>
                      The same idea for design system components. An agreed Figma component and its docs page go in,
                      eight agents with one job each build it, a system check decides, and a draft pull request with
                      code, tests, stories and docs comes out. 22 components merged, about 60 minutes each.
                    </span>
                  </div>
                </li>
              </ol>
            </section>
          </div>
          <aside
            aria-label="Project facts"
            style={{
              flex: "2 1 300px",
              minWidth: "0",
              boxSizing: "border-box",
              padding: "24px",
              background: "var(--perron-color-surface-default)",
              border: "1px solid var(--perron-color-border-subtle)",
              borderRadius: "var(--perron-radius-lg)",
              display: "flex",
              flexDirection: "column",
              gap: "22px",
            }}
          >
            <dl
              style={{
                margin: "0",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(124px, 100%), 1fr))",
                gap: "20px 20px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column-reverse", justifyContent: "flex-end", gap: "5px" }}>
                <dt style={{ fontSize: "13.5px", lineHeight: "1.4", color: "var(--perron-color-text-secondary)" }}>
                  brakes on every ticket
                </dt>
                <dd
                  style={{
                    margin: "0",
                    font: "600 26px/1.15 var(--perron-font-family-body)",
                    letterSpacing: "-0.78px",
                  }}
                >
                  3
                </dd>
              </div>
              <div style={{ display: "flex", flexDirection: "column-reverse", justifyContent: "flex-end", gap: "5px" }}>
                <dt style={{ fontSize: "13.5px", lineHeight: "1.4", color: "var(--perron-color-text-secondary)" }}>
                  rework rounds at most
                </dt>
                <dd
                  style={{
                    margin: "0",
                    font: "600 26px/1.15 var(--perron-font-family-body)",
                    letterSpacing: "-0.78px",
                  }}
                >
                  2
                </dd>
              </div>
              <div style={{ display: "flex", flexDirection: "column-reverse", justifyContent: "flex-end", gap: "5px" }}>
                <dt style={{ fontSize: "13.5px", lineHeight: "1.4", color: "var(--perron-color-text-secondary)" }}>
                  components merged by the Component Factory
                </dt>
                <dd
                  style={{
                    margin: "0",
                    font: "600 26px/1.15 var(--perron-font-family-body)",
                    letterSpacing: "-0.78px",
                  }}
                >
                  22
                </dd>
              </div>
              <div style={{ display: "flex", flexDirection: "column-reverse", justifyContent: "flex-end", gap: "5px" }}>
                <dt style={{ fontSize: "13.5px", lineHeight: "1.4", color: "var(--perron-color-text-secondary)" }}>
                  for each component
                </dt>
                <dd
                  style={{
                    margin: "0",
                    font: "600 26px/1.15 var(--perron-font-family-body)",
                    letterSpacing: "-0.78px",
                  }}
                >
                  About 60 min
                </dd>
              </div>
            </dl>
            <dl
              style={{
                margin: "0",
                paddingTop: "22px",
                borderTop: "1px solid var(--perron-color-border-subtle)",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <dt
                  style={{
                    font: "600 12px/1.3 var(--perron-font-family-body)",
                    letterSpacing: "0.88px",
                    textTransform: "uppercase",
                    color: "var(--perron-color-text-secondary)",
                  }}
                >
                  Where
                </dt>
                <dd style={{ margin: "0", fontSize: "15.5px", lineHeight: "1.4", fontWeight: "600" }}>Grundfos</dd>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <dt
                  style={{
                    font: "600 12px/1.3 var(--perron-font-family-body)",
                    letterSpacing: "0.88px",
                    textTransform: "uppercase",
                    color: "var(--perron-color-text-secondary)",
                  }}
                >
                  When
                </dt>
                <dd style={{ margin: "0", fontSize: "15.5px", lineHeight: "1.4", fontWeight: "600" }}>2025 to now</dd>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <dt
                  style={{
                    font: "600 12px/1.3 var(--perron-font-family-body)",
                    letterSpacing: "0.88px",
                    textTransform: "uppercase",
                    color: "var(--perron-color-text-secondary)",
                  }}
                >
                  Role
                </dt>
                <dd style={{ margin: "0", fontSize: "15.5px", lineHeight: "1.4", fontWeight: "600" }}>
                  Lead Software Engineer
                </dd>
              </div>
            </dl>
            <ul
              aria-label="Keywords"
              style={{
                margin: "0",
                padding: "22px 0 0",
                borderTop: "1px solid var(--perron-color-border-subtle)",
                listStyle: "none",
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
              }}
            >
              <li
                style={{
                  padding: "3px 10px",
                  borderRadius: "var(--perron-radius-full)",
                  font: "600 11px/1.3 var(--perron-font-family-body)",
                  letterSpacing: "0.88px",
                  textTransform: "uppercase",
                  border: "1px dashed var(--perron-color-border-strong)",
                  color: "var(--perron-color-text-primary)",
                }}
              >
                Agent pipelines
              </li>
              <li
                style={{
                  padding: "3px 10px",
                  borderRadius: "var(--perron-radius-full)",
                  font: "600 11px/1.3 var(--perron-font-family-body)",
                  letterSpacing: "0.88px",
                  textTransform: "uppercase",
                  border: "1px dashed var(--perron-color-border-strong)",
                  color: "var(--perron-color-text-primary)",
                }}
              >
                Spec to pull request
              </li>
              <li
                style={{
                  padding: "3px 10px",
                  borderRadius: "var(--perron-radius-full)",
                  font: "600 11px/1.3 var(--perron-font-family-body)",
                  letterSpacing: "0.88px",
                  textTransform: "uppercase",
                  border: "1px dashed var(--perron-color-border-strong)",
                  color: "var(--perron-color-text-primary)",
                }}
              >
                Triage
              </li>
              <li
                style={{
                  padding: "3px 10px",
                  borderRadius: "var(--perron-radius-full)",
                  font: "600 11px/1.3 var(--perron-font-family-body)",
                  letterSpacing: "0.88px",
                  textTransform: "uppercase",
                  border: "1px dashed var(--perron-color-border-strong)",
                  color: "var(--perron-color-text-primary)",
                }}
              >
                Human review
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </article>
  );
}
