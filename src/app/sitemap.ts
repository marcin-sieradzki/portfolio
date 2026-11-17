import type { MetadataRoute } from "next";
import { LOCALE_PATH, LOCALES, SITE_URL } from "@/i18n/config";

export const dynamic = "force-static";

/* One entry per language, each listing every language of the page (hreflang), as the <head> does. */
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => (path === "/" ? SITE_URL + "/" : SITE_URL + path);
  const languages = Object.fromEntries([
    ...LOCALES.map((l) => [l, url(LOCALE_PATH[l])]),
    ["x-default", url(LOCALE_PATH.en)],
  ]);
  return LOCALES.map((l) => ({
    url: url(LOCALE_PATH[l]),
    changeFrequency: "monthly",
    priority: l === "en" ? 1 : 0.8,
    alternates: { languages },
  }));
}
