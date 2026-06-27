import { HeroCrossArt } from "@/components/brand/HeroCrossArt";
import { LinkButton } from "@/components/ui/link-button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { homeContent } from "@/content/pages/home";

export function HeroSection() {
  const { hero } = homeContent;

  return (
    <section className="overflow-hidden bg-oxblood text-parchment">
      <div className="mx-auto grid max-w-[1100px] items-center gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-[88px]">
        <div>
          <Eyebrow variant="hero" showIcon>
            {hero.eyebrow}
          </Eyebrow>
          <h1 className="mt-4 font-display text-[clamp(34px,5vw,54px)] leading-[1.08] text-parchment-card">
            {hero.headline}
            <br />
            <em className="text-gold-light italic">{hero.headlineEmphasis}</em>
          </h1>
          <p className="mt-5 max-w-[480px] text-lg leading-relaxed text-on-dark">
            {hero.description}
          </p>
          <div className="mt-7 flex flex-wrap gap-3.5">
            <LinkButton href={hero.primaryCta.href}>{hero.primaryCta.label} →</LinkButton>
            <LinkButton href={hero.secondaryCta.href} variant="hero-outline">
              {hero.secondaryCta.label}
            </LinkButton>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <HeroCrossArt />
        </div>
      </div>
    </section>
  );
}
