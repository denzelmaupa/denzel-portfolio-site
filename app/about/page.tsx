import Link from "next/link";
import { buildProfilePageJsonLd, createPageMetadata, serializeJsonLd, SUPPORTING_PAGE_SEO } from "../lib/seo";

export const metadata = createPageMetadata(SUPPORTING_PAGE_SEO.about);

export default function AboutPage() {
  return (
    <main className="interior-page about-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildProfilePageJsonLd()) }} />
      <header className="site-header interior-header">
        <Link className="wordmark" href="/" aria-label="Denzel Maupa, home">DM<span>®</span></Link>
        <p className="header-role">Graphic designer &amp; visual communicator<br />Harare / Global</p>
        <nav aria-label="Primary navigation">
          <Link href="/#work">Work</Link>
          <Link href="/about" aria-current="page">About</Link>
          <Link href="/resume">Résumé</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="about-hero">
        <p className="page-label">01 / About</p>
        <h1>I believe in <i>maximised minimalism</i> and creative simplicity.</h1>
      </section>

      <section className="about-body">
        <figure className="about-portrait">
          <img
            src="/images/denzel-maupa-portrait.jpg"
            alt="Portrait of Denzel Maupa"
            width="1600"
            height="2400"
          />
          <figcaption>Denzel Maupa / Harare, Zimbabwe</figcaption>
        </figure>
        <div className="about-copy">
          <p className="about-lead">I’m Denzel Maupa, a Zimbabwean graphic designer and visual communicator based in Harare.</p>
          <p>Over the past few years, agency work has taken me through branding, advertising, large documents, magazines, social media, web, UI, photography and campaign design. It has also taught me that strong communication is as much about judgment as it is about aesthetics.</p>
          <p>My practice moves equally between graphic and brand design, and UI/UX and product design. I carry the same clarity into identity systems, campaigns, workflow mapping, interfaces and digital experiences that have moved from concept into daily use.</p>
          <p>Music and sound shape how I think about rhythm, pause, repetition and energy. That sensibility sits behind my preference for work that feels modern and precise without losing warmth or character.</p>
          <p>I work from Harare with teams across Zimbabwe and Southern Africa, and I’m open to remote work and international onsite opportunities.</p>
          <Link className="text-link" href="/contact">Start a conversation <span>↗</span></Link>
        </div>
      </section>

      <section className="about-details">
        <div><p>Selected services</p><span>Branding / Advertising / Editorial / Social / UI/UX</span></div>
        <div><p>Current role</p><span>Graphic Designer / Jericho Advertising</span></div>
        <div><p>Open to</p><span>Design roles / Client projects / Remote and international work</span></div>
        <div><p>Based</p><span>Harare, Zimbabwe / Working globally</span></div>
      </section>

      <footer className="interior-footer">
        <p>© Denzel Maupa 2026</p><Link href="/">Return home ↙</Link>
      </footer>
    </main>
  );
}
