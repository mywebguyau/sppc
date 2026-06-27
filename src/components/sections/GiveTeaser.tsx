import { LinkButton } from "@/components/ui/link-button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { homeContent } from "@/content/pages/home";

export function GiveTeaser() {
  const { give } = homeContent;

  return (
    <section className="px-6 py-[72px]">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid items-center gap-7 rounded-xl bg-oxblood p-9 text-parchment md:grid-cols-[1.3fr_0.7fr] md:p-12">
          <div>
            <Eyebrow variant="dark">{give.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-display text-[clamp(24px,3vw,30px)] text-parchment-card">
              {give.title}
            </h2>
            <p className="mt-3 max-w-[420px] text-base leading-relaxed text-on-dark">
              {give.description}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <LinkButton href={give.primaryCta.href}>{give.primaryCta.label} →</LinkButton>
            <LinkButton
              href={give.secondaryCta.href}
              variant="hero-outline"
              className="text-center"
            >
              {give.secondaryCta.label}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
