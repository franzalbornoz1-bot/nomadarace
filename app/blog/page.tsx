import type { Metadata } from "next";
import { NomadaApp } from "@/components/nomada-app";

export const metadata: Metadata = {
  title: { absolute: "Blog de running y entrenamiento en Chile | Nómada Race" },
  description: "Guías, entrenamiento, recuperación, nutrición y noticias para corredores en Chile. Consejos prácticos para disfrutar cada carrera con Nómada Race.",
  keywords: ["blog running Chile", "consejos para corredores", "entrenamiento running", "carreras Chile", "fotos de carreras", "Nómada Race"],
  alternates: { canonical: "/blog" },
  openGraph: { title: "Blog de running y entrenamiento en Chile | Nómada Race", description: "Guías y consejos para entrenar, recuperarte y disfrutar tus carreras en Chile.", url: "https://www.nomadarace.cl/blog", type: "website", locale: "es_CL", siteName: "Nómada Race", images: [{ url: "/home-photo-1.jpg", alt: "Consejos de running en Nómada Race" }] },
  twitter: { card: "summary_large_image", title: "Blog de running en Chile | Nómada Race", description: "Consejos para correr, recuperar y preparar tus próximas carreras.", images: ["/home-photo-1.jpg"] },
};

export default function BlogPage() {
  const schema = { "@context": "https://schema.org", "@type": "Blog", name: "Blog Nómada Race", url: "https://www.nomadarace.cl/blog", inLanguage: "es-CL", description: "Guías, entrenamiento, recuperación, nutrición y noticias para corredores en Chile.", publisher: { "@type": "Organization", name: "Nómada Race", url: "https://www.nomadarace.cl" } };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><NomadaApp /></>;
}
