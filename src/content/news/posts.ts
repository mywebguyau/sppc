export type NewsPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

export const newsContent = {
  eyebrow: "What's on",
  title: "Parish news and upcoming events",
  intro:
    "Announcements and events from the parish. Check back for updates, or follow us on social media.",
  emptyTitle: "No announcements yet",
  emptyDescription:
    "When the parish has news or upcoming events to share, they will appear here. In the meantime, contact the parish office or follow us on Facebook and Instagram.",
};

/** Add real parish announcements here — do not invent events. */
export const newsPosts: NewsPost[] = [];
