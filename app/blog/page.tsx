import type { Metadata } from "next";
import { NomadaApp } from "@/components/nomada-app";

export const metadata: Metadata = {
  title: "Blog | Nómada Race",
  description: "Guías, historias y consejos para disfrutar cada carrera con Nómada Race.",
};

export default function BlogPage() {
  return <NomadaApp />;
}
