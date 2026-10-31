import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Política de Privacidade",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display font-800 text-4xl text-gray-900 mb-3">Política de Privacidade</h1>
        <p className="font-body text-gray-400 text-sm mb-10">Modelo base — revise com um profissional para adequar à LGPD antes de publicar</p>
        <div className="space-y-8 font-body">
          {[
            { title: "1. Informações Coletadas", text: "Coletamos apenas as informações necessárias para processar seu pedido: nome, endereço de entrega, telefone (WhatsApp) e forma de pagamento escolhida. Nenhuma informação financeira sensível é armazenada." },
            { title: "2. Uso das Informações", text: "As informações são usadas exclusivamente para processar e entregar seu pedido e comunicar atualizações via WhatsApp." },
            { title: "3. Compartilhamento de Dados", text: "Seus dados nunca são vendidos. Compartilhamos apenas com transportadoras necessárias para entrega do pedido." },
            { title: "4. Segurança", text: "Adotamos medidas de segurança para proteger suas informações. Transações são realizadas via WhatsApp e meios de pagamento seguros." },
            { title: "5. Seus Direitos", text: "Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento via WhatsApp." },
            { title: "6. Contato", text: "Para dúvidas, entre em contato via WhatsApp ou Instagram." },
          ].map((s) => (
            <div key={s.title}>
              <h2 className="font-display font-700 text-xl text-gray-900 mb-3">{s.title}</h2>
              <p className="text-gray-600 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
