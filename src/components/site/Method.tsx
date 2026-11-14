/* Markup generated from the Version E prototype (Site-E-Face.dc.html) by scripts/dc-to-jsx. Edit it here freely: the generator was a one-off. */

export function Method() {
  return (
    <section
      id="method"
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
            <span style={{ color: "var(--perron-color-text-brand)" }}>03</span> / How I build
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
            Agents are fast. Checks make them safe.
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
          How I put agents into the software lifecycle: work comes in, agents build, checks decide, a person reviews.
          The work section above follows the same rules.
        </p>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "48px 64px" }}>
        <ol
          style={{
            flex: "1 1 560px",
            minWidth: "0",
            margin: "0",
            padding: "0",
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <li
            style={{
              display: "flex",
              gap: "24px",
              padding: "28px 0",
              borderTop: "1px solid var(--perron-color-border-subtle)",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                flex: "none",
                width: "44px",
                font: "500 13px/1.9 var(--perron-font-family-data)",
                color: "var(--perron-color-text-brand)",
              }}
            >
              01
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <h3
                style={{
                  fontFamily: "var(--perron-font-family-display)",
                  margin: "0",
                  fontSize: "24px",
                  lineHeight: "1.2",
                  letterSpacing: "-0.02em",
                  fontWeight: "700",
                }}
              >
                Work comes in as a ticket, a design or a brief.
              </h3>
              <p
                style={{
                  margin: "0",
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "var(--perron-color-text-secondary)",
                }}
              >
                The software factory takes a ticket. The Component Factory takes an agreed Figma component and its docs
                page. GDS Studio takes a designer&apos;s brief.
              </p>
            </div>
          </li>
          <li
            style={{
              display: "flex",
              gap: "24px",
              padding: "28px 0",
              borderTop: "1px solid var(--perron-color-border-subtle)",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                flex: "none",
                width: "44px",
                font: "500 13px/1.9 var(--perron-font-family-data)",
                color: "var(--perron-color-text-brand)",
              }}
            >
              02
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <h3
                style={{
                  fontFamily: "var(--perron-font-family-display)",
                  margin: "0",
                  fontSize: "24px",
                  lineHeight: "1.2",
                  letterSpacing: "-0.02em",
                  fontWeight: "700",
                }}
              >
                One job per agent.
              </h3>
              <p
                style={{
                  margin: "0",
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "var(--perron-color-text-secondary)",
                }}
              >
                Capture, research, architecture, code, tests, docs, accessibility, visual review. Small roles are easier
                to verify than one big prompt.
              </p>
            </div>
          </li>
          <li
            style={{
              display: "flex",
              gap: "24px",
              padding: "28px 0",
              borderTop: "1px solid var(--perron-color-border-subtle)",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                flex: "none",
                width: "44px",
                font: "500 13px/1.9 var(--perron-font-family-data)",
                color: "var(--perron-color-text-brand)",
              }}
            >
              03
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <h3
                style={{
                  fontFamily: "var(--perron-font-family-display)",
                  margin: "0",
                  fontSize: "24px",
                  lineHeight: "1.2",
                  letterSpacing: "-0.02em",
                  fontWeight: "700",
                }}
              >
                The check decides, not the agent.
              </h3>
              <p
                style={{
                  margin: "0",
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "var(--perron-color-text-secondary)",
                }}
              >
                After every pass a system check runs: validator, typecheck, build and a runtime sweep. The agent gets
                two fix rounds, then the check has the last word. Deterministic steps are scripts, not prompts.
              </p>
            </div>
          </li>
          <li
            style={{
              display: "flex",
              gap: "24px",
              padding: "28px 0",
              borderTop: "1px solid var(--perron-color-border-subtle)",
              borderBottom: "1px solid var(--perron-color-border-subtle)",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                flex: "none",
                width: "44px",
                font: "500 13px/1.9 var(--perron-font-family-data)",
                color: "var(--perron-color-text-brand)",
              }}
            >
              04
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <h3
                style={{
                  fontFamily: "var(--perron-font-family-display)",
                  margin: "0",
                  fontSize: "24px",
                  lineHeight: "1.2",
                  letterSpacing: "-0.02em",
                  fontWeight: "700",
                }}
              >
                A person reviews. Every release is measured.
              </h3>
              <p
                style={{
                  margin: "0",
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "var(--perron-color-text-secondary)",
                }}
              >
                The factories hand a person a pull request to review. An eval harness measures every GDS Studio release:
                programmatic graders first, then an LLM judge, on dev and holdout sets.
              </p>
            </div>
          </li>
        </ol>
        <aside
          aria-label="One job per agent"
          style={{
            flex: "1 1 380px",
            minWidth: "0",
            maxWidth: "460px",
            boxSizing: "border-box",
            padding: "28px",
            background: "var(--perron-color-surface-raised)",
            border: "1px solid var(--perron-color-border-subtle)",
            borderRadius: "var(--perron-radius-lg)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span
              style={{
                font: "600 12px/1.3 var(--perron-font-family-body)",
                letterSpacing: "0.88px",
                textTransform: "uppercase",
                color: "var(--perron-color-text-secondary)",
              }}
            >
              Component Factory
            </span>
            <h3
              style={{
                fontFamily: "var(--perron-font-family-display)",
                margin: "0",
                fontSize: "24px",
                lineHeight: "1.2",
                letterSpacing: "-0.02em",
                fontWeight: "700",
              }}
            >
              One job per agent
            </h3>
          </div>
          <ol
            style={{
              margin: "0",
              padding: "18px 0",
              listStyle: "none",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(170px, 100%), 1fr))",
              gap: "12px 20px",
              borderTop: "1px solid var(--perron-color-border-subtle)",
              borderBottom: "1px solid var(--perron-color-border-subtle)",
              font: "500 13px/1.3 var(--perron-font-family-data)",
              color: "var(--perron-color-text-primary)",
            }}
          >
            <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                aria-hidden="true"
                style={{ flex: "none", width: "10px", height: "10px", borderRadius: "50%", background: "#5B9DFF" }}
              />
              Source Capture
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                aria-hidden="true"
                style={{ flex: "none", width: "10px", height: "10px", borderRadius: "50%", background: "#B58CFF" }}
              />
              Researcher
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                aria-hidden="true"
                style={{ flex: "none", width: "10px", height: "10px", borderRadius: "50%", background: "#FF8A5B" }}
              />
              Architect
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                aria-hidden="true"
                style={{ flex: "none", width: "10px", height: "10px", borderRadius: "50%", background: "#3DDC97" }}
              />
              Code Writer
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                aria-hidden="true"
                style={{ flex: "none", width: "10px", height: "10px", borderRadius: "50%", background: "#FFD166" }}
              />
              Test Author
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                aria-hidden="true"
                style={{ flex: "none", width: "10px", height: "10px", borderRadius: "50%", background: "#5ED3F0" }}
              />
              Docs Author
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                aria-hidden="true"
                style={{ flex: "none", width: "10px", height: "10px", borderRadius: "50%", background: "#FF7EB6" }}
              />
              A11y Fixer
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                aria-hidden="true"
                style={{ flex: "none", width: "10px", height: "10px", borderRadius: "50%", background: "#C8F560" }}
              />
              Visual Reviewer
            </li>
          </ol>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontSize: "14.5px", lineHeight: "1.5", color: "var(--perron-color-text-secondary)" }}>
              Then the system check has the last word.
            </span>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
                font: "500 12px/1.3 var(--perron-font-family-data)",
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
        </aside>
      </div>
    </section>
  );
}
