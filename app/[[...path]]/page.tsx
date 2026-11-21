import type { Metadata } from "next";
import { notFound, permanentRedirect, redirect } from "next/navigation";
import { NomadaApp } from "@/components/nomada-app";
import { events } from "@/lib/demo-data";

type CatchAllPageProps = { params: Promise<{ path?: string[] }> };

const SITE_URL = "https://www.nomadarace.cl";
const FEDACHI_ALBUM = "https://nomadarace.fotop.com/events/fedachi-marathon-2026-sudamericano/e/362294";

const MONTHS: Record<string, string> = {
  enero: "01", febrero: "02", marzo: "03", abril: "04", mayo: "05", junio: "06",
  julio: "07", agosto: "08", septiembre: "09", octubre: "10", noviembre: "11", diciembre: "12",
};

function eventDateTimes(date: string): { startDate?: string } {
  const match = date.match(/^(\d{1,2}) de ([a-záéíóú]+), (\d{4})$/i);
  if (!match) return { startDate: undefined };
  const [, day, monthName, year] = match;
  const month = MONTHS[monthName.toLowerCase()];
  if (!month) return { startDate: undefined };
  const dayValue = day.padStart(2, "0");
  return { startDate: `${year}-${month}-${dayValue}` };
}

const EVENT_SEO: Record<string, { title: string; description: string; keywords: string[] }> = {
  "the-color-run-santiago": {
    title: "The Color Run Santiago 2026 | Fecha y detalles",
    description: "The Color Run Santiago 2026 tuvo fecha el 8 de noviembre en Ciudad Empresarial, Huechuraba. Revisa los detalles de la carrera y el estado de las galerías de Nómada Race.",
    keywords: ["The Color Run Santiago 2026", "The Color Run fecha Chile", "The Color Run Ciudad Empresarial", "corrida de colores 5K Santiago", "calendario running Chile", "Nómada Race"],
  },
  "fedachi-marathon": {
    title: "Fotos FEDACHI Marathon 2026 | Álbum disponible",
    description: "Fotos FEDACHI Marathon 2026 de 5K, 10K, 21K y 42K en Santiago. Accede desde Nómada Race al álbum específico en Fotop y busca tus fotos con una selfie.",
    keywords: ["fotos FEDACHI Marathon", "fotos Marathon Fedachi 2026", "fotos profesionales FEDACHI", "encuentra tus fotos FEDACHI", "Estadio Nacional Marathon", "maratón Santiago 2026", "5K 10K 21K 42K", "Nómada Race"],
  },
  "corrida-techo-chile": {
    title: "Corrida TECHO-Chile 2026 | Fecha y detalles de la carrera",
    description: "Corrida TECHO-Chile 2026: conoce su fecha del 22 de noviembre, lugar en Plaza Bulnes, distancias y datos de la jornada. Las fotos de Nómada Race se anunciarán cuando estén publicadas.",
    keywords: ["Corrida TECHO-Chile 2026", "fecha Corrida TECHO", "Plaza Bulnes corrida", "corrida Santiago Centro", "distancias Corrida TECHO", "fotografía deportiva Nómada Race"],
  },
  "maraton-de-melipilla": {
    title: "Maratón de Melipilla 2026 | Fecha, recorrido y distancias",
    description: "Maratón de Melipilla 2026: revisa la fecha del 29 de noviembre, el circuito G-800 y las distancias 5K, 10K, 21K y 42K. La disponibilidad de fotos se confirmará cuando se publiquen.",
    keywords: ["Maratón de Melipilla 2026", "fecha Maratón Melipilla", "ruta G-800 Cuncumén", "maratón municipal Melipilla", "distancias maratón Melipilla", "Nómada Race"],
  },
};

