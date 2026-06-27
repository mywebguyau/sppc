import { InfoIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHero } from "@/components/ui/PageHero";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { visitContent } from "@/content/pages/visit";
import { siteConfig } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Visit Us",
  description:
    "Service times, what to expect, and directions for your first visit to Sts Peter & Paul in Cecil Park.",
  path: "/visit",
});

const visitAccordionItems = [
  {
    id: "holy-raza",
    title: visitContent.holyRazaNoteTitle,
    content: visitContent.holyRazaNote,
  },
  {
    id: "accessible",
    title: visitContent.accessibleLiturgyTitle,
    content: [visitContent.accessibleLiturgy],
  },
  {
    id: "expect",
    title: visitContent.whatToExpectTitle,
    content: [visitContent.whatToExpect],
  },
  {
    id: "directions",
    title: visitContent.gettingHereTitle,
    content: [visitContent.gettingHere],
  },
  {
    id: "first-time",
    title: visitContent.firstTimeTitle,
    content: [visitContent.firstTime],
  },
] as const;

export default function VisitPage() {
  return (
    <section className="px-6 py-[72px]">
      <div className="mx-auto max-w-[1100px]">
        <PageHero eyebrow={visitContent.eyebrow} title={visitContent.title} />

        <Alert className="mt-8 border-oxblood/20 bg-card">
          <InfoIcon />
          <AlertTitle>Sunday Holy Raza · 8:30am</AlertTitle>
          <AlertDescription>
            New to the parish? Bible Study and Friday Night Preaching are great starting points
            if you&apos;re not yet familiar with the Holy Raza.
          </AlertDescription>
        </Alert>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-display text-xl">
                  {visitContent.serviceTimesTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>When</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead className="hidden sm:table-cell">Where</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {siteConfig.serviceTimes.map((service) => (
                      <TableRow key={`${service.day}-${service.name}`}>
                        <TableCell className="font-medium whitespace-nowrap">
                          {service.day}
                          <div className="text-meta text-sm font-normal">
                            {service.time}
                            {"note" in service && service.note ? ` (${service.note})` : ""}
                          </div>
                        </TableCell>
                        <TableCell>{service.name}</TableCell>
                        <TableCell className="text-meta hidden text-sm sm:table-cell">
                          {service.location}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <div>
              <h2 className="font-display text-xl">Plan your visit</h2>
              <p className="text-meta mt-2">
                Expand a section below for details on worship, accessibility, and directions.
              </p>
              <Accordion type="multiple" className="mt-4 rounded-xl border border-border bg-card px-4">
                {visitAccordionItems.map((item) => (
                  <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger className="font-display text-base hover:no-underline">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="prose-sppc">
                        {item.content.map((paragraph) => (
                          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
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
            <p className="text-meta mt-4 text-sm">
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
