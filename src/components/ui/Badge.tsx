import { cn } from "@/lib/utils";

const map: Record<string, string> = {
  "Mais Vendido": "bg-gray-900 text-white",
  "Novo":         "bg-brand-green text-white",
  "Premium":      "bg-amber-500 text-white",
  "Promoção":     "bg-red-500 text-white",
};

export default function Badge({ label }: { label: string }) {
  return (
    <span className={cn("inline-block px-2.5 py-0.5 rounded-full text-xs font-display font-bold uppercase tracking-wide", map[label] ?? "bg-gray-700 text-white")}>
      {label}
    </span>
  );
}
