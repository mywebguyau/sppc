import type { MetadataRoute } from "next";
import { newsPosts } from "@/content/news/posts";
import { siteConfig } from "@/content/site";

const staticRoutes = [
  "",
  "/about",
  "/about/who-we-are",
  "/about/what-we-believe",
  "/about/leadership",
  "/visit",
  "/contact",
  "/ministries",
  "/sacraments",
  "/give",
  "/news",
  "/media",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const pages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const newsPages = newsPosts.map((post) => ({
    url: `${baseUrl}/news/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...pages, ...newsPages];
}
