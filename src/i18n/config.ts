/* The site's languages. English is the default and lives at /; every other locale gets its own path. */
export const LOCALES = ["en", "pl"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const SITE_URL = "https://www.marcinsieradzki.com";

/* The <title> and share title of every language. Job titles stay in English, as recruiters search for them in English. */
export const SITE_TITLE = "Marcin Sieradzki · Lead Frontend Engineer · AI & Design Systems";

/* The page of each locale, as a path from the site root. */
export const LOCALE_PATH: Record<Locale, string> = { en: "/", pl: "/pl" };

/* What the language switcher calls each locale, written in that language. */
export const LOCALE_NAME: Record<Locale, string> = { en: "English", pl: "Polski" };

/* og:locale of each page. */
export const OG_LOCALE: Record<Locale, string> = { en: "en_US", pl: "pl_PL" };

/* The link preview image of each page (1200 x 630), drawn by scripts/og-image/render.mjs. */
export const OG_IMAGE: Record<Locale, string> = { en: "/og/en.png", pl: "/og/pl.png" };
