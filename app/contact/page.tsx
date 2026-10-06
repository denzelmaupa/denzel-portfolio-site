import Link from "next/link";
import { createPageMetadata, SUPPORTING_PAGE_SEO } from "../lib/seo";

export const metadata = createPageMetadata(SUPPORTING_PAGE_SEO.contact);

export default function ContactPage() {
  return (
    <main className="interior-page contact-page">
      <header className="site-header interior-header">
        <Link className="wordmark" href="/" aria-label="Denzel Maupa, home">DM<span>®</span></Link>
        <p className="header-role">Graphic designer &amp; visual communicator<br />Harare / Global</p>
        <nav aria-label="Primary navigation">
          <Link href="/#work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/resume">Résumé</Link>
          <Link href="/contact" aria-current="page">Contact</Link>
        </nav>
      </header>

      <section className="contact-page-main">
        <div className="contact-status"><span />Open to the right conversation</div>
        <h1>Have a design role, client project or collaboration in mind?</h1>
        <p>Based in Harare, Zimbabwe. Open to work across Southern Africa, remote partnerships and international onsite opportunities.</p>
        <a href="mailto:denzelmaupa@gmail.com">Say<br /><i>hello.</i><span>↗</span></a>
      </section>

      <section className="contact-details">
        <div><p>Email</p><a href="mailto:denzelmaupa@gmail.com">denzelmaupa@gmail.com</a></div>
        <div><p>WhatsApp</p><a href="https://wa.me/263788524927" target="_blank" rel="noreferrer">+263 78 852 4927</a></div>
        <div><p>Social</p><a href="https://www.linkedin.com/in/denzel-maupa/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.instagram.com/designed_by_denzel/" target="_blank" rel="noreferrer">Instagram</a></div>
      </section>

      <footer className="interior-footer">
        <p>© Denzel Maupa 2026</p><Link href="/">Return home ↙</Link>
      </footer>
    </main>
  );
}
