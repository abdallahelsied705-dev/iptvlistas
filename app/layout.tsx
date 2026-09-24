import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingWhatsApp } from "@/components/conversion/FloatingWhatsApp";
import { BackToTop } from "@/components/conversion/BackToTop";
import { FloatingTrial } from "@/components/conversion/FloatingTrial";
import { siteConfig } from "@/config/site";
import { isPreview } from "@/lib/seo/environment";
import { RevealObserver } from "@/components/ui/RevealObserver";
import "@/styles/globals.css";

// Fontes alojadas localmente: sem pedidos a Google Fonts, build reproduzível em qualquer ambiente.
const display = localFont({
  src: "./fonts/bricolage-grotesque.woff2",
  variable: "--font-display",
  weight: "200 800",
  display: "swap",
  fallback: ["Arial", "system-ui", "sans-serif"],
});
const body = localFont({
  src: "./fonts/instrument-sans.woff2",
  variable: "--font-body",
  weight: "400 700",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Arial", "sans-serif"],
});

export const viewport: Viewport = {
  themeColor: "#0A1628",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.defaultTitle, template: "%s | IPTV Listas" },
  description: siteConfig.defaultDescription,
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
  robots: {
    index: !isPreview,
    follow: !isPreview,
    googleBot: { index: !isPreview, follow: !isPreview, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: [{ url: "/images/site/og-iptvlistas.jpg", width: 1200, height: 630, alt: "IPTV Listas — IPTV em Portugal na televisão, tablet e telemóvel" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: ["/images/site/og-iptvlistas.jpg"],
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        {/* Ativa as animações de entrada só quando há JavaScript; sem JS o conteúdo fica sempre visível. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js');setTimeout(function(){if(!document.documentElement.dataset.reveal){document.querySelectorAll('[data-reveal]').forEach(function(e){e.classList.add('is-in')})}},4000)" }} />
      </head>
      <body>
        <SiteHeader />
        {children}
        <FloatingTrial />
        <FloatingWhatsApp />
        <BackToTop />
        <SiteFooter />
        <RevealObserver />
        {/* O script de analytics só existe no alojamento da Vercel; fora dela daria erro 404 na consola. */}
        {process.env.VERCEL === "1" ? <Analytics /> : null}
      </body>
    </html>
  );
}
