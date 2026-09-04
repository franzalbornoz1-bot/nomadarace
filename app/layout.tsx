import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "NÓMADA RACE — Encuentra tu momento",
  description: "Encuentra y guarda los mejores momentos de tu carrera con Nómada Race.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" suppressHydrationWarning>
    <head>
      <Script id="nomada-theme" strategy="beforeInteractive">{`(function () {
        try {
          var match = document.cookie.match(/(?:^|; )nomada-theme=([^;]+)/);
          var stored = match ? decodeURIComponent(match[1]) : window.localStorage.getItem("nomada-theme");
          var theme = stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
          var root = document.documentElement;
          root.classList.toggle("dark", theme === "dark");
          root.dataset.theme = theme;
          root.style.colorScheme = theme;
        } catch (error) {}
      })();`}</Script>
    </head>
    <body>{children}</body>
  </html>;
}
