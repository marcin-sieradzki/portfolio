/* Markup generated from the Version E prototype (Site-E-Face.dc.html) by scripts/dc-to-jsx. Edit it here freely: the generator was a one-off. */
import { Portrait } from "./Portrait";

export function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        borderTop: "1px solid var(--perron-color-border-subtle)",
        borderBottom: "1px solid var(--perron-color-border-subtle)",
        backgroundColor: "var(--perron-color-surface-default)",
        backgroundImage: "radial-gradient(var(--perron-color-border-subtle) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          boxSizing: "border-box",
          padding: "72px 32px 64px",
          display: "flex",
          flexDirection: "column",
          gap: "64px",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "56px" }}>
          <div style={{ flex: "1 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "28px" }}>
            <p
              style={{
                margin: "0",
                font: "600 12px/1.3 var(--perron-font-family-body)",
                letterSpacing: "0.88px",
                textTransform: "uppercase",
                color: "var(--perron-color-text-secondary)",
              }}
            >
              Lead Software Engineer · AI Engineer · Design Engineer
            </p>
            <h1
              style={{
                fontFamily: "var(--perron-font-family-display)",
                margin: "0",
                fontSize: "clamp(38px, 5vw, 68px)",
                lineHeight: "1.02",
                letterSpacing: "-0.03em",
                fontWeight: "700",
              }}
            >
              <span style={{ display: "block", color: "var(--perron-color-text-secondary)" }}>
                Hi, I&apos;m Marcin.
              </span>
              <span style={{ display: "block" }}>I ship software</span>
              <span style={{ display: "block", color: "var(--perron-color-text-success)" }}>
                <span style={{ position: "relative", display: "inline-block" }}>
                  with AI agents.
                  <span
                    aria-hidden="true"
                    className="mv"
                    style={{
                      display: "inline-block",
                      width: "0.07em",
                      height: "0.8em",
                      marginLeft: "0.08em",
                      background: "var(--perron-color-status-success)",
                      verticalAlign: "-0.05em",
                      animation: "blink 1.1s steps(1) infinite",
                    }}
                  />
                </span>
              </span>
            </h1>
            <p
              style={{
                margin: "0",
                maxWidth: "580px",
                fontSize: "19px",
                lineHeight: "1.55",
                color: "var(--perron-color-text-secondary)",
              }}
            >
              I&apos;m a lead software engineer in Copenhagen. I put AI agents into the software lifecycle and the
              design system, with checks and evals that make their work safe to ship.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a
                href="#work"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  minHeight: "44px",
                  boxSizing: "border-box",
                  padding: "0 20px",
                  border: "1px solid transparent",
                  borderRadius: "var(--perron-radius-md)",
                  background: "var(--perron-color-surface-inverse)",
                  color: "var(--perron-color-text-inverse)",
                  fontWeight: "600",
                  fontSize: "15px",
                  textDecoration: "none",
                }}
              >
                See the work{" "}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
              <a
                href="#contact"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  minHeight: "44px",
                  boxSizing: "border-box",
                  padding: "0 20px",
                  border: "1px solid var(--perron-color-border-control)",
                  borderRadius: "var(--perron-radius-md)",
                  background: "transparent",
                  color: "var(--perron-color-text-primary)",
                  fontWeight: "600",
                  fontSize: "15px",
                  textDecoration: "none",
                }}
              >
                Get in touch
              </a>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                paddingTop: "24px",
                borderTop: "1px solid var(--perron-color-border-strong)",
              }}
            >
              <span
                style={{
                  font: "600 12px/1.3 var(--perron-font-family-body)",
                  letterSpacing: "0.88px",
                  textTransform: "uppercase",
                  color: "var(--perron-color-text-secondary)",
                }}
              >
                6+ years at
              </span>
              <ul
                style={{
                  margin: "0",
                  padding: "0",
                  listStyle: "none",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "baseline",
                  gap: "6px 36px",
                  fontFamily: "var(--perron-font-family-display)",
                  fontSize: "24px",
                  lineHeight: "1.2",
                  letterSpacing: "-0.02em",
                  fontWeight: "700",
                }}
              >
                <li>Grundfos</li>
                <li>Maersk</li>
                <li>VML MAP</li>
              </ul>
            </div>
          </div>
          <div style={{ flex: "0 1 500px", minWidth: "min(300px, 100%)", display: "flex", justifyContent: "center" }}>
            {/* CONCEPT:START */}
            <Portrait />
            {/* CONCEPT:END */}
          </div>
        </div>
        {/* STATS */}
        <dl
          style={{
            margin: "0",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))",
            gap: "32px 40px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              paddingTop: "20px",
              borderTop: "1px solid var(--perron-color-border-strong)",
            }}
          >
            <dd
              style={{
                margin: "0",
                font: "600 48px/1 var(--perron-font-family-data)",
                letterSpacing: "-1.92px",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              6+
            </dd>
            <dt style={{ fontSize: "14.5px", lineHeight: "1.45", color: "var(--perron-color-text-secondary)" }}>
              years shipping production systems for large organisations
            </dt>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              paddingTop: "20px",
              borderTop: "1px solid var(--perron-color-border-strong)",
            }}
          >
            <dd
              style={{
                margin: "0",
                font: "600 48px/1 var(--perron-font-family-data)",
                letterSpacing: "-1.92px",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              467+
            </dd>
            <dt style={{ fontSize: "14.5px", lineHeight: "1.45", color: "var(--perron-color-text-secondary)" }}>
              UI repositories on the Maersk Design System, which I helped build from its early days
            </dt>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              paddingTop: "20px",
              borderTop: "1px solid var(--perron-color-border-strong)",
            }}
          >
            <dd
              style={{
                margin: "0",
                font: "600 48px/1 var(--perron-font-family-data)",
                letterSpacing: "-1.92px",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              65
            </dd>
            <dt style={{ fontSize: "14.5px", lineHeight: "1.45", color: "var(--perron-color-text-secondary)" }}>
              components in the Grundfos design system, where I&apos;m the lead developer in a team of 5
            </dt>
          </div>
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              paddingTop: "20px",
              borderTop: "1px solid var(--perron-color-border-strong)",
            }}
          >
            <dd
              style={{
                margin: "0",
                font: "600 48px/1 var(--perron-font-family-data)",
                letterSpacing: "-1.92px",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              22
            </dd>
            <dt style={{ fontSize: "14.5px", lineHeight: "1.45", color: "var(--perron-color-text-secondary)" }}>
              components merged by my Component Factory, each in about 60 minutes
            </dt>
          </div>
        </dl>
      </div>
    </section>
  );
}
