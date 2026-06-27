import { PageHero } from "@/components/ui/PageHero";
import { whatWeBelieveContent } from "@/content/pages/about";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "What We Believe",
  description:
    "Apostolic succession, the Holy Raza, and the faith of the Assyrian Church of the East — in plain English.",
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
          <p>{whatWeBelieveContent.closing}</p>
        </div>
      </div>
    </section>
  );
}
