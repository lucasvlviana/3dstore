export type ProductSize = "Pequeno" | "Médio" | "Grande";

export interface SizePrice {
  size: ProductSize;
  price: number;
  stock?: number;
}

export interface ProductImage {
  url: string;
  alt: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: string;
  rating: number;
  reviewCount: number;
  images: ProductImage[];
  sizes: SizePrice[];
  badge?: string;
  featured?: boolean;
}

export interface Review {
  id: string;
  author: string;
  initials: string;
  rating: number;
  comment: string;
  date: string;
  product: string;
  verified: boolean;
}

export interface CartItem {
  productId: string;
  size: ProductSize;
  quantity: number;
}

export interface SiteConfig {
  siteName: string;
  whatsapp: string;
  instagram: string;
  slogan: string;
}
