/* Markup generated from the Version E prototype (Site-E-Face.dc.html) by scripts/dc-to-jsx. Edit it here freely: the generator was a one-off. */

import type { Locale } from "@/i18n/config";
import { translator } from "@/i18n/translate";

export function Experience({ lang }: { lang: Locale }) {
  const t = translator(lang);
  return (
    <section
      id="experience"
      style={{ maxWidth: "1240px", margin: "0 auto", boxSizing: "border-box", padding: "120px 32px 0" }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "24px 64px",
          marginBottom: "64px",
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
            <span style={{ color: "var(--perron-color-text-brand)" }}>02</span> {t("/ Experience")}
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
            {t("The journey so far.")}
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            font: "500 13px/1 var(--perron-font-family-data)",
            color: "var(--perron-color-text-secondary)",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "28px",
              height: "28px",
              borderRadius: "var(--perron-radius-sm)",
              background: "var(--perron-color-status-info)",
              color: "var(--perron-color-text-on-color-dark)",
              font: "700 16px/1 var(--perron-font-family-body)",
            }}
          >
            M
          </span>
          <span>{t("Line M · Copenhagen · 2020 to now")}</span>
        </div>
      </div>
      <ol
        className="xp-line"
        style={{
          margin: "0",
          padding: "0",
          listStyle: "none",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))",
          gap: "48px 0",
        }}
      >
        <li
          className="xp-stop"
          style={{
            position: "relative",
            boxSizing: "border-box",
            padding: "36px 32px 0 0",
            borderTop: "3px solid var(--perron-color-status-info)",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <span
            aria-hidden="true"
            className="xp-dot"
            style={{
              position: "absolute",
              left: "0",
              top: "-11px",
              width: "19px",
              height: "19px",
              boxSizing: "border-box",
              borderRadius: "50%",
              background: "var(--perron-color-surface-default)",
              border: "3px solid var(--perron-color-text-primary)",
            }}
          />
          <span
            style={{
              font: "500 12.5px/1.4 var(--perron-font-family-data)",
              color: "var(--perron-color-text-secondary)",
            }}
          >
            {t("Jan 2020 to Nov 2021")}
          </span>
          <h3
            style={{
              fontFamily: "var(--perron-font-family-display)",
              margin: "0",
              fontSize: "24px",
              lineHeight: "1.15",
              letterSpacing: "-0.02em",
              fontWeight: "700",
            }}
          >
            VML MAP
          </h3>
          <p style={{ margin: "0", fontSize: "15.5px", fontWeight: "600", color: "var(--perron-color-text-primary)" }}>
            Full-stack Developer
          </p>
          <ul
            style={{
              margin: "8px 0 0",
              padding: "0",
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              fontSize: "15px",
              lineHeight: "1.55",
              color: "var(--perron-color-text-secondary)",
            }}
          >
            <li>{t("Apps for email marketing automation and observability: Vue 2, .NET APIs and Azure Functions.")}</li>
            <li>
              {t("Micro-frontends with Module Federation: 35% smaller bundles, independent deployments per team.")}
            </li>
            <li>{t("Campaign statistics dashboards with a live campaign view.")}</li>
            <li>{t("Mentored two interns.")}</li>
          </ul>
        </li>
        <li
          className="xp-stop"
          style={{
            position: "relative",
            boxSizing: "border-box",
            padding: "36px 32px 0 0",
            borderTop: "3px solid var(--perron-color-status-info)",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <span
            aria-hidden="true"
            className="xp-dot"
            style={{
              position: "absolute",
              left: "0",
              top: "-11px",
              width: "19px",
              height: "19px",
              boxSizing: "border-box",
              borderRadius: "50%",
              background: "var(--perron-color-surface-default)",
              border: "3px solid var(--perron-color-text-primary)",
            }}
          />
          <span
            style={{
              font: "500 12.5px/1.4 var(--perron-font-family-data)",
              color: "var(--perron-color-text-secondary)",
            }}
          >
            {t("Nov 2021 to Dec 2024")}
          </span>
          <h3
            style={{
              fontFamily: "var(--perron-font-family-display)",
              margin: "0",
              fontSize: "24px",
              lineHeight: "1.15",
              letterSpacing: "-0.02em",
              fontWeight: "700",
            }}
          >
            A.P. Moller - Maersk
          </h3>
          <p style={{ margin: "0", fontSize: "15.5px", fontWeight: "600", color: "var(--perron-color-text-primary)" }}>
            Senior Software Engineer
          </p>
          <ul
            style={{
              margin: "8px 0 0",
              padding: "0",
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              fontSize: "15px",
              lineHeight: "1.55",
              color: "var(--perron-color-text-secondary)",
            }}
          >
            <li>{t("Maersk Design System: 70 web components in 467+ repositories.")}</li>
            <li>{t("Schedules, with millions of views every day.")}</li>
            <li>{t("Vendor Master Data: APIs, ruleset UI and approval workflow.")}</li>
            <li>{t("Led technical interviews and mentored a junior developer to key contributor.")}</li>
            <li>{t("Early adopter of agentic development in a 10-person team.")}</li>
          </ul>
        </li>
        <li
          className="xp-stop"
          style={{
            position: "relative",
            boxSizing: "border-box",
            padding: "36px 32px 0 0",
            borderTop: "3px solid var(--perron-color-status-info)",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <span
            aria-hidden="true"
            className="mv xp-dot"
            style={{
              position: "absolute",
              left: "0",
              top: "-11px",
              width: "19px",
              height: "19px",
              borderRadius: "50%",
              background: "var(--perron-color-status-success)",
              animation: "ping 2.4s ease-out infinite",
            }}
          />
          <span
            aria-hidden="true"
            className="xp-dot"
            style={{
              position: "absolute",
              left: "0",
              top: "-11px",
              width: "19px",
              height: "19px",
              boxSizing: "border-box",
              borderRadius: "50%",
              background: "var(--perron-color-status-success)",
              border: "3px solid var(--perron-color-surface-default)",
            }}
          />
          <span
            style={{ font: "500 12.5px/1.4 var(--perron-font-family-data)", color: "var(--perron-color-text-success)" }}
          >
            {t("Dec 2024 to now")}
          </span>
          <h3
            style={{
              fontFamily: "var(--perron-font-family-display)",
              margin: "0",
              fontSize: "24px",
              lineHeight: "1.15",
              letterSpacing: "-0.02em",
              fontWeight: "700",
            }}
          >
            Grundfos
          </h3>
          <p style={{ margin: "0", fontSize: "15.5px", fontWeight: "600", color: "var(--perron-color-text-primary)" }}>
            Lead Software Engineer
          </p>
          <ul
            style={{
              margin: "8px 0 0",
              padding: "0",
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              fontSize: "15px",
              lineHeight: "1.55",
              color: "var(--perron-color-text-secondary)",
            }}
          >
            <li>{t("Lead developer in a team of 5 on a design system built from zero.")}</li>
            <li>
              {t(
                "GDS Studio and the software factory built for it: a spec goes in, pull requests for review come out. The Component Factory does the same for design system components.",
              )}
            </li>
            <li>{t("Weekly design system adoption audit across 30 UI repositories, on local models.")}</li>
          </ul>
        </li>
        <li
          className="xp-stop xp-next"
          style={{
            position: "relative",
            boxSizing: "border-box",
            padding: "36px 0 0 0",
            borderTop: "3px dashed var(--perron-color-border-control)",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <span
            aria-hidden="true"
            className="xp-dot"
            style={{
              position: "absolute",
              left: "0",
              top: "-11px",
              width: "19px",
              height: "19px",
              boxSizing: "border-box",
              borderRadius: "50%",
              background: "var(--perron-color-surface-default)",
              border: "3px dashed var(--perron-color-text-secondary)",
            }}
          />
          <span
            style={{
              font: "500 12.5px/1.4 var(--perron-font-family-data)",
              color: "var(--perron-color-text-secondary)",
            }}
          >
            {t("Next stop")}
          </span>
          <h3
            style={{
              fontFamily: "var(--perron-font-family-display)",
              margin: "0",
              fontSize: "24px",
              lineHeight: "1.15",
              letterSpacing: "-0.02em",
              fontWeight: "700",
            }}
          >
            {t("Your team?")}
          </h3>
          <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "var(--perron-color-text-secondary)" }}>
            {t(
              "Open to lead, staff and senior software engineering roles where AI agents become part of how the team ships. Copenhagen or remote.",
            )}
          </p>
          <a
            href="#contact"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "11px 0",
              fontSize: "15.5px",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            {t("Get in touch")}{" "}
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
        </li>
      </ol>
    </section>
  );
}
