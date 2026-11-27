import type { Metadata } from "next";
import { RootDocument, siteViewport } from "@/components/site/RootDocument";
import { LOCALE_PATH } from "@/i18n/config";

/* The 404 page for any URL that matches no page. Each language has its own root layout, so this one stands alone.
   It is in English, with a way to the Polish page. */
export const metadata: Metadata = { title: "Page not found · Marcin Sieradzki", robots: { index: false } };
export const viewport = siteViewport;

const LINK = { color: "var(--perron-color-text-brand)", fontWeight: 600 } as const;

export default function GlobalNotFound() {
  return (
    <RootDocument lang="en">
      <main
        style={{
          minHeight: "100vh",
          boxSizing: "border-box",
          padding: "96px 32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          textAlign: "center",
          background: "var(--perron-color-surface-default)",
          color: "var(--perron-color-text-primary)",
          fontFamily: "var(--perron-font-family-body)",
        }}
      >
        <h1 style={{ margin: 0, fontFamily: "var(--perron-font-family-display)", fontSize: "40px" }}>Page not found</h1>
        <p style={{ margin: 0, color: "var(--perron-color-text-secondary)" }}>
          This stop is not on the line.{" "}
          <a href={LOCALE_PATH.en} style={LINK}>
            Back to the start
          </a>
        </p>
        <p lang="pl" style={{ margin: 0, color: "var(--perron-color-text-secondary)" }}>
          Nie ma takiej strony.{" "}
          <a href={LOCALE_PATH.pl} hrefLang="pl" style={LINK}>
            Strona po polsku
          </a>
        </p>
      </main>
    </RootDocument>
  );
}
