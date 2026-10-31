# FigureShop — Loja de Action Figures

Site de vendas com compra finalizada pelo WhatsApp. **Next.js 14 (App Router) · React · TypeScript · Tailwind CSS.**

## Rodar localmente

```bash
npm install
cp .env.example .env.local     # depois edite com seus dados
npm run dev                    # http://localhost:3000
```

Antes de publicar, rode também: `npm run typecheck` e `npm run build` (o build roda o lint).

## O que você precisa trocar antes de publicar

| O quê | Onde |
|---|---|
| Seu WhatsApp (55 + DDD + número), Instagram e URL do site | `.env.local` (e na Vercel) |
| Nome da loja | `src/lib/config.ts` → `siteConfig.siteName` |
| Frete grátis, desconto PIX, parcelas, nº de clientes, nota | `src/lib/config.ts` → `storeInfo` ⚠️ são valores de **exemplo** |
| Foto do vendedor | coloque `public/images/vendedor.jpg` e ajuste `storeInfo.sellerPhoto` |
| Produtos, preços e fotos | `src/data/products.ts` |
| Depoimentos | `src/data/reviews.ts` ⚠️ são **exemplos**: use avaliações reais |
| Política de privacidade | `src/app/politica-de-privacidade/page.tsx` (modelo base, revise com profissional/LGPD) |

**Imagens:** as URLs do Unsplash são provisórias e podem não corresponder aos personagens. Para produção, coloque suas fotos em `public/produtos/` (ex.: `/produtos/spider-man-1.jpg`) ou use Cloudinary/Supabase (adicione o domínio em `next.config.mjs` → `images.remotePatterns`).

## Estrutura

```
src/
├── app/
│   ├── layout.tsx                  # fontes, metadata global, header/footer
│   ├── page.tsx                    # Home
│   ├── produtos/page.tsx           # Catálogo (busca + filtro de categoria)
│   ├── produtos/[slug]/page.tsx    # Página de cada produto (URL amigável + JSON-LD)
│   ├── politica-de-privacidade/
│   ├── sitemap.ts · robots.ts · opengraph-image.tsx · icon.svg · not-found.tsx
├── components/
│   ├── layout/    Header, Footer
│   ├── sections/  Hero, Featured, About, HowItWorks, Payment, Reviews
│   ├── product/   ProductCard, ProductCatalog, ProductDetails
│   └── ui/        Badge, Stars, WhatsAppFloat
├── data/          products.ts, reviews.ts      ← conteúdo
├── lib/           config.ts, utils.ts          ← configuração e helpers
└── types/         index.ts
```

## Deploy na Vercel

1. Suba o código para um repositório no GitHub (o `.gitignore` já protege `node_modules`, `.next` e `.env*`).
2. Em [vercel.com/new](https://vercel.com/new) importe o repositório (o Next.js é detectado sozinho).
3. Em **Settings → Environment Variables** cadastre `NEXT_PUBLIC_WHATSAPP`, `NEXT_PUBLIC_INSTAGRAM` e `NEXT_PUBLIC_SITE_URL`.
4. Clique em **Deploy**. Domínio próprio: **Settings → Domains**.
5. Depois de publicar, envie `https://seudominio.com.br/sitemap.xml` ao Google Search Console.

## Preparado para crescer

- **Carrinho:** tipo `CartItem` já existe em `types/index.ts`.
- **Estoque:** campo opcional `stock` em `SizePrice`.
- **Backend/painel admin:** troque `data/products.ts` por chamadas a uma API/banco; `getBySlug` e `products` são os pontos de troca. Route Handlers do Next já servem para a API.
- **Pagamento online:** Mercado Pago/Stripe entram no lugar do link do WhatsApp em `ProductDetails.tsx`.
