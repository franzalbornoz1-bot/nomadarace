import type { Metadata } from "next";
import { NomadaUploadLab } from "@/components/nomada-upload-lab";
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Carga de fotos | Laboratorio Nómada", robots: { index: false, follow: false, noarchive: true } };
export default function Page() { return <NomadaUploadLab />; }
