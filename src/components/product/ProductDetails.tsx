"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, ChevronLeft, ChevronRight, ShieldCheck, Truck, BadgeCheck } from "lucide-react";
import { Product, ProductSize } from "@/types";
import { formatPrice, productWhatsAppLink } from "@/lib/utils";
import { siteConfig, storeInfo } from "@/lib/config";
import Stars from "@/components/ui/Stars";
import Badge from "@/components/ui/Badge";

export default function ProductDetails({ product }: { product: Product }) {
  // Seleciona o tamanho do meio por padrão (ou o primeiro, se houver só um)
  const [size, setSize] = useState<ProductSize>((product.sizes[1] ?? product.sizes[0]).size);
  const [index, setIndex] = useState(0);

  const current = product.sizes.find((s) => s.size === size) ?? product.sizes[0];
  const total = product.images.length;
  const image = product.images[index];
  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);

  const waLink = productWhatsAppLink(siteConfig.whatsapp, product.name, current.size, formatPrice(current.price));
  const pixPrice = current.price * (1 - storeInfo.pixDiscountPercent / 100);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
      {/* ── Galeria ── */}
      <div>
        <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100 shadow-card">
          <Image
            key={image.url}
            src={image.url}
            alt={image.alt}
            fill
            priority={index === 0}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover animate-fade-in"
          />
          {product.badge && (
            <div className="absolute top-4 left-4">
              <Badge label={product.badge} />
            </div>
          )}
          {total > 1 && (
            <>
              <button
                onClick={() => go(-1)}
                aria-label="Imagem anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-card hover:bg-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Próxima imagem"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-card hover:bg-white transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {total > 1 && (
          <div className="flex gap-3 mt-4">
            {product.images.map((img, i) => (
              <button
                key={img.url}
                onClick={() => setIndex(i)}
                aria-label={`Ver imagem ${i + 1}`}
                aria-current={i === index}
                className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all ${
                  i === index ? "border-brand-green shadow-glow-sm" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={img.url} alt="" fill sizes="80px" className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Informações ── */}
      <div className="flex flex-col">
        <span className="text-brand-green text-xs font-600 tracking-widest uppercase mb-2">{product.category}</span>
        <h1 className="font-display font-800 text-3xl md:text-4xl text-gray-900 leading-tight mb-3">{product.name}</h1>
        <Stars rating={product.rating} count={product.reviewCount} />

        <p className="text-gray-600 leading-relaxed mt-5 mb-7">{product.description}</p>

        <fieldset className="mb-6">
          <legend className="font-display font-700 text-gray-900 text-sm mb-3">Selecione o tamanho</legend>
          <div className="grid grid-cols-3 gap-3">
            {product.sizes.map((s) => {
              const active = s.size === size;
              return (
                <button
                  key={s.size}
                  onClick={() => setSize(s.size)}
                  aria-pressed={active}
                  className={`flex flex-col items-center gap-0.5 px-3 py-3.5 rounded-2xl border-2 transition-all duration-200 ${
                    active ? "border-brand-green bg-brand-bg" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <span className={`font-display font-700 text-xs tracking-wide ${active ? "text-brand-green" : "text-gray-500"}`}>
                    {s.size}
                  </span>
                  <span className="font-display font-800 text-base text-gray-900">{formatPrice(s.price)}</span>
                </button>
              );
            })}
          </div>
        </fieldset>

        {/* Preço dinâmico: atualiza ao trocar o tamanho */}
        <div className="p-5 bg-gray-50 rounded-2xl mb-6" aria-live="polite">
          <span className="text-gray-400 text-xs">Tamanho {current.size}</span>
          <p key={current.size} className="font-display font-800 text-4xl text-gray-900 animate-fade-in">
            {formatPrice(current.price)}
          </p>
          <p className="text-gray-500 text-sm mt-1">
            ou em até {storeInfo.maxInstallments}x no cartão
            {storeInfo.pixDiscountPercent > 0 && (
              <>
                {" · "}
                <span className="text-brand-dark font-600">
                  {formatPrice(pixPrice)} no PIX ({storeInfo.pixDiscountPercent}% OFF)
                </span>
              </>
            )}
          </p>
        </div>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 w-full bg-brand-green text-white py-[18px] rounded-2xl font-display font-700 text-lg hover:bg-brand-dark transition-all shadow-glow hover:scale-[1.01] mb-5"
        >
          <MessageCircle size={22} />
          Comprar pelo WhatsApp
        </a>

        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-gray-500 text-xs">
          <li className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-brand-green" /> Compra segura</li>
          <li className="flex items-center gap-1.5"><Truck size={14} className="text-brand-green" /> Envio para todo o Brasil</li>
          <li className="flex items-center gap-1.5"><BadgeCheck size={14} className="text-brand-green" /> Qualidade verificada</li>
        </ul>
      </div>
    </div>
  );
}
