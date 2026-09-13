const jobs = [
  { id: "#24031", title: "Spring Retail Campaign", client: "Koru Foods", status: "In studio", hours: "3h 42m / 6h" },
  { id: "#24032", title: "Product Launch Toolkit", client: "Northstar Retail", status: "With client", hours: "5h 18m / 8h" },
  { id: "#24033", title: "Mobile App Onboarding", client: "Moyo Finance", status: "Review", hours: "2h 11m / 5h" },
];

const team = [
  { name: "Designer 01", worked: 42, billable: 38 },
  { name: "Designer 02", worked: 37, billable: 31 },
  { name: "Content Manager 01", worked: 29, billable: 24 },
  { name: "Designer 03", worked: 24, billable: 21 },
];

function PortalFrame({ title, label, children }: { title: string; label: string; children: ReactNode }) {
  return (
    <figure className="portal-ui-figure">
      <div className="portal-ui-frame">
        <div className="portal-window-bar">
          <span /><span /><span />
          <p>Jericho Studio Portal / representative interface</p>
        </div>
        {children}
      </div>
      <figcaption><span>{label}</span>{title}</figcaption>
    </figure>
  );
}

function PortalSideNav({ active }: { active: string }) {
  const items = ["Dashboard", "Changes", "Create Job", "Timesheets", "Reports"];
  return (
    <aside className="portal-side-nav" aria-label="Representative product navigation">
      <b>J</b>
      {items.map((item) => <span className={active === item ? "active" : ""} key={item}>{item}</span>)}
    </aside>
  );
}

