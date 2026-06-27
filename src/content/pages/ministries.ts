export type MinistrySection = {
  title: string;
  items: string[];
};

export const ministriesContent = {
  eyebrow: "Get involved",
  title: "Our core ministries",
  intro:
    "The heart of parish life happens in three places: the Holy Raza, Bible Study, and Friday Night Preaching. Everything else grows out of these.",
  sections: [
    {
      title: "Liturgy",
      items: [
        "Sunday Holy Raza — 8:30am",
        "Accessible Liturgy — 2nd Sunday of every month, 5:00pm (see Visit Us for details)",
      ],
    },
    {
      title: "Bible Studies",
      items: [
        "Adult Bible Study — Wednesdays, 7:30pm, Saint Narsai Assyrian Christian College",
        "Senior Youth Bible Study — Tuesdays, 7:30pm, Saint Narsai Assyrian Christian College",
        "Junior Youth Bible Study — term time, paused during school holidays [confirm regular day/time]",
      ],
    },
    {
      title: "Friday Night Preaching",
      items: [
        "Fridays, 7:00pm — a weekly teaching series open to all, no background or church experience required.",
      ],
    },
  ] satisfies MinistrySection[],
  footerNote:
    "Also part of parish life, but kept low-key on the site rather than built out as full ministry pages: Sunday School and Women's Fellowship.",
};
