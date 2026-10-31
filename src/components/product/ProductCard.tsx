import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import Stars from "@/components/ui/Stars";
import Badge from "@/components/ui/Badge";

// Card é um <Link> real: rastreável pelo Google, abre em nova aba e funciona sem JavaScript.
export default function ProductCard({ product }: { product: Product }) {
  const minPrice = Math.min(...product.sizes.map((s) => s.price));
  const cover = product.images[0];

  return (
    <Link
      href={`/produtos/${product.slug}`}
      className="group block bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={cover.url}
          alt={cover.alt}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <div className="absolute top-3 left-3">
            <Badge label={product.badge} />
          </div>
        )}
        <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-gray-600 text-xs px-2.5 py-1 rounded-full font-medium">
          {product.category}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-display font-700 text-gray-900 text-base mb-1 group-hover:text-brand-green transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm leading-snug mb-3 line-clamp-2">{product.shortDescription}</p>
        <Stars rating={product.rating} count={product.reviewCount} size="sm" />
        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-gray-400 text-xs">A partir de</span>
            <p className="font-display font-800 text-gray-900 text-lg leading-tight">{formatPrice(minPrice)}</p>
          </div>
          <span className="w-10 h-10 bg-brand-bg rounded-xl flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors duration-300" aria-hidden>
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
