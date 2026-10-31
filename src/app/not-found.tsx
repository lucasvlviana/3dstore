import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 pt-24 text-center">
      <div>
        <p className="font-display font-800 text-7xl text-brand-green mb-4">404</p>
        <h1 className="font-display font-700 text-2xl text-gray-900 mb-2">Página não encontrada</h1>
        <p className="text-gray-500 mb-8">O link pode estar errado ou o produto não está mais disponível.</p>
        <Link
          href="/produtos"
          className="inline-flex bg-brand-green text-white px-8 py-4 rounded-2xl font-display font-600 hover:bg-brand-dark transition-all shadow-glow-sm"
        >
          Ver produtos
        </Link>
      </div>
    </div>
  );
}
