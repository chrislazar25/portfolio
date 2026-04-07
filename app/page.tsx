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
    { label: "Email", href: `mailto:${email}` },
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
        links={links}
      />
      <main>
        <Section id="projects" eyebrow="Work" title="Featured projects">
          <div className="space-y-8 !mt-0">
            {site.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>
        <Section id="skills" eyebrow="Capabilities" title="Skills">
          <div className="!mt-0">
            <Skills groups={site.skillGroups} />
          </div>
        </Section>
        <Section id="about" eyebrow="Background" title="About">
          <p className="!mt-0 text-muted">{site.bio}</p>
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
