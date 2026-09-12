import type { MetadataRoute } from "next";
import { getBlogPublicationDate } from "@/lib/blog-publication";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nomadarace.cl";
  return ["", "/eventos", "/blog", "/blog/primeros-10k", "/blog/como-correr-mas-rapido", "/blog/ejercicios-fuerza-corredores", "/blog/alimentacion-para-corredores", "/blog/plan-para-correr-5k", "/blog/recuperacion-despues-de-correr", "/blog/hidratacion-para-corredores", "/blog/tecnica-de-carrera-cadencia", "/blog/semana-antes-de-una-carrera", "/blog/media-maraton-primeriza", "/blog/correr-con-calor", "/blog/trail-running-principiantes", "/blog/planificar-entrenamiento-semanal-running", "/blog/series-cuestas-running-principiantes", "/blog/fuerza-pies-tobillos-corredores", "/blog/fuerza-core-corredores", "/blog/colaciones-para-corredores", "/blog/alimentacion-dia-carrera", "/blog/proteina-carbohidratos-running", "/blog/recuperacion-activa-descanso-running", "/preguntas-frecuentes", "/contacto", "/organizadores"].map(path => {
    const slug = path.startsWith("/blog/") ? path.slice(6) : null;
    return { url: `${base}${path}`, lastModified: slug ? new Date(`${getBlogPublicationDate(slug).iso}T12:00:00-03:00`) : new Date("2026-09-12T12:00:00-03:00"), changeFrequency: path === "/eventos" ? "weekly" : path.startsWith("/blog") ? "monthly" : "monthly", priority: path === "" ? 1 : path.startsWith("/blog/") ? 0.8 : 0.7 };
  });
}
