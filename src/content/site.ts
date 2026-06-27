export const siteConfig = {
  name: "Sts Peter & Paul",
  fullName: "Sts Peter & Paul Assyrian Church of the East",
  tagline: "Assyrian Church of the East",
  location: "Cecil Park, NSW",
  archdiocese:
    "Archdiocese of Australia, New Zealand & Lebanon",
  address: {
    street: "32–40 Kosovich Place",
    suburb: "Cecil Park NSW 2178",
    country: "Australia",
    full: "32–40 Kosovich Place, Cecil Park NSW 2178, Australia",
  },
  phone: "+61 406 117 773",
  phoneDisplay: "+61 406 117 773",
  email: "sppc@assyrianchurch.org.au",
  social: {
    facebook: "#",
    instagram: "#",
  },
  services: [
    {
      label: "Next Holy Raza",
      value: "Sunday · 9:00am",
    },
    {
      label: "Bible study",
      value: "Wednesday · 8:00pm",
    },
    {
      label: "English preaching",
      value: "Friday · 8:00pm",
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
      time: "9:00am",
    },
    {
      day: "Wednesday",
      name: "Bible study",
      time: "8:00pm",
      note: "adults 18+",
    },
    {
      day: "Friday",
      name: "English preaching",
      time: "8:00pm",
    },
  ],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.0!2d150.85!3d-33.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUyJzQ4LjAiUyAxNTDCsDUxJzAwLjAiRQ!5e0!3m2!1sen!2sau!4v1",
  url: "https://sppc-ivory.vercel.app",
} as const;
