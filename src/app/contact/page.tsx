import { PhoneIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageBreadcrumb } from "@/components/ui/PageBreadcrumb";
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
        <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
        <PageHero
          eyebrow={contactContent.eyebrow}
          title={contactContent.title}
          description={contactContent.intro}
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-display text-lg">{contactContent.officeTitle}</CardTitle>
            </CardHeader>
            <CardContent className="prose-sppc">
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
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-display text-lg">{contactContent.addressTitle}</CardTitle>
            </CardHeader>
            <CardContent className="prose-sppc">
              <p>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.suburb}
                <br />
                {siteConfig.address.country}
              </p>
            </CardContent>
          </Card>

          <Card className="sm:col-span-2">
            <CardHeader>
              <CardTitle className="font-display text-lg">{contactContent.followTitle}</CardTitle>
            </CardHeader>
            <CardContent className="prose-sppc">
              <p>
                <a href={siteConfig.social.facebook} className="font-semibold text-oxblood">
                  Facebook
                </a>
                {" · "}
                <a href={siteConfig.social.instagram} className="font-semibold text-oxblood">
                  Instagram
                </a>
              </p>
            </CardContent>
          </Card>
        </div>

        <Alert className="mt-8 border-gold/40 bg-card">
          <PhoneIcon />
          <AlertTitle>Prefer to call?</AlertTitle>
          <AlertDescription>
            Tap the phone number above on mobile to connect directly with the parish office.
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
}
