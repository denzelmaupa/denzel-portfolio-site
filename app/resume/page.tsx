import type { Metadata } from "next";
import { PrintResumeButton } from "../components/PrintResumeButton";

export const metadata: Metadata = {
  title: "Résumé — Denzel Maupa",
  description:
    "Résumé of Denzel Maupa, a Zimbabwean graphic designer and visual communicator working across branding, advertising and UI/UX.",
};

const experience = [
  {
    organisation: "Jericho Advertising",
    role: "Graphic Designer",
    period: "Jan 2024 — Present",
    points: [
      "Design brand identities and integrated campaigns across social media, digital advertising, print, packaging, outdoor and in-store applications.",
      "Take visual work from concept through production while collaborating with strategy, copy, account and creative teams.",
      "Contribute UI/UX thinking and responsive interface design when projects extend into digital experiences.",
    ],
  },
  {
    organisation: "M&J Zimbabwe",
    role: "Graphic Designer",
    period: "Sep 2023 — Jan 2024",
    points: [
      "Produced digital and print design for a group of companies, including social media, web and marketing collateral.",
      "Supported content development, photography and videography for social channels.",
    ],
  },
  {
    organisation: "Uncommon.org",
    role: "Volunteer Instructor",
    period: "Aug 2022 — Aug 2023",
    points: [
      "Taught introductory coding through Scratch and Woof, helping young learners build confidence with digital tools.",
    ],
  },
];

const selectedWork = [
  {
    title: "OpenCred Finance",
    meta: "Lead Designer / Agency project",
    copy:
      "Led the visual identity as the project’s sole designer, creating the logo, identity system, brand guide, mockups and social media look. Naming was developed collaboratively within Jericho.",
  },
  {
    title: "TM Pick n Pay",
    meta: "Billboard Design / Agency project",
    copy:
      "Designed a live outdoor billboard for TM Pick n Pay, with permission to present the work and document it through final artwork, photography and video.",
  },
  {
    title: "AI Surveillance Concept",
    meta: "Team Lead — UI/UX + Graphic Design / First Prize, 2023",
    copy:
      "Led the interface and visual design for a hackathon concept using image recognition to flag potential security and safety risks.",
  },
];

export default function ResumePage() {
  return (
    <main className="interior-page resume-page" id="top">
      <header className="site-header interior-header resume-site-header">
        <a className="wordmark" href="/" aria-label="Denzel Maupa, home">DM<span>®</span></a>
        <p className="header-role">Graphic designer &amp; visual communicator<br />Harare / Global</p>
        <nav aria-label="Primary navigation">
          <a href="/#work">Work</a>
          <a href="/about">About</a>
          <a href="/resume" aria-current="page">Résumé</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <section className="resume-intro">
        <div>
          <p className="page-label">Professional résumé / 2026</p>
          <h1>Denzel<br /><i>Maupa.</i></h1>
        </div>
        <div className="resume-intro-copy">
          <p>Graphic designer &amp; visual communicator</p>
          <span>Branding / Advertising / UI/UX</span>
          <PrintResumeButton />
        </div>
      </section>

      <article className="resume-sheet" aria-label="Denzel Maupa résumé">
        <header className="resume-document-header">
          <div>
            <p className="resume-document-label">Denzel Maupa / Résumé</p>
            <h2>Graphic designer<br /><i>&amp; visual communicator.</i></h2>
          </div>
          <p className="resume-summary">
            Zimbabwean graphic designer with agency experience across brand identity, advertising,
            campaigns and multi-format visual systems. I combine clear communication, considered
            craft and practical production thinking, with certified UI/UX training and a growing
            digital-design practice spanning interface design and AI-assisted product prototyping.
          </p>
          <div className="resume-contact">
            <a href="mailto:denzelmaupa@gmail.com">denzelmaupa@gmail.com</a>
            <a href="tel:+263788524927">+263 78 852 4927</a>
            <a href="https://www.linkedin.com/in/denzel-maupa/" target="_blank" rel="noreferrer">linkedin.com/in/denzel-maupa</a>
            <a href="https://www.instagram.com/designed_by_denzel/" target="_blank" rel="noreferrer">@designed_by_denzel</a>
            <span>Harare, Zimbabwe</span>
          </div>
        </header>

        <div className="resume-document-grid">
          <aside className="resume-rail">
            <section>
              <p className="resume-section-label">Core practice</p>
              <ul className="resume-tags">
                <li>Brand identity</li>
                <li>Advertising</li>
                <li>Campaign systems</li>
                <li>Editorial design</li>
                <li>Social media design</li>
                <li>Outdoor &amp; print</li>
                <li>UI/UX design</li>
                <li>AI-assisted prototyping</li>
                <li>Photography</li>
              </ul>
            </section>

            <section>
              <p className="resume-section-label">Tools</p>
              <p className="resume-rail-copy">
                Affinity Designer / Photo / Publisher<br />
                Figma<br />
                Adobe Photoshop / Illustrator / InDesign<br />
                HTML &amp; CSS<br />
                React / Next.js<br />
                Supabase
              </p>
            </section>

            <section>
              <p className="resume-section-label">Training</p>
              <h3>Uncommon.org</h3>
              <p className="resume-small-meta">Aug 2022 — Aug 2023</p>
              <p className="resume-rail-copy">
                UI/UX and graphic design, front-end fundamentals and digital marketing.
              </p>
            </section>

            <section>
              <p className="resume-section-label">Positioning</p>
              <p className="resume-principle">Maximised minimalism.<br /><i>Creative simplicity.</i></p>
            </section>
          </aside>

          <div className="resume-main">
            <section className="resume-section">
              <p className="resume-section-label">Experience / 01</p>
              {experience.map((item) => (
                <article className="resume-entry" key={item.organisation}>
                  <div className="resume-entry-meta">
                    <h3>{item.organisation}</h3>
                    <p>{item.period}</p>
                  </div>
                  <div className="resume-entry-copy">
                    <h4>{item.role}</h4>
                    <ul>
                      {item.points.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </section>

            <section className="resume-section resume-selected-work">
              <p className="resume-section-label">Selected work / 02</p>
              {selectedWork.map((project) => (
                <article className="resume-project-entry" key={project.title}>
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.meta}</p>
                  </div>
                  <p>{project.copy}</p>
                </article>
              ))}
            </section>
          </div>
        </div>

        <footer className="resume-document-footer">
          <p>Available for new roles, select projects and creative collaborations.</p>
          <span>Denzel Maupa / 2026</span>
        </footer>
      </article>

      <footer className="interior-footer resume-page-footer">
        <p>© Denzel Maupa 2026</p><a href="/">Return home ↙</a>
      </footer>
    </main>
  );
}
