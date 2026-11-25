import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { NomadaUploadLab } from "@/components/nomada-upload-lab";
import { portalLogin } from "@/lib/portal-auth";
import { portalServerClient } from "@/lib/portal-server";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Carga de fotos | Laboratorio Nómada", robots: { index: false, follow: false, noarchive: true } };

async function logout() {
  "use server";
  const client = await portalServerClient(true);
  if (client) await client.auth.signOut({ scope: "local" });
  redirect(portalLogin);
}

export default async function Page() {
  const client = await portalServerClient();
  if (!client) redirect(portalLogin + "?estado=configuracion");
  const { data: { user } } = await client.auth.getUser();
  if (!user) redirect(portalLogin);
  if (!user.email_confirmed_at || !user.email || user.app_metadata.provider !== "google") {
    redirect(portalLogin + "?estado=pendiente");
  }
  const { data: member, error } = await client.from("portal_members").select("role")
    .eq("email", user.email.toLowerCase()).eq("active", true).maybeSingle();
  if (error) redirect(portalLogin + "?estado=configuracion");
  if (!member || !["admin", "superadmin"].includes(member.role)) redirect(portalLogin + "?estado=pendiente");

  return <>
    <header className="flex flex-wrap justify-between gap-3 bg-neutral-950 px-6 py-3 text-sm text-white">
      <span>{user.email} · {member.role === "superadmin" ? "Superadministrador" : "Administrador"}</span>
      <form action={logout}><button className="underline">Cerrar sesión</button></form>
    </header>
    <NomadaUploadLab />
  </>;
}
