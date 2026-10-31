import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { storeInfo } from "@/lib/config";

const highlights = [
  `${storeInfo.customers} clientes atendidos em todo o Brasil`,
  "Produtos selecionados a dedo, com qualidade verificada",
  "Atendimento rápido e personalizado pelo WhatsApp",
  "Embalagem reforçada para chegar perfeito até você",
];

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0 shadow-card-lg bg-brand-bg">
              {/* Troque public/images/vendedor.svg pela sua foto (e ajuste storeInfo.sellerPhoto) */}
              <Image
                src={storeInfo.sellerPhoto}
                alt="Foto do vendedor"
                fill
                sizes="(min-width: 1024px) 384px, 90vw"
                unoptimized={storeInfo.sellerPhoto.endsWith(".svg")}
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-4 right-2 md:-right-6 bg-white rounded-2xl shadow-card-lg p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-brand-bg rounded-xl flex items-center justify-center text-xl" aria-hidden>⭐</div>
                <div>
                  <p className="font-display font-800 text-xl text-gray-900 leading-none">{storeInfo.rating} / 5</p>
                  <p className="text-gray-400 text-xs mt-0.5">{storeInfo.customers} clientes</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -left-8 w-32 h-32 bg-brand-bg rounded-full -z-10" />
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block text-brand-green font-display font-600 text-xs tracking-widest uppercase mb-4">
              Sobre o Vendedor
            </span>
            <h2 className="font-display font-800 text-4xl md:text-5xl text-gray-900 leading-tight mb-6">
              Paixão por colecionáveis há mais de <span className="text-gradient">{storeInfo.yearsExperience} anos</span>
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              Sou colecionador desde criança e transformei minha paixão em negócio. Aqui você encontra action figures selecionadas a dedo, com qualidade e procedência verificadas.
            </p>
            <p className="text-base text-gray-500 leading-relaxed mb-8">
              Meu compromisso é entregar não apenas um produto, mas uma experiência completa, seja para você ou para presentear quem você ama. Cada peça é inspecionada antes de sair daqui.
            </p>

            <ul className="space-y-3.5">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-brand-green mt-0.5 shrink-0" />
                  <span className="text-gray-700 text-sm leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