export function StudioPortalCaseStudy() {
  return (
    <>
      <section className="portal-case-section portal-origin" aria-labelledby="portal-origin-title">
        <div className="portal-case-head">
          <p>01 / Product origin</p>
          <h2 id="portal-origin-title">The smallest version solved one person’s problem.</h2>
          <p>
            I began with a personal timer to understand how long my own jobs took.
            Mapping where those jobs came from—and where the captured time needed to
            go—turned a private utility into a connected agency workflow.
          </p>
        </div>
        <div className="portal-flow" aria-label="Product evolution">
          <article><span>01</span><strong>Personal timer</strong><p>Log a job and understand the time spent.</p></article>
          <i aria-hidden="true">→</i>
          <article><span>02</span><strong>Shared job database</strong><p>Create, assign and move work through the studio.</p></article>
          <i aria-hidden="true">→</i>
          <article><span>03</span><strong>Agency system</strong><p>Connect delivery, revisions, reporting and billing.</p></article>
        </div>
      </section>

      <section className="portal-case-section portal-roles" aria-labelledby="portal-roles-title">
        <div className="portal-case-head">
          <p>02 / Role-based workflows</p>
          <h2 id="portal-roles-title">One system. Five different views of the work.</h2>
          <p>
            Designers, client and social media managers, traffic, accounts and
            administrators do not need the same dashboard. Permissions and
            role-specific interfaces keep the product focused while preserving one
            source of truth.
          </p>
        </div>
        <div className="portal-role-list" aria-label="Product roles">
          <span>Designers</span><span>Client + social</span><span>Traffic</span><span>Accounts</span><span>Admin</span>
        </div>
        <div className="portal-ui-grid">
          <PortalFrame label="Designer view" title="Priorities, time and revisions in one place">
            <div className="portal-app-shell">
              <PortalSideNav active="Dashboard" />
              <div className="portal-app-main">
                <div className="portal-app-heading"><div><small>MY WORKSPACE</small><h3>Good morning, Designer 01.</h3></div><button>Start timer</button></div>
                <div className="portal-stat-grid">
                  <div><small>ACTIVE JOBS</small><strong>08</strong></div>
                  <div><small>DUE THIS WEEK</small><strong>04</strong></div>
                  <div className="warning"><small>PAST DUE</small><strong>02</strong></div>
                  <div><small>HOURS LOGGED</small><strong>31h 40m</strong></div>
                </div>
                <div className="portal-focus-card">
                  <div><small>FOCUS NOW / #24031</small><h4>Spring Retail Campaign</h4><p>Koru Foods · Medium priority</p></div>
                  <button>View job</button>
                </div>
                <div className="portal-mini-jobs">
                  {jobs.slice(1).map((job) => <p key={job.id}><span>{job.id}</span><b>{job.title}</b><em>{job.status}</em></p>)}
                </div>
              </div>
            </div>
          </PortalFrame>

          <PortalFrame label="Client manager view" title="Create, brief and assign work without breaking the chain">
            <div className="portal-app-shell">
              <PortalSideNav active="Create Job" />
              <div className="portal-app-main portal-form-main">
                <div className="portal-app-heading"><div><small>NEW REQUEST</small><h3>Create a job</h3></div><span className="portal-timer">00:00:00</span></div>
                <div className="portal-form-grid">
                  <label>Job title<span>September Content Plan</span></label>
                  <label>Client<span>Lumen Mobility</span></label>
                  <label>Job type<span>Static + Digital</span></label>
                  <label>Due date<span>24 September 2026</span></label>
                  <label>Priority<span>Medium</span></label>
                  <label>Budgeted hours<span>08 hours</span></label>
                </div>
                <div className="portal-assignees"><small>ASSIGN TEAM</small><span>Designer 02</span><span>Content Manager 01</span><button>Create job</button></div>
              </div>
            </div>
          </PortalFrame>

          <PortalFrame label="Social media + client view" title="Capture recurring content work that sits outside design jobs">
            <div className="portal-app-shell">
              <PortalSideNav active="Timesheets" />
              <div className="portal-app-main">
                <div className="portal-app-heading"><div><small>DAILY ACTIVITY</small><h3>Social media manager</h3></div><span className="portal-role-pill">CLIENT + SOCIAL</span></div>
                <div className="portal-social-grid">
                  <div><small>POST CONTENT</small><h4>Select clients</h4><p>□ Koru Foods</p><p>□ Northstar Retail</p><p>□ Lumen Mobility</p><button>Start posting timer</button></div>
                  <div><small>CHECK PAGES</small><h4>Activities</h4><p>□ Messages</p><p>□ Comments</p><p>□ Community management</p><button>Start checking timer</button></div>
                </div>
              </div>
            </div>
          </PortalFrame>
        </div>
      </section>

      <section className="portal-case-section portal-reporting" aria-labelledby="portal-reporting-title">
        <div className="portal-case-head">
          <p>03 / Operational visibility</p>
          <h2 id="portal-reporting-title">Captured time only matters when it becomes useful information.</h2>
          <p>
            Traffic reporting shows how work moves through the agency. Billing views
            compare time worked with billable allocation, while pro-rata logic helps
            distribute retainer hours across multidisciplinary teams.
          </p>
        </div>
        <div className="portal-report-grid">
          <PortalFrame label="Traffic report" title="Jobs in, sent, completed and changed">
            <div className="portal-report-card">
              <div className="portal-report-title"><div><small>SEPTEMBER 2026</small><h3>Traffic overview</h3></div><span>MONTH</span></div>
              <div className="portal-report-stats"><p><small>JOBS IN</small><b>42</b></p><p><small>SENT</small><b>38</b></p><p><small>COMPLETED</small><b>34</b></p><p><small>CHANGES</small><b>11</b></p></div>
              <div className="portal-chart" aria-label="Representative traffic chart">
                {[34, 58, 42, 76, 49, 66, 84, 57, 72, 46, 62, 91].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
              </div>
              <div className="portal-chart-key"><span>Jobs in</span><span>Sent to client</span><span>Completed</span></div>
            </div>
          </PortalFrame>

          <PortalFrame label="Efficiency report" title="Worked time, billable allocation and variance">
            <div className="portal-report-card portal-efficiency-card">
              <div className="portal-report-title"><div><small>REPRESENTATIVE TEAM DATA</small><h3>Billable vs actual</h3></div><span>MONTH</span></div>
              <div className="portal-bar-chart" aria-label="Representative team efficiency chart">
                {team.map((person) => (
                  <div key={person.name}><p><i style={{ height: `${person.worked * 2}%` }} /><i style={{ height: `${person.billable * 2}%` }} /></p><span>{person.name}</span></div>
                ))}
              </div>
              <div className="portal-table">
                <p><b>Team member</b><b>Worked</b><b>Billable</b><b>Status</b></p>
                {team.slice(0, 3).map((person) => <p key={person.name}><span>{person.name}</span><span>{person.worked}h</span><span>{person.billable}h</span><em>On track</em></p>)}
              </div>
            </div>
          </PortalFrame>
        </div>
      </section>

      <section className="portal-case-section portal-adoption" aria-labelledby="portal-adoption-title">
        <div className="portal-case-head">
          <p>04 / Build and rollout</p>
          <h2 id="portal-adoption-title">Designed, tested and improved with the people using it.</h2>
          <p>
            The first usable version took two months. Testing, phased implementation
            and live feedback shaped the next four. Leadership input added pro-rata
            billing, while recurring questions became a role-filtered help centre.
          </p>
        </div>
        <div className="portal-timeline">
          <article><span>DEC ’25</span><strong>Problem defined</strong><p>Personal time tracking becomes a wider product opportunity.</p></article>
          <article><span>JAN—FEB</span><strong>Version one</strong><p>Core workflows, role logic and database implemented.</p></article>
          <article><span>MAR</span><strong>Team testing</strong><p>Real jobs expose bugs, gaps and new reporting needs.</p></article>
          <article><span>APR—MAY</span><strong>Phased rollout</strong><p>Workflows expand across departments and responsibilities.</p></article>
          <article><span>JUN ’26</span><strong>Full adoption</strong><p>Fourteen users work through the live system.</p></article>
        </div>
        <div className="portal-disclosure">
          <p>Confidentiality note</p>
          <span>
            The live product is private. Every interface shown here has been
            reconstructed from the implemented system using fictional names, clients,
            jobs and figures. Product structure and interaction decisions remain true
            to the work.
          </span>
        </div>
      </section>
    </>
  );
}
import type { ReactNode } from "react";
