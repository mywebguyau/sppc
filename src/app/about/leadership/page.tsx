import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageBreadcrumb } from "@/components/ui/PageBreadcrumb";
import { PageHero } from "@/components/ui/PageHero";
import { leadershipContent } from "@/content/pages/about";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Leadership",
  description:
    "Meet His Beatitude Mar Meelis Zaia AM, Reverend Presbyter Neil Makko, and the clergy of Sts Peter & Paul, Cecil Park.",
  path: "/about/leadership",
});

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function ClergyCard({
  prefix,
  names,
}: {
  prefix: string;
  names: string[];
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {names.map((name) => (
        <Card key={name} size="sm">
          <CardContent className="flex items-center gap-3 pt-4">
            <Avatar className="h-10 w-10 bg-oxblood/10">
              <AvatarFallback className="bg-oxblood/10 text-sm font-semibold text-oxblood">
                {getInitials(name)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-meta text-xs font-semibold uppercase tracking-wide">{prefix}</p>
              <p className="font-medium">{name}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function LeadershipPage() {
  const { parishPriest } = leadershipContent;

  return (
    <section className="px-6 py-[72px]">
      <div className="mx-auto max-w-[900px]">
        <PageBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Leadership" },
          ]}
        />
        <PageHero
          eyebrow={leadershipContent.eyebrow}
          title={leadershipContent.title}
        />

        <Card className="mt-10">
          <CardContent className="prose-sppc pt-6">
            <p>{leadershipContent.intro}</p>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <Badge variant="secondary" className="w-fit">
              Parish Priest
            </Badge>
            <CardTitle className="font-display text-xl">
              {parishPriest.title} {parishPriest.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose-sppc">
            <p>{parishPriest.bio}</p>
          </CardContent>
        </Card>

        <div className="mt-10 space-y-8">
          <div>
            <h2 className="font-display text-xl">Deacons</h2>
            <ClergyCard prefix="Deacon" names={leadershipContent.deacons} />
          </div>

          <div>
            <h2 className="font-display text-xl">Subdeacon</h2>
            <ClergyCard prefix="Subdeacon" names={leadershipContent.subdeacons} />
          </div>

          <div>
            <h2 className="font-display text-xl">Lectors</h2>
            <ClergyCard prefix="Lector" names={leadershipContent.lectors} />
          </div>
        </div>
      </div>
    </section>
  );
}
