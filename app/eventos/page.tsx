import type { Metadata } from "next";
import { NomadaApp } from "@/components/nomada-app";

// Unlike the other pre-rendered pages, the race calendar must use the
// current date in Chile from the server on EVERY request, including HTML
// served before hydration. Do not statically cache this route.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: { absolute: "Calendario de carreras Chile 2026 y 2027 | Nómada Race" },
  description: "Calendario de carreras 2026 y 2027 de Nómada Race: fechas, ciudades y distancias para running, trail y maratones en Chile. Encuentra también carreras difundidas en Corre.cl. Sitio independiente.",
  keywords: [
    "calendario carreras 2027 Chile",
    "calendario carreras Chile 2026",
    "corridas Santiago 2027",
    "carreras running Chile",
    "maratones Chile 2027",
    "fechas 5K 10K 21K 42K",
    "trail running Chile",
    "Corre.cl",
    "calendario Corre.cl",
    "carreras Corre.cl 2027",
    "alternativas a Corre.cl",
    "Nómada Race",
  ],
  alternates: { canonical: "/eventos" },
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "Nómada Race",
    url: "https://www.nomadarace.cl/eventos",
    title: "Calendario de carreras Chile 2026–2027 | Nómada Race",
    description: "Busca carreras de running y trail en Chile, por fecha, ciudad y distancia. Un solo calendario con eventos de 2026 y 2027.",
    images: [{ url: "/home-photo-1.jpg", alt: "Calendario de carreras de Chile en Nómada Race" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calendario de carreras Chile 2026–2027 | Nómada Race",
    description: "Descubre tu próxima carrera en Chile: calendario de running, trail, 5K, 10K, 21K y maratones.",
    images: ["/home-photo-1.jpg"],
  },
  robots: { index: true, follow: true },
};

function serverDateInChile(): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Santiago",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const date = Object.fromEntries(parts.map(part => [part.type, part.value]));
  return `${date.year}-${date.month}-${date.day}`;
}

export default function EventsCalendarPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.nomadarace.cl/eventos#calendar",
    name: "Calendario de carreras de running y trail en Chile 2026–2027",
    description: "Agenda de carreras de running, trail, 5K, 10K, medias maratones y maratones en Chile.",
    url: "https://www.nomadarace.cl/eventos",
    inLanguage: "es-CL",
    isPartOf: { "@id": "https://www.nomadarace.cl/#website" },
    publisher: { "@id": "https://www.nomadarace.cl/#organization" },
    about: { "@type": "Thing", name: "Calendario de carreras de running en Chile" },
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <NomadaApp initialCalendarDate={serverDateInChile()} />
  </>;
}
