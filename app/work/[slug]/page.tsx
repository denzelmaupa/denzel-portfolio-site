import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectArtwork } from "../../components/ProjectArtwork";
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

      <section className="case-process">
        <div>
          <p>Asset plan / case study in progress</p>
          <h2>Next, the real work replaces every holding frame.</h2>
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
