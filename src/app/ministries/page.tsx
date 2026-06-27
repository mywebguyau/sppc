import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageBreadcrumb } from "@/components/ui/PageBreadcrumb";
import { PageHero } from "@/components/ui/PageHero";
import { ministriesContent } from "@/content/pages/ministries";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Ministries",
  description:
    "Liturgy, Bible Studies, and Friday Night Preaching — the core ministries of Sts Peter & Paul, Cecil Park.",
  path: "/ministries",
});

const ministryBadges: Record<string, string> = {
  Liturgy: "Sundays",
  "Bible Studies": "Weekly",
  "Friday Night Preaching": "Fridays",
};

export default function MinistriesPage() {
  return (
    <section className="px-6 py-[72px]">
      <div className="mx-auto max-w-[900px]">
        <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Ministries" }]} />
        <PageHero
          eyebrow={ministriesContent.eyebrow}
          title={ministriesContent.title}
          description={ministriesContent.intro}
        />

        <div className="mt-10 space-y-6">
          {ministriesContent.sections.map((section) => (
            <Card key={section.title}>
              <CardHeader>
                <div className="flex flex-wrap items-center gap-2">
                  <CardTitle className="font-display text-xl">{section.title}</CardTitle>
                  {ministryBadges[section.title] && (
                    <Badge variant="secondary">{ministryBadges[section.title]}</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="prose-sppc">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-meta mt-8 text-sm">{ministriesContent.footerNote}</p>
      </div>
    </section>
  );
}
