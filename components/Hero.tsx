import { site } from "@/content/site";
import { ExternalLink } from "./ExternalLink";

export function Hero() {
  return (
    <header className="shell">
      <div className="site-nav">
        <a href="#" className="wordmark" aria-label="Chris Lazar, home">
          <span className="monogram" aria-hidden="true">cl.</span>
          <span>Chris Lazar</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#production">Dell</a>
          <a href="#about">About</a>
          <ExternalLink href={site.social.resume} className="resume-link">Resume <span aria-hidden="true">↗</span></ExternalLink>
        </nav>
      </div>
      <div className="hero">
        <p className="eyebrow"><span className="status-dot" aria-hidden="true" />{site.name} / {site.role}</p>
        <h1>{site.headline}</h1>
        <div className="hero-bottom">
          <p className="hero-description">{site.headlineDetail}</p>
          <a className="text-link hero-contact" href={`mailto:${site.email}`}>Let&apos;s talk <span aria-hidden="true">↗</span></a>
        </div>
        <p className="publication">
          <span>Research</span>
          <ExternalLink href={site.publication.href}>{site.publication.venue} <span aria-hidden="true">↗</span></ExternalLink>
          <span className="publication-attribution">{site.publication.attribution}</span>
        </p>
      </div>
    </header>
  );
}
