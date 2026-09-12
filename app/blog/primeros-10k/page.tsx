import type { Metadata } from "next";
import { NomadaApp } from "@/components/nomada-app";
import { getBlogPublicationDate } from "@/lib/blog-publication";

const title = "Tips previos a tu primer 10K";
const description = "Guía para corredores principiantes: cómo preparar tu primer 10K con ritmo, descanso, hidratación, checklist y consejos para el día de carrera.";
const image = "https://images.unsplash.com/photo-1567856539622-15401a9e8317?auto=format&fit=crop&w=2000&q=90";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog/primeros-10k" },
  openGraph: { type: "article", locale: "es_CL", title, description, url: "https://nomadarace.cl/blog/primeros-10k", siteName: "Nómada Race", images: [{ url: image, width: 2000, height: 1125, alt: "Corredor preparando su primer 10K al amanecer" }] },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function FirstTenKPage() {
  const publicationDate = getBlogPublicationDate("primeros-10k");
  const article = { "@context": "https://schema.org", "@type": "Article", headline: title, description, image, datePublished: publicationDate.iso, dateModified: publicationDate.iso, inLanguage: "es-CL", author: { "@type": "Organization", name: "Nómada Race", url: "https://nomadarace.cl" }, publisher: { "@type": "Organization", name: "Nómada Race", logo: { "@type": "ImageObject", url: "https://nomadarace.cl/icon.png" } }, mainEntityOfPage: "https://nomadarace.cl/blog/primeros-10k" };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} /><NomadaApp /></>;
}
