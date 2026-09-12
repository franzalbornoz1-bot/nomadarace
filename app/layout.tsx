import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nomadarace.cl"),
  title: { default: "Nómada Race | Fotografías profesionales de carreras en Chile", template: "%s | Nómada Race" },
  description: "Encuentra, compra y descarga fotografías profesionales de carreras en Chile. Busca tus fotos por evento en Nómada Race.",
  keywords: ["fotos de carreras", "fotos running Chile", "fotos por dorsal", "fotografía deportiva", "Nómada Race"],
  openGraph: { type: "website", locale: "es_CL", url: "https://nomadarace.cl", siteName: "Nómada Race", title: "Nómada Race | Fotografías profesionales de carreras en Chile", description: "Encuentra y compra fotografías profesionales de carreras en Chile." },
  twitter: { card: "summary_large_image", title: "Nómada Race | Fotografías profesionales de carreras en Chile", description: "Encuentra fotografías profesionales de carreras en Chile." },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className={archivo.variable} suppressHydrationWarning>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
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
      <Script id="nomada-structured-data" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "Organization", name: "Nómada Race", url: "https://nomadarace.cl", logo: "https://nomadarace.cl/icon.png", email: "contacto@nomadafilms.cl", description: "Plataforma chilena para encontrar y comprar fotografías profesionales de carreras." }, { "@type": "WebSite", name: "Nómada Race", url: "https://nomadarace.cl", inLanguage: "es-CL" }] })}</Script>
    </head>
    <body>{children}</body>
  </html>;
}
