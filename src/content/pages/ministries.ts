export type Ministry = {
  title: string;
  description: string;
  note?: string;
};

export const ministriesContent = {
  eyebrow: "Get involved",
  title: "Find your place in the parish",
  intro:
    "Each of these needs to be confirmed as real/active before publishing — built as a reasonable structure based on what similar parishes run.",
  ministries: [
    {
      title: "Sunday School",
      description:
        "Faith formation and scripture for children, running alongside the main service.",
    },
    {
      title: "Youth Group",
      description:
        "Fellowship and discipleship for teens and young adults, including the Wednesday Bible study.",
    },
    {
      title: "Choir",
      description: "Leading sacred music and hymns in worship.",
    },
    {
      title: "Altar Servers",
      description:
        "Training and serving in the Holy Raza for confirmed members.",
    },
    {
      title: "Community & Welfare",
      description:
        "Practical care for parish families: meals, visitation, and support in hard seasons.",
    },
    {
      title: "Women's / Men's Fellowship",
      description: "[confirm whether these exist]",
      note: "To be confirmed with parish council.",
    },
  ] satisfies Ministry[],
  footerNote:
    "Each group page should have: what it does, who it's for, when it meets, and a single contact (name or shared parish email) to reach out to.",
};
