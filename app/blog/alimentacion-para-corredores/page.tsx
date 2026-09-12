import type { Metadata } from "next";
import { NomadaApp } from "@/components/nomada-app";

const title = "Alimentación para corredores: cómo acompañar tus entrenamientos";
const description = "Guía de alimentación e hidratación para corredores: qué considerar antes y después de entrenar, con consejos prácticos y fuentes confiables.";
const image = "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=2000&q=90";

export const metadata: Metadata = {
  title, description, alternates: { canonical: "/blog/alimentacion-para-corredores" },
  openGraph: { type: "article", locale: "es_CL", title, description, url: "https://nomadarace.cl/blog/alimentacion-para-corredores", siteName: "Nómada Race", images: [{ url: image, width: 2000, height: 1125, alt: "Comida equilibrada con vegetales, cereales y proteínas para apoyar el entrenamiento" }] },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function RunningNutritionPage() {
  const article = { "@context": "https://schema.org", "@type": "Article", headline: title, description, image, datePublished: "2026-09-09", dateModified: "2026-09-09", inLanguage: "es-CL", author: { "@type": "Organization", name: "Nómada Race", url: "https://nomadarace.cl" }, publisher: { "@type": "Organization", name: "Nómada Race", logo: { "@type": "ImageObject", url: "https://nomadarace.cl/icon.png" } }, mainEntityOfPage: "https://nomadarace.cl/blog/alimentacion-para-corredores" };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} /><NomadaApp /></>;
}
