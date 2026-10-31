import Link from "next/link";
import { getFeatured } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function FeaturedSection() {
  const featured = getFeatured();

  return (
    <section id="destaques" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-brand-green font-display font-600 text-xs tracking-widest uppercase mb-4">
              Destaques
            </span>
            <h2 className="font-display font-800 text-4xl md:text-5xl text-gray-900 leading-tight">Mais Vendidos</h2>
          </div>
          <Link href="/produtos" className="inline-flex items-center gap-2 text-brand-green font-display font-600 text-sm hover:gap-3 transition-all shrink-0">
            Ver todos os produtos →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
