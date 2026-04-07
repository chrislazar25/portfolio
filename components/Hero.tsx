import type { SocialLink } from "@/content/site";

type HeroProps = {
  name: string;
  role: string;
  headline: string;
  links: SocialLink[];
};

export function Hero({ name, role, headline, links }: HeroProps) {
  return (
    <header className="border-b border-[color-mix(in_oklab,var(--foreground)_12%,transparent)]">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <p className="text-sm font-medium tracking-wide text-[var(--accent)]">
          {role}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          {headline}
        </p>
        <nav
          className="mt-10 flex flex-wrap gap-3"
          aria-label="Primary links"
        >
          {links.map(({ label, href }) =>
            href ? (
              <a
                key={label}
                href={href}
                className="inline-flex items-center justify-center rounded-lg border border-[color-mix(in_oklab,var(--foreground)_18%,transparent)] bg-[color-mix(in_oklab,var(--foreground)_6%,transparent)] px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-[color-mix(in_oklab,var(--foreground)_10%,transparent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                {label}
              </a>
            ) : (
              <span
                key={label}
                className="inline-flex items-center justify-center rounded-lg border border-dashed border-[color-mix(in_oklab,var(--foreground)_22%,transparent)] px-4 py-2.5 text-sm font-medium text-muted"
                title="Add this link in content/site.ts"
              >
                {label} (add link)
              </span>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
