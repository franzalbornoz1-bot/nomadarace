import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Esta no es la ruta | Nómada Race",
  description: "La página que buscas no está disponible.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <main className="relative grid min-h-screen place-items-center overflow-hidden bg-[#f7f8fa] px-5 py-10 text-zinc-950">
    <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-orange-200/50 blur-3xl" />
    <div className="absolute -right-24 bottom-8 h-80 w-80 rounded-full bg-violet-200/35 blur-3xl" />
    <section className="relative w-full max-w-xl rounded-[2rem] border border-white/80 bg-white/80 p-8 text-center shadow-[0_24px_70px_rgba(24,28,31,.12)] backdrop-blur-xl sm:p-12">
      <img src="/nomada-race-wordmark-day.png" alt="Nómada Race" className="mx-auto h-10 w-44 object-cover object-center" />
      <p className="mt-12 text-xs font-black uppercase tracking-[.24em] text-orange-600">ERROR 404</p>
      <h1 className="mt-4 text-5xl font-black leading-[.9] tracking-[-.075em] sm:text-6xl">Esta no es<br />la ruta.</h1>
      <p className="mx-auto mt-6 max-w-md text-base leading-7 text-zinc-600">Parece que esta página tomó otro desvío. Vuelve al inicio para encontrar tus fotos, próximas carreras y nuevas historias para correr.</p>
      <Link href="/" className="mt-9 inline-flex h-12 items-center justify-center rounded-full bg-orange-500 px-6 text-sm font-bold text-zinc-950 shadow-[0_12px_26px_rgba(254,92,19,.28)] transition hover:-translate-y-px hover:bg-[#ff6c2b]">Volver al inicio <span className="ml-2 text-lg leading-none">→</span></Link>
      <Link href="/eventos" className="mt-5 block text-sm font-bold text-zinc-500 transition hover:text-orange-600">Ver calendario de carreras</Link>
    </section>
  </main>;
}
