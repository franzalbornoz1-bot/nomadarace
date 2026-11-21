import type { Metadata } from "next";
import { NomadaApp } from "@/components/nomada-app";

// Unlike the other pre-rendered pages, the race calendar must use the
// current date in Chile from the server on EVERY request, including HTML
// served before hydration. Do not statically cache this route.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Calendario de carreras 2026 y 2027 en Chile | Fechas y distancias",
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
    url: "/eventos",
    title: "Calendario de carreras 2026–2027 | Nómada Race",
    description: "Descubre carreras por mes, ciudad y distancia en Chile.",
  },
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
  return <NomadaApp initialCalendarDate={serverDateInChile()} />;
}
