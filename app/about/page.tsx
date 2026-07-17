import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Denzel Maupa",
  description: "About Zimbabwean graphic designer and visual communicator Denzel Maupa.",
};

export default function AboutPage() {
  return (
    <main className="interior-page about-page">
      <header className="site-header interior-header">
        <a className="wordmark" href="/" aria-label="Denzel Maupa, home">DM<span>®</span></a>
        <p className="header-role">Graphic designer &amp; visual communicator<br />Harare / Global</p>
        <nav aria-label="Primary navigation">
          <a href="/#work">Work</a>
          <a href="/about" aria-current="page">About</a>
          <a href="/resume">Résumé</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <section className="about-hero">
        <p className="page-label">01 / About</p>
        <h1>I believe in <i>maximised minimalism</i> and creative simplicity.</h1>
      </section>

      <section className="about-body">
        <div className="about-portrait" aria-label="Denzel Maupa monogram artwork"><span>D/M</span></div>
        <div className="about-copy">
          <p className="about-lead">I’m Denzel Maupa, a Zimbabwean graphic designer and visual communicator based in Harare.</p>
          <p>Over the past few years, agency work has taken me through branding, advertising, large documents, magazines, social media, web, UI, photography and campaign design. It has also taught me that strong communication is as much about judgment as it is about aesthetics.</p>
          <p>Graphic design is the centre of my current practice. I’m also certified in UI/UX and serious about growing that side of my work through research, interface systems and thoughtful digital experiences.</p>
          <p>Music and sound shape how I think about rhythm, pause, repetition and energy. That sensibility sits behind my preference for work that feels modern and precise without losing warmth or character.</p>
          <a className="text-link" href="/contact">Start a conversation <span>↗</span></a>
        </div>
      </section>

      <section className="about-details">
        <div><p>Selected services</p><span>Branding / Advertising / Editorial / Social / UI/UX</span></div>
        <div><p>Current role</p><span>Graphic Designer / Jericho Advertising</span></div>
        <div><p>Open to</p><span>New roles / Select projects / Creative collaborations</span></div>
        <div><p>Based</p><span>Harare, Zimbabwe / Working globally</span></div>
      </section>

      <footer className="interior-footer">
        <p>© Denzel Maupa 2026</p><a href="/">Return home ↙</a>
      </footer>
    </main>
  );
}
