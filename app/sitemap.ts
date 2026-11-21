import type { MetadataRoute } from "next";
import { blogPublicationDates, getBlogPublicationDate } from "@/lib/blog-publication";
import { events } from "@/lib/demo-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.nomadarace.cl";
  const updatedAt = new Date("2026-11-21T09:15:00-03:00");
  const paths = [
    "",
    "/eventos",
    ...events.filter(event => ["the-color-run-santiago", "fedachi-marathon", "corrida-techo-chile", "maraton-de-melipilla"].includes(event.slug)).map(event => `/eventos/${event.slug}`),
    "/blog",
    ...Object.keys(blogPublicationDates).map(slug => `/blog/${slug}`),
    "/preguntas-frecuentes",
    "/contacto",
    "/organizadores",
    "/sobre-nomada-race",
    "/packs-y-precios",
    "/privacidad",
    "/terminos",
  ];

  return paths.map(path => {
    const slug = path.startsWith("/blog/") ? path.slice(6) : null;
    const isEventLanding = events.some(event => path === `/eventos/${event.slug}`);
    const lastModified = slug ? new Date(getBlogPublicationDate(slug).iso) : updatedAt;
    return {
      url: `${base}${path}`,
      lastModified,
      changeFrequency: path === "/eventos" || isEventLanding ? "weekly" : "monthly",
      priority: path === "" ? 1 : path === "/eventos" ? 0.9 : isEventLanding ? 0.85 : path.startsWith("/blog/") ? 0.8 : 0.7,
    };
  });
}
