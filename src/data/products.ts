import { Product } from "@/types";

// Futuramente: substituir por fetch à API / banco de dados
export const products: Product[] = [
  {
    id: "1",
    slug: "spider-man-deluxe",
    name: "Spider-Man Deluxe",
    shortDescription: "Action figure articulada com 32 pontos e teia real",
    description:
      "A action figure mais aguardada pelos fãs do Homem-Aranha! Com 32 pontos de articulação, acessórios exclusivos incluindo teia em fio de nylon e pintura detalhada à mão. Fabricada com plástico ABS de alta qualidade e fidelidade total ao personagem dos quadrinhos. Perfeita para exibição ou coleção.",
    category: "Marvel",
    rating: 4.9,
    reviewCount: 127,
    featured: true,
    badge: "Mais Vendido",
    images: [
      { url: "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=800&q=80", alt: "Spider-Man Deluxe" },
      { url: "https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?w=800&q=80", alt: "Spider-Man lateral" },
      { url: "https://images.unsplash.com/photo-1559535332-db9971090158?w=800&q=80", alt: "Spider-Man detalhe" },
    ],
    sizes: [
      { size: "Pequeno", price: 89.9 },
      { size: "Médio", price: 149.9 },
      { size: "Grande", price: 249.9 },
    ],
  },
  {
    id: "2",
    slug: "batman-dark-knight",
    name: "Batman Dark Knight",
    shortDescription: "O Cavaleiro das Trevas com capa de tecido real e base temática",
    description:
      "O Cavaleiro das Trevas em sua versão mais icônica! Esta action figure premium vem com capa de tecido real, múltiplos acessórios incluindo batarangs metálicos e cinto de utilidades removível. Base temática de Gotham City incluída. Perfeita para exibição na prateleira ou presente especial.",
    category: "DC Comics",
    rating: 4.8,
    reviewCount: 89,
    featured: true,
    badge: "Novo",
    images: [
      { url: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=800&q=80", alt: "Batman Dark Knight" },
      { url: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?w=800&q=80", alt: "Batman lateral" },
      { url: "https://images.unsplash.com/photo-1587502537745-84b86da1204f?w=800&q=80", alt: "Batman detalhe" },
    ],
    sizes: [
      { size: "Pequeno", price: 99.9 },
      { size: "Médio", price: 169.9 },
      { size: "Grande", price: 279.9 },
    ],
  },
  {
    id: "3",
    slug: "iron-man-mark-50",
    name: "Iron Man Mark L",
    shortDescription: "Armadura Mark 50 com LEDs reais no reator arc e propulsores",
    description:
      "A armadura mais avançada do Tony Stark em action figure! O Iron Man Mark L conta com LEDs funcionais a pilha no reator arc e nos propulsores, 30 pontos de articulação e pintura metálica premium. Inclui suporte de exibição acrílico. Uma obra de arte para qualquer fã da Marvel.",
    category: "Marvel",
    rating: 5.0,
    reviewCount: 203,
    featured: true,
    badge: "Premium",
    images: [
      { url: "https://images.unsplash.com/photo-1555375771-14b2a63968a9?w=800&q=80", alt: "Iron Man Mark L" },
      { url: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800&q=80", alt: "Iron Man lateral" },
      { url: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&q=80", alt: "Iron Man detalhe" },
    ],
    sizes: [
      { size: "Pequeno", price: 109.9 },
      { size: "Médio", price: 189.9 },
      { size: "Grande", price: 299.9 },
    ],
  },
  {
    id: "4",
    slug: "goku-super-saiyajin",
    name: "Goku Super Saiyajin",
    shortDescription: "Goku em transformação Super Saiyajin com aura de energia em resina",
    description:
      "O lendário guerreiro saiyajin em sua forma mais poderosa! Esta action figure captura todos os detalhes da transformação Super Saiyajin, com aura de energia esculpida em resina translúcida, cabelo dourado texturizado individualmente e 25 pontos de articulação. Base de exibição exclusiva incluída.",
    category: "Anime",
    rating: 4.7,
    reviewCount: 156,
    images: [
      { url: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&q=80", alt: "Goku Super Saiyajin" },
      { url: "https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?w=800&q=80", alt: "Goku lateral" },
      { url: "https://images.unsplash.com/photo-1559535332-db9971090158?w=800&q=80", alt: "Goku detalhe" },
    ],
    sizes: [
      { size: "Pequeno", price: 79.9 },
      { size: "Médio", price: 139.9 },
      { size: "Grande", price: 229.9 },
    ],
  },
  {
    id: "5",
    slug: "wonder-woman-guerreira",
    name: "Mulher-Maravilha Guerreira",
    shortDescription: "A princesa das Amazonas com armadura dourada e todos os acessórios",
    description:
      "A mais poderosa heroína da DC em toda a sua glória! A Mulher-Maravilha vem com armadura dourada completa com detalhes pintados à mão, laço da verdade em metal dourado, escudo e espada removíveis. Capa de tecido real e base temática de Themyscira incluída.",
    category: "DC Comics",
    rating: 4.8,
    reviewCount: 74,
    images: [
      { url: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?w=800&q=80", alt: "Mulher-Maravilha" },
      { url: "https://images.unsplash.com/photo-1587502537745-84b86da1204f?w=800&q=80", alt: "Mulher-Maravilha lateral" },
      { url: "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=800&q=80", alt: "Mulher-Maravilha detalhe" },
    ],
    sizes: [
      { size: "Pequeno", price: 94.9 },
      { size: "Médio", price: 159.9 },
      { size: "Grande", price: 259.9 },
    ],
  },
  {
    id: "6",
    slug: "naruto-modo-kyuubi",
    name: "Naruto Modo Kyuubi",
    shortDescription: "Naruto com manto de chakra laranja luminoso e detalhes incríveis",
    description:
      "O Hokage mais jovem da história em sua forma mais devastadora! O manto de chakra é pintado com gradiente laranja que parece brilhar, 28 pontos de articulação permitem poses dinâmicas de combate, e a base exclusiva com efeito de terra rachada completa a cena. Uma peça que todo fã de Naruto precisa ter.",
    category: "Anime",
    rating: 4.9,
    reviewCount: 188,
    badge: "Mais Vendido",
    images: [
      { url: "https://images.unsplash.com/photo-1555375771-14b2a63968a9?w=800&q=80", alt: "Naruto Kyuubi" },
      { url: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&q=80", alt: "Naruto lateral" },
      { url: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800&q=80", alt: "Naruto detalhe" },
    ],
    sizes: [
      { size: "Pequeno", price: 84.9 },
      { size: "Médio", price: 144.9 },
      { size: "Grande", price: 239.9 },
    ],
  },
];

export const getFeatured = () => products.filter((p) => p.featured);
export const getBySlug = (slug: string) => products.find((p) => p.slug === slug);
export const getById = (id: string) => products.find((p) => p.id === id);
