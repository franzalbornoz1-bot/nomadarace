import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NomadaApp } from "@/components/nomada-app";
import { events } from "@/lib/demo-data";

type CatchAllPageProps = { params: Promise<{ path?: string[] }> };

const SITE_URL = "https://www.nomadarace.cl";

export function generateStaticParams() {
  const publicRoutes = [
    [],
    ["eventos"],
    ["eventos", "2027"],
    ["eventos", "detalles"],
    ["preguntas-frecuentes"],
    ["contacto"],
    ["organizadores"],
    ["sobre-nomada-race"],
    ["packs-y-precios"],
    ["privacidad"],
    ["terminos"],
  ];

  return [
    ...publicRoutes.map(path => ({ path })),
    ...events.flatMap(event => [
      { path: ["eventos", event.slug] },
      { path: ["eventos", event.slug, "fotos"] },
    ]),
  ];
}

export const dynamicParams = false;

function routeMetadata(path: string[]): Metadata {
  const pathname = path.length ? `/${path.join("/")}` : "/";
  const canonical = new URL(pathname, SITE_URL).toString();
  const defaults = { alternates: { canonical }, openGraph: { url: canonical } };

  if (path.length === 0) return defaults;
  if (path[0] === "eventos" && path.length === 1) return {
    ...defaults,
    title: "Calendario de carreras 2026 en Chile",
    description: "Calendario de carreras 2026 en Chile: encuentra social runs, running social, trotes 3K y eventos comunitarios como DOGCIAL RUN 3 en el Canil Parque Juan Pablo II de Las Condes. Revisa fechas, ciudades y distancias.",
    keywords: ["calendario de carreras 2026 Chile", "DOGCIAL RUN 3", "Dogcial Run 3 Santiago", "social run Santiago", "running social Chile", "dog social Santiago", "trote 3K Parque Juan Pablo II", "Canil Parque Juan Pablo II", "rescate canino Las Condes", "Fundación APAÑA", "Nómada Race"],
  };
  if (path[0] === "eventos" && path[1] === "2027" && path.length === 2) return {
    ...defaults,
    title: "Carreras 2027 en Chile | Nómada Race",
    description: "Conoce las próximas carreras de 2027 en Chile y planifica tu temporada junto a Nómada Race.",
  };
  if (path[0] === "eventos" && path[1] === "detalles" && path.length === 2) return {
    ...defaults,
    title: "Santiago 10K 2026 | Fotos y detalles de la carrera | Nómada Race",
    description: "Santiago 10K 2026: fecha, horarios, ubicación, kit, cuenta regresiva y fotos profesionales de STGO10K by ASICS en Ñuñoa.",
    keywords: ["Santiago 10K", "Santiago10K 2026", "Santiago 10K ASICS", "STGO10K", "fotos Santiago 10K", "fotos listas Santiago 10K", "fotos de carrera Santiago", "Nómada Race"],
    openGraph: { url: canonical, title: "Santiago 10K 2026 | Nómada Race", description: "Información y fotos profesionales para vivir STGO10K by ASICS." },
  };
  if (path[0] === "preguntas-frecuentes") return {
    ...defaults,
    title: "Preguntas frecuentes sobre fotos de carrera",
    description: "Resuelve dudas sobre cómo encontrar, comprar y descargar tus fotos de carrera en Nómada Race.",
  };
  if (path[0] === "contacto") return {
    ...defaults,
    title: "Contacto",
    description: "Contacta a Nómada Race para consultas sobre fotografías profesionales, eventos y cobertura deportiva en Chile.",
  };
  if (path[0] === "organizadores") return {
    ...defaults,
    title: "Fotografía deportiva para organizadores",
    description: "Conoce cómo Nómada Race puede acompañar carreras y eventos deportivos con fotografía para corredores en Chile.",
  };
  if (path[0] === "sobre-nomada-race") return {
    ...defaults,
    title: "Sobre Nómada Race | Fotografías para corredores",
    description: "Conoce Nómada Race: fotografías profesionales, calendario de carreras y recuerdos para volver a vivir cada ruta.",
  };
  if (path[0] === "packs-y-precios") return {
    ...defaults,
    title: "Packs y precios de fotos de carrera | Nómada Race",
    description: "Consulta cómo funcionan los packs y precios de fotografías de carrera disponibles en cada galería.",
  };

  const event = events.find(item => item.slug === path[1]);
  if (event) return {
    ...defaults,
    title: `${event.name} | Fotos y cobertura de carrera`,
    description: `Información de ${event.name} en ${event.city}: fecha, ubicación y disponibilidad de fotografías profesionales de carrera.`,
    openGraph: { url: canonical, title: `${event.name} | Nómada Race`, description: `Información y fotografías profesionales de ${event.name} en ${event.city}.` },
  };

  return defaults;
}

export async function generateMetadata({ params }: CatchAllPageProps): Promise<Metadata> {
  const { path = [] } = await params;
  return routeMetadata(path);
}

function isPublicRoute(path: string[]) {
  if (path.length === 0) return true;
  if (["organizadores", "sobre-nomada-race", "packs-y-precios", "preguntas-frecuentes", "contacto", "privacidad", "terminos"].includes(path[0]) && path.length === 1) return true;
  if (path[0] !== "eventos") return false;
  if (path.length === 1) return true;
  if (path.length === 2 && path[1] === "2027") return true;
  if (path.length === 2 && path[1] === "detalles") return true;

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
  } : path[0] === "eventos" && path[1] === "detalles" ? {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "STGO10K by ASICS 2026",
    description: "Información y fotografías profesionales para STGO10K by ASICS en Ñuñoa, Santiago.",
    startDate: "2026-10-18T08:00:00-03:00",
    url: `${SITE_URL}${pathname}`,
    location: { "@type": "Place", name: "Ñuñoa, Santiago", address: { "@type": "PostalAddress", addressLocality: "Ñuñoa", addressRegion: "Santiago", addressCountry: "CL" } },
    organizer: { "@type": "Organization", name: "STGO10K", url: "https://stgo10k.cl/" },
  } : null;
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />{eventSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />}<NomadaApp /></>;
}
