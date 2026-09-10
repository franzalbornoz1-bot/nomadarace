import type { Metadata } from "next";
import { NomadaApp } from "@/components/nomada-app";

const title = "Ejercicios de fuerza que complementan tu carrera";
const description = "Rutina de fuerza para corredores con movimientos básicos, estabilidad y recomendaciones para complementar el running de forma gradual.";
const image = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=2000&q=90";

export const metadata: Metadata = {
  title, description, alternates: { canonical: "/blog/ejercicios-fuerza-corredores" },
  openGraph: { type: "article", locale: "es_CL", title, description, url: "https://nomadarace.cl/blog/ejercicios-fuerza-corredores", siteName: "Nómada Race", images: [{ url: image, width: 2000, height: 1125, alt: "Persona realizando un ejercicio de fuerza en un gimnasio luminoso" }] },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function StrengthForRunnersPage() {
  const article = { "@context": "https://schema.org", "@type": "Article", headline: title, description, image, datePublished: "2026-09-09", dateModified: "2026-09-09", inLanguage: "es-CL", author: { "@type": "Organization", name: "Nómada Race" }, publisher: { "@type": "Organization", name: "Nómada Race", logo: { "@type": "ImageObject", url: "https://nomadarace.cl/icon.png" } }, mainEntityOfPage: "https://nomadarace.cl/blog/ejercicios-fuerza-corredores" };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} /><NomadaApp /></>;
}
