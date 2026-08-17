export type World = {
  number: string;
  slug: string;
  name: string;
  deck: string;
  eyebrow: string;
  thesis: string;
  passages: string[];
  signal: string;
  boundary?: string;
};

export const worlds: World[] = [
  {
    number: "01",
    slug: "build",
    name: "BUILD",
    deck: "Software. Products. Systems. Experiments.",
    eyebrow: "The first tool",
    thesis: "Code is just code. What matters is what happens because it exists.",
    passages: [
      "Software was the first tool because it lets an idea become real absurdly quickly. You write something. You run it. It either works or it doesn't. Then you have a problem to solve.",
      "The interesting question is not whether it was written in a fashionable framework. It is whether someone does less bullshit manually, receives the right information, makes fewer mistakes, or has a better day because it exists.",
    ],
    signal: "Evidence archive loading: projects, prototypes, diagrams, and postmortems.",
  },
  {
    number: "02",
    slug: "lucenex",
    name: "LUCENEX",
    deck: "Operational systems for the physical world.",
    eyebrow: "The company",
    thesis: "The point is not to shove AI into a warehouse because AI sounds cool.",
    passages: [
      "LuceneX came from seeing the distance between a PowerPoint operation and the operation people are actually surviving on the ground: missing information, disconnected software, bad prioritisation, unnecessary walking, and humans compensating for systems all day long.",
      "The work changes as reality provides new information. That is not a failure of vision. It is how a company should think.",
    ],
    signal: "Current terrain: logistics, diagnostics, integrations, and less stupid operations.",
  },
  {
    number: "03",
    slug: "serve",
    name: "SERVE",
    deck: "Responsibility, discipline, and showing up.",
    eyebrow: "Latvia",
    thesis: "Reality gets very direct very quickly.",
    passages: [
      "Military service is an environment where competence, communication, equipment, preparation, and the ability to rely on each other are not abstract values.",
      "I live in Latvia. I care about Latvia. If I expect the country to continue existing, I do not think defending it should always be somebody else's problem.",
    ],
    signal: "This space is intentionally selective. No operational details. No hero worship.",
    boundary: "Only appropriate, non-sensitive reflections belong here.",
  },
  {
    number: "04",
    slug: "experience",
    name: "EXPERIENCE",
    deck: "Communities do not run on vibes alone.",
    eyebrow: "Morfejus",
    thesis: "Not every useful thing in life needs to produce revenue.",
    passages: [
      "Communities are fascinating systems: information, trust, motivation, leadership, responsibility, people who care, and people who disappear. A lot of useful work happens because someone quietly keeps the whole thing alive.",
      "Sometimes the answer is software. Sometimes it is structure. Sometimes it is helping to organise something. Sometimes it is just showing up and doing the thing.",
    ],
    signal: "Contribution is not a side quest. It is part of the operating system.",
  },
  {
    number: "05",
    slug: "create",
    name: "CREATE",
    deck: "Things that are still becoming real.",
    eyebrow: "Pasmaidi / experiments",
    thesis: "The chaos is the interesting part.",
    passages: [
      "Most portfolios only show the polished retrospective: the finished project, the successful thing, the cleaned-up case study. That removes the part where someone actually tries to build something.",
      "Pasmaidi belongs here before it becomes a success story. It might work as imagined, change completely, or die. That is not an embarrassment. That is the work.",
    ],
    signal: "Open workshop: ideas, prototypes, false starts, and things worth testing.",
  },
  {
    number: "06",
    slug: "think",
    name: "THINK",
    deck: "Notes from trying to become less stupid.",
    eyebrow: "The writing room",
    thesis: "I do not want everything I write optimised to make me look intelligent.",
    passages: [
      "This is where software, logistics, business, people, systems, mistakes, and questions go when they are still alive enough to argue with. Some ideas will survive. Some will be destroyed six months later because I learned something new.",
      "Good. That is thinking. The point is not to be correct forever. The point is to become less wrong in public when it is useful.",
    ],
    signal: "First field notes are next. RSS and the future CMS will arrive later.",
  },
  {
    number: "07",
    slug: "now",
    name: "NOW",
    deck: "What has my attention right now.",
    eyebrow: "Live record",
    thesis: "Think huge. Execute against reality.",
    passages: [
      "This is the page that changes most often: what I am building, what I am trying to solve, where I am stuck, what I am learning, and what has earned an unreasonable amount of attention this week.",
      "A giant vision without execution is just intellectual masturbation. Start with one customer, one workflow, one broken process, one pilot, one result—then expand.",
    ],
    signal: "Current update: this website is becoming the interface, not the brochure.",
  },
];

export const worldBySlug = Object.fromEntries(worlds.map((world) => [world.slug, world]));
