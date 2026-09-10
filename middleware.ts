import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const INTERNAL_PREFIXES = ["/admin", "/fotografos", "/demo"];

export function middleware(request: NextRequest) {
  if (INTERNAL_PREFIXES.some(prefix => request.nextUrl.pathname === prefix || request.nextUrl.pathname.startsWith(`${prefix}/`))) {
    return new NextResponse("Not Found", {
      status: 404,
      headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/fotografos/:path*", "/demo/:path*"],
};
