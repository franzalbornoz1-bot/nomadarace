import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const INTERNAL_PREFIXES = ["/admin", "/fotografos", "/demo"];

export function middleware(request: NextRequest) {
  // Keep one public hostname so Google and visitors do not split traffic
  // between the legacy apex host and the current www deployment.
  if (request.nextUrl.hostname === "nomadarace.cl") {
    const url = request.nextUrl.clone();
    url.hostname = "www.nomadarace.cl";
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
