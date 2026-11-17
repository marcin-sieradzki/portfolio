import portrait from "@/assets/marcin.webp";
import { LOCALE_PATH, SITE_URL, type Locale } from "@/i18n/config";
import { translator } from "@/i18n/translate";

/* Person structured data (schema.org) for search results. Only facts that are already on the page. */
export function PersonJsonLd({ lang }: { lang: Locale }) {
  const t = translator(lang);
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Marcin Sieradzki",
    url: SITE_URL + (LOCALE_PATH[lang] === "/" ? "/" : LOCALE_PATH[lang]),
    image: SITE_URL + portrait.src,
    jobTitle: "Lead Software Engineer",
    description: t(
      "Lead software engineer in Copenhagen. I put AI agents into the software lifecycle and the design system, with checks and evals that make their work safe to ship.",
    ),
    worksFor: { "@type": "Organization", name: "Grundfos" },
    address: { "@type": "PostalAddress", addressLocality: "Copenhagen", addressCountry: "DK" },
    sameAs: ["https://www.linkedin.com/in/marcin-sieradzki-5a9774150/", "https://github.com/marcin-sieradzki"],
  };
  return (
    <script
      type="application/ld+json"
      /* Escape < so the JSON can never close the script tag. */
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
