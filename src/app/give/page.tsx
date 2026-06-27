import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageBreadcrumb } from "@/components/ui/PageBreadcrumb";
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
        <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Give" }]} />
        <PageHero
          eyebrow={giveContent.eyebrow}
          title={giveContent.title}
          description={giveContent.intro}
        />

        <Card className="mt-10">
          <CardHeader>
            <CardTitle className="font-display text-xl">{giveContent.waysTitle}</CardTitle>
          </CardHeader>
          <CardContent className="prose-sppc">
            <ul>
              {giveContent.ways.map((way) => (
                <li key={way}>{way}</li>
              ))}
            </ul>
            <p>{giveContent.closing}</p>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardContent className="prose-sppc pt-6">
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
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
