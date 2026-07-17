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
    year: "Recent",
    description:
      "A new microfinance brand developed at Jericho Advertising, with the visual identity led from logo to rollout system.",
    className: "opencred",
    client: "OpenCred Finance / AFC Commercial Bank",
    location: "Zimbabwe",
    role: "Lead and sole designer",
    context: "Agency project / Jericho Advertising",
    team: "Strategy, copy and account teams at Jericho",
    headline:
      "Turning a collaboratively developed name into a clear, credible and usable financial identity.",
    verifiedNotes: [
      {
        label: "Context",
        text:
          "The OpenCred name was developed collaboratively within the agency. The wider project was a team effort across Jericho Advertising.",
      },
      {
        label: "My contribution",
        text:
          "I was the lead and only designer. I created the logo and identity, brand guide, presentation mockups, social media look and the wider visual language.",
      },
      {
        label: "Case-study status",
        text:
          "The visual story is ready to be assembled once the approved identity files, guide pages and rollout mockups are added to this portfolio.",
      },
    ],
    services: [
      "Logo design",
      "Visual identity",
      "Brand guidelines",
      "Mockup direction",
      "Social media system",
    ],
    nextAssets: [
      "Final logo files",
      "Selected brand-guide spreads",
      "Best identity mockups",
      "Approved social applications",
    ],
    highlights: [
      { value: "Lead", label: "design role" },
      { value: "01", label: "designer" },
      { value: "Full", label: "visual system" },
    ],
    palette: ["#15372f", "#e9f36a", "#f2efe8", "#11110f"],
  },
  {
    number: "02",
    slug: "tm-pick-n-pay-billboard",
    title: "TM Pick n Pay",
    category: "Outdoor advertising",
    discipline: "Graphic design",
    year: "Recent",
    description:
      "A billboard designed for TM Pick n Pay at Jericho Advertising, prepared for a fuller story using live-site photography and video.",
    className: "tm-billboard",
    client: "TM Pick n Pay",
    location: "Zimbabwe",
    role: "Designer",
    context: "Agency project / Jericho Advertising",
    team: "Jericho Advertising",
    headline:
      "Designing for the few seconds in which an outdoor message has to land.",
    verifiedNotes: [
      {
        label: "Context",
        text:
          "This billboard was created within Jericho Advertising for TM Pick n Pay. Permission has been granted to present the work.",
      },
      {
        label: "My contribution",
        text:
          "I designed the billboard and can document the work from source files, mockups, photographs and video of the finished placement.",
      },
      {
        label: "Case-study status",
        text:
          "The final page will pair the artwork with real-world scale, a concise design rationale and the approved project context.",
      },
    ],
    services: [
      "Outdoor advertising",
      "Visual communication",
      "Layout and typography",
      "Production artwork",
    ],
    nextAssets: [
      "Final billboard artwork",
      "Best daylight photograph",
      "Best night or traffic photograph",
      "Short location video",
    ],
    highlights: [
      { value: "OOH", label: "primary format" },
      { value: "Live", label: "real-world work" },
      { value: "Yes", label: "permission cleared" },
    ],
    palette: ["#d71920", "#f2efe8", "#0b7a3e", "#f4d12b"],
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
