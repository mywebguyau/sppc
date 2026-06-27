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
        <PageHero eyebrow={whoWeAreContent.eyebrow} title={whoWeAreContent.title} />
        <div className="prose-sppc mt-10">
          {whoWeAreContent.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
