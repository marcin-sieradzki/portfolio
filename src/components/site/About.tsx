/* Markup generated from the Version E prototype (Site-E-Face.dc.html) by scripts/dc-to-jsx. Edit it here freely: the generator was a one-off. */

import type { Locale } from "@/i18n/config";
import { translator } from "@/i18n/translate";

export function About({ lang }: { lang: Locale }) {
  const t = translator(lang);
  return (
    <section
      id="about"
      style={{ maxWidth: "1240px", margin: "0 auto", boxSizing: "border-box", padding: "120px 32px 0" }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "48px 72px" }}>
        <div style={{ flex: "1 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px" }}>
          <span
            style={{
              font: "600 12px/1.3 var(--perron-font-family-body)",
              letterSpacing: "0.88px",
              textTransform: "uppercase",
              color: "var(--perron-color-text-secondary)",
            }}
          >
            <span style={{ color: "var(--perron-color-text-brand)" }}>03</span> {t("/ About")}
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
            {t("The man in the loop.")}
          </h2>
          <p
            style={{
              margin: "0",
              maxWidth: "640px",
              fontSize: "19px",
              lineHeight: "1.55",
              color: "var(--perron-color-text-primary)",
            }}
          >
            {t(
              "I'm a lead software engineer in Copenhagen with 6+ years of shipping production systems for large organisations.",
            )}
          </p>
          <p
            style={{
              margin: "0",
              maxWidth: "640px",
              fontSize: "16.5px",
              lineHeight: "1.65",
              color: "var(--perron-color-text-secondary)",
            }}
          >
            {t(
              "I started in full-stack agency work at VML MAP, spent three years at Maersk on the design system and customer-facing products, and I'm now the lead developer in a team of 5 on the design system at Grundfos. That is where I put agents into the software lifecycle: factories that turn tickets and designs into pull requests for review, and a design system agents can build from.",
            )}
          </p>
          <p
            style={{
              margin: "0",
              maxWidth: "640px",
              fontSize: "16.5px",
              lineHeight: "1.65",
              color: "var(--perron-color-text-secondary)",
            }}
          >
            {t(
              "My own projects, Perron and Mylder, are public and built solo with coding agents, so you can see how I work.",
            )}
          </p>
        </div>
        <aside
          aria-label={t("Facts and toolbox")}
          style={{
            flex: "0 1 420px",
            minWidth: "min(280px, 100%)",
            boxSizing: "border-box",
            padding: "28px",
            background: "var(--perron-color-surface-raised)",
            border: "1px solid var(--perron-color-border-subtle)",
            borderRadius: "var(--perron-radius-lg)",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <dl style={{ margin: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <dt
                style={{
                  font: "600 12px/1.3 var(--perron-font-family-body)",
                  letterSpacing: "0.88px",
                  textTransform: "uppercase",
                  color: "var(--perron-color-text-secondary)",
                }}
              >
                {t("Based in")}
              </dt>
              <dd style={{ margin: "0", fontSize: "17px", lineHeight: "1.4", fontWeight: "600" }}>
                {t("Copenhagen, Denmark")}
              </dd>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <dt
                style={{
                  font: "600 12px/1.3 var(--perron-font-family-body)",
                  letterSpacing: "0.88px",
                  textTransform: "uppercase",
                  color: "var(--perron-color-text-secondary)",
                }}
              >
                {t("Languages")}
              </dt>
              <dd style={{ margin: "0", fontSize: "17px", lineHeight: "1.4", fontWeight: "600" }}>
                {t("English, Polish")}
              </dd>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <dt
                style={{
                  font: "600 12px/1.3 var(--perron-font-family-body)",
                  letterSpacing: "0.88px",
                  textTransform: "uppercase",
                  color: "var(--perron-color-text-secondary)",
                }}
              >
                {t("Education")}
              </dt>
              <dd style={{ margin: "0", fontSize: "17px", lineHeight: "1.4", fontWeight: "600" }}>
                {t("Bachelor in Web Development")}
              </dd>
            </div>
          </dl>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              paddingTop: "24px",
              borderTop: "1px solid var(--perron-color-border-subtle)",
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
              {t("Toolbox")}
            </span>
            <ul
              aria-label={t("Toolbox")}
              style={{
                margin: "0",
                padding: "0",
                listStyle: "none",
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
                font: "500 12px/1 var(--perron-font-family-data)",
                color: "var(--perron-color-text-secondary)",
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
                TypeScript
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
                React
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
                Vue 3
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
                Lit
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
                Electron
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
                Node.js
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
                C# / .NET
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
                {t("Design tokens")}
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
                React Aria
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
                Storybook
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
                Playwright
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
                Vitest
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
                Claude Code
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
                {t("AI agents")}
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
                {t("Design systems")}
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
                MCP
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
                {t("Eval harnesses")}
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
                {t("Local LLMs")}
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
                {t("Accessibility")}
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
                {t("and more...")}
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
