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
  const { title, summary, highlights, stack, liveUrl, liveLabel, repoUrl, preview,
    previewLabel, question, decision, scope, evidenceUrl, mechanism } = project;
  const loomEmbed = preview && isLoomPreview(preview) ? toLoomEmbedUrl(preview.loomUrl) : null;
  const filePreview = preview && !isLoomPreview(preview) ? preview : null;
  const showVideo = filePreview ? previewIsVideo(filePreview.src, filePreview.media) : false;
  return (
    <article className="project-card">
      <div className="project-heading">
        <h3>{title}</h3>
        <div className="project-links">
          {liveUrl ? <ExternalLink href={liveUrl} className="project-primary">{liveLabel ?? "Live demo"} <span aria-hidden="true">↗</span></ExternalLink> : null}
          {repoUrl ? <ExternalLink href={repoUrl}>Source <span aria-hidden="true">↗</span></ExternalLink> : null}
          {evidenceUrl ? <ExternalLink href={evidenceUrl} className={!liveUrl ? "project-primary" : undefined}>Evidence <span aria-hidden="true">↗</span></ExternalLink> : null}
        </div>
      </div>
      {loomEmbed || filePreview ? (
        <figure className="project-preview">
          {previewLabel ? <figcaption>{previewLabel}</figcaption> : null}
          {loomEmbed ? (
            <div className="embed-frame">
              <iframe src={loomEmbed} title={preview?.alt} allow="fullscreen" allowFullScreen loading="lazy" />
            </div>
          ) : filePreview && showVideo ? (
            <video controls playsInline preload="metadata" aria-label={filePreview.alt}>
              <source src={filePreview.src} type={videoType(filePreview.src)} />
            </video>
          ) : filePreview ? (
            <a className="screenshot-link" href={filePreview.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full screenshot of ${title} in a new tab`}>
              {/* eslint-disable-next-line @next/next/no-img-element -- local previews retain their original aspect ratio. */}
              <img src={filePreview.src} alt={filePreview.alt} loading="lazy" decoding="async" />
              <span className="screenshot-caption">Open full screenshot <span aria-hidden="true">↗</span></span>
            </a>
          ) : null}
        </figure>
      ) : null}
      {mechanism ? (
        <figure className="mechanism">
          <figcaption>Mechanism diagram / receipt path</figcaption>
          <ol>
            {mechanism.map((step, i) => <li key={step}><span className="step-number">0{i + 1}</span><span>{step}</span><span className="step-arrow" aria-hidden="true">{i === mechanism.length - 1 ? "✓" : "↓"}</span></li>)}
          </ol>
          <p>Proposed rules pass a separate deterministic replay gate.</p>
        </figure>
      ) : null}
      <div className="project-copy">
        {question ? <h4>{question}</h4> : null}
        <p>{summary}</p>
        {decision ? <div className="project-decision"><span className="small-label">The engineering decision</span><p>{decision}</p></div> : null}
        {highlights.length ? <ul className="project-highlights">{highlights.map((item) => <li key={item}>{item}</li>)}</ul> : null}
        {scope ? <p className="project-scope">{scope}</p> : null}
        <p className="project-stack">{stack.join(" / ")}</p>
        {preview && isLoomPreview(preview) ? <ExternalLink href={preview.loomUrl} className="text-link">Open recording <span aria-hidden="true">↗</span></ExternalLink> : null}
      </div>
    </article>
  );
}
