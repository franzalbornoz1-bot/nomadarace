"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const ALBUM_URL = "https://nomadarace.fotop.com/events/corrida-techo-2026/e/365811";
const DISMISS_KEY = "nomada-techo-2026-popup-dismissed";

export function TechoPhotoPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setOpen(false);
      return;
    }
    try {
      if (window.sessionStorage.getItem(DISMISS_KEY) === "1") return;
    } catch {}
    const timer = window.setTimeout(() => setOpen(true), 1100);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [open]);

  function dismiss() {
    setOpen(false);
    try { window.sessionStorage.setItem(DISMISS_KEY, "1"); } catch {}
  }

  if (!open || pathname !== "/") return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
      onMouseDown={(event) => { if (event.target === event.currentTarget) dismiss(); }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="techo-popup-title"
        aria-describedby="techo-popup-description"
        className="relative w-full max-w-[440px] overflow-hidden rounded-[24px] border border-white/15 bg-[#141414] p-7 text-white shadow-[0_24px_90px_rgba(0,0,0,0.5),0_0_42px_rgba(255,106,21,0.18)] sm:p-9"
      >
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-28 h-60 w-60 rounded-full bg-[#ff7518]/25 blur-[76px]" />
        <button type="button" onClick={dismiss} aria-label="Cerrar aviso" className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xl leading-none text-white transition hover:bg-white/20">×</button>
        <div className="relative">
          <span className="inline-flex rounded-full border border-[#ff8b3c]/45 bg-[#ff7518]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[#ffa566]">Fotos disponibles</span>
          <h2 id="techo-popup-title" className="mt-5 text-[clamp(27px,6vw,38px)] font-black uppercase leading-[1.04] tracking-[-0.045em]">
            ¡Tus fotos de la <span className="text-[#ff862f]">Corrida TECHO</span> ya están listas!
          </h2>
          <p id="techo-popup-description" className="mt-4 text-[15px] leading-relaxed text-white/75">
            Revive tu carrera y encuentra tus mejores momentos. Busca tus fotos con una selfie.
          </p>
          <a href={ALBUM_URL} target="_blank" rel="noopener noreferrer" onClick={dismiss} className="mt-7 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#ff7518] px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-[#f36508] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Ver mis fotos <span aria-hidden="true">↗</span>
          </a>
          <p className="mt-5 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">Nómada Race · Corrida TECHO 2026</p>
        </div>
      </section>
    </div>
  );
}
