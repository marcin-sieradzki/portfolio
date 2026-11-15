/* Markup generated from the Version E prototype (Site-E-Face.dc.html) by scripts/dc-to-jsx. Edit it here freely: the generator was a one-off. */

import { useT } from "@/i18n/LocaleProvider";
export function CaseMicroFrontends() {
  const t = useT();
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
                "On the left a single block marked Vue 2 monolith with dashed cut lines. In the middle a host with four remotes side by side, one per team, each with its own deploy arrow. A bar shows the bundle is 35 percent smaller. On the right a live campaign dashboard with envelopes dropping in over a WebSocket.",
              )}
              style={{ display: "block", width: "100%", height: "100%" }}
            >
              <text
                x="46"
                y="66"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="11"
                fontWeight="500"
                fill="#A4ADBB"
              >
                {t("Vue 2 monolith")}
              </text>
              <rect x="46" y="78" width="168" height="214" rx="8" fill="#141A25" stroke="#4A5568" strokeWidth="2" />
              <path
                d="M76 110L140 104M76 110L98 158M140 104L186 132M140 104L160 176M186 132L160 176M98 158L160 176M98 158L70 206M160 176L124 222M160 176L184 232M70 206L124 222M124 222L96 264M124 222L156 268M184 232L156 268M186 132L184 232M76 110L70 206M98 158L124 222M140 104L98 158M70 206L96 264"
                fill="none"
                stroke="#3A4557"
                strokeWidth="1.5"
              />
              <rect x="67" y="103" width="18" height="14" rx="3" fill="#0A0C10" stroke="#4A5568" strokeWidth="1.5" />
              <rect x="131" y="97" width="18" height="14" rx="3" fill="#0A0C10" stroke="#4A5568" strokeWidth="1.5" />
              <rect x="177" y="125" width="18" height="14" rx="3" fill="#0A0C10" stroke="#4A5568" strokeWidth="1.5" />
              <rect x="89" y="151" width="18" height="14" rx="3" fill="#0A0C10" stroke="#4A5568" strokeWidth="1.5" />
              <rect x="151" y="169" width="18" height="14" rx="3" fill="#0A0C10" stroke="#4A5568" strokeWidth="1.5" />
              <rect x="61" y="199" width="18" height="14" rx="3" fill="#0A0C10" stroke="#4A5568" strokeWidth="1.5" />
              <rect x="115" y="215" width="18" height="14" rx="3" fill="#0A0C10" stroke="#4A5568" strokeWidth="1.5" />
              <rect x="175" y="225" width="18" height="14" rx="3" fill="#0A0C10" stroke="#4A5568" strokeWidth="1.5" />
              <rect x="87" y="257" width="18" height="14" rx="3" fill="#0A0C10" stroke="#4A5568" strokeWidth="1.5" />
              <rect x="147" y="261" width="18" height="14" rx="3" fill="#0A0C10" stroke="#4A5568" strokeWidth="1.5" />
              <path d="M130 78V292M46 185H214" fill="none" stroke="#C8F560" strokeWidth="1.5" strokeDasharray="5 5" />
              <text
                x="130"
                y="312"
                textAnchor="middle"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="10"
                fontWeight="500"
                fill="#7C8696"
              >
                {t("one deploy for everyone")}
              </text>
              <path
                d="M228 185H274"
                fill="none"
                stroke="#C8F560"
                strokeWidth="2.5"
                strokeDasharray="3 9"
                strokeLinecap="round"
                className="mv"
                style={{ animation: "csFlow 1.4s linear infinite" }}
              />
              <path
                d="M270 178l8 7-8 7"
                fill="none"
                stroke="#C8F560"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="292"
                y="78"
                width="372"
                height="214"
                rx="10"
                fill="none"
                stroke="#4A5568"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />
              <rect x="304" y="90" width="348" height="22" rx="6" fill="#10141B" stroke="#2E3746" strokeWidth="1.5" />
              <circle cx="318" cy="101" r="3" fill="#3A4557" />
              <circle cx="329" cy="101" r="3" fill="#3A4557" />
              <circle cx="340" cy="101" r="3" fill="#3A4557" />
              <text
                x="356"
                y="104.8"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="10"
                fontWeight="500"
                fill="#A4ADBB"
              >
                host · Module Federation
              </text>
              <rect x="304" y="124" width="82" height="156" rx="6" fill="#10141B" stroke="#3A4557" strokeWidth="1.5" />
              <path d="M309.8 124.8h70.5a5 5 0 0 1 5 5v3h-80.5v-3a5 5 0 0 1 5 -5z" fill="#C8F560" />
              <text
                x="314"
                y="152"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="9.5"
                fontWeight="500"
                fill="#7C8696"
              >
                remote
              </text>
              <rect x="314" y="164" width="54" height="6" rx="3" fill="#3A4557" />
              <rect x="314" y="178" width="38" height="6" rx="3" fill="#3A4557" />
              <rect x="314" y="192" width="60" height="6" rx="3" fill="#3A4557" />
              <rect x="314" y="206" width="30" height="6" rx="3" fill="#3A4557" />
              <rect x="314" y="228" width="40" height="14" rx="4" fill="#C8F560" opacity="0.9" />
              <text
                x="345"
                y="268"
                textAnchor="middle"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="10"
                fontWeight="500"
                fill="#A4ADBB"
              >
                {t("team A")}
              </text>
              <g transform="translate(345 72)">
                <g className="mv" style={{ animation: "csRise 3.4s ease-in 0s infinite" }}>
                  <path
                    d="M0 0v-16M-5 -11l5 -6 5 6"
                    fill="none"
                    stroke="#C8F560"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </g>
              <rect
                x="392.5"
                y="124"
                width="82"
                height="156"
                rx="6"
                fill="#10141B"
                stroke="#3A4557"
                strokeWidth="1.5"
              />
              <path d="M398.2 124.8h70.5a5 5 0 0 1 5 5v3h-80.5v-3a5 5 0 0 1 5 -5z" fill="#5B9DFF" />
              <text
                x="402.5"
                y="152"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="9.5"
                fontWeight="500"
                fill="#7C8696"
              >
                remote
              </text>
              <rect x="402.5" y="164" width="54" height="6" rx="3" fill="#3A4557" />
              <rect x="402.5" y="178" width="38" height="6" rx="3" fill="#3A4557" />
              <rect x="402.5" y="192" width="60" height="6" rx="3" fill="#3A4557" />
              <rect x="402.5" y="206" width="30" height="6" rx="3" fill="#3A4557" />
              <rect x="402.5" y="228" width="40" height="14" rx="4" fill="#5B9DFF" opacity="0.9" />
              <text
                x="433.5"
                y="268"
                textAnchor="middle"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="10"
                fontWeight="500"
                fill="#A4ADBB"
              >
                {t("team B")}
              </text>
              <g transform="translate(433.5 72)">
                <g className="mv" style={{ animation: "csRise 4.3s ease-in -1.3s infinite" }}>
                  <path
                    d="M0 0v-16M-5 -11l5 -6 5 6"
                    fill="none"
                    stroke="#5B9DFF"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </g>
              <rect x="481" y="124" width="82" height="156" rx="6" fill="#10141B" stroke="#3A4557" strokeWidth="1.5" />
              <path d="M486.8 124.8h70.5a5 5 0 0 1 5 5v3h-80.5v-3a5 5 0 0 1 5 -5z" fill="#FF8A5B" />
              <text
                x="491"
                y="152"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="9.5"
                fontWeight="500"
                fill="#7C8696"
              >
                remote
              </text>
              <rect x="491" y="164" width="54" height="6" rx="3" fill="#3A4557" />
              <rect x="491" y="178" width="38" height="6" rx="3" fill="#3A4557" />
              <rect x="491" y="192" width="60" height="6" rx="3" fill="#3A4557" />
              <rect x="491" y="206" width="30" height="6" rx="3" fill="#3A4557" />
              <rect x="491" y="228" width="40" height="14" rx="4" fill="#FF8A5B" opacity="0.9" />
              <text
                x="522"
                y="268"
                textAnchor="middle"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="10"
                fontWeight="500"
                fill="#A4ADBB"
              >
                {t("team C")}
              </text>
              <g transform="translate(522 72)">
                <g className="mv" style={{ animation: "csRise 5.2s ease-in -2.6s infinite" }}>
                  <path
                    d="M0 0v-16M-5 -11l5 -6 5 6"
                    fill="none"
                    stroke="#FF8A5B"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </g>
              <rect
                x="569.5"
                y="124"
                width="82"
                height="156"
                rx="6"
                fill="#10141B"
                stroke="#3A4557"
                strokeWidth="1.5"
              />
              <path d="M575.2 124.8h70.5a5 5 0 0 1 5 5v3h-80.5v-3a5 5 0 0 1 5 -5z" fill="#B58CFF" />
              <text
                x="579.5"
                y="152"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="9.5"
                fontWeight="500"
                fill="#7C8696"
              >
                remote
              </text>
              <rect x="579.5" y="164" width="54" height="6" rx="3" fill="#3A4557" />
              <rect x="579.5" y="178" width="38" height="6" rx="3" fill="#3A4557" />
              <rect x="579.5" y="192" width="60" height="6" rx="3" fill="#3A4557" />
              <rect x="579.5" y="206" width="30" height="6" rx="3" fill="#3A4557" />
              <rect x="579.5" y="228" width="40" height="14" rx="4" fill="#B58CFF" opacity="0.9" />
              <text
                x="610.5"
                y="268"
                textAnchor="middle"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="10"
                fontWeight="500"
                fill="#A4ADBB"
              >
                {t("team D")}
              </text>
              <g transform="translate(610.5 72)">
                <g className="mv" style={{ animation: "csRise 6.1s ease-in -3.9s infinite" }}>
                  <path
                    d="M0 0v-16M-5 -11l5 -6 5 6"
                    fill="none"
                    stroke="#B58CFF"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </g>
              <text
                x="478"
                y="312"
                textAnchor="middle"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="10.5"
                fontWeight="500"
                fill="#A4ADBB"
              >
                {t("each team deploys on its own")}
              </text>
              <rect x="46" y="326" width="168" height="9" rx="4.5" fill="#4A5568" />
              <text
                x="46"
                y="354"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="10"
                fontWeight="500"
                fill="#7C8696"
              >
                {t("bundle before")}
              </text>
              <rect x="292" y="326" width="168" height="9" rx="4.5" fill="#2E3746" />
              <rect x="292" y="326" width="109.2" height="9" rx="4.5" fill="#C8F560" />
              <text
                x="292"
                y="354"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="10"
                fontWeight="600"
                fill="#C8F560"
              >
                {t("35% smaller bundles")}
              </text>
              <path d="M698 40V348" fill="none" stroke="#2E3746" strokeWidth="1.5" strokeDasharray="2 6" />
              <text
                x="732"
                y="336"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="11"
                fontWeight="500"
                fill="#A4ADBB"
              >
                {t("KPI dashboards · email campaigns")}
              </text>
              <rect x="732" y="98" width="272" height="216" rx="10" fill="#10141B" stroke="#3A4557" strokeWidth="1.5" />
              <path d="M732 132H1004" fill="none" stroke="#2E3746" strokeWidth="1.5" />
              <text
                x="748"
                y="120"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="11"
                fontWeight="600"
                fill="#F2F4F7"
              >
                {t("live campaign view")}
              </text>
              <circle
                cx="942"
                cy="116"
                r="4"
                fill="#3DDC97"
                className="mv"
                style={{ animation: "csPulse 1.6s ease-in-out infinite" }}
              />
              <text
                x="988"
                y="120"
                textAnchor="end"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="10"
                fontWeight="600"
                fill="#3DDC97"
              >
                {t("live")}
              </text>
              <rect x="748" y="146" width="74" height="46" rx="6" fill="#0A0C10" stroke="#232A36" strokeWidth="1.5" />
              <rect x="758" y="156" width="36" height="5" rx="2.5" fill="#3A4557" />
              <rect x="758" y="169" width="44" height="12" rx="3" fill="#F2F4F7" />
              <rect x="830" y="146" width="74" height="46" rx="6" fill="#0A0C10" stroke="#232A36" strokeWidth="1.5" />
              <rect x="840" y="156" width="36" height="5" rx="2.5" fill="#3A4557" />
              <rect x="840" y="169" width="30" height="12" rx="3" fill="#F2F4F7" />
              <rect x="912" y="146" width="74" height="46" rx="6" fill="#0A0C10" stroke="#232A36" strokeWidth="1.5" />
              <rect x="922" y="156" width="36" height="5" rx="2.5" fill="#3A4557" />
              <rect x="922" y="169" width="52" height="12" rx="3" fill="#F2F4F7" />
              <rect x="748" y="202" width="240" height="96" rx="6" fill="#0A0C10" stroke="#232A36" strokeWidth="1.5" />
              <path d="M758 222H978M758 244H978M758 266H978" fill="none" stroke="#232A36" strokeWidth="1" />
              <path
                d="M758 286L782 272 806 278 830 252 854 260 878 236 902 244 926 226 950 232 978 214"
                fill="none"
                stroke="#C8F560"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="320"
                className="mv"
                style={{ animation: "csDraw 5s ease-out infinite" }}
              />
              <circle
                cx="978"
                cy="214"
                r="4"
                fill="#C8F560"
                className="mv"
                style={{ animation: "csPulse 1.6s ease-in-out infinite" }}
              />
              <path d="M900 22V92" fill="none" stroke="#3A4557" strokeWidth="1.5" strokeDasharray="3 5" />
              <text
                x="880"
                y="46"
                textAnchor="end"
                fontFamily="JetBrains Mono, ui-monospace, Menlo, monospace"
                fontSize="10"
                fontWeight="500"
                fill="#A4ADBB"
              >
                WebSocket
              </text>
              <g className="mv" style={{ animation: "csDrop 3.6s ease-in 0s infinite" }}>
                <rect x="889" y="54" width="22" height="16" rx="2.5" fill="#F2F4F7" />
                <path
                  d="M890.5 56l9.5 7.5 9.5-7.5"
                  fill="none"
                  stroke="#0A0C10"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <g className="mv" style={{ animation: "csDrop 3.6s ease-in -1.2s infinite" }}>
                <rect x="889" y="54" width="22" height="16" rx="2.5" fill="#F2F4F7" />
                <path
                  d="M890.5 56l9.5 7.5 9.5-7.5"
                  fill="none"
                  stroke="#0A0C10"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <g className="mv" style={{ animation: "csDrop 3.6s ease-in -2.4s infinite" }}>
                <rect x="889" y="54" width="22" height="16" rx="2.5" fill="#F2F4F7" />
                <path
                  d="M890.5 56l9.5 7.5 9.5-7.5"
                  fill="none"
                  stroke="#0A0C10"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
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
              background: "#C8F560",
            }}
          />
          <span>
            {t(
              "One monolith, cut into four remotes inside a host. Each team ships in its own time. On the right, the live campaign view.",
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
            <span>{t("VML MAP · 2020 to 2021")}</span>
          </div>
          <h2
            id="case-title-vml-map"
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
            {t("Email marketing apps")}
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
            {t("Apps for email marketing automation and observability, built as")}{" "}
            <span style={{ whiteSpace: "nowrap" }}>{t("micro-frontends")}</span>.
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
                  "A set of apps for email marketing automation and observability, such as a dashboard with live campaign statistics. Built as Vue 2 micro-frontends on .NET APIs and Azure Functions.",
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
                      background: "#C8F560",
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
                      {t("Micro-frontends")}
                    </strong>
                    <span style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--perron-color-text-secondary)" }}>
                      {t(
                        "Re-architected the monolithic Vue 2 frontend into micro-frontends with Module Federation: 35% smaller bundles, and each team deploys on its own.",
                      )}
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
                      background: "#C8F560",
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
                      {t("KPI dashboards")}
                    </strong>
                    <span style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--perron-color-text-secondary)" }}>
                      {t(
                        "Campaign statistics dashboards on Azure Functions, with a live campaign view over WebSockets.",
                      )}
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
                    <strong style={{ fontSize: "15.5px", lineHeight: "1.45", fontWeight: "700" }}>Mentoring</strong>
                    <span style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--perron-color-text-secondary)" }}>
                      {t("Mentored two interns.")}
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
                  {t("smaller bundles")}
                </dt>
                <dd
                  style={{
                    margin: "0",
                    font: "600 26px/1.15 var(--perron-font-family-body)",
                    letterSpacing: "-0.78px",
                  }}
                >
                  35%
                </dd>
              </div>
              <div style={{ display: "flex", flexDirection: "column-reverse", justifyContent: "flex-end", gap: "5px" }}>
                <dt style={{ fontSize: "13.5px", lineHeight: "1.4", color: "var(--perron-color-text-secondary)" }}>
                  {t("interns mentored")}
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
                <dd style={{ margin: "0", fontSize: "15.5px", lineHeight: "1.4", fontWeight: "600" }}>VML MAP</dd>
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
                  {t("Jan 2020 to Nov 2021")}
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
                  Full-stack Developer
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
                Vue 2
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
                {t("Micro-frontends")}
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
                Module Federation
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
                {t(".NET APIs")}
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
                Azure Functions
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
                {t("WebSockets")}
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </article>
  );
}
