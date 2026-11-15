/* Translation in the gettext style: the English text is the key, so the markup stays readable in English.
   t("View project") gives the text in the page's language. A {name} in the text is filled from the values,
   after translation: t("Next project: {name}", { name }).
   Every key used in src/ must have an entry in each dictionary: npm run i18n:check (also run before a build). */
import type { Locale } from "./config";
import { pl } from "./pl";

const DICTIONARIES: Record<Exclude<Locale, "en">, Record<string, string>> = { pl };

export type Translate = (en: string, values?: Record<string, string | number>) => string;

export function translator(lang: Locale): Translate {
  const dict = lang === "en" ? null : DICTIONARIES[lang];
  return (en, values) => {
    let s = dict ? (dict[en] ?? en) : en;
    if (values) s = s.replace(/\{(\w+)\}/g, (m, k: string) => (k in values ? String(values[k]) : m));
    return s;
  };
}
