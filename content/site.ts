export type SocialLink = {
  label: string;
  href: string;
};

/** Local file under `public/` or a Loom share/embed link (no account video file needed). */
export type ProjectPreview =
  | {
      alt: string;
      /** Path under `public/`, e.g. `/previews/demo.webm` */
      src: string;
      /** Defaults inferred from `src` (.mp4, .webm, .mov → video). */
      media?: "image" | "video";
    }
  | {
      alt: string;
      /** `https://www.loom.com/share/…` or `…/embed/…` */
      loomUrl: string;
    };

export type Project = {
  title: string;
  summary: string;
  highlights: string[];
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  isPlaceholder?: boolean;
  preview?: ProjectPreview;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Publication = {
  title: string;
  venue: string;
  href: string;
  attribution?: string;
};

export const site = {
  name: "Chris Lazar",
  role: "AI Engineer",
  /** Single scannable hook; details in `headlineDetail`. */
  headline:
    "I run 0→1 mandates from vague brief to production—product, APIs, models, and whatever stack is in the way.",
  headlineDetail:
    "Ship weekly, measure honestly: evals, latency budgets, and tracing so launches survive real users—not demo day.",
  publication: {
    title: "How Does Entropy Influence Modern Text-to-SQL Systems?",
    venue: "ICLR 2025 Building Trust workshop",
    href: "https://openreview.net/forum?id=JhhLGvpr9N",
    attribution: "Equal contribution",
  } satisfies Publication,
  /** Context for project cards without repeating the employer name on every title. */
  projectsIntro:
    "First card is a project im currently working on. Most of my recent ownership is production AI at Dell Technologies (Fortune-scale scope)—systems I took from problem framing through live operations. The last two cards are public builds: daily gospel automation for a family WhatsApp group, then an open-ended 3D surface that shows how I treat product UX when the canvas is open-ended.",
  /** Shown in About; order is visual top-to-bottom. */
  aboutParagraphs: [
    "I'm bought in on end-to-end ownership: narrow the problem with leadership, staff the shortest path to a shipped v1, stay on the hook for prod quality. Small teams, ruthless prioritization, fast feedback loops.",
    "I'm especially interested in Series A teams; pre-seed and seed when runway and mandate are real. I lead with AI engineer as the title that matches my experience—and I'm most energized when the mandate looks like early IC or founding-engineer scope: 0→1 features, prod ownership, and tight loops with leadership.",
    "Proof beats pitch: multilingual deal-room intelligence, internal-facing LLM latency that cleared an org-wide ship bar, guarded finance copilots, metadata into systems of record. Co-author on the workshop paper linked above (text-to-SQL / uncertainty). Co-inventor on employer-filed patent application(s) in USPTO prosecution—RAG-side R&D tied to inference cost and reliability wins in production paths.",
    "I'm actively relocating to the San Francisco Bay Area.",
  ] as const,
  /** One line above the skills grid. */
  skillsIntro:
    "I stack-rank whatever blocks revenue or trust—surface, services, model behavior, or Kubernetes when that's the constraint—then ship with measurable quality and short cycles.",
  email: "chriskennlazar@gmail.com",
  /** Replace with your public URLs before sharing the site. */
  social: {
    github: "https://github.com/chrislazar25",
    linkedin: "https://www.linkedin.com/in/chrislazar25/",
    resume:
      "/Chris_Lazar_Resume (1).pdf",
  } satisfies Record<string, string>,
  projects: [
    {
      title: "MemoryOS",
      summary:
        "A memory layer for coding agents that makes the 'why' behind every commit queryable. Git records what changed — MemoryOS records why.",
      highlights: [
      "Designed coding-native memory primitives: decision, tradeoff, incident — unit of memory is a commit, not a message",
      "Built ingest → SQLite → TF-IDF retrieval pipeline with FastAPI REST API",
      "Exposed memory as an MCP tool so any coding agent can retrieve context before making changes",
      "Timeline UI that lets developers understand a codebase's decision history at a glance",
      ],
      stack: [
        "Python",
        "FastAPI", 
        "SQLite", 
        "TF-IDF", 
        "React", 
        "TypeScript", 
        "MCP",
      ],
      liveUrl: "https://memory-os-sigma.vercel.app/",
      repoUrl: "https://github.com/chrislazar25/memoryOS",
      preview: {
        alt: "MemoryOS query UI.",
        src: "/previews/memoryos.png",
        media: "image",
      }
    },
    {
      title: "Multilingual contract intelligence",
      summary:
        "Dell deal teams were burning half-days on foreign-language paper. I owned the full loop—models, APIs, UX—so execs and counsel get clause-level signal in minutes, not hours.",
      highlights: [
        "Cut review time on typical 50-page packs to a few minutes; heavier 200-page sets in ~10, across eight languages in one flow.",
        "Product shape: translate → non-standard clause hunt → back-translate so reviewers stay in the language they trust.",
        "Shipped behind FastAPI + React, containerized on Kubernetes, with Langfuse so latency and failures are operations problems, not mysteries.",
      ],
      stack: [
        "Python",
        "FastAPI",
        "React",
        "Docker",
        "Kubernetes",
        "Langfuse",
      ],
    },
    {
      title: "Contract metadata pipeline",
      summary:
        "Metadata was stuck in manual re-keying. I designed two tight services that turn contract docs into structured rows analysts proofread—not retype.",
      highlights: [
        "Structured capture for 10+ deal fields—parties, theatre, dates, amendments, TOC hooks—enough to unblock downstream systems.",
        "Cron-driven ingest from SharePoint; validated payloads sync to QuickBase so the system of record stays authoritative.",
        "Vault-backed secrets so compliance and security reviews stay boring—the way infra should be at scale.",
      ],
      stack: [
        "Python",
        "FastAPI",
        "SharePoint API",
        "QuickBase API",
        "Vault",
      ],
    },
    {
      title: "LLM serving & company-wide benchmarks",
      summary:
        "The flagship assistant had to feel instant. I drove the serving optimizations, then set the internal bar leaders used before a model could ship to internal teams.",
      highlights: [
        "Delivered ~sub-2s turns and ~500ms first token on the internal rollout path via quantization and engine changes.",
        "Made time-to-first-token, throughput, and memory non-negotiable metrics—fewer one-off decks, more comparable runs.",
        "Built a reusable harness so every new checkpoint proves itself against the same baseline before prod.",
      ],
      stack: [
        "Python",
        "LLM Quantization",
        "vLLM",
        "ONNX Runtime",
        "Benchmarking",
      ],
    },
    {
      title: "Accounts receivable copilot",
      summary:
        "Finance wanted English questions over receivables data without wagering the close on bad SQL. I shipped a schema-grounded text-to-SQL copilot with explicit uncertainty handling.",
      highlights: [
        "~80% executable accuracy after tuning to real tables, joins, and naming—measured, not vibes.",
        "Ensemble candidates plus self-correction catch weak generations before they pollute reporting.",
        "Risk posture tuned for CFO-grade work: traceability, conservative failure, no silent heroics.",
      ],
      stack: [
        "Python",
        "Text-to-SQL",
        "Fine-tuning",
        "Prompt Engineering",
        "PostgreSQL",
      ],
    },
    {
      title: "Gospel Bot",
      summary:
        "Daily gospel reflections for a family WhatsApp group: pulls today's reading from the Catholic lectionary, matches a personal archive of messages by scripture citation, and delivers the best fit via Green API—with email previews, retries, and a watchdog.",
      highlights: [
        "Normalized book names and citation formats so archive entries align with the day's text—including multi-chapter ranges and non-standard shorthand.",
        "IST cron: preview email, scheduled send, watchdog retries; failed sends queue for the next flush instead of vanishing.",
        "Green API for WhatsApp delivery; Nodemailer for Gmail previews and alerts; Catholic Readings API with scripture fallback when the archive has no match.",
      ],
      stack: ["Node.js", "Green API", "node-cron", "Nodemailer", "REST"],
      repoUrl: "https://github.com/chrislazar25/gospel-bot",
    },
    {
      title: "Interactive 3D fleet visualization",
      summary:
        "An open-ended product surface: complex vehicle geometry in the browser, treated like something revenue teams might actually use—legible controls, forgiving navigation, steady frame times on real laptops.",
      highlights: [
        "UX aimed at non-3D-native operators: camera, selection, and feedback that hold up under time pressure.",
        "Render and load budget disciplined enough that the scene stays usable outside a demo machine.",
        "Config-friendly structure so assets and rules can evolve without rewriting the scene graph.",
      ],
      stack: ["React Three Fiber", "TypeScript", "React", "Express"],
      liveUrl: "https://3d-truck-sim.vercel.app/",
      repoUrl: "https://github.com/chrislazar25/3d_truck_sim",
      preview: {
        alt: "Screen recording: orbiting the 3D fleet scene, selecting a vehicle, and using the on-screen controls.",
        loomUrl: "https://www.loom.com/share/f304574d71ad4c469e63337ce8d68967",
      },
    },
  ] satisfies Project[],
  skillGroups: [
    {
      title: "AI systems & evals",
      items: [
        "Prompting, structured outputs, tool use",
        "RAG patterns: chunking, retrieval, re-ranking basics",
        "Regression evals and shared baselines before prod (LLM-as-judge with eyes open)",
      ],
    },
    {
      title: "Product backends & integrations",
      items: [
        "REST/JSON APIs, auth boundaries, rate limits",
        "Async jobs and retries; idempotency for third-party hooks",
        "Testing and error contracts operators can trust",
      ],
    },
    {
      title: "Data loops & observability",
      items: [
        "ETL-lite pipelines, embeddings, labeling workflows",
        "Notebooks to production: config-driven experiments",
        "Logs, metrics, traces—latency and failure modes you can see in prod",
      ],
    },
    {
      title: "Velocity, deploys & performance",
      items: [
        "CI, typed TS/Python, linting",
        "Ship paths: containers, PaaS, Kubernetes when the stack demands it",
        "Latency and throughput budgets: web vitals, API SLAs, serving stack tuning",
      ],
    },
  ] satisfies SkillGroup[],
} as const;
