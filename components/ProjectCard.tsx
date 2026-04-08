import type { Project } from "@/content/site";
import { ExternalLink } from "./ExternalLink";

function previewIsVideo(src: string, media?: "image" | "video"): boolean {
  if (media === "video") return true;
  if (media === "image") return false;
  return /\.(mp4|webm|mov)(\?|#|$)/i.test(src);
}

function videoType(src: string): string | undefined {
  if (/\.webm(\?|#|$)/i.test(src)) return "video/webm";
  if (/\.mp4(\?|#|$)/i.test(src)) return "video/mp4";
  if (/\.mov(\?|#|$)/i.test(src)) return "video/quicktime";
  return undefined;
}

/** Accepts Loom share or embed URLs; returns canonical embed URL or null if invalid. */
function toLoomEmbedUrl(raw: string): string | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  try {
    const u = new URL(trimmed);
    if (!/^(.*\.)?loom\.com$/i.test(u.hostname)) return null;
    const segments = u.pathname.split("/").filter(Boolean);
    const shareI = segments.indexOf("share");
    const embedI = segments.indexOf("embed");
    const id =
      embedI !== -1
        ? segments[embedI + 1]
        : shareI !== -1
          ? segments[shareI + 1]
          : null;
    if (!id) return null;
    return `https://www.loom.com/embed/${id}${u.search}`;
  } catch {
    return null;
  }
}

function isLoomPreview(
  preview: NonNullable<Project["preview"]>
): preview is Extract<Project["preview"], { loomUrl: string }> {
  return "loomUrl" in preview;
}

export function ProjectCard({ project }: { project: Project }) {
  const {
    title,
    summary,
    highlights,
    stack,
    liveUrl,
    repoUrl,
    isPlaceholder,
    preview,
  } = project;
  const hasLinks = Boolean(liveUrl || repoUrl);
  const loomEmbed = preview && isLoomPreview(preview) ? toLoomEmbedUrl(preview.loomUrl) : null;
  const filePreview = preview && !isLoomPreview(preview) ? preview : null;
  const showVideo = filePreview ? previewIsVideo(filePreview.src, filePreview.media) : false;
  const showPreview = Boolean(loomEmbed || filePreview);
  const previewTitle = preview?.alt ?? "";
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
      {showPreview ? (
        <div className="mt-4 overflow-hidden rounded-lg border border-[color-mix(in_oklab,var(--foreground)_14%,transparent)] bg-[color-mix(in_oklab,var(--foreground)_6%,transparent)] shadow-[inset_0_1px_0_0_color-mix(in_oklab,var(--foreground)_8%,transparent)]">
          {loomEmbed ? (
            <div className="relative aspect-video max-h-52 w-full sm:max-h-56">
              <iframe
                src={loomEmbed}
                title={previewTitle}
                className="absolute inset-0 h-full w-full border-0"
                allow="fullscreen"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ) : filePreview && showVideo ? (
            <video
              className="aspect-video max-h-52 w-full object-cover sm:max-h-56"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={filePreview.alt}
            >
              <source src={filePreview.src} type={videoType(filePreview.src)} />
            </video>
          ) : filePreview ? (
            // eslint-disable-next-line @next/next/no-img-element -- small local previews; avoids Image layout constraints for mixed GIF/WebP
            <img
              src={filePreview.src}
              alt={filePreview.alt}
              className="aspect-video max-h-52 w-full object-cover object-center sm:max-h-56"
              loading="lazy"
              decoding="async"
            />
          ) : null}
        </div>
      ) : null}
      <p className="mt-3 text-pretty text-muted">{summary}</p>
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
      {hasLinks ? (
        <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
          {liveUrl ? (
            <ExternalLink
              href={liveUrl}
              className="text-[var(--accent)] underline-offset-4 hover:underline"
            >
              Live demo
            </ExternalLink>
          ) : null}
          {repoUrl ? (
            <ExternalLink
              href={repoUrl}
              className="text-[var(--accent)] underline-offset-4 hover:underline"
            >
              Source
            </ExternalLink>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
