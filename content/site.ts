export type ProjectPreview =
  | { alt: string; src: string; media?: "image" | "video" }
  | { alt: string; loomUrl: string };

export type Project = {
  title: string;
  summary: string;
  highlights: string[];
  stack: string[];
  category: "featured" | "more";
  question?: string;
  decision?: string;
  scope?: string;
  evidenceUrl?: string;
  liveUrl?: string;
  liveLabel?: string;
  repoUrl?: string;
  preview?: ProjectPreview;
  previewLabel?: string;
  mechanism?: string[];
};

export type ProductionWork = Pick<Project, "title" | "summary" | "highlights">;
export type Publication = {
  title: string;
  venue: string;
  href: string;
  attribution: string;
};

export const site = {
  name: "Chris Lazar",
  role: "AI Engineer",
  headline: "I turn hard product questions into working software.",
  headlineDetail:
    "What can a battery fleet promise during a storm? When should a voice agent stop? I build systems to find out, alongside production AI at Dell.",
  email: "chriskennlazar@gmail.com",
  social: {
    github: "https://github.com/chrislazar25",
    linkedin: "https://www.linkedin.com/in/chrislazar25/",
    resume: "/Chris_Lazar_Resume (1).pdf",
  },
  publication: {
    title: "How Does Entropy Influence Modern Text-to-SQL Systems?",
    venue: "ICLR 2025 Building Trust workshop",
    href: "https://openreview.net/forum?id=JhhLGvpr9N",
    attribution: "Equal contribution",
  } satisfies Publication,
  publicBuilds: [
    {
      title: "Simuritor",
      category: "featured",
      question: "How much can a battery fleet promise during a storm?",
      summary: "A grid replay that explores the tradeoff between utility commitments and household backup reserves.",
      decision: "Deterministic dispatch makes each reserve and contract decision inspectable against historical prices and weather.",
      scope: "Simulated batteries and public historical data. A replay cannot guarantee real fleet performance.",
      highlights: [],
      stack: ["Python", "Simulation", "React", "TypeScript"],
      liveUrl: "https://www.loom.com/share/2e72a407f1cb4d49aa9815822353747e",
      liveLabel: "Watch walkthrough",
      repoUrl: "https://github.com/chrislazar25/simuritor",
      evidenceUrl: "https://github.com/chrislazar25/simuritor/blob/main/docs/notes.md",
      previewLabel: "Recorded simulation",
      preview: {
        alt: "Simuritor simulation with a fleet map, backup reserve controls, and grid replay results.",
        src: "/previews/simuritor.png",
        media: "image",
      },
    },
    {
      title: "Tellr",
      category: "featured",
      question: "When should a voice agent stop before it commits?",
      summary: "A synthetic voice-payment receipt experiment that preserves approval evidence and checks rules before a receipt commits.",
      decision: "A model proposes constrained rules. A deterministic replay gate checks them, and commit-time enforcement applies them.",
      scope: "Synthetic voices. Receipts only, no money transfers. Amount errors remain an unresolved failure mode.",
      highlights: [],
      stack: ["Voice agents", "Replay evals", "MongoDB"],
      repoUrl: "https://github.com/chrislazar25/tellr",
      evidenceUrl: "https://github.com/chrislazar25/tellr/blob/main/RESULTS.md",
      mechanism: ["Speech evidence", "Approval snapshot", "Commit-time check", "Guarded receipt"],
    },
    {
      title: "MemoryOS",
      category: "more",
      summary: "A commit-linked decision log that makes the reasoning behind a code change searchable.",
      highlights: ["Manually authored decisions, tradeoffs, and incidents. SQLite and TF-IDF retrieval, exposed through an API, timeline, and MCP tool."],
      scope: "Early prototype with manually authored memory.",
      stack: ["Python", "FastAPI", "SQLite", "TF-IDF", "React", "TypeScript", "MCP"],
      liveUrl: "https://memory-os-sigma.vercel.app/",
      repoUrl: "https://github.com/chrislazar25/memoryOS",
      preview: { alt: "MemoryOS query interface and commit-linked decision history.", src: "/previews/memoryos.png", media: "image" },
    },
    {
      title: "Gospel Bot",
      category: "more",
      summary: "Daily gospel reflections for a family WhatsApp group, matched to a personal archive by scripture citation.",
      highlights: ["Normalizes scripture references, sends email previews, and schedules WhatsApp delivery with retries and a watchdog."],
      stack: ["Node.js", "Green API", "node-cron", "Nodemailer", "REST"],
      repoUrl: "https://github.com/chrislazar25/gospel-bot",
    },
    {
      title: "Interactive 3D fleet visualization",
      category: "more",
      summary: "An interactive vehicle scene with camera, selection, and navigation controls for people outside 3D tools.",
      highlights: ["Configurable assets and scene rules, with attention to browser load and rendering budgets."],
      stack: ["React Three Fiber", "TypeScript", "React", "Express"],
      liveUrl: "https://3d-truck-sim.vercel.app/",
      repoUrl: "https://github.com/chrislazar25/3d_truck_sim",
      preview: {
        alt: "Screen recording of the 3D fleet scene, vehicle selection, and on-screen controls.",
        loomUrl: "https://www.loom.com/share/f304574d71ad4c469e63337ce8d68967",
      },
    },
  ] satisfies Project[],
  productionWork: [
    {
      title: "Invoice portal agent",
      summary: "Pilot-stage browser automation for invoice workflows across SAP Ariba and Coupa.",
      highlights: ["My work covers the tools and agent workflow for filtering and downloading rejection reports by customer and date."],
    },
    {
      title: "Multilingual contract intelligence",
      summary: "A translate, clause-review, and back-translate workflow for Dell deal teams across eight languages.",
      highlights: ["Owned models, APIs, and UX. Typical 50-page reviews took a few minutes; heavier 200-page sets took about 10 on the internal workflow."],
    },
    {
      title: "Contract metadata pipeline",
      summary: "Two services turn contracts into structured fields for analyst review and downstream systems.",
      highlights: ["SharePoint ingestion, 10+ deal fields, validated QuickBase synchronization, and Vault-backed secrets."],
    },
    {
      title: "LLM serving & company-wide benchmarks",
      summary: "Serving optimizations and a reusable benchmark for internal model rollout decisions.",
      highlights: ["Approximately sub-2-second turns and 500 ms to first token on the internal rollout path. Shared throughput and memory baselines."],
    },
    {
      title: "Accounts receivable copilot",
      summary: "A schema-grounded text-to-SQL copilot with uncertainty handling for finance questions.",
      highlights: ["About 80% executable accuracy after tuning to internal schemas, with ensemble candidates and self-correction."],
    },
  ] satisfies ProductionWork[],
  aboutParagraphs: [
    "I work across product, APIs, and model behavior. At Dell, that has meant taking AI workflows through implementation and into production operations.",
    "Outside work, I build experiments around questions I want to understand, and small tools for people in my life. I'm actively relocating to the San Francisco Bay Area.",
  ],
  skillGroups: [
    { title: "AI systems", items: ["Tool use, retrieval, text-to-SQL, and regression evals"] },
    { title: "Product engineering", items: ["Python, TypeScript, React, APIs, and integrations"] },
    { title: "Production", items: ["Serving, tracing, containers, and Kubernetes"] },
  ],
};
