import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnalyticsPageview } from "@/components/analytics-pageview";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nomadarace.cl"),
  title: { default: "Nómada Race | Fotos profesionales de carreras en Chile", template: "%s | Nómada Race" },
  description: "Nómada Race es una plataforma chilena de fotos profesionales de carreras. Encuentra, compra y descarga tus imágenes por evento.",
  applicationName: "Nómada Race",
  alternates: { canonical: "/" },
  keywords: ["fotos de carreras", "fotos running Chile", "fotos con selfie", "fotografía deportiva", "fotógrafos de carreras", "fotos running Santiago", "calendario de carreras Chile", "fotos Santiago 10K", "fotos Rock n Roll Santiago", "Nómada Race"],
  category: "Fotografía deportiva y carreras",
  creator: "Nómada Race",
  publisher: "Nómada Race",
  openGraph: { type: "website", locale: "es_CL", url: "https://www.nomadarace.cl", siteName: "Nómada Race", title: "Nómada Race | Fotos profesionales de carreras en Chile", description: "Encuentra y compra fotos profesionales de carreras en Chile.", images: [{ url: "/icon.png", width: 144, height: 144, alt: "Nómada Race" }] },
  twitter: { card: "summary_large_image", title: "Nómada Race | Fotos profesionales de carreras en Chile", description: "Encuentra fotos profesionales de carreras en Chile." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon", sizes: "48x48" }, { url: "/icon.png", type: "image/png", sizes: "144x144" }],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" suppressHydrationWarning>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-GPMLF3FKXN" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-GPMLF3FKXN', { send_page_view: false });`}
      </Script>
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
      <Script id="nomada-structured-data" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "Organization", "@id": "https://www.nomadarace.cl/#organization", name: "Nómada Race", alternateName: "Nomada Race", url: "https://www.nomadarace.cl", logo: { "@type": "ImageObject", url: "https://www.nomadarace.cl/icon.png", width: 144, height: 144 }, email: "contacto@nomadafilms.cl", areaServed: { "@type": "Country", name: "Chile" }, sameAs: ["https://www.instagram.com/nomadarace.cl/", "https://www.facebook.com/nomadarace.cl"], description: "Nómada Race es una plataforma chilena para encontrar y comprar fotos profesionales de carreras." }, { "@type": "ProfessionalService", "@id": "https://www.nomadarace.cl/#service", name: "Nómada Race", url: "https://www.nomadarace.cl", image: "https://www.nomadarace.cl/icon.png", description: "Fotografía deportiva y galerías de fotos profesionales para carreras en Chile.", areaServed: { "@type": "Country", name: "Chile" }, serviceType: ["Fotografía deportiva", "Fotos profesionales de carreras", "Galerías digitales para corredores"], provider: { "@id": "https://www.nomadarace.cl/#organization" } }, { "@type": "WebSite", "@id": "https://www.nomadarace.cl/#website", name: "Nómada Race", alternateName: "Nomada Race", url: "https://www.nomadarace.cl", inLanguage: "es-CL", publisher: { "@id": "https://www.nomadarace.cl/#organization" } }] })}</Script>
    </head>
    <body>{children}<AnalyticsPageview /><Analytics /><SpeedInsights /></body>
  </html>;
}
