import { Card } from "@/components/ui/Card";
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
        <PageHero
          eyebrow={sacramentsContent.eyebrow}
          title={sacramentsContent.title}
        />

        <div className="mt-10 space-y-5">
          {sacramentsContent.sacraments.map((sacrament) => (
            <Card key={sacrament.title}>
              <h2 className="font-display text-xl">{sacrament.title}</h2>
              <p className="prose-sppc mt-3">{sacrament.description}</p>
            </Card>
          ))}
        </div>

        <div className="prose-sppc mt-8 rounded border border-oxblood/12 bg-parchment-card p-5">
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
        </div>
      </div>
    </section>
  );
}
