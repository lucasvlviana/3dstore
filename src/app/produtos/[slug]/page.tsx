import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getBySlug } from "@/data/products";
import { siteConfig, siteUrl } from "@/lib/config";
import ProductDetails from "@/components/product/ProductDetails";
import ProductCard from "@/components/product/ProductCard";

type Props = { params: { slug: string } };

// Gera todas as páginas de produto em build (rápidas e ótimas para SEO)
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getBySlug(params.slug);
  if (!product) return {};

  const url = `/produtos/${product.slug}`;
  return {
    title: product.name,
    description: product.shortDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: siteConfig.siteName,
      url,
      title: `${product.name} | ${siteConfig.siteName}`,
      description: product.shortDescription,
      images: [{ url: product.images[0].url, alt: product.images[0].alt }],
    },
  };
}

export default function ProductPage({ params }: Props) {
  const product = getBySlug(params.slug);
  if (!product) notFound();

  const prices = product.sizes.map((s) => s.price);
  const related = products
    .filter((p) => p.id !== product.id)
    .sort((a, b) => Number(b.category === product.category) - Number(a.category === product.category))
    .slice(0, 3);

  // Dados estruturados (Google Shopping / rich results).
  // Obs: de propósito SEM aggregateRating — as notas são de exemplo; avaliações falsas
  // em dados estruturados podem gerar penalidade do Google.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map((i) => i.url),
    category: product.category,
    url: `${siteUrl}/produtos/${product.slug}`,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "BRL",
      lowPrice: Math.min(...prices),
      highPrice: Math.max(...prices),
      offerCount: product.sizes.length,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white pt-24 md:pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Você está em" className="mb-6 text-sm text-gray-400 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-brand-green">Início</Link>
            <span aria-hidden>/</span>
            <Link href="/produtos" className="hover:text-brand-green">Produtos</Link>
            <span aria-hidden>/</span>
            <span className="text-gray-700" aria-current="page">{product.name}</span>
          </nav>

          <ProductDetails product={product} />
        </div>
      </div>

      <section className="bg-gray-50 py-20" aria-labelledby="relacionados">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="relacionados" className="font-display font-800 text-2xl md:text-3xl text-gray-900 mb-8">
            Você também pode gostar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
