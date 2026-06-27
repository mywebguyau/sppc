import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageBreadcrumb } from "@/components/ui/PageBreadcrumb";
import { PageHero } from "@/components/ui/PageHero";
import { sacramentsContent } from "@/content/pages/sacraments";
import { siteConfig } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Sacraments & Life Events",
  description:
    "Baptism, marriage, and funeral arrangements at Sts Peter & Paul parish, Cecil Park.",
  path: "/sacraments",
});

export default function SacramentsPage() {
  return (
    <section className="px-6 py-[72px]">
      <div className="mx-auto max-w-[760px]">
        <PageBreadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Sacraments & Life Events" }]}
        />
        <PageHero eyebrow={sacramentsContent.eyebrow} title={sacramentsContent.title} />

        <div className="mt-10 space-y-5">
          {sacramentsContent.sacraments.map((sacrament) => (
            <Card key={sacrament.title}>
              <CardHeader>
                <CardTitle className="font-display text-xl">{sacrament.title}</CardTitle>
              </CardHeader>
              <CardContent className="prose-sppc">
                <p>{sacrament.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 border-oxblood/20">
          <CardContent className="prose-sppc pt-6">
            <p>
              <strong>{sacramentsContent.contactNote}</strong>{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-oxblood">
                {siteConfig.email}
              </a>{" "}
              ·{" "}
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-oxblood">
                {siteConfig.phoneDisplay}
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
