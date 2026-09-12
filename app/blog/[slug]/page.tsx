import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NomadaApp } from "@/components/nomada-app";

const articles = {
  "plan-para-correr-5k": { title: "Plan simple para correr tus primeros 5K", description: "Guía para empezar a correr 5K con trote, caminata, descanso y una progresión realista.", image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=2000&q=90", alt: "Corredor avanzando por un parque durante un entrenamiento suave" },
  "recuperacion-despues-de-correr": { title: "Cómo recuperarte después de correr y volver con energía", description: "Descanso, vuelta a la calma y señales para recuperarte mejor después de correr.", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=2000&q=90", alt: "Persona estirando suavemente después de entrenar al aire libre" },
  "hidratacion-para-corredores": { title: "Hidratación para corredores: qué considerar antes, durante y después", description: "Consejos de hidratación para running según duración, calor y necesidades individuales.", image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=2000&q=90", alt: "Botella de agua junto a zapatillas de running después de entrenar" },
  "tecnica-de-carrera-cadencia": { title: "Técnica de carrera y cadencia: corre con más control", description: "Claves de postura, zancada y cadencia para corredores que quieren mejorar su técnica.", image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=2000&q=90", alt: "Corredora practicando técnica de carrera en una pista deportiva" },
  "semana-antes-de-una-carrera": { title: "La semana antes de una carrera: qué hacer y qué evitar", description: "Preparación final para llegar con calma, energía y logística resuelta a tu próxima carrera.", image: "https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&w=2000&q=90", alt: "Zapatillas de running preparadas antes de una carrera" },
  "media-maraton-primeriza": { title: "Tu primera media maratón: cómo preparar los 21K", description: "Guía para preparar una primera media maratón con progresión, recuperación y expectativas realistas.", image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=2000&q=90", alt: "Grupo de corredores participando en una media maratón urbana" },
  "correr-con-calor": { title: "Correr con calor: ajusta el ritmo y cuida tu cuerpo", description: "Consejos para correr con altas temperaturas: ritmo, ropa, hidratación y señales de alerta.", image: "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=2000&q=90", alt: "Corredor entrenando bajo el sol en una mañana calurosa" },
  "trail-running-principiantes": { title: "Trail running para principiantes: cómo empezar en cerro", description: "Guía inicial de trail running con consejos de seguridad, equipo y manejo del ritmo en senderos.", image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=2000&q=90", alt: "Corredora avanzando por un sendero de montaña durante una carrera trail" },
  "planificar-entrenamiento-semanal-running": { title: "Cómo organizar una semana de running sin sobrecargarte", description: "Guía para ordenar trotes fáciles, calidad, descanso y fuerza en una semana sostenible.", image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=2000&q=90", alt: "Corredora planificando una semana de entrenamiento al aire libre" },
  "series-cuestas-running-principiantes": { title: "Series y cuestas para corredores: cuándo agregarlas y cómo empezar", description: "Cómo incorporar velocidad y desnivel con progresión, técnica y recuperación suficiente.", image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?auto=format&fit=crop&w=2000&q=90", alt: "Corredor entrenando en una subida urbana al atardecer" },
  "fuerza-pies-tobillos-corredores": { title: "Fuerza para pies y tobillos: una base olvidada para corredores", description: "Ejercicios simples para trabajar pies, tobillos y pantorrillas como complemento del running.", image: "https://images.unsplash.com/photo-1517838277536-f5f99be501e9?auto=format&fit=crop&w=2000&q=90", alt: "Corredora ajustando sus zapatillas antes de un entrenamiento" },
  "fuerza-core-corredores": { title: "Core para corredores: estabilidad que acompaña tu zancada", description: "Trabajo de tronco, cadera y control corporal para complementar el running.", image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=2000&q=90", alt: "Persona realizando ejercicios de estabilidad y fuerza sobre una colchoneta" },
  "colaciones-para-corredores": { title: "Colaciones para corredores: ideas antes y después de entrenar", description: "Cómo elegir colaciones simples y adaptables a tu horario, tolerancia y entrenamiento.", image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=2000&q=90", alt: "Frutas, avena y alimentos frescos preparados como colación para corredor" },
  "alimentacion-dia-carrera": { title: "Qué comer el día de una carrera: una guía sin improvisaciones", description: "Planifica desayuno, líquidos y alternativas conocidas para llegar tranquilo a tu carrera.", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=2000&q=90", alt: "Corredores preparándose antes de una carrera al aire libre" },
  "proteina-carbohidratos-running": { title: "Carbohidratos y proteína para correr: cómo pensar tu alimentación diaria", description: "Energía, recuperación y comidas cotidianas para corredores recreativos sin dietas extremas.", image: "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=2000&q=90", alt: "Plato colorido con legumbres, cereales, vegetales y proteína para un corredor" },
  "recuperacion-activa-descanso-running": { title: "Descanso y recuperación activa: cómo decidir qué necesita tu semana", description: "Diferencia entre descanso total y movimiento suave para recuperar mejor corriendo.", image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=2000&q=90", alt: "Corredor caminando tranquilo en un parque durante un día de recuperación" },
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
