import { Review } from "@/types";

// ⚠️ DEPOIMENTOS DE EXEMPLO — substitua por avaliações reais de clientes antes de publicar.
// Depoimentos fictícios apresentados como reais podem configurar propaganda enganosa (CDC/CONAR).
export const reviews: Review[] = [
  {
    id: "1",
    author: "Lucas Ferreira",
    initials: "LF",
    rating: 5,
    comment:
      "Simplesmente incrível! A qualidade do Iron Man superou todas as minhas expectativas. Chegou bem embalado, os detalhes são perfeitos e os LEDs funcionam perfeitamente. Já comprei mais dois para presentear!",
    date: "12 de Março, 2025",
    product: "Iron Man Mark L",
    verified: true,
  },
  {
    id: "2",
    author: "Mariana Santos",
    initials: "MS",
    rating: 5,
    comment:
      "Comprei o Spider-Man tamanho grande para meu filho e ele ficou apaixonado! Atendimento pelo WhatsApp super rápido e o produto chegou antes do prazo. Embalagem reforçada e perfeita. Recomendo muito!",
    date: "28 de Fevereiro, 2025",
    product: "Spider-Man Deluxe",
    verified: true,
  },
  {
    id: "3",
    author: "Rafael Oliveira",
    initials: "RO",
    rating: 5,
    comment:
      "Sou colecionador há 10 anos e raramente encontro action figures com esse nível de acabamento a esse preço. O Naruto Kyuubi é uma obra de arte. O manto parece realmente estar em chamas. Vale cada centavo!",
    date: "5 de Janeiro, 2025",
    product: "Naruto Modo Kyuubi",
    verified: true,
  },
];
