import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { giveContent } from "@/content/pages/give";
import { siteConfig } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Give",
  description:
    "Support Sts Peter & Paul parish through online giving, in-person offerings, or contacting the parish office.",
  path: "/give",
});

export default function GivePage() {
  return (
    <section className="px-6 py-[72px]">
      <div className="mx-auto max-w-[760px]">
        <PageHero
          eyebrow={giveContent.eyebrow}
          title={giveContent.title}
          description={giveContent.intro}
        />

        <Card className="prose-sppc mt-10">
          <h2 className="font-display text-xl text-ink">{giveContent.waysTitle}</h2>
          <ul>
            {giveContent.ways.map((way) => (
              <li key={way}>{way}</li>
            ))}
          </ul>
          <p>{giveContent.closing}</p>
        </Card>

        <div className="prose-sppc mt-6">
          <p>
            Questions about giving? Call{" "}
            <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-oxblood">
              {siteConfig.phoneDisplay}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-oxblood">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
