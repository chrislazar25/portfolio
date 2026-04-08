import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { Skills } from "@/components/Skills";
import { site } from "@/content/site";

function heroLinks() {
  const { email, social } = site;
  const resumeLabel = "Resume";
  return [
    {
      label: "Email",
      href: `mailto:${email}?subject=${encodeURIComponent("Hello")}`,
    },
    {
      label: resumeLabel,
      href: social.resume || "",
    },
    { label: "GitHub", href: social.github },
    { label: "LinkedIn", href: social.linkedin },
  ];
}

export default function Home() {
  const links = heroLinks();
  return (
    <div className="flex flex-1 flex-col">
      <Hero
        name={site.name}
        role={site.role}
        headline={site.headline}
        headlineDetail={site.headlineDetail}
        publication={site.publication}
        links={links}
      />
      <main>
        <Section id="projects" eyebrow="Work" title="Selected work">
          <>
            {site.projectsIntro ? (
              <p className="!mt-0 text-pretty text-muted">{site.projectsIntro}</p>
            ) : null}
            <div
              className={`space-y-8 !mt-0${site.projectsIntro ? " !mt-6" : ""}`}
            >
              {site.projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </>
        </Section>
        <Section id="skills" eyebrow="Capabilities" title="Skills">
          <div className="!mt-0">
            <Skills intro={site.skillsIntro} groups={site.skillGroups} />
          </div>
        </Section>
        <Section id="about" eyebrow="Background" title="About">
          <div className="!mt-0 space-y-4 text-muted [&_p]:text-pretty">
            {site.aboutParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Section>
        <Section id="contact" eyebrow="Collaborate" title="Contact">
          <div className="!mt-0">
            <Contact
              email={site.email}
              githubUrl={site.social.github}
              linkedinUrl={site.social.linkedin}
            />
          </div>
        </Section>
      </main>
      <Footer
        name={site.name}
        githubUrl={site.social.github}
        linkedinUrl={site.social.linkedin}
      />
    </div>
  );
}
