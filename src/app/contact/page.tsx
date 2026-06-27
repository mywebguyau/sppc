import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { contactContent } from "@/content/pages/contact";
import { siteConfig } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Sts Peter & Paul parish office by phone, email, or visit us in Cecil Park.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="px-6 py-[72px]">
      <div className="mx-auto max-w-[760px]">
        <PageHero
          eyebrow={contactContent.eyebrow}
          title={contactContent.title}
          description={contactContent.intro}
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <Card>
            <h2 className="font-display text-lg">{contactContent.officeTitle}</h2>
            <div className="prose-sppc mt-4">
              <p>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="text-xl font-semibold text-oxblood"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.email}`} className="font-semibold text-oxblood">
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="font-display text-lg">{contactContent.addressTitle}</h2>
            <div className="prose-sppc mt-4">
              <p>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.suburb}
                <br />
                {siteConfig.address.country}
              </p>
            </div>
          </Card>

          <Card className="sm:col-span-2">
            <h2 className="font-display text-lg">{contactContent.followTitle}</h2>
            <div className="prose-sppc mt-4">
              <p>
                <a href={siteConfig.social.facebook} className="font-semibold text-oxblood">
                  Facebook
                </a>
                {" · "}
                <a href={siteConfig.social.instagram} className="font-semibold text-oxblood">
                  Instagram
                </a>
              </p>
            </div>
          </Card>
        </div>

        <div className="mt-8 rounded border border-gold/40 bg-parchment-card p-5 text-sm text-ink-soft">
          Prefer to call? Tap the phone number above on mobile to connect directly with the
          parish office.
        </div>
      </div>
    </section>
  );
}
