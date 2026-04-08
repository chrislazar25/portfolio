import { ExternalLink } from "./ExternalLink";

type ContactProps = {
  email: string;
  githubUrl: string;
  linkedinUrl: string;
};

export function Contact({ email, githubUrl, linkedinUrl }: ContactProps) {
  return (
    <div className="space-y-6">
      <p>
        Prefer email for opportunities:{" "}
        <a
          className="font-medium text-[var(--accent)] underline-offset-4 hover:underline"
          href={`mailto:${email}?subject=${encodeURIComponent("Hello")}`}
        >
          {email}
        </a>
        .
      </p>
      <ul className="flex flex-wrap gap-6 text-sm font-medium">
        <li>
          <ExternalLink
            href={githubUrl}
            className="text-foreground underline-offset-4 hover:underline"
          >
            GitHub
          </ExternalLink>
        </li>
        <li>
          <ExternalLink
            href={linkedinUrl}
            className="text-foreground underline-offset-4 hover:underline"
          >
            LinkedIn
          </ExternalLink>
        </li>
      </ul>
    </div>
  );
}
