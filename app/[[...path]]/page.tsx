import { notFound } from "next/navigation";
import { NomadaApp } from "@/components/nomada-app";
import { events } from "@/lib/demo-data";

type CatchAllPageProps = { params: Promise<{ path?: string[] }> };

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
  return <NomadaApp />;
}
