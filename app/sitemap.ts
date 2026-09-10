import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nomadarace.cl";
  return ["", "/eventos", "/blog", "/blog/primeros-10k", "/blog/como-correr-mas-rapido", "/blog/ejercicios-fuerza-corredores", "/blog/alimentacion-para-corredores", "/preguntas-frecuentes", "/contacto", "/organizadores"].map(path => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === "/eventos" ? "weekly" : path.startsWith("/blog") ? "monthly" : "monthly", priority: path === "" ? 1 : path.startsWith("/blog/") ? 0.8 : 0.7 }));
}
