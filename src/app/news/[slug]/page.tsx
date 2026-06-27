import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { newsPosts } from "@/content/news/posts";
import { createPageMetadata } from "@/lib/metadata";

type NewsPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: NewsPostPageProps) {
  const { slug } = await params;
  const post = newsPosts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return createPageMetadata({
    title: post.title,
    description: post.description,
    path: `/news/${post.slug}`,
  });
}

export default async function NewsPostPage({ params }: NewsPostPageProps) {
  const { slug } = await params;
  const post = newsPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="px-6 py-[72px]">
      <div className="mx-auto max-w-[760px]">
        <PageHero eyebrow={post.date} title={post.title} description={post.description} />
        <div className="prose-sppc mt-10">
          <p>
            Full announcement content can be added here when real parish news is available.
          </p>
        </div>
        <Link
          href="/news"
          className="mt-8 inline-block text-sm font-semibold text-oxblood underline decoration-gold/50 underline-offset-4"
        >
          ← Back to news
        </Link>
      </div>
    </section>
  );
}
