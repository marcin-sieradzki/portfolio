import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Experience } from "@/components/site/Experience";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Method } from "@/components/site/Method";
import { Nav } from "@/components/site/Nav";
import { Work } from "@/components/site/Work";

/* Version E: portrait hero, work built on scroll. The page is prerendered at build time (static export);
   the portrait, the Work section with its project modals and the contact badge hydrate as client components. */
export default function Home() {
  return (
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
      <Nav />
      <Hero />
      <Work>
        <Experience />
        <Method />
        <About />
        <Contact />
        <Footer />
      </Work>
    </div>
  );
}
