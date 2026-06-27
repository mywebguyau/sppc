import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.location}`,
    template: `%s — ${siteConfig.name}`,
  },
  description:
    "Sts Peter & Paul is an English-speaking parish of the Holy Apostolic Catholic Assyrian Church of the East in Cecil Park, NSW.",
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full scroll-smooth font-sans", fraunces.variable, sourceSans.variable)}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
