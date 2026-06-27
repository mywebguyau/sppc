import Link from "next/link";
import { StepDivider } from "@/components/brand/StepDivider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { homeContent } from "@/content/pages/home";

export function VisitStepsSection() {
  const { visitSteps } = homeContent;

  return (
    <>
      <StepDivider />
      <section className="px-6 py-[72px]">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-10 max-w-[620px]">
            <Eyebrow>{visitSteps.eyebrow}</Eyebrow>
            <h2 className="mt-3.5 font-display text-[clamp(26px,3.4vw,36px)]">
              {visitSteps.title}
            </h2>
            <p className="text-meta mt-3.5 text-base">{visitSteps.description}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {visitSteps.steps.map((step) => (
              <Card key={step.number}>
                <CardHeader>
                  <p className="font-display text-sm font-semibold tracking-wide text-oxblood">
                    {step.number}
                  </p>
                  <CardTitle className="font-display text-[19px]">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-meta text-[15px]">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href={visitSteps.cta.href}
              className="text-[15px] font-semibold text-oxblood underline decoration-gold/50 underline-offset-4 hover:decoration-gold"
            >
              {visitSteps.cta.label} →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
