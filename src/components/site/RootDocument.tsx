import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Familjen_Grotesk, JetBrains_Mono, Schibsted_Grotesk } from "next/font/google";
import { LOCALE_PATH, LOCALES, OG_IMAGE, OG_LOCALE, SITE_URL, type Locale } from "@/i18n/config";
import { translator } from "@/i18n/translate";
import "@/app/globals.css";

/* The <html> of every language's page. Each language has its own root layout (app/(en), app/(pl)), so the
   lang attribute is right in the prerendered HTML. */

/* The prototype's three families, self-hosted at build time. latin-ext carries the Polish letters. */
const familjen = Familjen_Grotesk({
  variable: "--font-familjen",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

/* Title, description, canonical URL and the hreflang links to every language of the page. */
export function siteMetadata(lang: Locale): Metadata {
  const t = translator(lang);
  const title = "Marcin Sieradzki · Lead software engineer";
  const description = t(
    "Lead software engineer in Copenhagen. I put AI agents into the software lifecycle and the design system, with checks and evals that make their work safe to ship.",
  );
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: LOCALE_PATH[lang],
      languages: { ...Object.fromEntries(LOCALES.map((l) => [l, LOCALE_PATH[l]])), "x-default": LOCALE_PATH.en },
    },
    openGraph: {
      type: "website",
      url: LOCALE_PATH[lang],
      title,
      description,
      locale: OG_LOCALE[lang],
      alternateLocale: LOCALES.filter((l) => l !== lang).map((l) => OG_LOCALE[l]),
      siteName: "Marcin Sieradzki",
      images: [{ url: OG_IMAGE[lang], width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE[lang]],
    },
  };
}

export const siteViewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0A0C10",
};

export function RootDocument({ lang, children }: { lang: Locale; children: ReactNode }) {
  return (
    <html lang={lang} className={`${familjen.variable} ${schibsted.variable} ${jetbrains.variable}`}>
      <body>
        {children}
        {/* Vercel Web Analytics: page views only, no cookies. Needs Analytics turned on in the Vercel project. */}
        <Analytics />
      </body>
    </html>
  );
}
