type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
};

export function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="section shell">
      <div className="section-heading">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 id={`${id}-heading`}>{title}</h2>
      </div>
      {children}
    </section>
  );
}
