import type { MetadataRoute } from "next";
import { blogPublicationDates, getBlogPublicationDate } from "@/lib/blog-publication";
import { events } from "@/lib/demo-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.nomadarace.cl";
  const paths = ["", "/eventos", "/eventos/detalles", ...events.map(event => `/eventos/${event.slug}`), "/blog", ...Object.keys(blogPublicationDates).map(slug => `/blog/${slug}`), "/preguntas-frecuentes", "/contacto", "/organizadores", "/sobre-nomada-race", "/packs-y-precios", "/privacidad", "/terminos"];
  return paths.map(path => {
    const slug = path.startsWith("/blog/") ? path.slice(6) : null;
    return { url: `${base}${path}`, lastModified: slug ? new Date(getBlogPublicationDate(slug).iso) : new Date("2026-10-30T12:00:00-03:00"), changeFrequency: path === "/eventos" || path === "/eventos/detalles" ? "weekly" : path.startsWith("/blog") ? "monthly" : "monthly", priority: path === "" ? 1 : path === "/eventos/detalles" ? 0.9 : path.startsWith("/blog/") ? 0.8 : 0.7 };
  });
}
