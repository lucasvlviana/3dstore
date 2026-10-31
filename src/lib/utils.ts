import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price);
}

function waUrl(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/** Link de compra de um produto específico (usado no botão "Comprar pelo WhatsApp") */
export function productWhatsAppLink(number: string, productName: string, size: string, price: string) {
  return waUrl(
    number,
    `Olá! Tenho interesse no *${productName}* tamanho *${size}* (${price}). Poderia me ajudar com a compra?`
  );
}

/** Link de contato geral (header, rodapé, botão flutuante) */
export function generalWhatsAppLink(number: string) {
  return waUrl(number, "Olá! Vim pelo site e gostaria de mais informações sobre os action figures.");
}

export function stars(rating: number) {
  return Array.from({ length: 5 }, (_, i) => i < Math.round(rating));
}

/** Normaliza texto p/ busca: sem acento, sem hífen, minúsculo ("Mulher-Maravilha" == "mulher maravilha") */
export function normalizeText(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}
