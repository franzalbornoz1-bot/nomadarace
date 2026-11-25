import { createServerClient, type CookieMethodsServer } from "@supabase/ssr";

export const portalLogin = "/home-2/fotografo/login";
export const portalPanel = "/home-2/carga";
export const portalCallback = "/home-2/fotografo/callback";

export function portalClient(cookies: CookieMethodsServer) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createServerClient(url, key, {
    cookies,
    cookieOptions: { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production" },
  });
}
