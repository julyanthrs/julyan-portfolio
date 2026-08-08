import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

export type CaseStudyStep = {
  number: string;
  title: string;
  emoji: string;
  body: string;
  bullets?: string[];
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  height: "tall" | "wide" | "square";
  color: string;
  tagline: string;
  role: string;
  timeline: string;
  tools: string[];
  steps: CaseStudyStep[];
  results: { label: string; value: string }[];
};

function steps(
  problem: string,
  research: string,
  researchBullets: string[],
  direction: string,
  wireframes: string,
  iterations: string,
  iterationBullets: string[],
  final: string,
  outcome: string
): CaseStudyStep[] {
  return [
    { number: "01", title: "The Problem", emoji: "🧩", body: problem },
    {
      number: "02",
      title: "Research / Discovery",
      emoji: "🔍",
      body: research,
      bullets: researchBullets,
    },
    { number: "03", title: "Design Direction", emoji: "🎨", body: direction },
    { number: "04", title: "Wireframes", emoji: "✏️", body: wireframes },
    {
      number: "05",
      title: "Iterations",
      emoji: "🔁",
      body: iterations,
      bullets: iterationBullets,
    },
    { number: "06", title: "Final Design", emoji: "🌸", body: final },
    { number: "07", title: "Outcome", emoji: "🚀", body: outcome },
  ];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "wellness-buddy",
    title: "Wellness Buddy",
    category: "Mobile App UI",
    image: project1,
    height: "tall",
    color: "bg-candy-pink-soft",
    tagline: "A gentle habit companion for people who feel guilty about habit apps.",
    role: "Product Designer (solo)",
    timeline: "6 weeks",
    tools: ["Figma", "FigJam", "Maze", "Lottie"],
    steps: steps(
      "Habit trackers punish you for missing a day. Streak counters reset to zero, red badges pile up, and people quit the app entirely after one bad week. I wanted to design a wellness companion that keeps someone company instead of keeping score.",
      "I interviewed 9 people aged 18–30 who had downloaded and abandoned at least one habit app, and ran a 5-day diary study with 4 of them.",
      [
        "8 of 9 quit within two weeks of breaking a streak — shame, not boredom, was the churn driver.",
        "People check in at night, in bed, one-handed and half-asleep — so key actions had to live in the bottom third of the screen.",
        "Everyone wanted to see progress, but nobody wanted to see failure. Effort mattered more than perfection.",
      ],
      "I chose a soft pastel world with rounded 24px cards, a plush illustrated buddy, and zero red anywhere in the palette. Warm cream backgrounds and candy pink accents read as 'friend', not 'coach'. Motion is springy and slow (300–450ms) so the app never feels urgent — the emotional target was 'being tucked in', not 'being audited'.",
      "Early on I sketched 24 low-fidelity frames in grayscale so I couldn't hide behind cute colors. Three home-screen skeletons competed: a calendar grid, a vertical checklist, and a single-focus 'today card'. The wireframes made it obvious the grid was the most informative and the least kind — it turned a life into a spreadsheet of misses.",
      "Five rounds of testing reshaped the product more than the pixels.",
      [
        "v1 → v2: replaced the streak number with a growing plant, so a missed day slows growth instead of destroying it.",
        "v2 → v3: moved check-ins to a thumb-reachable bottom sheet after watching people stretch to the top bar.",
        "v3 → v4: cut the daily habit cap from unlimited to five; testers with 12 habits completed the fewest.",
        "v4 → final: added a 'rest day' button so skipping becomes an intentional, celebrated choice.",
      ],
      "The final design is a single-focus today screen, a soft plant-growth progress system, an illustrated buddy that reacts to check-ins, and a weekly reflection card written in second person. Every empty state has a kind sentence rather than a warning.",
      "Task success in usability testing rose from 62% to 94%, and average time to log a habit dropped from 11s to 4s. In a 2-week prototype pilot with 12 users, 10 were still checking in on day 14 — including 4 who had missed multiple days, exactly the group that used to disappear."
    ),
    results: [
      { label: "Task success", value: "62% → 94%" },
      { label: "Time to log", value: "11s → 4s" },
      { label: "Day-14 retention", value: "10 / 12" },
    ],
  },
  {
    id: 2,
    slug: "sugar-and-lace",
    title: "Sugar & Lace",
    category: "E-commerce Website",
    image: project2,
    height: "wide",
    color: "bg-butter",
    tagline: "Turning a beloved Instagram shop into a store people trust with their card.",
    role: "UX & UI Designer",
    timeline: "5 weeks",
    tools: ["Figma", "Shopify", "Hotjar"],
    steps: steps(
      "A small handmade accessories brand sold beautifully through Instagram DMs but converted terribly on their new website. Carts were being filled and abandoned at 81% — people liked the products and still didn't finish buying.",
      "I watched 20 session recordings, read 60 DMs the owner had already answered, and ran an unmoderated test with 6 shoppers.",
      [
        "The same three DM questions appeared over and over: shipping time, sizing, and 'is this real?' — none were answered on the product page.",
        "Shoppers scrolled past the hero instantly; the giant banner was pure decoration.",
        "Checkout asked for an account before showing the total, which is where most recordings ended.",
      ],
      "The brand's charm lived in its warmth, so I leaned into a soft butter-and-blush palette, generous whitespace, and playful display type paired with a very plain, legible body font. The rule I set: the interface can be cute, but the price, shipping and button must always be the calmest and clearest things on screen. Trust comes from clarity, delight comes from the edges.",
      "I wireframed the product page five ways in grayscale, testing where trust content should sit. The winning skeleton stacked photo → price → sizing → shipping promise → add to cart within the first viewport, with reviews immediately after. Early frames proved a sticky mobile buy bar was worth its screen cost.",
      "Iterations targeted the drop-off points one at a time.",
      [
        "Shrunk the hero by half and put real products above the fold.",
        "Added an inline sizing guide and 'ships in 2–3 days' badge beside the price instead of in a hidden tab.",
        "Made guest checkout the default and showed the full total on step one.",
        "Replaced a stock-photo carousel with customer photos after testers called the originals 'fake'.",
      ],
      "The final store is a three-step guest checkout, a sticky mobile buy bar, product cards with a soft hover lift, and a review wall of real customer photos. Micro-animations are limited to hovers and confirmations so nothing competes with the buy button.",
      "Cart abandonment fell from 81% to 47% in the first six weeks, mobile conversion nearly doubled, and the owner's support DMs dropped by roughly two-thirds because the page finally answered the questions people were asking."
    ),
    results: [
      { label: "Cart abandonment", value: "81% → 47%" },
      { label: "Mobile conversion", value: "+92%" },
      { label: "Support DMs", value: "−68%" },
    ],
  },
  {
    id: 3,
    slug: "girl-roses-beauty",
    title: "Girl Roses Beauty",
    category: "Brand Identity",
    image: project3,
    height: "square",
    color: "bg-mint",
    tagline: "A romantic identity system that survives a 32px app icon.",
    role: "Brand & Visual Designer",
    timeline: "4 weeks",
    tools: ["Figma", "Illustrator", "Procreate"],
    steps: steps(
      "A skincare startup had a logo that only worked on a laptop screen. At small sizes the thin rose illustration turned into a smudge, and the founders had no rules for color, type or packaging — every post looked like a different company.",
      "I audited 14 competitors and ran a 5-word association exercise with 12 of the brand's earliest customers.",
      [
        "The category is a sea of clinical white minimalism; softness was the open space.",
        "Customers described the brand as 'gentle', 'girly', 'honest' — never 'luxury', which the founders had assumed.",
        "Most brand touchpoints were tiny: profile pictures, story stickers, jar lids under 3cm.",
      ],
      "I built the identity around a single geometric rose mark with a monoline weight that holds at 16px, paired with a rounded display face and a quiet grotesque for body copy. The palette is blush, mint and cream with a deep cocoa for contrast — enough sweetness to be memorable, enough contrast to pass AA on every surface.",
      "Wireframing for brand meant grids: I drew the mark on an 8px construction grid at four sizes simultaneously, then sketched packaging nets and 9 social templates in flat gray to test hierarchy before any color.",
      "The mark got simpler with every round.",
      [
        "Removed two inner petals that collapsed below 24px.",
        "Thickened strokes from 1.5px to 2.5px for embossing on jar lids.",
        "Swapped a script logotype for rounded sans after tests showed it was unreadable in stories.",
        "Added a mint secondary so product lines could differ without new logos.",
      ],
      "Delivered a 28-page brand book: primary and stacked logo lockups, a 4-color palette with accessible pairings, type scale, icon set, packaging templates, and 12 editable social layouts.",
      "The founders shipped a full product line and three months of content without asking a designer for help, and brand recall in a follow-up survey of 40 customers rose from 38% to 71%."
    ),
    results: [
      { label: "Brand recall", value: "38% → 71%" },
      { label: "Templates shipped", value: "12" },
      { label: "Min legible size", value: "16px" },
    ],
  },
  {
    id: 4,
    slug: "candy-analytics",
    title: "Candy Analytics",
    category: "Dashboard UI",
    image: project4,
    height: "wide",
    color: "bg-candy-pink",
    tagline: "Proving a dashboard can be soft and still be serious.",
    role: "Product Designer",
    timeline: "7 weeks",
    tools: ["Figma", "Recharts", "Dovetail"],
    steps: steps(
      "A small creator-economy tool showed 22 metrics on one screen with no hierarchy. Users opened it, couldn't find the one number they cared about, and left. Support kept getting asked 'where do I see how much I made?'",
      "I ran 7 contextual interviews with creators while they used the existing dashboard, plus a card sort of all 22 metrics.",
      [
        "Everyone opened the dashboard to answer exactly one question: 'am I up or down this week?'",
        "The card sort collapsed 22 metrics into 4 natural groups — earnings, audience, content, and everything-else.",
        "Users distrusted numbers with no time context; 'compared to what?' came up in every session.",
      ],
      "Dark analytics UIs felt hostile to this audience, so I kept a cream canvas with pastel data colors and used saturation, not decoration, to signal importance. Charts got a strict rule: one accent hue per card, chocolate text for values, and never more than two data series without a user asking. Motion only ever animates data entering — never the layout — so it stays credible.",
      "I wireframed a strict 12-column grid with three density options. Low-fidelity frames were tested as clickable gray prototypes so participants judged hierarchy instead of prettiness, which is how the 'one hero number' layout won over a 4-up card row.",
      "Rounds focused on comprehension, not polish.",
      [
        "Promoted this-week earnings to a single hero number with a comparison delta.",
        "Collapsed 22 metrics into 4 expandable sections from the card sort.",
        "Replaced a rainbow multi-line chart with a single area chart plus a faint previous-period ghost line.",
        "Added skeleton loaders after testers assumed slow-loading charts were broken.",
      ],
      "The final dashboard leads with one hero metric and a trend delta, followed by four themed sections, a soft-pastel chart system, and a customizable pinned-metrics row. Empty and loading states are drawn, not blank.",
      "Time to find the primary metric fell from 24s to 6s, self-reported confidence in the numbers rose from 2.8 to 4.5 out of 5, and dashboard-related support tickets dropped by half in the first month."
    ),
    results: [
      { label: "Time to key metric", value: "24s → 6s" },
      { label: "Confidence score", value: "2.8 → 4.5" },
      { label: "Support tickets", value: "−50%" },
    ],
  },
  {
    id: 5,
    slug: "happy-bakery",
    title: "Happy Bakery",
    category: "Landing Page",
    image: project5,
    height: "wide",
    color: "bg-butter",
    tagline: "One page that had to do the job of a phone line.",
    role: "UX/UI Designer",
    timeline: "3 weeks",
    tools: ["Figma", "Webflow", "Google Analytics"],
    steps: steps(
      "A neighbourhood bakery took every custom-cake order by phone, losing evening enquiries and repeating the same answers all day. They needed one page that could take an order request and answer the top questions without a human.",
      "I sat in the shop for two mornings, logged 40 phone calls, and interviewed the two staff who answer them.",
      [
        "31 of 40 calls asked the same four things: price range, lead time, delivery area, and allergens.",
        "Most enquiries came from phones between 8–10pm, long after the shop closed.",
        "Customers wanted to describe their cake in their own words, not pick from rigid dropdowns.",
      ],
      "I matched the shop itself: warm butter yellow, blush accents, a friendly rounded display face and photography of actual cakes on cream. Nothing glossy or corporate. The single most important design decision was making the enquiry form feel like a note to a person — plain language labels, one question per line, and a cheerful confirmation illustration.",
      "The wireframe was a single scroll with a fixed order of persuasion: hero with one clear action → today's cakes → the four FAQ answers as visible cards → enquiry form → visit us. I tested three hero variants as gray blocks before committing.",
      "Testing with 8 locals trimmed the page down.",
      [
        "Cut the form from 9 fields to 5 after watching people bail at the phone-number field position.",
        "Turned the hidden FAQ accordion into four always-visible answer cards.",
        "Added a photo gallery of previous custom cakes, the most-scrolled section in tests.",
        "Made the sticky call button secondary to the form once evening traffic was confirmed.",
      ],
      "The final page is a warm single-scroll layout with a 5-field enquiry form, four visible answer cards, a real-cake gallery, gentle scroll reveals, and a hand-drawn confirmation state.",
      "Online enquiries went from zero to about 25 a week, roughly 40% of them arriving after closing time, and staff estimated phone questions dropped by half. Two of the four FAQ cards are now the most-read content on the site."
    ),
    results: [
      { label: "Weekly enquiries", value: "0 → ~25" },
      { label: "After-hours orders", value: "40%" },
      { label: "Form fields", value: "9 → 5" },
    ],
  },
  {
    id: 6,
    slug: "heartpic",
    title: "HeartPic",
    category: "Social App UI",
    image: project6,
    height: "tall",
    color: "bg-candy-pink-soft",
    tagline: "A tiny social app for close friends, designed to be closed quickly.",
    role: "Product Designer (2-person team)",
    timeline: "8 weeks",
    tools: ["Figma", "Protopie", "Notion"],
    steps: steps(
      "Sharing everyday photos with a few close friends means posting to hundreds of acquaintances or juggling group chats. People wanted a low-pressure space for their five favourite humans — with none of the performance anxiety of a public feed.",
      "I ran 11 interviews with 19–26 year olds and a survey with 84 responses about photo-sharing habits.",
      [
        "73% said they had deleted a post because it 'didn't get enough likes'.",
        "Close-friend sharing happens in bursts: several photos at once, then nothing for days.",
        "People wanted reactions but not rankings — visible counts were the anxiety trigger, not the reactions themselves.",
      ],
      "The direction was 'a shared shoebox of photos', not a stage. Soft candy pink and cream, chunky rounded cards, and playful sticker reactions instead of numeric likes. I deliberately designed for short sessions: no infinite feed, no algorithmic ordering, and a satisfying end-of-feed illustration that gives permission to leave.",
      "Wireframes explored three feed structures: an endless single column, a daily-grouped feed, and a paged 'circle' view. Grayscale prototypes revealed that daily grouping created a natural stopping point, which was the whole point of the product.",
      "Iterations mostly removed things.",
      [
        "Removed public reaction counts entirely; senders see who reacted, nobody sees totals.",
        "Replaced hearts with 8 sticker reactions after testers wanted tone, not approval.",
        "Grouped the feed by day and added an 'all caught up' end state.",
        "Capped circles at 8 people after larger test groups reported the same posting anxiety.",
      ],
      "The final app has day-grouped feeds, sticker reactions with springy physics, a 3-tap multi-photo upload flow, and a caught-up end state. Every animation is under 400ms so the app feels light rather than sticky.",
      "In a 3-week pilot with 4 friend groups, 88% of testers posted at least twice a week — three times the rate they reported on their main social apps — and nobody deleted a post during the pilot, the behaviour the design was built to prevent."
    ),
    results: [
      { label: "Weekly posters", value: "88%" },
      { label: "Posts deleted", value: "0" },
      { label: "Taps to share", value: "3" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const achievements = [
  {
    emoji: "🏆",
    title: "Hackathon Finalist",
    org: "SweetCode Hack 2025",
    note: "Top 5 of 84 teams — designed and prototyped a wellness app in 36 hours.",
    color: "bg-candy-pink/40",
  },
  {
    emoji: "🎨",
    title: "Student Designer of the Year",
    org: "Design Society, 2024",
    note: "Awarded for a semester-long accessibility redesign project.",
    color: "bg-mint/40",
  },
  {
    emoji: "📜",
    title: "Google UX Design Certificate",
    org: "Coursera · 2024",
    note: "7-course professional certificate, 3 end-to-end case studies.",
    color: "bg-butter/60",
  },
  {
    emoji: "🎀",
    title: "Interaction Design Foundation",
    org: "UI Design Patterns · 2025",
    note: "Certified in mobile UI patterns and design systems.",
    color: "bg-candy-pink-soft",
  },
  {
    emoji: "💻",
    title: "Multiple Web Projects",
    org: "Freelance · 2023–now",
    note: "12+ shipped websites for small brands, bakeries and creators.",
    color: "bg-mint/40",
  },
  {
    emoji: "🚀",
    title: "Product Design Intern",
    org: "Pastel Labs, Summer 2025",
    note: "Shipped 4 features into a live product used by 20k people.",
    color: "bg-butter/60",
  },
  {
    emoji: "✏️",
    title: "Published Work",
    org: "UX Collective (Medium)",
    note: "'Designing kinder empty states' — 4.2k reads.",
    color: "bg-candy-pink/40",
  },
  {
    emoji: "🌷",
    title: "Design Club President",
    org: "University Design Org",
    note: "Grew the club from 20 to 120 members and ran 8 workshops.",
    color: "bg-candy-pink-soft",
  },
];

export const testimonials = [
  {
    quote:
      "She asked questions nobody else asked. Our checkout finally makes sense and sales followed.",
    name: "Mika R.",
    role: "Founder, Sugar & Lace",
    emoji: "🍬",
  },
  {
    quote:
      "Every decision came with a reason. It felt like working with a designer twice her experience.",
    name: "Dan P.",
    role: "PM, Candy Analytics",
    emoji: "📊",
  },
  {
    quote:
      "Our brand finally looks like us — soft, honest and impossible to confuse with anyone else.",
    name: "Rosa L.",
    role: "Co-founder, Girl Roses Beauty",
    emoji: "🌹",
  },
];
