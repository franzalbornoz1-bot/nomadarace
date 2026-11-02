"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __nomadaGaInitialized?: boolean;
  }
}

function ensureGoogleAnalytics() {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
  if (!window.__nomadaGaInitialized) {
    window.gtag("js", new Date());
    window.gtag("config", "G-GPMLF3FKXN");
    window.__nomadaGaInitialized = true;
  }
}

export function AnalyticsPageview() {
  const pathname = usePathname();
  const firstRender = useRef(true);
  useEffect(() => {
    ensureGoogleAnalytics();
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const query = window.location.search.replace(/^\?/, "");
    const pagePath = query ? `${pathname}?${query}` : pathname;
    window.gtag?.("event", "page_view", {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
}
