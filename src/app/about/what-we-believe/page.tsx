import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageBreadcrumb } from "@/components/ui/PageBreadcrumb";
import { PageHero } from "@/components/ui/PageHero";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { whatWeBelieveContent } from "@/content/pages/about";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "What We Believe",
  description:
    "The Nicene Creed and the faith of the Holy Apostolic Catholic Assyrian Church of the East — in plain English.",
  path: "/about/what-we-believe",
});

export default function WhatWeBelievePage() {
  return (
    <section className="px-6 py-[72px]">
      <div className="mx-auto max-w-[900px]">
        <PageBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "What We Believe" },
          ]}
        />
        <PageHero
          eyebrow={whatWeBelieveContent.eyebrow}
          title={whatWeBelieveContent.title}
        />

        <Tabs defaultValue="overview" className="mt-10">
          <TabsList className="mb-6 h-auto w-full flex-wrap justify-start gap-1 bg-muted p-1">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="distinctives">Distinctives</TabsTrigger>
            <TabsTrigger value="creed">Nicene Creed</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="font-display text-xl">Our faith in brief</CardTitle>
              </CardHeader>
              <CardContent className="prose-sppc">
                <p>{whatWeBelieveContent.intro}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="distinctives" className="mt-0">
            <div className="grid gap-4">
              {whatWeBelieveContent.distinctives.map((item) => (
                <Card key={item.title}>
                  <CardHeader>
                    <CardTitle className="font-display text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[15px] leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="creed" className="mt-0 space-y-6">
            <div className="prose-sppc">
              <h2 className="font-display text-xl">{whatWeBelieveContent.creedTitle}</h2>
              <p>{whatWeBelieveContent.creedIntro}</p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <Accordion type="multiple" className="w-full">
                  {whatWeBelieveContent.niceneCreed.map((paragraph, index) => (
                    <AccordionItem key={paragraph.slice(0, 32)} value={`creed-${index}`}>
                      <AccordionTrigger className="text-left font-display text-base hover:no-underline">
                        Paragraph {index + 1}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="font-display text-[17px] leading-relaxed">{paragraph}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            <p className="text-meta text-sm italic">{whatWeBelieveContent.creedNote}</p>
          </TabsContent>
        </Tabs>

        <Separator className="my-10" />

        <div className="prose-sppc">
          <p>{whatWeBelieveContent.closing}</p>
        </div>
      </div>
    </section>
  );
}
