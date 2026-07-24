export type Project = {
  number: string;
  slug: string;
  title: string;
  category: string;
  discipline: "Graphic design" | "UI/UX design" | "Brand + product";
  year: string;
  description: string;
  className: "opencred" | "tm-billboard" | "symphony";
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
    slug: "symphony-spices",
    title: "Symphony Spices",
    category: "Independent brand project",
    discipline: "Graphic design",
    year: "Personal",
    description:
      "An independent project selected to show a more personal side of the practice beyond agency work.",
    className: "symphony",
    client: "Independent project",
    location: "Harare, Zimbabwe",
    role: "Designer",
    context: "Personal work",
    team: "Self-directed",
    headline:
      "A personal project where flavour, rhythm and visual identity meet.",
    verifiedNotes: [
      {
        label: "Context",
        text:
          "Symphony Spices is personal work and gives the portfolio space for a project that can be discussed without agency restrictions.",
      },
      {
        label: "My contribution",
        text:
          "The project is self-directed. Its exact scope, process and final applications will be documented from the original files.",
      },
      {
        label: "Case-study status",
        text:
          "This page currently acts as an honest holding structure until the strongest visuals and the original creative rationale are selected.",
      },
    ],
    services: [
      "Creative direction",
      "Brand expression",
      "Packaging exploration",
      "Art direction",
    ],
    nextAssets: [
      "Original concept notes",
      "Final identity artwork",
      "Packaging or application mockups",
      "Process sketches",
    ],
    highlights: [
      { value: "Self", label: "directed" },
      { value: "Open", label: "creative scope" },
      { value: "Next", label: "case study to build" },
    ],
    palette: ["#642418", "#e7a93f", "#334126", "#f2e7d2"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
