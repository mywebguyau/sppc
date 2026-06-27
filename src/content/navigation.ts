export type NavLink = {
  label: string;
  href: string;
  children?: NavLink[];
};

export const mainNav: NavLink[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Who We Are", href: "/about/who-we-are" },
      { label: "What We Believe", href: "/about/what-we-believe" },
      { label: "Leadership", href: "/about/leadership" },
    ],
  },
  { label: "Visit", href: "/visit" },
  { label: "Ministries", href: "/ministries" },
  { label: "Sacraments", href: "/sacraments" },
  { label: "Guest Guide", href: "/guest-guide" },
  { label: "Give", href: "/give" },
  { label: "Contact", href: "/contact" },
];

export const footerExploreLinks = [
  { label: "About us", href: "/about" },
  { label: "Plan a visit", href: "/visit" },
  { label: "What we believe", href: "/about/what-we-believe" },
  { label: "Ministries", href: "/ministries" },
  { label: "Sacraments", href: "/sacraments" },
  { label: "Guest guide", href: "/guest-guide" },
  { label: "Give", href: "/give" },
];
