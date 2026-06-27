import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { homeContent } from "@/content/pages/home";

export function BelieveBand() {
  const { believe } = homeContent;

  return (
    <section className="bg-indigo px-6 py-[72px] text-[#EDE7DA]">
      <div className="mx-auto grid max-w-[1100px] gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <div>
          <Eyebrow variant="dark">{believe.eyebrow}</Eyebrow>
          <h2 className="mt-3.5 font-display text-[clamp(26px,3.4vw,34px)] text-parchment-card">
            {believe.title}
          </h2>
          <Link
            href={believe.link.href}
            className="mt-4 inline-block border-b border-gold-light/40 text-[15px] font-semibold text-gold-light hover:border-gold-light"
          >
            {believe.link.label} →
          </Link>
        </div>

        <div className="grid gap-4">
          {believe.points.map((point) => (
            <div key={point.title} className="flex gap-3.5">
              <div
                className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold"
                aria-hidden="true"
              />
              <p className="text-[15.5px] text-[#D8CFC0]">
                <strong className="mb-0.5 block text-base text-parchment-card">
                  {point.title}
                </strong>
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
