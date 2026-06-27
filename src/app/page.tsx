import { ServiceStrip } from "@/components/layout/ServiceStrip";
import { BelieveBand } from "@/components/sections/BelieveBand";
import { GiveTeaser } from "@/components/sections/GiveTeaser";
import { HeroSection } from "@/components/sections/HeroSection";
import { VisitStepsSection } from "@/components/sections/VisitStepsSection";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Home",
  description:
    "An English-speaking parish of the Holy Apostolic Catholic Assyrian Church of the East in Cecil Park, NSW. Plan your visit.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceStrip />
      <VisitStepsSection />
      <BelieveBand />
      <GiveTeaser />
    </>
  );
}
