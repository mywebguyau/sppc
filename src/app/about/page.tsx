import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageBreadcrumb } from "@/components/ui/PageBreadcrumb";
import { PageHero } from "@/components/ui/PageHero";
import { aboutHubContent } from "@/content/pages/about";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about Sts Peter & Paul — who we are, what we believe, and our parish leadership.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <section className="px-6 py-[72px]">
      <div className="mx-auto max-w-[1100px]">
        <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
        <PageHero
          eyebrow={aboutHubContent.eyebrow}
          title={aboutHubContent.title}
          description={aboutHubContent.description}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {aboutHubContent.cards.map((card) => (
            <Link key={card.href} href={card.href} className="group block">
              <Card className="h-full transition group-hover:ring-oxblood/25">
                <CardHeader>
                  <CardTitle className="font-display text-xl">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[15px] text-foreground">
                    {card.description}
                  </CardDescription>
                  <span className="mt-4 inline-block text-sm font-semibold text-oxblood">
                    Read more →
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
