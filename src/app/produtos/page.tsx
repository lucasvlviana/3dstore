import type { Metadata } from "next";
import { products } from "@/data/products";
import { siteConfig } from "@/lib/config";
import ProductCatalog from "@/components/product/ProductCatalog";

export const metadata: Metadata = {
  title: "Produtos",
  description: "Catálogo completo de action figures Marvel, DC e Anime. Escolha o tamanho e compre pelo WhatsApp.",
  alternates: { canonical: "/produtos" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.siteName,
    url: "/produtos",
    title: `Produtos | ${siteConfig.siteName}`,
    description: "Catálogo completo de action figures Marvel, DC e Anime.",
  },
};

export default function ProdutosPage() {
  return (
    <>
      <div className="bg-gray-950 pt-28 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-brand-green font-display font-600 text-xs tracking-widest uppercase mb-4">
            Catálogo Completo
          </span>
          <h1 className="font-display font-800 text-4xl md:text-5xl text-white mb-4">Todos os Produtos</h1>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            {products.length} action figures premium esperando por você
          </p>
        </div>
      </div>
      <ProductCatalog products={products} />
    </>
  );
}
