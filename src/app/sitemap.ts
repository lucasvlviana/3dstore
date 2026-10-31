import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { siteUrl } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const productPages = products.map(
    (p): MetadataRoute.Sitemap[number] => ({
      url: `${siteUrl}/produtos/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  return [
    { url: siteUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/produtos`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    ...productPages,
    { url: `${siteUrl}/politica-de-privacidade`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
