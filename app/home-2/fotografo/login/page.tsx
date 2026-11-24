import { headers } from "next/headers";
export const dynamic = "force-dynamic";
export default async function Login() {
 const h=await headers(); const host=h.get("host")||"";
 const base=process.env.NEXT_PUBLIC_SUPABASE_URL;
 const redirect="https://"+host+"/home-2/fotografo/callback";
 const url=base ? base+"/auth/v1/authorize?provider=google&redirect_to="+encodeURIComponent(redirect):null;
 return <main className="min-h-screen bg-neutral-950 text-white flex items-center justify-center p-6"><section className="w-full max-w-md rounded-2xl border border-neutral-800 p-8"><a href="/home-2" className="font-black">NÓMADA <span className="text-orange-500">RACE</span></a><h1 className="mt-8 text-3xl font-bold">Portal de fotógrafos</h1><p className="mt-3 text-neutral-400">Accede con tu cuenta Google. El acceso al panel requiere aprobación.</p>{url?<a className="mt-8 block rounded-xl bg-white text-black text-center p-4 font-semibold" href={url}>Continuar con Google</a>:<p className="mt-8">Supabase no configurado.</p>}</section></main>;
}