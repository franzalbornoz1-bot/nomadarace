import { NextRequest, NextResponse } from "next/server";
import { portalLogin, portalPanel } from "@/lib/portal-auth";
import { portalServerClient } from "@/lib/portal-server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const client = await portalServerClient(true);
  if (client && code) {
    const { error } = await client.auth.exchangeCodeForSession(code);
    if (!error) return NextResponse.redirect(new URL(portalPanel, request.url));
  }
  return NextResponse.redirect(new URL(portalLogin + "?estado=sesion", request.url));
}
