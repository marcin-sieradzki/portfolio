import portrait from "@/assets/marcin.webp";
import { LOCALE_PATH, SITE_TITLE, SITE_URL, type Locale } from "@/i18n/config";
import { translator } from "@/i18n/translate";

/* Structured data (schema.org) for search engines: the site, this page as a profile page, and the person it is about.
   Google reads ProfilePage + Person for name searches. Only facts that are already on the page. */
export function PersonJsonLd({ lang }: { lang: Locale }) {
  const t = translator(lang);
  const pageUrl = SITE_URL + (LOCALE_PATH[lang] === "/" ? "/" : LOCALE_PATH[lang]);
  const person = `${SITE_URL}/#person`;
  const description = t(
    "Lead software engineer in Copenhagen. I put AI agents into the software lifecycle and the design system, with checks and evals that make their work safe to ship.",
  );
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL + "/",
        name: "Marcin Sieradzki",
        inLanguage: ["en", "pl"],
        publisher: { "@id": person },
      },
      {
        "@type": "ProfilePage",
        "@id": `${pageUrl}#profile`,
        url: pageUrl,
        name: SITE_TITLE,
        description,
        inLanguage: lang,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: { "@id": person },
      },
      {
        "@type": "Person",
        "@id": person,
        name: "Marcin Sieradzki",
        givenName: "Marcin",
        familyName: "Sieradzki",
        url: SITE_URL + "/",
        image: SITE_URL + portrait.src,
        email: "mailto:marcin.sieradzki97@gmail.com",
        jobTitle: "Lead Software Engineer",
        description,
        worksFor: { "@type": "Organization", name: "Grundfos", url: "https://www.grundfos.com" },
        address: { "@type": "PostalAddress", addressLocality: "Copenhagen", addressCountry: "DK" },
        knowsLanguage: ["en", "pl"],
        hasOccupation: {
          "@type": "Occupation",
          name: "Lead Software Engineer",
          occupationLocation: { "@type": "City", name: "Copenhagen" },
        },
        /* The About section's toolbox. */
        knowsAbout: [
          "AI agents",
          "Design systems",
          "TypeScript",
          "React",
          "Vue",
          "Lit",
          "Web components",
          "Electron",
          "Node.js",
          "C# / .NET",
          "Design tokens",
          "React Aria",
          "Storybook",
          "Playwright",
          "Vitest",
          "Claude Code",
          "Model Context Protocol",
          "Eval harnesses",
          "Local LLMs",
          "Accessibility",
        ],
        sameAs: ["https://www.linkedin.com/in/marcin-sieradzki-5a9774150/", "https://github.com/marcin-sieradzki"],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      /* Escape < so the JSON can never close the script tag. */
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
