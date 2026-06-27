import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { visitContent } from "@/content/pages/visit";
import { siteConfig } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Visit Us",
  description:
    "Service times, what to expect, and directions for your first visit to Sts Peter & Paul in Cecil Park.",
  path: "/visit",
});

export default function VisitPage() {
  return (
    <section className="px-6 py-[72px]">
      <div className="mx-auto max-w-[1100px]">
        <PageHero eyebrow={visitContent.eyebrow} title={visitContent.title} />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-8">
            <Card>
              <h2 className="font-display text-xl">{visitContent.serviceTimesTitle}</h2>
              <ul className="mt-4 space-y-4">
                {siteConfig.serviceTimes.map((service) => (
                  <li
                    key={`${service.day}-${service.name}`}
                    className="border-b border-oxblood/10 pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="font-semibold text-ink">
                      {service.day} — {service.name}
                    </div>
                    <div className="text-ink-soft">
                      {service.time}
                      {"note" in service && service.note ? ` (${service.note})` : ""}
                    </div>
                    {"location" in service && (
                      <div className="mt-1 text-sm text-ink-soft">{service.location}</div>
                    )}
                  </li>
                ))}
              </ul>
            </Card>

            <div className="prose-sppc">
              <h2 className="font-display text-xl text-ink">
                {visitContent.holyRazaNoteTitle}
              </h2>
              {visitContent.holyRazaNote.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}

              <h2 className="font-display text-xl text-ink">
                {visitContent.accessibleLiturgyTitle}
              </h2>
              <p>{visitContent.accessibleLiturgy}</p>

              <h2 className="font-display text-xl text-ink">
                {visitContent.whatToExpectTitle}
              </h2>
              <p>{visitContent.whatToExpect}</p>

              <h2 className="font-display text-xl text-ink">
                {visitContent.gettingHereTitle}
              </h2>
              <p>{visitContent.gettingHere}</p>

              <h2 className="font-display text-xl text-ink">
                {visitContent.firstTimeTitle}
              </h2>
              <p>{visitContent.firstTime}</p>
            </div>
          </div>

          <div>
            <Card className="overflow-hidden p-0">
              <iframe
                title="Map to Sts Peter & Paul, Cecil Park"
                src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address.full)}&output=embed`}
                className="h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </Card>
            <p className="mt-4 text-sm text-ink-soft">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address.full)}`}
                className="font-semibold text-oxblood underline decoration-gold/50 underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
