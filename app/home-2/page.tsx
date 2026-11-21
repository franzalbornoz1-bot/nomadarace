import type { Metadata } from "next";
import { NomadaApp } from "@/components/nomada-app";

// Private visual sandbox for future redesigns; middleware requires authentication.
// Do not pre-render, cache, index, or link this page from the public site.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: { absolute: "Home 2 | Vista privada · Nómada Race" },
  description: "Vista interna y privada del rediseño de Nómada Race.",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    googleBot: { index: false, follow: false, noarchive: true, nosnippet: true },
  },
};

export default function Home2Preview() {
  return <NomadaApp />;
}
