import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Star, Truck } from "lucide-react";
import { storeInfo } from "@/lib/config";
import { formatPrice } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
      <div className="absolute inset-0">
        <Image src={storeInfo.heroImage} alt="" fill priority sizes="100vw" className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/95 to-gray-950/50" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-green/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-green/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-2xl">
          {storeInfo.freeShippingFrom > 0 && (
            <div className="inline-flex items-center gap-2 border border-brand-green/30 bg-brand-green/10 rounded-full px-4 py-1.5 mb-8 animate-fade-up">
              <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
              <span className="text-brand-green font-display font-600 text-xs tracking-widest uppercase">
                Frete grátis acima de {formatPrice(storeInfo.freeShippingFrom)}
              </span>
            </div>
          )}

          <h1 className="font-display font-800 text-5xl md:text-6xl lg:text-7xl text-white leading-[1.04] tracking-tight mb-6 animate-fade-up delay-1">
            Sua coleção
            <span className="block text-gradient">começa aqui.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-lg animate-fade-up delay-2">
            Action figures premium de Marvel, DC e Anime. Qualidade de colecionador, preço justo e compra segura pelo WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14 animate-fade-up delay-3">
            <Link
              href="/produtos"
              className="inline-flex items-center justify-center gap-2 bg-brand-green text-white px-8 py-4 rounded-2xl font-display font-600 text-base hover:bg-brand-dark transition-all shadow-glow hover:scale-[1.02]"
            >
              Ver Produtos <ArrowRight size={18} />
            </Link>
            <Link
              href="/#como-funciona"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-2xl font-display font-600 text-base hover:bg-white/20 transition-all"
            >
              Como Funciona
            </Link>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-3 animate-fade-up delay-4">
            {[
              { icon: <ShieldCheck size={15} />, text: "Compra segura" },
              { icon: <Star size={15} />, text: `${storeInfo.rating}/5 de avaliação` },
              { icon: <Truck size={15} />, text: "Envio para todo o Brasil" },
            ].map((item) => (
              <li key={item.text} className="flex items-center gap-2 text-gray-400">
                <span className="text-brand-green">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
