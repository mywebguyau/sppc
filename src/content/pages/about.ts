export const aboutHubContent = {
  eyebrow: "About",
  title: "Who we are, what we believe, and who leads us",
  description:
    "Sts Peter & Paul is a parish of the Holy Apostolic Catholic Assyrian Church of the East — gathering in English at Cecil Park, NSW.",
  cards: [
    {
      title: "Who We Are",
      description:
        "A young parish with an ancient church — our story, our community, and why we gather in Cecil Park.",
      href: "/about/who-we-are",
    },
    {
      title: "What We Believe",
      description:
        "The Nicene Creed in full, alongside our apostolic tradition, the Holy Raza, and what sets the Church of the East apart.",
      href: "/about/what-we-believe",
    },
    {
      title: "Leadership",
      description:
        "His Beatitude Mar Meelis Zaia AM, Reverend Presbyter Neil Makko, and the parish clergy and minor orders.",
      href: "/about/leadership",
    },
  ],
};

export const whoWeAreContent = {
  eyebrow: "Our story",
  title: "A young parish, an ancient church",
  paragraphs: [
    "Sts Peter & Paul exists to give the Assyrian community of Sydney's west — and increasingly, anyone seeking a deeper, more historic expression of the Christian faith — a place to worship in English, in the tradition of the Holy Apostolic Catholic Assyrian Church of the East.",
    "[The parish was established to serve English-speaking families of the Assyrian Church of the East in Sydney's west, growing out of the wider Archdiocese of Australia, New Zealand & Lebanon under His Beatitude Mar Meelis Zaia.] (Confirm founding year and short history with parish council.)",
    "Today we're a community that spans generations — longtime members who carry the language and memory of the old country, and a new generation raised here in Australia, worshipping side by side in English.",
  ],
};

export const whatWeBelieveContent = {
  eyebrow: "Our faith",
  title: "Apostolic. Ancient. Alive today.",
  intro:
    "The Holy Apostolic Catholic Assyrian Church of the East is one of the oldest continuous Christian traditions in the world, tracing its founding to the apostolic mission of St Thomas, St Bartholomew, and St Addai in the first century.",
  distinctivesTitle: "What sets us apart:",
  distinctives: [
    {
      title: "Apostolic succession",
      description:
        "an unbroken line of bishops reaching back to the early church.",
    },
    {
      title: "The Holy Raza",
      description:
        "our Divine Liturgy, rooted in ancient Syriac Christian worship, celebrated today in English for our congregation.",
    },
    {
      title: "The cross without the corpus",
      description:
        "you'll notice our cross stands plain, on three steps representing Golgotha, rather than depicting the crucified Christ — a distinct visual and theological tradition within Eastern Christianity.",
    },
  ],
  creedTitle: "The Nicene Creed",
  creedIntro:
    "The Nicene Creed is a mirror of our faith — it is what we believe, plainly and completely. Rather than summarising it in our own words, we set the Creed itself before you, so you can read exactly what this parish holds to be true.",
  creedNote:
    "The text below follows the traditional Nicene-Constantinopolitan Creed as commonly recited in the Holy Raza. Confirm the exact translation and wording used by the parish if any variation applies.",
  niceneCreed: [
    "We believe in one God, the Father Almighty, Maker of heaven and earth, and of all things visible and invisible.",
    "And in one Lord Jesus Christ, the only-begotten Son of God, begotten of the Father before all worlds; Light of Light, very God of very God, begotten, not made, being of one substance with the Father; by whom all things were made.",
    "Who for us and for our salvation came down from heaven, and was incarnate by the Holy Spirit of the Virgin Mary, and was made man.",
    "And was crucified also for us under Pontius Pilate; he suffered and was buried.",
    "And the third day he rose again, according to the Scriptures.",
    "And ascended into heaven, and sitteth on the right hand of the Father.",
    "And he shall come again, with glory, to judge the living and the dead; whose kingdom shall have no end.",
    "And we believe in the Holy Spirit, the Lord and Giver of life, who proceedeth from the Father; who with the Father and the Son together is worshipped and glorified; who spake by the prophets.",
    "And we believe in one holy catholic and apostolic Church.",
    "We acknowledge one baptism for the remission of sins.",
    "We look for the resurrection of the dead, and the life of the world to come. Amen.",
  ],
  closing:
    "We are not the same as the Roman Catholic Church, the Eastern Orthodox Church, or other Eastern-rite churches — though we share deep historical roots with all of Christendom. If you're curious about exactly how, we're glad to talk about it after a service.",
};

export type ClergyMember = {
  title: string;
  name: string;
};

export const leadershipContent = {
  eyebrow: "Leadership",
  title: "Shepherding the parish",
  intro:
    "Sts Peter & Paul is part of the Archdiocese of Australia, New Zealand & Lebanon, under the leadership of His Beatitude Mar Meelis Zaia AM, Metropolitan.",
  parishPriest: {
    title: "Reverend Presbyter",
    name: "Neil Makko",
    bio: "[Short bio to be added — background, ordination, how long serving the parish.]",
  },
  deacons: [
    "Emmanuel Yousif",
    "Shayne Mcdonald",
    "Robin Hermis",
    "Domenico Miceli",
    "Robert Khnanisho",
  ],
  subdeacons: ["Steve Mortada"],
  lectors: ["Atrun Gewargis", "David Youkhana", "Ninos Oraha"],
};
