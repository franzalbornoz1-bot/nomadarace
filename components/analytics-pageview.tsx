"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function AnalyticsPageview() {
  const pathname = usePathname();
  const firstRender = useRef(true);
  useEffect(() => {
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
