import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { ministriesContent } from "@/content/pages/ministries";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Ministries & Groups",
  description:
    "Sunday school, youth group, choir, and community ministries at Sts Peter & Paul, Cecil Park.",
  path: "/ministries",
});

export default function MinistriesPage() {
  return (
    <section className="px-6 py-[72px]">
      <div className="mx-auto max-w-[1100px]">
        <PageHero
          eyebrow={ministriesContent.eyebrow}
          title={ministriesContent.title}
          description={ministriesContent.intro}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ministriesContent.ministries.map((ministry) => (
            <Card key={ministry.title}>
              <h2 className="font-display text-lg">{ministry.title}</h2>
              <p className="mt-2 text-[15px] text-ink-soft">{ministry.description}</p>
              {ministry.note && (
                <p className="mt-2 text-sm italic text-oxblood">{ministry.note}</p>
              )}
            </Card>
          ))}
        </div>

        <p className="mt-8 text-sm text-ink-soft">{ministriesContent.footerNote}</p>
      </div>
    </section>
  );
}
