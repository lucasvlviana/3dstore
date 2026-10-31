import { reviews } from "@/data/reviews";
import Stars from "@/components/ui/Stars";
import { CheckCircle2 } from "lucide-react";
import { siteConfig, storeInfo } from "@/lib/config";
import { generalWhatsAppLink } from "@/lib/utils";

export default function ReviewsSection() {
  return (
    <section id="depoimentos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-brand-green font-display font-600 text-xs tracking-widest uppercase mb-4">
            Depoimentos
          </span>
          <h2 className="font-display font-800 text-4xl md:text-5xl text-gray-900 leading-tight">O que nossos clientes dizem</h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex text-yellow-400 text-xl" aria-hidden>★★★★★</div>
            <span className="text-gray-500">Nota {storeInfo.rating} de 5</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure
              key={r.id}
              className="bg-white rounded-3xl p-7 shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col"
            >
              <figcaption className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-brand-bg flex items-center justify-center font-display font-800 text-brand-green text-sm shrink-0">
                  {r.initials}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="font-display font-700 text-gray-900 text-sm truncate">{r.author}</p>
                    {r.verified && <CheckCircle2 size={13} className="text-brand-green shrink-0" aria-label="Compra verificada" />}
                  </div>
                  <p className="text-gray-400 text-xs">{r.product}</p>
                </div>
              </figcaption>

              <Stars rating={r.rating} size="sm" />

              <blockquote className="text-gray-600 text-sm leading-relaxed mt-4 flex-1">
                {"\u201C"}{r.comment}{"\u201D"}
              </blockquote>

              <p className="text-gray-400 text-xs mt-5">{r.date}</p>
            </figure>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-gray-500 mb-4">Quer fazer parte da nossa família de colecionadores?</p>
          <a
            href={generalWhatsAppLink(siteConfig.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-green text-white px-8 py-4 rounded-2xl font-display font-600 hover:bg-brand-dark transition-all shadow-glow-sm hover:shadow-glow hover:scale-[1.02]"
          >
            💬 Fale com a gente
          </a>
        </div>
      </div>
    </section>
  );
}
