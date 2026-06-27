import { PageHero } from "@/components/ui/PageHero";
import { whatWeBelieveContent } from "@/content/pages/about";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "What We Believe",
  description:
    "The Nicene Creed and the faith of the Holy Apostolic Catholic Assyrian Church of the East — in plain English.",
  path: "/about/what-we-believe",
});

export default function WhatWeBelievePage() {
  return (
    <section className="px-6 py-[72px]">
      <div className="mx-auto max-w-[760px]">
        <PageHero
          eyebrow={whatWeBelieveContent.eyebrow}
          title={whatWeBelieveContent.title}
        />
        <div className="prose-sppc mt-10">
          <p>{whatWeBelieveContent.intro}</p>
          <h3 className="font-display text-ink">{whatWeBelieveContent.distinctivesTitle}</h3>
          <ul>
            {whatWeBelieveContent.distinctives.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong> — {item.description}
              </li>
            ))}
          </ul>

          <h3 className="font-display text-ink">{whatWeBelieveContent.creedTitle}</h3>
          <p>{whatWeBelieveContent.creedIntro}</p>
        </div>

        <blockquote className="mt-8 rounded border border-oxblood/15 bg-parchment-card px-8 py-8">
          <div className="space-y-4 font-display text-[17px] leading-relaxed text-ink">
            {whatWeBelieveContent.niceneCreed.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </blockquote>

        <p className="mt-4 text-sm italic text-ink-soft">{whatWeBelieveContent.creedNote}</p>

        <div className="prose-sppc mt-8">
          <p>{whatWeBelieveContent.closing}</p>
        </div>
      </div>
    </section>
  );
}
