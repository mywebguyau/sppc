import { HeroCrossArt } from "@/components/brand/HeroCrossArt";
import { Button } from "@/components/ui/Button";
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
          <p className="mt-5 max-w-[480px] text-lg text-[#E7D9C9]">{hero.description}</p>
          <div className="mt-7 flex flex-wrap gap-3.5">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label} →</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <HeroCrossArt />
        </div>
      </div>
    </section>
  );
}
