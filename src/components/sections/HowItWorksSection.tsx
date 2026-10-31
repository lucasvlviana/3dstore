const steps = [
  { num: "01", emoji: "🔍", title: "Escolha o Produto", desc: "Navegue pelo catálogo e encontre a action figure dos seus sonhos." },
  { num: "02", emoji: "📏", title: "Selecione o Tamanho", desc: "Disponível em Pequeno, Médio e Grande. O preço atualiza na hora." },
  { num: "03", emoji: "💚", title: "Clique em Comprar", desc: "O botão abre o WhatsApp já com sua escolha preenchida." },
  { num: "04", emoji: "✅", title: "Finalize pelo WhatsApp", desc: "Confirme endereço, pagamento e aguarde seu pedido chegar!" },
];

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-green font-display font-semibold text-xs tracking-widest uppercase mb-4">
            Processo Simples
          </span>
          <h2 className="font-display font-800 text-4xl md:text-5xl text-gray-900 leading-tight">
            Como funciona a compra?
          </h2>
          <p className="mt-4 font-body text-gray-500 text-lg max-w-lg mx-auto">
            Em apenas 4 passos simples você garante sua action figure favorita.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Connector line desktop */}
          <div className="hidden lg:block absolute top-12 left-[13%] right-[13%] h-px bg-gradient-to-r from-transparent via-brand-green/40 to-transparent" />

          {steps.map((s) => (
            <div key={s.num}
              className="relative bg-white rounded-3xl p-7 shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100/80 group">
              <div className="absolute -top-3 left-6">
                <span className="inline-block bg-brand-green text-white font-display font-bold text-[10px] px-2.5 py-1 rounded-full tracking-widest">
                  {s.num}
                </span>
              </div>
              <div className="text-3xl mb-4 mt-1">{s.emoji}</div>
              <h3 className="font-display font-700 text-base text-gray-900 mb-2">{s.title}</h3>
              <p className="font-body text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
