import type { Project } from "../content/projects";

export function ProjectArtwork({ project, eager = false }: { project: Project; eager?: boolean }) {
  if (project.className === "opencred") {
    return (
      <>
        <div className="opencred-real-hero">
          <p>BRAND IDENTITY / MICROFINANCE / ZIMBABWE</p>
          <img
            src="/projects/opencred/logo-reversed.svg"
            alt="OpenCred Finance"
            loading={eager ? "eager" : "lazy"}
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
          loading={eager ? "eager" : "lazy"}
        />
        <div className="tm-real-hero-meta">
          <span>OUT-OF-HOME / NATIONWIDE / ZIMBABWE</span>
          <span>Concept developed January—February 2026 / Rollout from March 2026</span>
        </div>
      </div>
    );
  }

  return (
    <div className="studio-real-hero">
      <div className="studio-real-kicker">
        <span>PRODUCT DESIGN / INTERNAL SYSTEM</span>
        <span>14 USERS / 05 ROLES</span>
      </div>
      <div className="studio-preview-window">
        <aside>
          <b>J</b>
          <span className="active">Overview</span>
          <span>Jobs</span>
          <span>Timesheets</span>
          <span>Reports</span>
        </aside>
        <div className="studio-preview-main">
          <div className="studio-preview-heading">
            <div><small>AGENCY WORKSPACE</small><strong>Studio overview</strong></div>
            <button>+ New job</button>
          </div>
          <div className="studio-preview-stats">
            <p><small>ACTIVE JOBS</small><b>18</b></p>
            <p><small>DUE THIS WEEK</small><b>04</b></p>
            <p><small>PENDING CHANGES</small><b>03</b></p>
            <p><small>HOURS LOGGED</small><b>82h</b></p>
          </div>
          <div className="studio-preview-jobs">
            <div><small>FOCUS NOW</small><strong>Spring Retail Campaign</strong><span>Koru Foods / In studio</span></div>
            <div><small>UPCOMING</small><strong>Product Launch Toolkit</strong><span>Northstar Retail / With client</span></div>
            <div><small>REVIEW</small><strong>Mobile App Onboarding</strong><span>Moyo Finance / Review</span></div>
          </div>
        </div>
      </div>
      <p className="studio-real-caption">RECONSTRUCTED INTERFACE / REPRESENTATIVE DATA</p>
    </div>
  );
}
