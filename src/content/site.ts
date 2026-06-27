export const siteConfig = {
  name: "Sts Peter & Paul",
  fullName: "Sts Peter & Paul Assyrian Church of the East",
  tagline: "Assyrian Church of the East",
  location: "Cecil Park, NSW",
  archdiocese: "Archdiocese of Australia, New Zealand & Lebanon",
  address: {
    street: "32–40 Kosovich Place",
    suburb: "Cecil Park NSW 2178",
    country: "Australia",
    full: "32–40 Kosovich Place, Cecil Park NSW 2178, Australia",
  },
  bibleStudyLocation: "Saint Narsai Assyrian Christian College",
  phone: "+61 406 117 773",
  phoneDisplay: "+61 406 117 773",
  email: "sppc@assyrianchurch.org.au",
  social: {
    facebook: "#",
    instagram: "#",
  },
  services: [
    {
      label: "Sunday Holy Raza",
      value: "Sunday · 8:30am",
    },
    {
      label: "Friday night preaching",
      value: "Friday · 7:00pm",
    },
    {
      label: "Adult Bible study",
      value: "Wednesday · 7:30pm",
    },
    {
      label: "Find us",
      value: "32–40 Kosovich Place",
    },
  ],
  serviceTimes: [
    {
      day: "Sunday",
      name: "Holy Raza (Divine Liturgy)",
      time: "8:30am",
      location: "32–40 Kosovich Place, Cecil Park",
    },
    {
      day: "Sunday",
      name: "Sunday School",
      time: "from 8:30am",
      note: "ages 4–7",
      location: "32–40 Kosovich Place, Cecil Park",
    },
    {
      day: "Sunday",
      name: "Women's Fellowship",
      time: "5:00pm",
      location: "32–40 Kosovich Place, Cecil Park",
    },
    {
      day: "2nd Sunday of every month",
      name: "Accessible Liturgy",
      time: "5:00pm",
      location: "32–40 Kosovich Place, Cecil Park",
    },
    {
      day: "Tuesday",
      name: "Senior Youth Bible Study",
      time: "7:30pm",
      location: "Saint Narsai Assyrian Christian College",
    },
    {
      day: "Wednesday",
      name: "Adult Bible Study",
      time: "7:30pm",
      location: "Saint Narsai Assyrian Christian College",
    },
    {
      day: "Friday",
      name: "Night Preaching",
      time: "7:00pm",
      location: "32–40 Kosovich Place, Cecil Park",
    },
    {
      day: "Term time",
      name: "Junior Youth Bible Study",
      time: "[confirm regular day/time]",
      note: "paused during school holidays",
      location: "Saint Narsai Assyrian Christian College",
    },
  ],
  url: "https://sppc-ivory.vercel.app",
} as const;

export type ServiceTime = (typeof siteConfig.serviceTimes)[number];
