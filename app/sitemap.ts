import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nomadarace.cl";
  return ["", "/eventos", "/blog", "/preguntas-frecuentes", "/contacto", "/organizadores", "/fotografos"].map(path => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === "/eventos" ? "weekly" : "monthly", priority: path === "" ? 1 : 0.7 }));
}
