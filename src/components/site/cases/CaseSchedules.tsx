/* Markup generated from the Version E prototype (Site-E-Face.dc.html) by scripts/dc-to-jsx. Edit it here freely: the generator was a one-off. */

import { useT } from "@/i18n/LocaleProvider";
export function CaseSchedules() {
  const t = useT();
  const nowW = Math.max(30, t("now").length * 5.4 + 10);
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
            <svg
              viewBox="0 0 1040 380"
              preserveAspectRatio="xMidYMid slice"
              role="img"
              aria-label={t(
                "A sea chart with a dashed route between four ports and two vessels sailing it. Below it, a schedule: two vessels as rows across a week, port calls as stops, and a line that marks now.",
              )}
              style={{ display: "block", width: "100%", height: "100%" }}
            >
              <rect x="0" y="0" width="1040" height="380" style={{ fill: "var(--perron-color-map-water)" }} />
              <path
                d="M80 0V246M200 0V246M320 0V246M440 0V246M560 0V246M680 0V246M800 0V246M920 0V246M0 60H1040M0 140H1040M0 220H1040"
                fill="none"
                strokeWidth="1"
                style={{ stroke: "var(--site-color-art-sea-grid)" }}
              />
              <path
                d="M0 0H96C116 30 82 58 96 86S60 132 28 128S8 160 0 164ZM196 0H470C488 34 440 46 420 70S350 96 318 84S232 62 214 36ZM480 246C492 214 536 204 566 214S604 190 632 200S676 226 668 246ZM730 0H1040V40C1004 52 990 30 958 40S900 22 860 34S770 30 730 0ZM968 110C990 104 1022 116 1040 112V214C1012 220 986 196 978 170S952 124 968 110Z"
                strokeWidth="1.5"
                strokeLinejoin="round"
                style={{ fill: "var(--perron-color-map-land)", stroke: "var(--site-color-art-sea-line)" }}
              />
              <circle
                cx="66"
                cy="204"
                r="15"
                fill="none"
                strokeWidth="1.5"
                style={{ stroke: "var(--site-color-art-sea-line-strong)" }}
              />
              <path d="M66 185l4.5 19h-9z" style={{ fill: "var(--site-color-art-sea-mark)" }} />
              <path d="M66 223l4.5-19h-9z" style={{ fill: "var(--site-color-art-sea-mark-deep)" }} />
              <text
                x="66"
                y="180"
                textAnchor="middle"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="9"
                fontWeight="600"
                style={{ fill: "var(--site-color-art-sea-mark)" }}
              >
                N
              </text>
              <path
                d="M118 92C176 168 300 204 388 178S560 96 660 138S860 150 922 66"
                fill="none"
                strokeWidth="7"
                opacity="0.16"
                strokeLinecap="round"
                style={{ stroke: "var(--site-color-accent-purple)" }}
              />
              <path
                d="M118 92C176 168 300 204 388 178S560 96 660 138S860 150 922 66"
                fill="none"
                strokeWidth="2.5"
                strokeDasharray="2 9"
                strokeLinecap="round"
                className="mv"
                style={{ stroke: "var(--site-color-accent-purple)", animation: "csFlow 2.4s linear infinite" }}
              />
              <g className="mv cs-sail cs-sail-a" style={{ animationDelay: "0s" }}>
                <g transform="scale(1.45)">
                  <path
                    d="M-18 -6.5H8L18 0L8 6.5H-18Z"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    style={{ fill: "var(--site-color-art-ink)", stroke: "var(--site-color-art-paper)" }}
                  />
                  <rect x="-14" y="-4" width="6" height="8" style={{ fill: "var(--site-color-accent-purple)" }} />
                  <rect x="-6.5" y="-4" width="6" height="8" style={{ fill: "var(--site-color-accent-yellow)" }} />
                  <rect x="1" y="-4" width="6" height="8" style={{ fill: "var(--site-color-accent-cyan)" }} />
                </g>
              </g>
              <g className="mv cs-sail cs-sail-b" style={{ animationDelay: "-9s" }}>
                <g transform="scale(1.45)">
                  <path
                    d="M-18 -6.5H8L18 0L8 6.5H-18Z"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    style={{ fill: "var(--site-color-art-ink)", stroke: "var(--site-color-art-paper)" }}
                  />
                  <rect x="-14" y="-4" width="6" height="8" style={{ fill: "var(--site-color-accent-purple)" }} />
                  <rect x="-6.5" y="-4" width="6" height="8" style={{ fill: "var(--site-color-accent-yellow)" }} />
                  <rect x="1" y="-4" width="6" height="8" style={{ fill: "var(--site-color-accent-cyan)" }} />
                </g>
              </g>
              <circle
                cx="118"
                cy="92"
                r="7"
                strokeWidth="2.5"
                style={{ fill: "var(--perron-color-map-water)", stroke: "var(--site-color-art-ink)" }}
              />
              <rect x="134" y="70" width="52" height="20" rx="5" style={{ fill: "var(--site-color-art-ink)" }} />
              <text
                x="160"
                y="83.8"
                textAnchor="middle"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="10.5"
                fontWeight="600"
                style={{ fill: "var(--site-color-art-paper)" }}
              >
                NLRTM
              </text>
              <circle
                cx="388"
                cy="178"
                r="7"
                strokeWidth="2.5"
                style={{ fill: "var(--perron-color-map-water)", stroke: "var(--site-color-art-ink)" }}
              />
              <rect x="362" y="196" width="52" height="20" rx="5" style={{ fill: "var(--site-color-art-ink)" }} />
              <text
                x="388"
                y="209.8"
                textAnchor="middle"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="10.5"
                fontWeight="600"
                style={{ fill: "var(--site-color-art-paper)" }}
              >
                ESALG
              </text>
              <circle
                cx="660"
                cy="138"
                r="7"
                strokeWidth="2.5"
                style={{ fill: "var(--perron-color-map-water)", stroke: "var(--site-color-art-ink)" }}
              />
              <rect x="634" y="110" width="52" height="20" rx="5" style={{ fill: "var(--site-color-art-ink)" }} />
              <text
                x="660"
                y="123.8"
                textAnchor="middle"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="10.5"
                fontWeight="600"
                style={{ fill: "var(--site-color-art-paper)" }}
              >
                SGSIN
              </text>
              <circle
                cx="922"
                cy="66"
                r="7"
                strokeWidth="2.5"
                style={{ fill: "var(--perron-color-map-water)", stroke: "var(--site-color-art-ink)" }}
              />
              <rect x="854" y="82" width="52" height="20" rx="5" style={{ fill: "var(--site-color-art-ink)" }} />
              <text
                x="880"
                y="95.8"
                textAnchor="middle"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="10.5"
                fontWeight="600"
                style={{ fill: "var(--site-color-art-paper)" }}
              >
                CNSHA
              </text>
              <rect
                x="36"
                y="244"
                width="968"
                height="116"
                rx="10"
                strokeWidth="1.5"
                opacity="0.96"
                style={{ fill: "var(--site-color-art-paper)", stroke: "var(--site-color-art-line-subtle)" }}
              />
              <rect
                x="50"
                y="256"
                width="66"
                height="22"
                rx="11"
                strokeWidth="1.5"
                style={{
                  fill: "color-mix(in srgb, var(--site-color-accent-purple) 16%, transparent)",
                  stroke: "var(--site-color-accent-purple)",
                }}
              />
              <text
                x="83"
                y="270.8"
                textAnchor="middle"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="10"
                fontWeight="600"
                style={{ fill: "var(--site-color-accent-purple)" }}
              >
                {t("Routes")}
              </text>
              <rect
                x="124"
                y="256"
                width="128"
                height="22"
                rx="11"
                fill="none"
                strokeWidth="1.5"
                style={{ stroke: "var(--site-color-art-line)" }}
              />
              <text
                x="188"
                y="270.8"
                textAnchor="middle"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="10"
                fontWeight="500"
                style={{ fill: "var(--site-color-art-ink-soft)" }}
              >
                {t("Vessel schedules")}
              </text>
              <rect
                x="260"
                y="256"
                width="88"
                height="22"
                rx="11"
                fill="none"
                strokeWidth="1.5"
                style={{ stroke: "var(--site-color-art-line)" }}
              />
              <text
                x="304"
                y="270.8"
                textAnchor="middle"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="10"
                fontWeight="500"
                style={{ fill: "var(--site-color-art-ink-soft)" }}
              >
                {t("Port calls")}
              </text>
              <text
                x="990"
                y="270.8"
                textAnchor="end"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="10"
                fontWeight="500"
                style={{ fill: "var(--site-color-art-ink-muted)" }}
              >
                {t("2 brand builds · every view embeddable")}
              </text>
              <path
                d="M176 288V350M291.4 288V350M406.9 288V350M522.3 288V350M637.7 288V350M753.1 288V350M868.6 288V350M984 288V350"
                fill="none"
                strokeWidth="1"
                style={{ stroke: "var(--site-color-art-line-subtle)" }}
              />
              <text
                x="182"
                y="298"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="9.5"
                fontWeight="500"
                style={{ fill: "var(--site-color-art-ink-muted)" }}
              >
                {t("Mon")}
              </text>
              <text
                x="297.4"
                y="298"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="9.5"
                fontWeight="500"
                style={{ fill: "var(--site-color-art-ink-muted)" }}
              >
                {t("Tue")}
              </text>
              <text
                x="412.9"
                y="298"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="9.5"
                fontWeight="500"
                style={{ fill: "var(--site-color-art-ink-muted)" }}
              >
                {t("Wed")}
              </text>
              <text
                x="528.3"
                y="298"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="9.5"
                fontWeight="500"
                style={{ fill: "var(--site-color-art-ink-muted)" }}
              >
                {t("Thu")}
              </text>
              <text
                x="643.7"
                y="298"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="9.5"
                fontWeight="500"
                style={{ fill: "var(--site-color-art-ink-muted)" }}
              >
                {t("Fri")}
              </text>
              <text
                x="759.1"
                y="298"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="9.5"
                fontWeight="500"
                style={{ fill: "var(--site-color-art-ink-muted)" }}
              >
                {t("Sat")}
              </text>
              <text
                x="874.6"
                y="298"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="9.5"
                fontWeight="500"
                style={{ fill: "var(--site-color-art-ink-muted)" }}
              >
                {t("Sun")}
              </text>
              <text
                x="52"
                y="321.6"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="10.5"
                fontWeight="500"
                style={{ fill: "var(--site-color-art-ink-soft)" }}
              >
                {t("Vessel 1")}
              </text>
              <path
                d="M216.4 318H932.1"
                fill="none"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.9"
                style={{ stroke: "var(--site-color-accent-purple)" }}
              />
              <circle
                cx="216.4"
                cy="318"
                r="5"
                strokeWidth="2"
                style={{ fill: "var(--site-color-art-paper)", stroke: "var(--site-color-art-ink)" }}
              />
              <text
                x="225.4"
                y="311.5"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="9"
                fontWeight="500"
                style={{ fill: "var(--site-color-art-ink-soft)" }}
              >
                NLRTM
              </text>
              <circle
                cx="395.3"
                cy="318"
                r="5"
                strokeWidth="2"
                style={{ fill: "var(--site-color-art-paper)", stroke: "var(--site-color-art-ink)" }}
              />
              <text
                x="404.3"
                y="311.5"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="9"
                fontWeight="500"
                style={{ fill: "var(--site-color-art-ink-soft)" }}
              >
                ESALG
              </text>
              <circle
                cx="707"
                cy="318"
                r="5"
                strokeWidth="2"
                style={{ fill: "var(--site-color-art-paper)", stroke: "var(--site-color-art-ink)" }}
              />
              <text
                x="716"
                y="311.5"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="9"
                fontWeight="500"
                style={{ fill: "var(--site-color-art-ink-soft)" }}
              >
                SGSIN
              </text>
              <circle
                cx="932.1"
                cy="318"
                r="5"
                strokeWidth="2"
                style={{ fill: "var(--site-color-art-paper)", stroke: "var(--site-color-art-ink)" }}
              />
              <text
                x="941.1"
                y="311.5"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="9"
                fontWeight="500"
                style={{ fill: "var(--site-color-art-ink-soft)" }}
              >
                CNSHA
              </text>
              <text
                x="52"
                y="343.6"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="10.5"
                fontWeight="500"
                style={{ fill: "var(--site-color-art-ink-soft)" }}
              >
                {t("Vessel 2")}
              </text>
              <path
                d="M314.5 340H839.7"
                fill="none"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.9"
                style={{ stroke: "var(--site-color-accent-cyan)" }}
              />
              <circle
                cx="314.5"
                cy="340"
                r="5"
                strokeWidth="2"
                style={{ fill: "var(--site-color-art-paper)", stroke: "var(--site-color-art-ink)" }}
              />
              <text
                x="323.5"
                y="333.5"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="9"
                fontWeight="500"
                style={{ fill: "var(--site-color-art-ink-soft)" }}
              >
                CNSHA
              </text>
              <circle
                cx="533.8"
                cy="340"
                r="5"
                strokeWidth="2"
                style={{ fill: "var(--site-color-art-paper)", stroke: "var(--site-color-art-ink)" }}
              />
              <text
                x="542.8"
                y="333.5"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="9"
                fontWeight="500"
                style={{ fill: "var(--site-color-art-ink-soft)" }}
              >
                SGSIN
              </text>
              <circle
                cx="839.7"
                cy="340"
                r="5"
                strokeWidth="2"
                style={{ fill: "var(--site-color-art-paper)", stroke: "var(--site-color-art-ink)" }}
              />
              <text
                x="848.7"
                y="333.5"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="9"
                fontWeight="500"
                style={{ fill: "var(--site-color-art-ink-soft)" }}
              >
                ESALG
              </text>
              <g transform="translate(184 0)">
                <g className="mv" style={{ "--cs-d": "792px", animation: "csSweep 18s linear infinite" }}>
                  <path d="M0 286V352" fill="none" strokeWidth="1.5" style={{ stroke: "var(--site-color-art-ink)" }} />
                  {/* the pill grows with the word, so a longer translation of "now" still fits */}
                  <rect
                    x={-nowW / 2}
                    y="279"
                    width={nowW}
                    height="13"
                    rx="6.5"
                    style={{ fill: "var(--site-color-art-ink)" }}
                  />
                  <text
                    x="0"
                    y="288.6"
                    textAnchor="middle"
                    fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                    fontSize="9"
                    fontWeight="600"
                    style={{ fill: "var(--site-color-art-paper)" }}
                  >
                    {t("now")}
                  </text>
                </g>
              </g>
            </svg>
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
              background: "var(--site-color-accent-purple)",
            }}
          />
          <span>
            {t(
              "A sea chart with one route and two vessels on it. Under it, the schedule: vessels as rows, port calls as stops. The port codes are examples.",
            )}
            <span className="cs-swipe"> {t("Swipe sideways to see all of it.")}</span>
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
            <span>{t("Maersk · 2021 to 2024")}</span>
          </div>
          <h2
            id="case-title-schedules"
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
            {t("Schedules on Maersk.com")}
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
            {t("Routes, vessel schedules and port calls, seen millions of times a day.")}
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
                {t("What it is")}
              </h3>
              <p
                style={{
                  margin: "0",
                  fontSize: "16.5px",
                  lineHeight: "1.6",
                  color: "var(--perron-color-text-secondary)",
                }}
              >
                {t(
                  "One of the most visited pages on Maersk.com: routes, vessel schedules and port calls. Two brand builds, with an embeddable version of every view, and the page's first A/B experiments.",
                )}
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
                {t("What I did")}
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
                      background: "var(--site-color-accent-purple)",
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
                      {t("The page")}
                    </strong>
                    <span style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--perron-color-text-secondary)" }}>
                      {t("Routes, vessel schedules and port calls, on one of the most visited pages on Maersk.com.")}
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
                      background: "var(--site-color-accent-purple)",
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
                      {t("Two brand builds")}
                    </strong>
                    <span style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--perron-color-text-secondary)" }}>
                      {t("With an embeddable version of every view.")}
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
                      {t("Experiments")}
                    </strong>
                    <span style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--perron-color-text-secondary)" }}>
                      {t("The page's first A/B experiments.")}
                    </span>
                  </div>
                </li>
              </ol>
            </section>
          </div>
          <aside
            aria-label={t("Project facts")}
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
                  {t("of views every day")}
                </dt>
                <dd
                  style={{
                    margin: "0",
                    font: "600 26px/1.15 var(--perron-font-family-body)",
                    letterSpacing: "-0.78px",
                  }}
                >
                  {t("Millions")}
                </dd>
              </div>
              <div style={{ display: "flex", flexDirection: "column-reverse", justifyContent: "flex-end", gap: "5px" }}>
                <dt style={{ fontSize: "13.5px", lineHeight: "1.4", color: "var(--perron-color-text-secondary)" }}>
                  {t("brand builds")}
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
                  {t("Where")}
                </dt>
                <dd style={{ margin: "0", fontSize: "15.5px", lineHeight: "1.4", fontWeight: "600" }}>
                  A.P. Moller - Maersk
                </dd>
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
                  {t("When")}
                </dt>
                <dd style={{ margin: "0", fontSize: "15.5px", lineHeight: "1.4", fontWeight: "600" }}>
                  {t("Nov 2021 to Dec 2024")}
                </dd>
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
                  {t("Role")}
                </dt>
                <dd style={{ margin: "0", fontSize: "15.5px", lineHeight: "1.4", fontWeight: "600" }}>
                  Senior Software Engineer
                </dd>
              </div>
            </dl>
            <ul
              aria-label={t("Keywords")}
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
                {t("Embeddable views")}
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
                {t("A/B experiments")}
              </li>
            </ul>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                margin: "-8px 0 -10px",
                fontSize: "15.5px",
                fontWeight: "600",
              }}
            >
              <a
                href="https://www.maersk.com/schedules"
                style={{ display: "flex", alignItems: "center", gap: "6px", padding: "11px 0", textDecoration: "none" }}
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
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
