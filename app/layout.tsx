import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nomadarace.cl"),
  title: { default: "Nómada Race | Fotos profesionales de carreras en Chile", template: "%s | Nómada Race" },
  description: "Nómada Race es una plataforma chilena de fotos profesionales de carreras. Encuentra, compra y descarga tus imágenes por evento.",
  applicationName: "Nómada Race",
  alternates: { canonical: "/" },
  keywords: ["fotos de carreras", "fotos running Chile", "fotos por dorsal", "fotografía deportiva", "Nómada Race"],
  openGraph: { type: "website", locale: "es_CL", url: "https://nomadarace.cl", siteName: "Nómada Race", title: "Nómada Race | Fotos profesionales de carreras en Chile", description: "Encuentra y compra fotos profesionales de carreras en Chile." },
  twitter: { card: "summary_large_image", title: "Nómada Race | Fotos profesionales de carreras en Chile", description: "Encuentra fotos profesionales de carreras en Chile." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon", sizes: "48x48" }, { url: "/icon.png", type: "image/png", sizes: "144x144" }],
    shortcut: "/favicon.ico",
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
      <Script id="nomada-structured-data" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "Organization", "@id": "https://nomadarace.cl/#organization", name: "Nómada Race", alternateName: "Nomada Race", url: "https://nomadarace.cl", logo: { "@type": "ImageObject", url: "https://nomadarace.cl/icon.png", width: 144, height: 144 }, email: "contacto@nomadafilms.cl", areaServed: { "@type": "Country", name: "Chile" }, sameAs: ["https://www.instagram.com/nomadarace.cl/", "https://www.facebook.com/nomadarace.cl"], description: "Nómada Race es una plataforma chilena para encontrar y comprar fotos profesionales de carreras." }, { "@type": "WebSite", "@id": "https://nomadarace.cl/#website", name: "Nómada Race", alternateName: "Nomada Race", url: "https://nomadarace.cl", inLanguage: "es-CL", publisher: { "@id": "https://nomadarace.cl/#organization" } }] })}</Script>
    </head>
    <body>{children}<Analytics /><SpeedInsights /></body>
  </html>;
}
