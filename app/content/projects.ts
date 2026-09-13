export type Project = {
  number: string;
  slug: string;
  title: string;
  category: string;
  discipline: "Graphic design" | "UI/UX design" | "Brand + product";
  year: string;
  description: string;
  className: "opencred" | "tm-billboard" | "studio-portal";
  client: string;
  location: string;
  role: string;
  context: string;
  team: string;
  headline: string;
  verifiedNotes: { label: string; text: string }[];
  services: string[];
  nextAssets: string[];
  highlights: { value: string; label: string }[];
  palette: string[];
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "opencred-finance",
    title: "OpenCred Finance",
    category: "Naming + brand identity",
    discipline: "Graphic design",
    year: "2025—2026",
    description:
      "AFC Commercial Bank’s microfinance identity, designed to make accessible finance feel modern and approachable while carrying forward the trust of an established national bank.",
    className: "opencred",
    client: "OpenCred Finance / AFC Commercial Bank",
    location: "Zimbabwe",
    role: "Lead and sole designer",
    context: "Agency project / Jericho Advertising",
    team: "Jericho + AFC Commercial Bank marketing",
    headline:
      "Connected to AFC. Distinct enough to stand on its own.",
    verifiedNotes: [
      {
        label: "The challenge",
        text:
          "The identity had to inherit AFC Commercial Bank’s credibility without simply becoming another expression of the parent brand. The answer was already present in AFC’s visual heritage: its greens, leaf motif and long-standing relationship with customers across Zimbabwe.",
      },
      {
        label: "The response",
        text:
          "I used the palette and leaf as familiar anchors, then gave OpenCred a more modern, approachable voice. The two-tone wordmark creates a clear visual break between OPEN and CRED, balancing accessibility with financial credibility.",
      },
      {
        label: "What I learned",
        text:
          "Good visual communication is not only about how something looks, but how it sounds. This project made me ask what a brand’s voice is saying, why people should trust it and how every detail can repeat that message consistently.",
      },
    ],
    services: [
      "Naming collaboration",
      "Logo design",
      "Visual identity",
      "Brand guidelines",
      "Social media system",
      "Spatial identity direction",
    ],
    nextAssets: [
      "Use AFC’s established greens to carry recognition and trust",
      "Retain the leaf motif as a link to the parent brand’s heritage",
      "Separate OPEN and CRED through the two-tone wordmark",
      "Scale one visual voice across guidelines, social media and space",
    ],
    highlights: [
      { value: "2025", label: "identity completed" },
      { value: "JAN ’26", label: "brand launched" },
      { value: "01", label: "lead designer" },
    ],
    palette: ["#096A3A", "#8EC740", "#F2EFE8", "#11110F"],
  },
  {
    number: "02",
    slug: "tm-pick-n-pay-billboard",
    title: "TM Pick n Pay",
    category: "Outdoor advertising",
    discipline: "Graphic design",
    year: "2026",
    description:
      "A nationwide billboard campaign for TM Pick n Pay, turning a familiar brown shopping bag into a simple, oversized expression of “Real Value Always.”",
    className: "tm-billboard",
    client: "TM Pick n Pay",
    location: "Zimbabwe",
    role: "Designer",
    context: "Agency project / Jericho Advertising",
    team: "Jericho Advertising",
    headline:
      "The whole billboard became the shopping bag.",
    verifiedNotes: [
      {
        label: "The challenge",
        text:
          "The campaign had to follow two established “Real Value Always” billboards: a deliberately simple brand-led execution in 2023 and a more elaborate 3D wordmark in 2025. The new idea needed to feel just as immediate without repeating either approach.",
      },
      {
        label: "The idea",
        text:
          "I visualised value as a familiar TM Pick n Pay brown shopping bag filled with everyday products, then allowed that bag to become the billboard itself. The object, the product abundance and the payoff line can be understood in a single glance.",
      },
      {
        label: "The outcome",
        text:
          "My first direction was selected during the first client review. It was adapted across more than 25 production formats for a nationwide rollout beginning in March 2026—an especially meaningful moment on a brand of this scale.",
      },
    ],
    services: [
      "Outdoor concept development",
      "Art direction",
      "Image composition",
      "Typography and hierarchy",
      "Production adaptation",
    ],
    nextAssets: [
      "Build recognition before asking the audience to read",
      "Turn one familiar object into the complete visual idea",
      "Use oversized products and branding for highway-speed clarity",
      "Keep the system flexible across more than 25 billboard formats",
    ],
    highlights: [
      { value: "01", label: "selected direction" },
      { value: "25+", label: "production formats" },
      { value: "MAR ’26", label: "rollout began" },
    ],
    palette: ["#0C3B66", "#C8102E", "#B78750", "#F4F0E8"],
  },
  {
    number: "03",
    slug: "jericho-studio-portal",
    title: "Jericho Studio Portal",
    category: "Internal product system",
    discipline: "UI/UX design",
    year: "2025—2026",
    description:
      "An internal agency platform that grew from a personal timer into a role-based system for jobs, time, revisions, reporting and billable hours.",
    className: "studio-portal",
    client: "Jericho Advertising",
    location: "Harare, Zimbabwe",
    role: "Product designer + AI-assisted developer",
    context: "In-house product / Jericho Advertising",
    team: "Denzel Maupa + Jericho leadership and team",
    headline:
      "A personal timer became an agency-wide operating system.",
    verifiedNotes: [
      {
        label: "The problem",
        text:
          "Missed deadlines and disconnected records made it difficult to understand where time was going, what was billable and who needed to act next. The first idea was a timer for my own work; mapping the wider problem revealed an opportunity for the whole agency.",
      },
      {
        label: "The system",
        text:
          "I designed role-specific experiences for designers, social media and client managers, traffic, accounts and administration. Jobs now move through one shared system with assignment, timers, revisions, timesheets, reporting and pro-rata billing logic.",
      },
      {
        label: "The build",
        text:
          "I defined the product requirements, workflows, interface and data relationships, then used Antigravity with Claude Sonnet and Gemini Flash to accelerate React development, Supabase implementation, testing and debugging. The product has been in full use since June 2026.",
      },
    ],
    services: [
      "Product strategy",
      "Workflow mapping",
      "UI/UX design",
      "Role and access architecture",
      "AI-assisted React development",
      "Supabase implementation",
      "Testing and deployment",
    ],
    nextAssets: [
      "Start with the smallest real problem, then map the wider system",
      "Show each role only the work and actions relevant to them",
      "Connect jobs, changes, timers and timesheets in one workflow",
      "Turn captured time into useful traffic and billing reports",
    ],
    highlights: [
      { value: "14", label: "active team users" },
      { value: "05", label: "role groups" },
      { value: "06", label: "months to full rollout" },
    ],
    palette: ["#192843", "#CF0A2C", "#2463EB", "#F5F6F9"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
