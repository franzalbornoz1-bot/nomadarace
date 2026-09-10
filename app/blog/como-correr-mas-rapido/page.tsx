import type { Metadata } from "next";
import { NomadaApp } from "@/components/nomada-app";

const title = "Cómo correr más rápido sin quemarte en el intento";
const description = "Consejos para corredores: cambios de ritmo, recuperación, calentamiento y progresión gradual para correr más rápido con seguridad.";
const image = "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=2000&q=90";

export const metadata: Metadata = {
  title, description, alternates: { canonical: "/blog/como-correr-mas-rapido" },
  openGraph: { type: "article", locale: "es_CL", title, description, url: "https://nomadarace.cl/blog/como-correr-mas-rapido", siteName: "Nómada Race", images: [{ url: image, width: 2000, height: 1125, alt: "Corredor entrenando velocidad en una pista al atardecer" }] },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function FasterRunningPage() {
  const article = { "@context": "https://schema.org", "@type": "Article", headline: title, description, image, datePublished: "2026-09-09", dateModified: "2026-09-09", inLanguage: "es-CL", author: { "@type": "Organization", name: "Nómada Race" }, publisher: { "@type": "Organization", name: "Nómada Race", logo: { "@type": "ImageObject", url: "https://nomadarace.cl/icon.png" } }, mainEntityOfPage: "https://nomadarace.cl/blog/como-correr-mas-rapido" };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} /><NomadaApp /></>;
}
