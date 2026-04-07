import type { Project } from "@/content/site";
import { ExternalLink } from "./ExternalLink";

export function ProjectCard({ project }: { project: Project }) {
  const { title, summary, highlights, stack, liveUrl, repoUrl, isPlaceholder } =
    project;
  return (
    <article
      className={`rounded-xl border p-6 sm:p-7 ${
        isPlaceholder
          ? "border-dashed border-[color-mix(in_oklab,var(--foreground)_22%,transparent)] bg-[color-mix(in_oklab,var(--foreground)_4%,transparent)]"
          : "border-[color-mix(in_oklab,var(--foreground)_14%,transparent)] bg-[color-mix(in_oklab,var(--foreground)_5%,transparent)]"
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        {isPlaceholder ? (
          <span className="rounded-full bg-[color-mix(in_oklab,var(--accent)_22%,transparent)] px-2.5 py-0.5 text-xs font-medium text-[var(--accent)]">
            Coming soon
          </span>
        ) : null}
      </div>
      <p className="mt-3 text-muted">{summary}</p>
      <ul className="mt-4 list-inside list-disc space-y-1.5 text-sm text-muted">
        {highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted">
        Stack
      </p>
      <ul className="mt-2 flex flex-wrap gap-2">
        {stack.map((item) => (
          <li key={item}>
            <span className="inline-block rounded-md border border-[color-mix(in_oklab,var(--foreground)_14%,transparent)] px-2 py-1 text-xs text-foreground">
              {item}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
        {liveUrl ? (
          <ExternalLink
            href={liveUrl}
            className="text-[var(--accent)] underline-offset-4 hover:underline"
          >
            Live demo
          </ExternalLink>
        ) : !isPlaceholder ? (
          <span className="text-muted" title="Add liveUrl in content/site.ts">
            Live demo (add link)
          </span>
        ) : null}
        {repoUrl ? (
          <ExternalLink
            href={repoUrl}
            className="text-[var(--accent)] underline-offset-4 hover:underline"
          >
            Source
          </ExternalLink>
        ) : !isPlaceholder ? (
          <span className="text-muted" title="Add repoUrl in content/site.ts">
            Source (add link)
          </span>
        ) : null}
      </div>
    </article>
  );
}
