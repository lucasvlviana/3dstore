"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Product } from "@/types";
import { normalizeText } from "@/lib/utils";
import ProductCard from "./ProductCard";

export default function ProductCatalog({ products }: { products: Product[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");

  const categories = useMemo(() => ["Todos", ...Array.from(new Set(products.map((p) => p.category)))], [products]);

  const filtered = useMemo(() => {
    const q = normalizeText(search);
    return products.filter((p) => {
      const matchCategory = category === "Todos" || p.category === category;
      const matchSearch = !q || normalizeText(`${p.name} ${p.shortDescription} ${p.category}`).includes(q);
      return matchCategory && matchSearch;
    });
  }, [products, search, category]);

  return (
    <div className="bg-gray-50 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden />
            <input
              type="search"
              aria-label="Buscar action figure"
              placeholder="Buscar action figure..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
            />
          </div>

          <div className="flex gap-2 flex-wrap" role="group" aria-label="Filtrar por categoria">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                aria-pressed={category === cat}
                className={`px-5 py-3 rounded-2xl font-display font-600 text-sm transition-all ${
                  category === cat
                    ? "bg-brand-green text-white shadow-glow-sm"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-brand-green hover:text-brand-green"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <p className="text-gray-500 text-sm mb-6" aria-live="polite">
          {filtered.length} produto{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
        </p>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4" aria-hidden>🔍</div>
            <h2 className="font-display font-700 text-gray-900 text-xl mb-2">Nenhum produto encontrado</h2>
            <p className="text-gray-500">Tente outro termo ou categoria.</p>
            <button
              onClick={() => { setSearch(""); setCategory("Todos"); }}
              className="mt-6 text-brand-green font-display font-600 text-sm hover:underline"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
