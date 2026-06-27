import { PageHero } from "@/components/ui/PageHero";
import { leadershipContent } from "@/content/pages/about";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Leadership",
  description:
    "Meet the bishop, archdiocese, and parish clergy of Sts Peter & Paul, Cecil Park.",
  path: "/about/leadership",
});

export default function LeadershipPage() {
  return (
    <section className="px-6 py-[72px]">
      <div className="mx-auto max-w-[760px]">
        <PageHero
          eyebrow={leadershipContent.eyebrow}
          title={leadershipContent.title}
        />
        <div className="prose-sppc mt-10">
          {leadershipContent.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
