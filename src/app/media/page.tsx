import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { mediaContent } from "@/content/pages/media";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Sermons & Media",
  description: "Watch and listen to services and sermons from Sts Peter & Paul, Cecil Park.",
  path: "/media",
});

export default function MediaPage() {
  return (
    <section className="px-6 py-[72px]">
      <div className="mx-auto max-w-[760px]">
        <PageHero
          eyebrow={mediaContent.eyebrow}
          title={mediaContent.title}
          description={mediaContent.intro}
        />

        <Card className="mt-10 text-center">
          <h2 className="font-display text-xl">{mediaContent.emptyTitle}</h2>
          <p className="prose-sppc mt-3">{mediaContent.emptyDescription}</p>
        </Card>
      </div>
    </section>
  );
}
