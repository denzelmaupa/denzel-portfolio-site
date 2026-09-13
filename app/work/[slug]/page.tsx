import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectArtwork } from "../../components/ProjectArtwork";
import { StudioPortalCaseStudy } from "../../components/StudioPortalCaseStudy";
import { getProject, projects } from "../../content/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Denzel Maupa`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(index + 1) % projects.length];
  const isOpenCred = project.slug === "opencred-finance";
  const isTm = project.slug === "tm-pick-n-pay-billboard";
  const isPortal = project.slug === "jericho-studio-portal";

  return (
    <main className="interior-page" id="top">
      <header className="site-header interior-header">
        <a className="wordmark" href="/" aria-label="Denzel Maupa, home">DM<span>®</span></a>
        <p className="header-role">{project.category}<br />{project.year}</p>
        <nav aria-label="Primary navigation">
          <a href="/#work">Work</a>
          <a href="/about">About</a>
          <a href="/resume">Résumé</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <section className="case-intro">
        <div className="case-kicker">
          <p><span>{project.number}</span> {project.discipline} / {project.category}</p>
          <p>{project.client} / {project.location}</p>
        </div>
        <h1>{project.title}</h1>
        <p className="case-headline">{project.headline}</p>
      </section>

      <section className={`case-artwork project-art ${project.className}`} aria-label={`${project.title} project preview`}>
        <ProjectArtwork project={project} />
      </section>

      <section className="case-facts" aria-label="Project facts">
        <div><p>Role</p><span>{project.role}</span></div>
        <div><p>Context</p><span>{project.context}</span></div>
        <div><p>Team</p><span>{project.team}</span></div>
        <div><p>Discipline</p><span>{project.discipline}</span></div>
      </section>

      <section className="case-overview">
        <div className="case-overview-label">Project overview / {project.year}</div>
        <div className="case-copy-block">
          <p className="case-copy-lead">{project.description}</p>
          <div className="case-services">
            {project.services.map((service, serviceIndex) => (
              <p key={service}><span>0{serviceIndex + 1}</span>{service}</p>
            ))}
          </div>
        </div>
      </section>

      {isOpenCred && (
        <>
          <section className="opencred-section opencred-identity" aria-labelledby="opencred-identity-title">
            <div className="opencred-section-head">
              <p>01 / Identity system</p>
              <h2 id="opencred-identity-title">Familiar enough to trust. Distinct enough to remember.</h2>
              <p className="opencred-section-copy">
                The final wordmark keeps AFC’s visual equity close while giving the
                microfinance brand its own rhythm. The leaf carries the relationship;
                the two greens make OPEN and CRED readable as separate ideas.
              </p>
            </div>
            <div className="opencred-logo-grid">
              <figure className="opencred-logo-card light">
                <img src="/projects/opencred/logo-primary.svg" alt="Primary OpenCred Finance logo" />
                <figcaption>Primary identity / approved artwork</figcaption>
              </figure>
              <figure className="opencred-logo-card dark">
                <img src="/projects/opencred/logo-reversed.svg" alt="Reversed OpenCred Finance logo" />
                <figcaption>Reversed identity / approved artwork</figcaption>
              </figure>
            </div>
            <figure className="opencred-wide-figure">
              <img
                src="/projects/opencred/typography.jpg"
                alt="OpenCred brand guide typography page showing the Avenir family"
                loading="lazy"
              />
              <figcaption>Brand guide / Avenir typography system</figcaption>
            </figure>
          </section>

          <section className="opencred-section opencred-social" aria-labelledby="opencred-social-title">
            <div className="opencred-section-head">
              <p>02 / Social system</p>
              <h2 id="opencred-social-title">A financial brand still needs a human voice.</h2>
              <p className="opencred-section-copy">
                The social system translates credibility into clear, direct communication:
                strong headlines, generous scale and a consistent frame built from the leaf.
              </p>
            </div>
            <div className="opencred-social-grid">
              <figure>
                <img
                  src="/projects/opencred/social-finance-works.jpg"
                  alt="OpenCred social artwork with the headline Finance That Works for You"
                  loading="lazy"
                />
                <figcaption>Brand promise</figcaption>
              </figure>
              <figure>
                <img
                  src="/projects/opencred/social-everyday-needs.jpg"
                  alt="OpenCred social artwork explaining support for everyday needs"
                  loading="lazy"
                />
                <figcaption>Product information</figcaption>
              </figure>
              <figure>
                <img
                  src="/projects/opencred/social-stand-strong.jpg"
                  alt="OpenCred social artwork with the headline Stand Strong"
                  loading="lazy"
                />
                <figcaption>Campaign expression</figcaption>
              </figure>
            </div>
          </section>

          <section className="opencred-section opencred-spatial" aria-labelledby="opencred-spatial-title">
            <div className="opencred-section-head">
              <p>03 / Spatial direction</p>
              <h2 id="opencred-spatial-title">The identity was designed to live beyond the logo.</h2>
              <p className="opencred-section-copy">
                Signage and interior visualisations tested how the system could move from
                screens into customer-facing spaces while remaining recognisably OpenCred.
              </p>
            </div>
            <figure className="opencred-spatial-feature">
              <img
                src="/projects/opencred/spatial-signage.jpg"
                alt="OpenCred acrylic signage visualisation"
                loading="lazy"
              />
              <figcaption>Signage application visualisation</figcaption>
            </figure>
            <div className="opencred-spatial-grid">
              <figure>
                <img
                  src="/projects/opencred/spatial-branch.jpg"
                  alt="OpenCred customer branch interior visualisation"
                  loading="lazy"
                />
                <figcaption>Customer space visualisation</figcaption>
              </figure>
              <figure>
                <img
                  src="/projects/opencred/spatial-office.jpg"
                  alt="OpenCred office wall identity visualisation"
                  loading="lazy"
                />
                <figcaption>Office identity visualisation</figcaption>
              </figure>
            </div>
          </section>
        </>
      )}

      {isTm && (
        <>
          <section className="tm-case-section tm-context" aria-labelledby="tm-context-title">
            <div className="tm-case-head">
              <p>01 / Campaign context</p>
              <h2 id="tm-context-title">Before designing forward, I had to understand what already worked.</h2>
              <p>
                “Real Value Always” already had strong outdoor equity. The 2023
                execution relied on clear branding and restraint; the 2025 billboard
                used a more elaborate 3D wordmark and flying products. These are
                campaign references—not designs I claim as my own.
              </p>
            </div>
            <div className="tm-context-grid">
              <figure>
                <img
                  src="/projects/tm-pick-n-pay/context-2023.jpg"
                  alt="TM Pick n Pay 2023 Real Value Always billboard campaign reference"
                  loading="lazy"
                />
                <figcaption>2023 / Campaign reference / supplied for context</figcaption>
              </figure>
              <figure>
                <img
                  src="/projects/tm-pick-n-pay/context-2025.jpg"
                  alt="TM Pick n Pay 2025 three-dimensional Real Value Always billboard campaign reference"
                  loading="lazy"
                />
                <figcaption>2025 / Campaign reference / supplied for context</figcaption>
              </figure>
            </div>
          </section>

          <section className="tm-case-section tm-idea" aria-labelledby="tm-idea-title">
            <div className="tm-case-head">
              <p>02 / The selected idea</p>
              <h2 id="tm-idea-title">Recognise the value before reading about it.</h2>
              <p>
                Rather than placing a bag on the billboard, I made the entire
                billboard the bag. Its kraft-paper texture, oversized handle and
                abundance of familiar products turn an everyday shopping object
                into the campaign’s central message.
              </p>
            </div>
            <figure className="tm-artwork-feature">
              <img
                src="/projects/tm-pick-n-pay/final-artwork.jpg"
                alt="Final TM Pick n Pay Real Value Always billboard artwork"
                loading="lazy"
              />
              <figcaption>Selected direction / final landscape artwork</figcaption>
            </figure>
          </section>

          <section className="tm-case-section tm-routes" aria-labelledby="tm-routes-title">
            <div className="tm-case-head">
              <p>03 / Alternative routes</p>
              <h2 id="tm-routes-title">Three answers to the same brief.</h2>
              <p>
                Agency review called for multiple directions. Alongside the bag
                concept, I explored a digital-service story built around Click n
                Collect and a dimensional treatment that evolved the earlier
                wordmark-led campaign. The first route remained the clearest.
              </p>
            </div>
            <div className="tm-route-grid">
              <figure>
                <img
                  src="/projects/tm-pick-n-pay/concept-click-collect.jpg"
                  alt="Alternative TM Pick n Pay billboard concept focused on Click n Collect delivery"
                  loading="lazy"
                />
                <figcaption>Exploration 02 / Click n Collect</figcaption>
              </figure>
              <figure>
                <img
                  src="/projects/tm-pick-n-pay/concept-3d-wordmark.jpg"
                  alt="Alternative TM Pick n Pay billboard concept using a three-dimensional Real Value Always wordmark"
                  loading="lazy"
                />
                <figcaption>Exploration 03 / Dimensional wordmark</figcaption>
              </figure>
            </div>
          </section>

          <section className="tm-case-section tm-rollout" aria-labelledby="tm-rollout-title">
            <div className="tm-case-head">
              <p>04 / Format system</p>
              <h2 id="tm-rollout-title">One idea, built to survive very different proportions.</h2>
              <p>
                The hierarchy stays recognisable as the campaign moves from long
                landscape boards to tall portrait formats. Live-site photographs
                will replace these mock-ups when the final selection is ready.
              </p>
            </div>
            <figure className="tm-rollout-feature">
              <img
                src="/projects/tm-pick-n-pay/final-landscape-mockup.jpg"
                alt="Landscape TM Pick n Pay billboard mock-up"
                loading="lazy"
              />
              <figcaption>Landscape application / temporary mock-up</figcaption>
            </figure>
            <figure className="tm-rollout-portrait">
              <img
                src="/projects/tm-pick-n-pay/final-portrait-mockup.jpg"
                alt="Portrait TM Pick n Pay billboard mock-up"
                loading="lazy"
              />
              <figcaption>Portrait application / temporary mock-up</figcaption>
            </figure>
          </section>
        </>
      )}

      {isPortal && <StudioPortalCaseStudy />}

      <section className="case-process">
        <div>
          <p>
            {isOpenCred
              ? "Design response / final system"
              : isTm
                ? "Outdoor principles / final system"
                : "Product principles / live system"}
          </p>
          <h2>
            {isOpenCred
              ? "The constraint became the direction."
              : isTm
                ? "Designed to land before the next exit."
                : "One source of truth, shaped around five roles."}
          </h2>
        </div>
        <ol>
          {project.nextAssets.map((asset, assetIndex) => (
            <li key={asset}><span>0{assetIndex + 1}</span>{asset}</li>
          ))}
        </ol>
      </section>

      <section className="case-story">
        {project.verifiedNotes.map((note, noteIndex) => (
          <article key={note.label}>
            <p className="story-label">0{noteIndex + 1} / {note.label}</p>
            <p>{note.text}</p>
          </article>
        ))}
      </section>

      {(isOpenCred || isTm || isPortal) && (
        <section className="opencred-credit">
          <p>Project credit</p>
          {isOpenCred ? (
            <p>
              OpenCred Finance, an AFC Commercial Bank product. Visual identity designed by
              Denzel Maupa at Jericho Advertising. Naming developed collaboratively with the
              Jericho team and AFC Commercial Bank’s marketing team.
            </p>
          ) : isTm ? (
            <p>
              TM Pick n Pay “Real Value Always” billboard concept and execution
              designed by Denzel Maupa at Jericho Advertising. Earlier campaign
              references are shown only to explain the creative context.
            </p>
          ) : (
            <p>
              Jericho Studio Portal was conceived, designed and built by Denzel Maupa
              for Jericho Advertising. Leadership and team feedback informed later
              workflows. The live system and its data remain private.
            </p>
          )}
        </section>
      )}

      <section className="case-metrics" aria-label="Project highlights">
        {project.highlights.map((highlight) => (
          <div key={highlight.label}><strong>{highlight.value}</strong><span>{highlight.label}</span></div>
        ))}
      </section>

      <section className="palette-section" aria-label="Project colour palette">
        {project.palette.map((colour) => (
          <div key={colour} style={{ backgroundColor: colour }}><span>{colour}</span></div>
        ))}
      </section>

      <footer className="next-project">
        <p>Next project / {nextProject.number}</p>
        <a href={`/work/${nextProject.slug}`}>{nextProject.title}<span>↗</span></a>
        <div className="footer-base">
          <p>© Denzel Maupa 2026</p>
          <a href="/">Home</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
