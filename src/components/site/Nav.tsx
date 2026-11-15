/* Markup generated from the Version E prototype (Site-E-Face.dc.html) by scripts/dc-to-jsx. Edit it here freely: the generator was a one-off. */

import { LOCALE_NAME, LOCALE_PATH, type Locale } from "@/i18n/config";
import { translator } from "@/i18n/translate";

export function Nav({ lang }: { lang: Locale }) {
  const t = translator(lang);
  const other: Locale = lang === "en" ? "pl" : "en";
  return (
    <header
      style={{
        maxWidth: "1240px",
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "20px 32px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "8px 32px",
      }}
    >
      <a
        href="#top"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          minHeight: "44px",
          color: "var(--perron-color-text-primary)",
          textDecoration: "none",
          fontFamily: "var(--perron-font-family-display)",
          fontWeight: "700",
          fontSize: "18px",
          letterSpacing: "-0.01em",
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
            background: "var(--perron-color-surface-brand)",
            color: "var(--perron-color-text-on-color-dark)",
            fontFamily: "var(--perron-font-family-body)",
            fontWeight: "700",
            fontSize: "16px",
            letterSpacing: "0.12px",
          }}
        >
          M
        </span>
        <span>Marcin Sieradzki</span>
      </a>
      <nav
        aria-label={t("Main")}
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "0 28px",
          fontSize: "15px",
          fontWeight: "500",
        }}
      >
        <a
          href="#work"
          style={{ padding: "11px 0", color: "var(--perron-color-text-secondary)", textDecoration: "none" }}
        >
          {t("Work")}
        </a>
        <a
          href="#experience"
          style={{ padding: "11px 0", color: "var(--perron-color-text-secondary)", textDecoration: "none" }}
        >
          {t("Experience")}
        </a>
        <a
          href="#about"
          style={{ padding: "11px 0", color: "var(--perron-color-text-secondary)", textDecoration: "none" }}
        >
          {t("About")}
        </a>
        {/* The language switcher: the other language's page, named in that language (WCAG 3.1.2). */}
        <a
          href={LOCALE_PATH[other]}
          hrefLang={other}
          lang={other}
          className="nav-lang"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "7px",
            padding: "11px 0",
            color: "var(--perron-color-text-secondary)",
            textDecoration: "none",
          }}
        >
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          >
            <circle cx="8" cy="8" r="6.3" />
            <path d="M1.7 8h12.6M8 1.7c1.8 1.9 2.6 4 2.6 6.3S9.8 12.4 8 14.3C6.2 12.4 5.4 10.3 5.4 8S6.2 3.6 8 1.7z" />
          </svg>
          {LOCALE_NAME[other]}
        </a>
        <a
          href="#contact"
          style={{
            display: "flex",
            alignItems: "center",
            minHeight: "44px",
            boxSizing: "border-box",
            padding: "0 16px",
            border: "1px solid var(--perron-color-border-control)",
            borderRadius: "var(--perron-radius-md)",
            color: "var(--perron-color-text-primary)",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          {t("Get in touch")}
        </a>
      </nav>
    </header>
  );
}
