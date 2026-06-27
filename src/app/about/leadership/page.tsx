import { PageHero } from "@/components/ui/PageHero";
import { leadershipContent } from "@/content/pages/about";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Leadership",
  description:
    "Meet His Beatitude Mar Meelis Zaia AM, Reverend Presbyter Neil Makko, and the clergy of Sts Peter & Paul, Cecil Park.",
  path: "/about/leadership",
});

function ClergyList({
  prefix,
  names,
}: {
  prefix: string;
  names: string[];
}) {
  return (
    <ul className="mt-2 space-y-1">
      {names.map((name) => (
        <li key={name} className="text-[15px] text-ink-soft">
          {prefix} {name}
        </li>
      ))}
    </ul>
  );
}

export default function LeadershipPage() {
  const { parishPriest } = leadershipContent;

  return (
    <section className="px-6 py-[72px]">
      <div className="mx-auto max-w-[760px]">
        <PageHero
          eyebrow={leadershipContent.eyebrow}
          title={leadershipContent.title}
        />
        <div className="prose-sppc mt-10">
          <p>{leadershipContent.intro}</p>

          <h3 className="font-display text-ink">Parish Priest</h3>
          <p>
            <strong>
              {parishPriest.title} {parishPriest.name}
            </strong>
          </p>
          <p>{parishPriest.bio}</p>

          <h3 className="font-display text-ink">Deacons</h3>
          <ClergyList prefix="Deacon" names={leadershipContent.deacons} />

          <h3 className="font-display text-ink">Subdeacon</h3>
          <ClergyList prefix="Subdeacon" names={leadershipContent.subdeacons} />

          <h3 className="font-display text-ink">Lectors</h3>
          <ClergyList prefix="Lector" names={leadershipContent.lectors} />
        </div>
      </div>
    </section>
  );
}