export function generateStaticParams() {
  const publicRoutes = [
    [],
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
    title: "Calendario de carreras 2026 y 2027 en Chile | Fechas y distancias",
    description: "Calendario de carreras 2026 y 2027 de Nómada Race: fechas, ciudades y distancias para running, trail y maratones en Chile. Encuentra también carreras difundidas en Corre.cl. Sitio independiente.",
    keywords: ["calendario carreras 2027 Chile", "calendario carreras Chile 2026", "corridas Santiago 2027", "carreras running Chile", "maratones Chile 2027", "fechas 5K 10K 21K 42K", "trail running Chile", "Corre.cl", "calendario Corre.cl", "carreras Corre.cl 2027", "alternativas a Corre.cl", "Nómada Race"],
  };
  if (path[0] === "eventos" && path[1] === "2027" && path.length === 2) return {
    ...defaults,
    title: "Calendario de carreras 2027 en Chile | Fechas y distancias",
    description: "Calendario 2027 de running, trail y maratones en Chile por mes, ciudad y distancia. Consulta en Nómada Race eventos también difundidos en Corre.cl. Sitio independiente.",
    keywords: ["calendario carreras Chile 2027", "corridas 2027 Chile", "maratones Chile 2027", "trail running Chile 2027", "carreras 5K 10K 21K 42K 2027", "carreras Santiago 2027", "Corre.cl", "calendario Corre.cl 2027", "alternativa a Corre.cl", "Nómada Race"],
    openGraph: { url: canonical, title: "Calendario de carreras 2027 en Chile | Nómada Race", description: "Consulta el calendario de carreras de Chile por mes, ciudad y distancia en Nómada Race." },
  };
  if (path[0] === "eventos" && path[1] === "detalles" && path.length === 2) return {
    ...defaults,
    alternates: { canonical: new URL("/eventos", SITE_URL).toString() },
    title: "Calendario de carreras | Nómada Race",
    description: "Consulta el calendario vigente de carreras, eventos y coberturas de Nómada Race.",
    robots: { index: false, follow: true },
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
  if (event) {
    const seo = EVENT_SEO[event.slug] ?? {
      title: `${event.name} | Información y fotografía deportiva`,
      description: `Consulta la fecha y ubicación de ${event.name} en ${event.city}. Descubre el calendario de carreras y las galerías confirmadas de Nómada Race.`,
      keywords: [event.name, `carrera ${event.city}`, "fotografía deportiva", "Nómada Race"],
    };
    const photoDemoRoute = path.length === 3 && path[2] === "fotos";
    const verifiedEventPage = ["the-color-run-santiago", "fedachi-marathon", "corrida-techo-chile", "maraton-de-melipilla"].includes(event.slug);
    const eventCanonical = new URL(`/eventos/${event.slug}`, SITE_URL).toString();
    return {
      ...defaults,
      alternates: { canonical: eventCanonical },
      ...(!verifiedEventPage || photoDemoRoute ? { robots: { index: false, follow: true } } : {}),
      title: { absolute: `${seo.title} | Nómada Race` },
      description: seo.description,
      keywords: seo.keywords,
      openGraph: { url: eventCanonical, title: `${seo.title} | Nómada Race`, description: seo.description, type: "website", locale: "es_CL", siteName: "Nómada Race", images: [{ url: event.cover, alt: `Imagen referencial de ${event.name}` }] },
      twitter: { card: "summary_large_image", title: `${seo.title} | Nómada Race`, description: seo.description, images: [event.cover] },
      other: { "geo.placename": `${event.city}, Chile`, "content-language": "es-CL" },
    };
  }

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
  // Existing 2027 links lead to the unified calendar instead of a second page.
  if (path.length === 2 && path[0] === "eventos" && path[1] === "2027") permanentRedirect("/eventos");
  // Do not expose the old simulated photo checkout as an indexable purchase page.
  // FEDACHI has a verified direct album; other demo photo routes return to their event landing.
  if (path[0] === "eventos" && path[1] === "detalles" && path.length === 2) {
    redirect("https://nomadarace.fotop.com/events/3ra-edicion-dogcial-run-2026/e/355186");
  }
  if (path[0] === "eventos" && path.length === 3 && path[2] === "fotos") {
    const event = events.find(item => item.slug === path[1]);
    if (!event) notFound();
    redirect(event.slug === "fedachi-marathon" ? FEDACHI_ALBUM : "https://nomadarace.fotop.com/");
  }

  if (!isPublicRoute(path)) notFound();
  const event = path[0] === "eventos" ? events.find(item => item.slug === path[1]) : undefined;
  const pathname = path.length ? `/${path.join("/")}` : "/";
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL }, ...path.map((segment, index) => ({ "@type": "ListItem", position: index + 2, name: index === 0 && segment === "eventos" ? "Eventos" : event && index === 1 ? event.name : segment.replaceAll("-", " "), item: `${SITE_URL}/${path.slice(0, index + 1).join("/")}` }))],
  };
  const eventTimes = event ? eventDateTimes(event.date) : {};
  // One factual SportsEvent block per published event landing.
  // Do not invent free ticket offers, performers, organizers or start times.
  const eventSchema = event && path.length === 2 && ["the-color-run-santiago", "fedachi-marathon", "corrida-techo-chile", "maraton-de-melipilla"].includes(event.slug) ? {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: event.name,
    description: event.description,
    ...(eventTimes.startDate ? { startDate: eventTimes.startDate } : {}),
    url: `${SITE_URL}/eventos/${event.slug}`,
    // No generic stock images in event schema; wait for verified photos of each event.
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: { "@type": "Place", name: event.place, address: { "@type": "PostalAddress", addressLocality: event.city, addressCountry: "CL" } },
  } : null;
  const profileSchema = path[0] === "sobre-nomada-race" ? {
    "@context": "https://schema.org",
    "@type": ["AboutPage", "ProfilePage"],
    name: "Sobre Nómada Race",
    url: `${SITE_URL}${pathname}`,
    inLanguage: "es-CL",
    mainEntity: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Nómada Race",
      alternateName: "Nomada Race",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png` },
      description: "Plataforma chilena de fotografía deportiva e información de carreras para corredores.",
    },
  } : null;
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />{eventSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />}{profileSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }} />}<NomadaApp /></>;
}
