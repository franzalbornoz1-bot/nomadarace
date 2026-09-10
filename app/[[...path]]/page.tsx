import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NomadaApp } from "@/components/nomada-app";
import { events } from "@/lib/demo-data";

type CatchAllPageProps = { params: Promise<{ path?: string[] }> };

const SITE_URL = "https://nomadarace.cl";

function routeMetadata(path: string[]): Metadata {
  const pathname = path.length ? `/${path.join("/")}` : "/";
  const canonical = new URL(pathname, SITE_URL).toString();
  const defaults = { alternates: { canonical }, openGraph: { url: canonical } };

  if (path.length === 0) return defaults;
  if (path[0] === "eventos" && path.length === 1) return {
    ...defaults,
    title: "Calendario de carreras 2026 en Chile",
    description: "Calendario referencial de carreras 2026 en Chile: revisa fechas, ciudades y distancias para planificar tu próxima ruta.",
  };
  if (path[0] === "preguntas-frecuentes") return {
    ...defaults,
    title: "Preguntas frecuentes sobre fotos de carrera",
    description: "Resuelve dudas sobre cómo encontrar, comprar y descargar tus fotos de carrera en Nómada Race.",
  };
  if (path[0] === "contacto") return {
    ...defaults,
    title: "Contacto",
    description: "Contacta a Nómada Race para consultas sobre fotografías oficiales, eventos y cobertura deportiva en Chile.",
  };
  if (path[0] === "organizadores") return {
    ...defaults,
    title: "Fotografía deportiva para organizadores",
    description: "Conoce cómo Nómada Race puede acompañar carreras y eventos deportivos con fotografía para corredores en Chile.",
  };

  const event = events.find(item => item.slug === path[1]);
  if (event) return {
    ...defaults,
    title: `${event.name} | Fotos y cobertura de carrera`,
    description: `Información de ${event.name} en ${event.city}: fecha, ubicación y disponibilidad de fotografías oficiales de carrera.`,
    openGraph: { url: canonical, title: `${event.name} | Nómada Race`, description: `Información y fotografías oficiales de ${event.name} en ${event.city}.` },
  };

  return defaults;
}

export async function generateMetadata({ params }: CatchAllPageProps): Promise<Metadata> {
  const { path = [] } = await params;
  return routeMetadata(path);
}

function isPublicRoute(path: string[]) {
  if (path.length === 0) return true;
  if (["organizadores", "preguntas-frecuentes", "contacto"].includes(path[0]) && path.length === 1) return true;
  if (path[0] !== "eventos") return false;
  if (path.length === 1) return true;

  const event = events.find(item => item.slug === path[1]);
  return Boolean(event) && (path.length === 2 || (path.length === 3 && path[2] === "fotos"));
}

export default async function CatchAllPage({ params }: CatchAllPageProps) {
  const { path = [] } = await params;
  if (!isPublicRoute(path)) notFound();
  const event = path[0] === "eventos" ? events.find(item => item.slug === path[1]) : undefined;
  const pathname = path.length ? `/${path.join("/")}` : "/";
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL }, ...path.map((segment, index) => ({ "@type": "ListItem", position: index + 2, name: index === 0 && segment === "eventos" ? "Eventos" : event && index === 1 ? event.name : segment.replaceAll("-", " "), item: `${SITE_URL}/${path.slice(0, index + 1).join("/")}` }))],
  };
  const eventSchema = event ? {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: event.name,
    description: event.description,
    url: `${SITE_URL}${pathname}`,
    location: { "@type": "Place", name: event.place, address: { "@type": "PostalAddress", addressLocality: event.city, addressCountry: "CL" } },
    organizer: { "@type": "Organization", name: "Nómada Race", url: SITE_URL },
  } : null;
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />{eventSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />}<NomadaApp /></>;
}
