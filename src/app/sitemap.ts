import type { MetadataRoute } from "next";
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
  "/guest-guide",
  "/give",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
