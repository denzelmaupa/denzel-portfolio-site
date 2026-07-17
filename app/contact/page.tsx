import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Denzel Maupa",
  description: "Contact Denzel Maupa about design roles, projects and creative collaborations.",
};

export default function ContactPage() {
  return (
    <main className="interior-page contact-page">
      <header className="site-header interior-header">
        <a className="wordmark" href="/" aria-label="Denzel Maupa, home">DM<span>®</span></a>
        <p className="header-role">Graphic designer &amp; visual communicator<br />Harare / Global</p>
        <nav aria-label="Primary navigation">
          <a href="/#work">Work</a>
          <a href="/about">About</a>
          <a href="/resume">Résumé</a>
          <a href="/contact" aria-current="page">Contact</a>
        </nav>
      </header>

      <section className="contact-page-main">
        <div className="contact-status"><span />Open to the right conversation</div>
        <p>Have a role, project or collaboration in mind?</p>
        <a href="mailto:denzelmaupa@gmail.com">Say<br /><i>hello.</i><span>↗</span></a>
      </section>

      <section className="contact-details">
        <div><p>Email</p><a href="mailto:denzelmaupa@gmail.com">denzelmaupa@gmail.com</a></div>
        <div><p>WhatsApp</p><a href="https://wa.me/263788524927" target="_blank" rel="noreferrer">+263 78 852 4927</a></div>
        <div><p>Social</p><a href="https://www.linkedin.com/in/denzel-maupa/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.instagram.com/designed_by_denzel/" target="_blank" rel="noreferrer">Instagram</a></div>
      </section>

      <footer className="interior-footer">
        <p>© Denzel Maupa 2026</p><a href="/">Return home ↙</a>
      </footer>
    </main>
  );
}
