import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { ExternalLink } from "@/components/ExternalLink";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Hero />
      <main id="main">
        <Section id="work" eyebrow="01 / Public builds" title="Questions, turned into systems.">
          <div className="featured-grid">
            {site.publicBuilds.filter((project) => project.category === "featured").map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
          <div className="more-work">
            <p className="small-label">More things I&apos;ve built</p>
            {site.publicBuilds.filter((project) => project.category === "more").map((project) => (
              <details key={project.title} className="project-disclosure">
                <summary><span>{project.title}</span><span className="disclosure-hint">Explore <span aria-hidden="true">+</span></span></summary>
                <ProjectCard project={project} />
              </details>
            ))}
          </div>
        </Section>
        <Section id="production" eyebrow="02 / Dell Technologies" title="AI systems at Dell.">
          <p className="section-intro">Production systems and pilot-stage agent work. My contributions and each project’s scope are described below.</p>
          <div className="production-grid">
            {site.productionWork.map((work, i) => (
              <article key={work.title} className="production-card">
                <span className="work-number">0{i + 1}</span>
                <h3>{work.title}</h3>
                <p>{work.summary}</p>
                {work.highlights.map((item) => <p key={item} className="production-detail">{item}</p>)}
              </article>
            ))}
          </div>
        </Section>
        <Section id="about" eyebrow="03 / A little background" title="Curiosity, with a shipping habit.">
          <div className="about-grid">
            <div className="about-copy">
              {site.aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <p className="paper-reference"><span className="small-label">Research / equal contribution</span><ExternalLink href={site.publication.href}>{site.publication.title} <span aria-hidden="true">↗</span></ExternalLink><span>{site.publication.venue}</span></p>
            </div>
            <div className="capabilities">
              {site.skillGroups.map((group) => <div key={group.title}><h3>{group.title}</h3><p>{group.items.join(". ")}</p></div>)}
            </div>
          </div>
        </Section>
        <section id="contact" className="contact-section shell" aria-labelledby="contact-heading">
          <p className="eyebrow">Have something worth building?</p>
          <h2 id="contact-heading"><a href={`mailto:${site.email}`}>Bring me a hard problem.<span aria-hidden="true">↗</span></a></h2>
          <a className="text-link" href={`mailto:${site.email}`}>{site.email}</a>
        </section>
      </main>
      <Footer name={site.name} githubUrl={site.social.github} linkedinUrl={site.social.linkedin} />
    </>
  );
}
