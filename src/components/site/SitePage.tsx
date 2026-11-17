import type { Locale } from "@/i18n/config";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { About } from "./About";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Nav } from "./Nav";
import { PersonJsonLd } from "./PersonJsonLd";
import { Work } from "./Work";

/* Version E: portrait hero, work built on scroll, in one language. The page is prerendered at build time (static
   export); the portrait, the Work section with its project modals and the contact badge hydrate as client components,
   and read the language from LocaleProvider. */
export function SitePage({ lang }: { lang: Locale }) {
  return (
    <LocaleProvider lang={lang}>
      <PersonJsonLd lang={lang} />
      <div
        data-theme="dark"
        style={{
          background: "var(--perron-color-surface-default)",
          color: "var(--perron-color-text-primary)",
          fontFamily: "var(--perron-font-family-body)",
          fontSize: "16px",
          lineHeight: "1.5",
          WebkitFontSmoothing: "antialiased",
          /* clip, not hidden: hidden would make this div a scroll container and stop the Work status bar from sticking. */
          overflow: "clip",
        }}
      >
        <Nav lang={lang} />
        <main>
          <Hero lang={lang} />
          <Work>
            <Experience lang={lang} />
            <About lang={lang} />
            <Contact />
          </Work>
        </main>
        <Footer lang={lang} />
      </div>
    </LocaleProvider>
  );
}
