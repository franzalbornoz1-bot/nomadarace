import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/", disallow: ["/admin", "/fotografos", "/demo"] }, sitemap: "https://nomadarace.cl/sitemap.xml" };
}
