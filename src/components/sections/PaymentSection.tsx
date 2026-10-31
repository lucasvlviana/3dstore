import { storeInfo } from "@/lib/config";

const methods = [
  {
    icon: "⚡",
    title: "PIX",
    desc: "Instantâneo, 24h por dia",
    badge: storeInfo.pixDiscountPercent > 0 ? `${storeInfo.pixDiscountPercent}% OFF` : null,
    color: "from-emerald-50 to-green-50 border-emerald-100",
  },
  {
    icon: "💳",
    title: "Cartão de Crédito",
    desc: "Visa, Mastercard, Elo e mais",
    badge: null,
    color: "from-blue-50 to-indigo-50 border-blue-100",
  },
  {
    icon: "📄",
    title: "Boleto Bancário",
    desc: "Compensação em até 3 dias úteis",
    badge: null,
    color: "from-orange-50 to-amber-50 border-orange-100",
  },
  {
    icon: "📅",
    title: "Parcelamento",
    desc: `Em até ${storeInfo.maxInstallments}x no cartão`,
    badge: `${storeInfo.maxInstallments}x`,
    color: "from-purple-50 to-violet-50 border-purple-100",
  },
];

export default function PaymentSection() {
  return (
    <section id="pagamento" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-brand-green font-display font-600 text-xs tracking-widest uppercase mb-4">
            Sem Complicação
          </span>
          <h2 className="font-display font-800 text-4xl md:text-5xl text-gray-900 leading-tight">Formas de pagamento</h2>
          <p className="mt-4 text-gray-500 text-lg max-w-md mx-auto">
            Pague do jeito que preferir. Tudo é combinado e confirmado pelo WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {methods.map((m) => (
            <div
              key={m.title}
              className={`relative bg-gradient-to-br ${m.color} border rounded-3xl p-7 hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300`}
            >
              {m.badge && (
                <span className="absolute top-4 right-4 bg-brand-green text-white text-[10px] font-display font-700 px-2 py-0.5 rounded-full">
                  {m.badge}
                </span>
              )}
              <div className="text-4xl mb-4" aria-hidden>{m.icon}</div>
              <h3 className="font-display font-700 text-gray-900 text-base mb-1">{m.title}</h3>
              <p className="text-gray-500 text-sm">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-gray-50 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
          <span className="text-4xl" aria-hidden>🔒</span>
          <div>
            <p className="font-display font-700 text-gray-900">Pagamento combinado com transparência</p>
            <p className="text-gray-500 text-sm mt-0.5">
              Você confirma produto, valor e forma de pagamento direto com o vendedor antes de qualquer cobrança.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
