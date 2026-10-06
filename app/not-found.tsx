import Link from "next/link";

export default function NotFound() {
  return (
    <main className="interior-page not-found-page">
      <header className="site-header interior-header">
        <Link className="wordmark" href="/" aria-label="Denzel Maupa, home">DM<span>®</span></Link>
        <p className="header-role">Graphic designer &amp; visual communicator<br />Harare / Global</p>
        <nav aria-label="Primary navigation">
          <Link href="/#work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/resume">Résumé</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="not-found-content">
        <p className="page-label">404 / Page not found</p>
        <h1>Wrong turn.<br /><i>Keep looking.</i></h1>
        <p>That page isn’t here, but there’s more to explore.</p>
        <div className="not-found-links">
          <Link href="/#work">See selected work ↗</Link>
          <Link href="/contact">Get in touch ↗</Link>
        </div>
      </section>

      <footer className="interior-footer">
        <p>© Denzel Maupa 2026</p><Link href="/">Return home ↙</Link>
      </footer>
    </main>
  );
}
