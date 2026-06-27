import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { ministriesContent } from "@/content/pages/ministries";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Ministries",
  description:
    "Liturgy, Bible Studies, and Friday Night Preaching — the core ministries of Sts Peter & Paul, Cecil Park.",
  path: "/ministries",
});

export default function MinistriesPage() {
  return (
    <section className="px-6 py-[72px]">
      <div className="mx-auto max-w-[760px]">
        <PageHero
          eyebrow={ministriesContent.eyebrow}
          title={ministriesContent.title}
          description={ministriesContent.intro}
        />

        <div className="mt-10 space-y-6">
          {ministriesContent.sections.map((section) => (
            <Card key={section.title}>
              <h2 className="font-display text-xl">{section.title}</h2>
              <ul className="prose-sppc mt-3">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-sm text-ink-soft">{ministriesContent.footerNote}</p>
      </div>
    </section>
  );
}
