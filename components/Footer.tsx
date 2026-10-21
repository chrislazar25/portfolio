import { ExternalLink } from "./ExternalLink";

type FooterProps = {
  name: string;
  githubUrl: string;
  linkedinUrl: string;
};

export function Footer({ name, githubUrl, linkedinUrl }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[color-mix(in_oklab,var(--foreground)_12%,transparent)]">
      <div className="shell footer-content">
        <p>
          © {year} {name}
        </p>
        <nav className="flex flex-wrap gap-5" aria-label="Footer">
          <ExternalLink href={githubUrl} className="hover:text-foreground">
            GitHub
          </ExternalLink>
          <ExternalLink href={linkedinUrl} className="hover:text-foreground">
            LinkedIn
          </ExternalLink>
        </nav>
      </div>
    </footer>
  );
}
