import type { Metadata } from "next";
import { NomadaFotosLab } from "@/components/nomada-fotos-lab";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: { absolute: "Nómada Fotos | Laboratorio privado" },
  description: "Prototipo privado de la plataforma de fotografías Nómada Race.",
  robots: { index: false, follow: false, noarchive: true, nosnippet: true },
};

export default function Home2Preview() {
  return <NomadaFotosLab />;
}
