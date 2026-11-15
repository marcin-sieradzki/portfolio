import type { ReactNode } from "react";
import { RootDocument, siteMetadata, siteViewport } from "@/components/site/RootDocument";

export const metadata = siteMetadata("pl");
export const viewport = siteViewport;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <RootDocument lang="pl">{children}</RootDocument>;
}
