type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
};

export function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-24 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-3xl px-6">
        {eyebrow ? (
          <p className="text-sm font-medium tracking-wide text-[var(--accent)]">
            {eyebrow}
          </p>
        ) : null}
        <h2
          id={`${id}-heading`}
          className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {title}
        </h2>
        <div className="mt-8 space-y-6 text-base leading-relaxed text-muted">
          {children}
        </div>
      </div>
    </section>
  );
}
