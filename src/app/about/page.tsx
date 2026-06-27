import Link from "next/link";
import { Card } from "@/components/ui/Card";
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
        <PageHero
          eyebrow={aboutHubContent.eyebrow}
          title={aboutHubContent.title}
          description={aboutHubContent.description}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {aboutHubContent.cards.map((card) => (
            <Link key={card.href} href={card.href} className="group block">
              <Card className="h-full transition group-hover:border-oxblood/25">
                <h2 className="font-display text-xl">{card.title}</h2>
                <p className="mt-2 text-[15px] text-ink-soft">{card.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-oxblood">
                  Read more →
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
