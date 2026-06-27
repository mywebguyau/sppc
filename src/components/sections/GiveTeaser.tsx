import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { homeContent } from "@/content/pages/home";

export function GiveTeaser() {
  const { give } = homeContent;

  return (
    <section className="px-6 py-[72px]">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid items-center gap-7 rounded-md bg-oxblood p-9 text-parchment md:grid-cols-[1.3fr_0.7fr] md:p-12">
          <div>
            <Eyebrow variant="dark">{give.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-display text-[clamp(24px,3vw,30px)] text-parchment-card">
              {give.title}
            </h2>
            <p className="mt-3 max-w-[420px] text-base text-[#E7D9C9]">{give.description}</p>
          </div>
          <div className="flex flex-col gap-3">
            <Button href={give.primaryCta.href}>{give.primaryCta.label} →</Button>
            <Button href={give.secondaryCta.href} variant="secondary" className="text-center">
              {give.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
