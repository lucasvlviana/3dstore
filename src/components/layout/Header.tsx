"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { generalWhatsAppLink } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/produtos", label: "Produtos" },
  { href: "/#como-funciona", label: "Como Funciona" },
  { href: "/#depoimentos", label: "Depoimentos" },
];

// Header sempre sólido: antes ficava transparente com texto escuro sobre o hero escuro (ilegível).
export default function Header() {
  const [open, setOpen] = useState(false);
  const waLink = generalWhatsAppLink(siteConfig.whatsapp);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <div className="w-8 h-8 bg-brand-green rounded-xl flex items-center justify-center shadow-glow-sm group-hover:shadow-glow transition-shadow">
            <ShoppingBag size={16} className="text-white" />
          </div>
          <span className="font-display font-800 text-lg tracking-tight text-gray-900">{siteConfig.siteName}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7" aria-label="Principal">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-gray-600 hover:text-brand-green transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-brand-green text-white px-5 py-2.5 rounded-2xl font-display font-600 text-sm hover:bg-brand-dark transition-all shadow-glow-sm hover:shadow-glow"
        >
          <MessageCircle size={15} /> WhatsApp
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-3 -mr-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden bg-white border-t border-gray-100 transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="px-4 py-3 space-y-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3.5 rounded-xl text-gray-700 font-medium hover:bg-gray-50 hover:text-brand-green transition-all"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full mt-2 bg-brand-green text-white px-5 py-4 rounded-2xl font-display font-600 hover:bg-brand-dark transition-all"
          >
            <MessageCircle size={18} /> Fale no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
