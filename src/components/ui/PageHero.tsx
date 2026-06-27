import { Eyebrow } from "@/components/ui/Eyebrow";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <div className="mx-auto max-w-[620px]">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mt-3.5 font-display text-[clamp(26px,3.4vw,40px)] leading-tight">
        {title}
      </h1>
      {description && (
        <p className="mt-3.5 text-[16.5px] text-ink-soft">{description}</p>
      )}
    </div>
  );
}
