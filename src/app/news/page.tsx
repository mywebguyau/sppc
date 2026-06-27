import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { newsContent, newsPosts } from "@/content/news/posts";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "News & Events",
  description: "Parish news and upcoming events from Sts Peter & Paul, Cecil Park.",
  path: "/news",
});

export default function NewsPage() {
  return (
    <section className="px-6 py-[72px]">
      <div className="mx-auto max-w-[760px]">
        <PageHero
          eyebrow={newsContent.eyebrow}
          title={newsContent.title}
          description={newsContent.intro}
        />

        {newsPosts.length === 0 ? (
          <Card className="mt-10 text-center">
            <h2 className="font-display text-xl">{newsContent.emptyTitle}</h2>
            <p className="prose-sppc mt-3">{newsContent.emptyDescription}</p>
          </Card>
        ) : (
          <div className="mt-10 space-y-4">
            {newsPosts.map((post) => (
              <Link key={post.slug} href={`/news/${post.slug}`} className="block">
                <Card className="transition hover:border-oxblood/25">
                  <div className="text-sm font-semibold text-oxblood">{post.date}</div>
                  <h2 className="mt-1 font-display text-xl">{post.title}</h2>
                  <p className="mt-2 text-[15px] text-ink-soft">{post.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
