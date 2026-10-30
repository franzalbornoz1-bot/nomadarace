import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return { rules: [
    { userAgent: "*", allow: "/", disallow: ["/admin", "/fotografos", "/demo"] },
    { userAgent: ["Googlebot", "Google-Extended", "OAI-SearchBot", "GPTBot", "ClaudeBot", "PerplexityBot"], allow: "/", disallow: ["/admin", "/fotografos", "/demo"] },
  ], host: "https://www.nomadarace.cl", sitemap: "https://www.nomadarace.cl/sitemap.xml" };
}
