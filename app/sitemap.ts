import type { MetadataRoute } from "next";
import { blogPublicationDates, getBlogPublicationDate } from "@/lib/blog-publication";
import { calendarRaces } from "@/lib/calendar-2026";
import { CALENDAR_2027_MONTHS, calendarRaces2027 } from "@/lib/calendar-2027";
import { events } from "@/lib/demo-data";

// The public calendar changes when a race date passes; do not serve a perpetually
// frozen lastmod value. Blog posts retain their true publication timestamps.
export const dynamic = "force-dynamic";

function dateInChile() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Santiago",
    year: "numeric", month: "2-digit", day: "2-digit",
  }).formatToParts(new Date());
  const value = Object.fromEntries(parts.map(part => [part.type, part.value]));
  return `${value.year}-${value.month}-${value.day}`;
}

function dateAfter(dateKey: string) {
  const nextDay = new Date(`${dateKey}T12:00:00Z`);
  nextDay.setUTCDate(nextDay.getUTCDate() + 1);
  return nextDay.toISOString().slice(0, 10);
}

function lastCalendarContentChange(baseDate: Date) {
  const today = dateInChile();
  const raceDates = [
    ...calendarRaces.map(race => {
      const month = CALENDAR_2027_MONTHS.indexOf(race.month) + 1;
      return `${race.year ?? 2026}-${String(month).padStart(2, "0")}-${String(race.day).padStart(2, "0")}`;
    }),
    ...calendarRaces2027.map(race => race.date),
  ];
  // An expired race vanishes the day after its start date: that is a real
  // change to the calendar's primary content and therefore to its lastmod.
  const removalDays = raceDates
    .filter(date => date < today)
    .map(dateAfter)
    .filter(date => date <= today)
    .sort();
  const lastRemoval = removalDays[removalDays.length - 1];
  const removalTimestamp = lastRemoval ? new Date(`${lastRemoval}T12:00:00Z`) : baseDate;
  return removalTimestamp > baseDate ? removalTimestamp : baseDate;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.nomadarace.cl";
  const updatedAt = new Date("2026-11-21T09:15:00-03:00");
  const calendarModified = lastCalendarContentChange(updatedAt);
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
    const lastModified = slug
      ? new Date(getBlogPublicationDate(slug).iso)
      : path === "/eventos" ? calendarModified : updatedAt;
    return {
      url: `${base}${path}`,
      lastModified,
      changeFrequency: path === "/eventos" || isEventLanding ? "weekly" : "monthly",
      priority: path === "" ? 1 : path === "/eventos" ? 0.9 : isEventLanding ? 0.85 : path.startsWith("/blog/") ? 0.8 : 0.7,
    };
  });
}
