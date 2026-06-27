import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
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
        <PageHero
          eyebrow={guestGuideContent.eyebrow}
          title={guestGuideContent.title}
          description={guestGuideContent.intro}
        />

        <div className="prose-sppc mt-10">
          <h2 className="font-display text-xl text-ink">
            {guestGuideContent.whatToExpectTitle}
          </h2>
          <p>{guestGuideContent.whatToExpect}</p>
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="font-display text-xl text-ink">
            {guestGuideContent.guestExpectationsTitle}
          </h2>
          {guestGuideContent.guestExpectations.map((item) => (
            <Card key={item.title}>
              <h3 className="font-display text-lg">{item.title}</h3>
              <p className="prose-sppc mt-2">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="prose-sppc mt-8">
          <h2 className="font-display text-xl text-ink">
            {guestGuideContent.afterServiceTitle}
          </h2>
          <p>{guestGuideContent.afterService}</p>
        </div>
      </div>
    </section>
  );
}
