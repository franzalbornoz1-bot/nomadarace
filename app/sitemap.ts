import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nomadarace.cl";
  return ["", "/eventos", "/blog", "/blog/primeros-10k", "/blog/como-correr-mas-rapido", "/blog/ejercicios-fuerza-corredores", "/blog/alimentacion-para-corredores", "/blog/plan-para-correr-5k", "/blog/recuperacion-despues-de-correr", "/blog/hidratacion-para-corredores", "/blog/tecnica-de-carrera-cadencia", "/blog/semana-antes-de-una-carrera", "/blog/media-maraton-primeriza", "/blog/correr-con-calor", "/blog/trail-running-principiantes", "/preguntas-frecuentes", "/contacto", "/organizadores"].map(path => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === "/eventos" ? "weekly" : path.startsWith("/blog") ? "monthly" : "monthly", priority: path === "" ? 1 : path.startsWith("/blog/") ? 0.8 : 0.7 }));
}
