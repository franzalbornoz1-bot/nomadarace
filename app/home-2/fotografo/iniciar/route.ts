import { NextRequest, NextResponse } from "next/server";
import { portalCallback, portalLogin } from "@/lib/portal-auth";
import { portalServerClient } from "@/lib/portal-server";

export async function GET(request: NextRequest) {
  const client = await portalServerClient(true);
  if (client) {
    const { data, error } = await client.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: new URL(portalCallback, request.url).href },
    });
    if (!error && data.url) return NextResponse.redirect(data.url);
  }
  return NextResponse.redirect(new URL(portalLogin + "?estado=configuracion", request.url));
}
