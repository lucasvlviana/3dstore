import { SiteConfig } from "@/types";

const onlyDigits = (v: string) => v.replace(/\D/g, "");

/** URL pública do site (SEO, sitemap, Open Graph). Defina NEXT_PUBLIC_SITE_URL na Vercel. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://figureshop.com.br").replace(/\/$/, "");

// ================================================================
// CONFIGURAÇÃO PRINCIPAL
// WhatsApp e Instagram vêm de variáveis de ambiente (.env.local / Vercel)
// ================================================================
export const siteConfig: SiteConfig = {
  siteName: "FigureShop",
  whatsapp: onlyDigits(process.env.NEXT_PUBLIC_WHATSAPP ?? "5531999999999"),
  instagram: (process.env.NEXT_PUBLIC_INSTAGRAM ?? "figureshopbr").replace("@", ""),
  slogan: "Colecionáveis Premium para Verdadeiros Fãs",
};

// ================================================================
// ⚠️ VALORES DE EXEMPLO — ajuste para a realidade da sua loja.
// Promessas de frete, desconto e parcelamento têm valor legal (CDC):
// só publique o que você realmente cumpre. Use 0 para ocultar.
// ================================================================
export const storeInfo = {
  freeShippingFrom: 299, // frete grátis acima de R$ (0 = ocultar)
  pixDiscountPercent: 5, // desconto no PIX em % (0 = ocultar)
  maxInstallments: 12, // parcelas máximas no cartão
  customers: "500+", // clientes atendidos
  rating: "4.9", // nota média exibida
  yearsExperience: 10, // anos de experiência
  sellerPhoto: "/images/vendedor.svg", // troque por /images/vendedor.jpg
  heroImage:
    "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=1600&q=80",
};

export const META = {
  title: `${siteConfig.siteName} | Action Figures Premium`,
  description:
    "Action figures premium de Marvel, DC e Anime. Qualidade de colecionador, envio para todo o Brasil e compra segura pelo WhatsApp.",
};
