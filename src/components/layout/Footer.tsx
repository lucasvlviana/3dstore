import Link from "next/link";
import { MessageCircle, Instagram, Heart, ShoppingBag } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { generalWhatsAppLink } from "@/lib/utils";

const footerLinks = [
  { href: "/", label: "Início" },
  { href: "/produtos", label: "Produtos" },
  { href: "/#como-funciona", label: "Como Funciona" },
  { href: "/#depoimentos", label: "Depoimentos" },
  { href: "/politica-de-privacidade", label: "Política de Privacidade" },
];

export default function Footer() {
  const waLink = generalWhatsAppLink(siteConfig.whatsapp);

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-gray-800">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-brand-green rounded-xl flex items-center justify-center">
                <ShoppingBag size={16} className="text-white" />
              </div>
              <span className="font-display font-800 text-lg tracking-tight">{siteConfig.siteName}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Os melhores action figures e colecionáveis com qualidade premium. Sua satisfação é nossa missão.
            </p>
          </div>

          <nav aria-label="Rodapé">
            <h3 className="font-display font-700 text-xs uppercase tracking-widest text-gray-500 mb-5">Navegação</h3>
            <ul className="space-y-3">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-400 hover:text-brand-green transition-colors text-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display font-700 text-xs uppercase tracking-widest text-gray-500 mb-5">Contato</h3>
            <div className="space-y-4">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <div className="w-11 h-11 bg-gray-800 group-hover:bg-brand-green rounded-xl flex items-center justify-center transition-colors">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">WhatsApp</p>
                  <p className="text-gray-500 text-xs">Clique para conversar</p>
                </div>
              </a>
              <a
                href={`https://instagram.com/${siteConfig.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-11 h-11 bg-gray-800 group-hover:bg-pink-500 rounded-xl flex items-center justify-center transition-colors">
                  <Instagram size={18} />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Instagram</p>
                  <p className="text-gray-500 text-xs">@{siteConfig.instagram}</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {siteConfig.siteName}. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-1">
            Feito com <Heart size={12} className="text-red-500" /> no Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
