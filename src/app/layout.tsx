import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { META, siteConfig, siteUrl } from "@/lib/config";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

// next/font: fontes self-hosted, sem bloquear a renderização (melhor performance/SEO)
const syne = Syne({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-syne", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: META.title, template: `%s | ${siteConfig.siteName}` },
  description: META.description,
  keywords: ["action figures", "colecionáveis", "marvel", "dc comics", "anime", "comprar action figure", "spider-man", "batman", "iron man", "goku"],
  authors: [{ name: siteConfig.siteName }],
  // Obs: canonical e openGraph.url são definidos por página (não aqui) para não herdar errado.
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.siteName,
    title: META.title,
    description: META.description,
  },
  twitter: { card: "summary_large_image", title: META.title, description: META.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#25D366",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${syne.variable} ${dmSans.variable} font-body`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
