import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: PageMeta): Metadata {
  const fullTitle =
    title === "Home"
      ? `${siteConfig.name} — ${siteConfig.location}`
      : `${title} — ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.fullName,
      locale: "en_AU",
      type: "website",
    },
  };
}
