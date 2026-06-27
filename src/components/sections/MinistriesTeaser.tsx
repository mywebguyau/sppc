import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { homeContent } from "@/content/pages/home";

export function MinistriesTeaser() {
  const { ministriesTeaser } = homeContent;

  return (
    <section className="bg-muted/40 px-6 py-[72px]">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-10 max-w-[620px]">
          <Eyebrow>{ministriesTeaser.eyebrow}</Eyebrow>
          <h2 className="mt-3.5 font-display text-[clamp(26px,3.4vw,36px)]">
            {ministriesTeaser.title}
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {ministriesTeaser.cards.map((card) => (
            <Card key={card.title}>
              <CardHeader>
                <CardTitle className="font-display text-[16.5px]">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[15px] text-foreground">
                  {card.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href={ministriesTeaser.cta.href}
            className="text-[15px] font-semibold text-oxblood underline decoration-gold/50 underline-offset-4 hover:decoration-gold"
          >
            {ministriesTeaser.cta.label} →
          </Link>
        </div>
      </div>
    </section>
  );
}
