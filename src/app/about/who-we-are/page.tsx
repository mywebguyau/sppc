import { Card, CardContent } from "@/components/ui/card";
import { PageBreadcrumb } from "@/components/ui/PageBreadcrumb";
import { PageHero } from "@/components/ui/PageHero";
import { whoWeAreContent } from "@/content/pages/about";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Who We Are",
  description:
    "A young parish with an ancient church — the story of Sts Peter & Paul in Cecil Park.",
  path: "/about/who-we-are",
});

export default function WhoWeArePage() {
  return (
    <section className="px-6 py-[72px]">
      <div className="mx-auto max-w-[760px]">
        <PageBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Who We Are" },
          ]}
        />
        <PageHero eyebrow={whoWeAreContent.eyebrow} title={whoWeAreContent.title} />

        <Card className="mt-10">
          <CardContent className="prose-sppc pt-6">
            {whoWeAreContent.paragraphs.map((paragraph, index) => (
              <p key={paragraph.slice(0, 40)} className={index === 0 ? "text-lg" : undefined}>
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
