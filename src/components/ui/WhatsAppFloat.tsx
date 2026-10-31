import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { generalWhatsAppLink } from "@/lib/utils";

export default function WhatsAppFloat() {
  return (
    <a
      href={generalWhatsAppLink(siteConfig.whatsapp)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-brand-green text-white px-4 py-3.5 rounded-full shadow-glow hover:scale-105 transition-all duration-300 group"
    >
      <MessageCircle size={24} className="shrink-0" />
      <span className="font-display font-600 text-sm max-w-0 overflow-hidden group-hover:max-w-xs group-hover:pr-1 transition-all duration-500 whitespace-nowrap">
        Fale conosco
      </span>
    </a>
  );
}
