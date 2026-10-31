"use client";
import { useState, useEffect } from "react";
import { Product, ProductSize } from "@/types";
import { formatPrice, productWhatsAppLink } from "@/lib/utils";
import { siteConfig } from "@/lib/config";
import Stars from "@/components/ui/Stars";
import Badge from "@/components/ui/Badge";
import { X, MessageCircle, ChevronLeft, ChevronRight, ShieldCheck, Truck, RotateCcw } from "lucide-react";

interface Props {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: Props) {
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);
  const [imgIndex, setImgIndex] = useState(0);

  // Reset state when product changes
  useEffect(() => {
    if (product) {
      setImgIndex(0);
      setSelectedSize(null);
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [product]);

  // ESC key close
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  if (!product) return null;

  const currentSize = product.sizes.find((s) => s.size === selectedSize) ?? product.sizes[1] ?? product.sizes[0];
  const waLink = productWhatsAppLink(
    siteConfig.whatsapp,
    product.name,
    currentSize.size,
    formatPrice(currentSize.price)
  );

  const prevImg = () => setImgIndex((i) => (i - 1 + product.images.length) % product.images.length);
  const nextImg = () => setImgIndex((i) => (i + 1) % product.images.length);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gray-950/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative w-full sm:max-w-4xl max-h-[95dvh] sm:max-h-[90vh] bg-white rounded-t-[2rem] sm:rounded-3xl overflow-hidden shadow-card-lg animate-slide-up flex flex-col">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors"
          aria-label="Fechar"
        >
          <X size={18} />
        </button>

        <div className="overflow-y-auto flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {/* ── Image gallery ── */}
            <div className="relative bg-gray-100 aspect-square sm:aspect-auto sm:min-h-[500px]">
              <img
                key={imgIndex}
                src={product.images[imgIndex].url}
                alt={product.images[imgIndex].alt}
                className="w-full h-full object-cover animate-fade-in"
              />
              {product.images.length > 1 && (
                <>
                  <button onClick={prevImg} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-card hover:bg-white transition-colors">
                    <ChevronLeft size={18} />
                  </button>
                  <button onClick={nextImg} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-card hover:bg-white transition-colors">
                    <ChevronRight size={18} />
                  </button>
                  {/* Dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {product.images.map((_, i) => (
                      <button key={i} onClick={() => setImgIndex(i)}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === imgIndex ? "bg-brand-green w-4" : "bg-white/60"}`}
                      />
                    ))}
                  </div>
                </>
              )}
              {/* Thumbnail strip */}
              {product.images.length > 1 && (
                <div className="absolute bottom-0 left-0 right-0 p-3 flex gap-2 justify-center">
                  {product.images.map((img, i) => (
                    <button key={i} onClick={() => setImgIndex(i)}
                      className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-all duration-200 shrink-0 ${i === imgIndex ? "border-brand-green scale-105 shadow-glow-sm" : "border-transparent opacity-60 hover:opacity-90"}`}>
                      <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
              {product.badge && (
                <div className="absolute top-3 left-3">
                  <Badge label={product.badge} />
                </div>
              )}
            </div>

            {/* ── Product Info ── */}
            <div className="p-6 sm:p-8 flex flex-col">
              <span className="font-body text-brand-green text-xs font-semibold tracking-widest uppercase mb-2">
                {product.category}
              </span>
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-gray-900 leading-tight mb-3">
                {product.name}
              </h2>
              <Stars rating={product.rating} count={product.reviewCount} />

              <p className="font-body text-gray-600 text-sm leading-relaxed mt-4 mb-6">
                {product.description}
              </p>

              {/* Size selector */}
              <div className="mb-6">
                <p className="font-display font-700 text-gray-900 text-sm mb-3">
                  Selecione o Tamanho
                </p>
                <div className="flex gap-3 flex-wrap">
                  {product.sizes.map((s) => (
                    <button
                      key={s.size}
                      onClick={() => setSelectedSize(s.size)}
                      className={`flex-1 min-w-[90px] flex flex-col items-center gap-0.5 px-4 py-3 rounded-2xl border-2 transition-all duration-200 font-body text-sm ${
                        selectedSize === s.size
                          ? "border-brand-green bg-brand-bg text-brand-green"
                          : "border-gray-200 text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      <span className="font-display font-700 text-xs tracking-wide">{s.size}</span>
                      <span className={`font-display font-800 text-base ${selectedSize === s.size ? "text-brand-green" : "text-gray-900"}`}>
                        {formatPrice(s.price)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic price display */}
              <div className="flex items-end gap-2 mb-6 p-4 bg-gray-50 rounded-2xl">
                <div>
                  <span className="font-body text-gray-400 text-xs">Total — tamanho {currentSize.size}</span>
                  <p className="font-display font-800 text-3xl text-gray-900">{formatPrice(currentSize.price)}</p>
                </div>
                <span className="mb-1 font-body text-gray-400 text-sm">ou em até 12x</span>
              </div>

              {/* Buy button */}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full bg-brand-green text-white py-4 rounded-2xl font-display font-700 text-base hover:bg-brand-dark transition-all duration-200 shadow-glow hover:shadow-glow hover:scale-[1.01] mb-4"
              >
                <MessageCircle size={20} />
                Comprar pelo WhatsApp
              </a>

              {/* Trust row */}
              <div className="flex flex-wrap gap-4 text-gray-400 text-xs font-body">
                <span className="flex items-center gap-1.5"><ShieldCheck size={13} className="text-brand-green" /> Compra segura</span>
                <span className="flex items-center gap-1.5"><Truck size={13} className="text-brand-green" /> Frete para todo Brasil</span>
                <span className="flex items-center gap-1.5"><RotateCcw size={13} className="text-brand-green" /> Garantia de qualidade</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
