import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Familjen_Grotesk, JetBrains_Mono, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

/* The prototype's three families, self-hosted at build time. */
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

export const metadata: Metadata = {
  title: "Marcin Sieradzki · Lead software engineer",
  description:
    "Lead software engineer in Copenhagen. I put AI agents into the software lifecycle and the design system, with checks and evals that make their work safe to ship.",
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0A0C10",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${familjen.variable} ${schibsted.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
