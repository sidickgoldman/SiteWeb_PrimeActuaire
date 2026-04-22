import type { MetadataRoute } from "next";
import { articles } from "./insights/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.primeactuaire.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/plateforme`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/methode`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/a-propos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/insights`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/mentions-legales`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/confidentialite`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${base}/insights/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...articlePages];
}
