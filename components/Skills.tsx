import type { SkillGroup } from "@/content/site";

export function Skills({
  intro,
  groups,
}: {
  intro?: string;
  groups: readonly SkillGroup[];
}) {
  return (
    <div className="space-y-8">
      {intro ? (
        <p className="text-sm leading-relaxed text-pretty text-muted">{intro}</p>
      ) : null}
      <div className="grid gap-8 sm:grid-cols-2">
      {groups.map((group) => (
        <div key={group.title}>
          <h3 className="text-base font-semibold text-foreground">
            {group.title}
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {group.items.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      </div>
    </div>
  );
}
