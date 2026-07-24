import type { Project } from "../content/projects";

export function ProjectArtwork({ project }: { project: Project }) {
  if (project.className === "opencred") {
    return (
      <>
        <div className="opencred-real-hero">
          <p>BRAND IDENTITY / MICROFINANCE / ZIMBABWE</p>
          <img
            src="/projects/opencred/logo-reversed.svg"
            alt="OpenCred Finance"
          />
          <div className="opencred-hero-meta">
            <span>A product of AFC Commercial Bank</span>
            <span>Identity completed 2025 / Launched January 2026</span>
          </div>
        </div>
      </>
    );
  }

  if (project.className === "tm-billboard") {
    return (
      <div className="tm-real-hero">
        <img
          src="/projects/tm-pick-n-pay/final-landscape-mockup.jpg"
          alt="TM Pick n Pay Real Value Always brown shopping bag billboard mock-up"
        />
        <div className="tm-real-hero-meta">
          <span>OUT-OF-HOME / NATIONWIDE / ZIMBABWE</span>
          <span>Concept developed January—February 2026 / Rollout from March 2026</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="symphony-kicker">PERSONAL WORK / BRAND EXPLORATION</div>
      <div className="symphony-title">SYMPHONY</div>
      <div className="symphony-note note-one">♪</div>
      <div className="symphony-note note-two">●</div>
      <div className="symphony-pack pack-one"><span>SPICE<br />No. 01</span></div>
      <div className="symphony-pack pack-two"><span>SPICE<br />No. 02</span></div>
      <div className="symphony-caption">FLAVOUR / RHYTHM / IDENTITY</div>
    </>
  );
}
