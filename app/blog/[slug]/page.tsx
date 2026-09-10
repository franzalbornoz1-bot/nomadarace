import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NomadaApp } from "@/components/nomada-app";

const articles = {
  "plan-para-correr-5k": { title: "Plan simple para correr tus primeros 5K", description: "Guía para empezar a correr 5K con trote, caminata, descanso y una progresión realista.", image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=2000&q=90", alt: "Corredor avanzando por un parque durante un entrenamiento suave" },
  "recuperacion-despues-de-correr": { title: "Cómo recuperarte después de correr y volver con energía", description: "Descanso, vuelta a la calma y señales para recuperarte mejor después de correr.", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=2000&q=90", alt: "Persona estirando suavemente después de entrenar al aire libre" },
  "hidratacion-para-corredores": { title: "Hidratación para corredores: qué considerar antes, durante y después", description: "Consejos de hidratación para running según duración, calor y necesidades individuales.", image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=2000&q=90", alt: "Botella de agua junto a zapatillas de running después de entrenar" },
  "tecnica-de-carrera-cadencia": { title: "Técnica de carrera y cadencia: corre con más control", description: "Claves de postura, zancada y cadencia para corredores que quieren mejorar su técnica.", image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=2000&q=90", alt: "Corredora practicando técnica de carrera en una pista deportiva" },
  "semana-antes-de-una-carrera": { title: "La semana antes de una carrera: qué hacer y qué evitar", description: "Preparación final para llegar con calma, energía y logística resuelta a tu próxima carrera.", image: "https://images.unsplash.com/photo-1530137073520-8b5d1ebc1b3f?auto=format&fit=crop&w=2000&q=90", alt: "Corredor revisando sus zapatillas y dorsal antes de una carrera" },
  "media-maraton-primeriza": { title: "Tu primera media maratón: cómo preparar los 21K", description: "Guía para preparar una primera media maratón con progresión, recuperación y expectativas realistas.", image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=2000&q=90", alt: "Grupo de corredores participando en una media maratón urbana" },
  "correr-con-calor": { title: "Correr con calor: ajusta el ritmo y cuida tu cuerpo", description: "Consejos para correr con altas temperaturas: ritmo, ropa, hidratación y señales de alerta.", image: "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=2000&q=90", alt: "Corredor entrenando bajo el sol en una mañana calurosa" },
  "trail-running-principiantes": { title: "Trail running para principiantes: cómo empezar en cerro", description: "Guía inicial de trail running con consejos de seguridad, equipo y manejo del ritmo en senderos.", image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=2000&q=90", alt: "Corredora avanzando por un sendero de montaña durante una carrera trail" },
} as const;

type ArticleSlug = keyof typeof articles;
type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(articles).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug as ArticleSlug];
  if (!article) return {};
  const url = `https://nomadarace.cl/blog/${slug}`;
  return { title: article.title, description: article.description, alternates: { canonical: `/blog/${slug}` }, openGraph: { type: "article", locale: "es_CL", title: article.title, description: article.description, url, siteName: "Nómada Race", images: [{ url: article.image, width: 2000, height: 1125, alt: article.alt }] }, twitter: { card: "summary_large_image", title: article.title, description: article.description, images: [article.image] } };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles[slug as ArticleSlug];
  if (!article) notFound();
  const url = `https://nomadarace.cl/blog/${slug}`;
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.description, image: article.image, datePublished: "2026-09-09", dateModified: "2026-09-09", inLanguage: "es-CL", author: { "@type": "Organization", name: "Nómada Race" }, publisher: { "@type": "Organization", name: "Nómada Race", logo: { "@type": "ImageObject", url: "https://nomadarace.cl/icon.png" } }, mainEntityOfPage: url };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><NomadaApp /></>;
}
