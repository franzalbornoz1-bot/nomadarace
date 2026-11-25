import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { portalCallback, portalClient, portalLogin, portalPanel } from "./lib/portal-auth";

const INTERNAL_PREFIXES = ["/admin", "/fotografos", "/demo"];
// Random 128-bit secret's SHA-256 digest. The password itself is NEVER committed.
// Change this digest to rotate access to the private design preview.
const HOME2_PASSWORD_HASH = "c38fd21bded5b0047662a67e4cd424468069df330187935bd28befd18a847322";

function constantTimeEqual(a: string, b: string) {
  const length = Math.max(a.length, b.length);
  let difference = a.length ^ b.length;
  for (let i = 0; i < length; i++) difference |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  return difference === 0;
}

async function accessGranted(request: NextRequest) {
  const auth = request.headers.get("authorization");
  if (!auth?.startsWith("Basic ")) return false;
  try {
    const decoded = atob(auth.slice(6));
    const divider = decoded.indexOf(":");
    if (divider < 0) return false;
    const username = decoded.slice(0, divider);
    const password = decoded.slice(divider + 1);
    if (username !== "nomada" || password.length > 200) return false;
    const hash = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(password));
    const hex = Array.from(new Uint8Array(hash), byte => byte.toString(16).padStart(2, "0")).join("");
    return constantTimeEqual(hex, HOME2_PASSWORD_HASH);
  } catch {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  // Keep one public hostname so Google and visitors do not split traffic
  // between the legacy apex host and the current www deployment.
  if (request.nextUrl.hostname === "nomadarace.cl") {
    const url = request.nextUrl.clone();
    url.hostname = "www.nomadarace.cl";
    return NextResponse.redirect(url, 308);
  }

  // Keep the design sandbox private. This is a genuine auth gate, not just
  // robots/noindex: unauthorized requests never reach the rendered page.
  const isHome2 = request.nextUrl.pathname === "/home-2" || request.nextUrl.pathname.startsWith("/home-2/");
  if (isHome2) {
    const previewHeaders = {
      "X-Robots-Tag": "noindex, nofollow, noarchive, nosnippet",
      "Cache-Control": "private, no-store, max-age=0",
      "Vary": "Authorization",
      "Referrer-Policy": "no-referrer",
    };
    const path = request.nextUrl.pathname;
    const isPortal = [portalLogin, portalCallback, portalPanel, "/home-2/fotografo", "/home-2/fotografo/iniciar"].includes(path);
    if (!isPortal && !(await accessGranted(request))) {
      return new NextResponse("Acceso privado de Nómada Race.", {
        status: 401,
        headers: {
          ...previewHeaders,
          "Content-Type": "text/plain; charset=utf-8",
          "WWW-Authenticate": 'Basic realm="Nomada Race - Home 2", charset="UTF-8"',
        },
      });
    }
    let response = NextResponse.next();
    if (path === portalPanel) {
      const client = portalClient({
        getAll: () => request.cookies.getAll(),
        setAll: (updates) => {
          for (const { name, value } of updates) request.cookies.set(name, value);
          response = NextResponse.next({ request });
          for (const { name, value, options } of updates) response.cookies.set(name, value, options);
        },
      });
      // Forward refreshed cookies to the page, which enforces the membership check.
      if (client) await client.auth.getUser();
    }
    Object.entries(previewHeaders).forEach(([key, value]) => response.headers.set(key, value));
    return response;
  }

  // Recover malformed legacy URLs that Search Console may still revisit.
  // These paths were never real pages and should resolve to a valid canonical URL.
  if (["/opengraph-image", "/$", "/&"].includes(request.nextUrl.pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = request.nextUrl.pathname === "/opengraph-image" ? "/icon.png" : "/";
    url.search = "";
    return NextResponse.redirect(url, 308);
  }

  if (INTERNAL_PREFIXES.some(prefix => request.nextUrl.pathname === prefix || request.nextUrl.pathname.startsWith(`${prefix}/`))) {
    return new NextResponse("Not Found", {
      status: 404,
      headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
