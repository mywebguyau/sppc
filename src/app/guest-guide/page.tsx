import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageBreadcrumb } from "@/components/ui/PageBreadcrumb";
import { PageHero } from "@/components/ui/PageHero";
import { Separator } from "@/components/ui/separator";
import { guestGuideContent } from "@/content/pages/guest-guide";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Guest Guide",
  description:
    "What to expect when attending a baptism or wedding at Sts Peter & Paul — a guide for guests.",
  path: "/guest-guide",
});

export default function GuestGuidePage() {
  return (
    <section className="px-6 py-[72px]">
      <div className="mx-auto max-w-[760px]">
        <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Guest Guide" }]} />
        <PageHero
          eyebrow={guestGuideContent.eyebrow}
          title={guestGuideContent.title}
          description={guestGuideContent.intro}
        />

        <Card className="mt-10">
          <CardHeader>
            <CardTitle className="font-display text-xl">
              {guestGuideContent.whatToExpectTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose-sppc">
            <p>{guestGuideContent.whatToExpect}</p>
          </CardContent>
        </Card>

        <Separator className="my-10" />

        <div className="space-y-4">
          <h2 className="font-display text-xl">{guestGuideContent.guestExpectationsTitle}</h2>
          {guestGuideContent.guestExpectations.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle className="font-display text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="prose-sppc">
                <p>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-10">
          <CardHeader>
            <CardTitle className="font-display text-xl">
              {guestGuideContent.afterServiceTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose-sppc">
            <p>{guestGuideContent.afterService}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
