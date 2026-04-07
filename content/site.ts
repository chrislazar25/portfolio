export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  summary: string;
  highlights: string[];
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  isPlaceholder?: boolean;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const site = {
  name: "Chris Lazar",
  role: "AI Engineer",
  headline:
    "I build end-to-end AI products: reliable backends, thoughtful UX, and models that ship.",
  bio: `I'm focused on practical AI systems—evaluation, tooling, and production integration—not demos that fall apart under real use. My background includes shipping interactive web experiences; I'm applying that product sense to LLM-powered features and data workflows.`,
  email: "chriskennlazar@gmail.com",
  /** Replace with your public URLs before sharing the site. */
  social: {
    github: "https://github.com/chrislazar25",
    linkedin: "https://www.linkedin.com/in/chrislazar25/",
    resume: "https://docs.google.com/document/d/1ANul9QCaBh1tnd0FwjexU5oL4AHQzVFbZCQzhqjwMKg/edit?usp=sharing",
  } satisfies Record<string, string>,
  projects: [
    {
      title: "3D Truck Visualization (Web)",
      summary:
        "Take-home project: an interactive browser-based 3D visualization for trucks—emphasizing clear UX around complex geometry, camera controls, and responsive performance on the web.",
      highlights: [
        "Interactive 3D scene with deliberate navigation and feedback for non-expert users",
        "Performance-conscious rendering and loading strategy for web delivery",
        "Structured front-end architecture suitable for extending with data-driven configs",
      ],
      stack: ["React Three Fiber", "TypeScript", "React", "Express"],
      liveUrl: "https://3d-truck-sim.vercel.app/",
      repoUrl: "https://github.com/chrislazar25/3d_truck_sim",
    },
    {
      title: "RAG document assistant (coming soon)",
      summary:
        "Ingestion, chunking, retrieval, and evaluation loop for a domain-specific Q&A assistant—built for traceability and iteration.",
      highlights: [
        "Grounded answers with citations and failure-mode logging",
        "Simple eval harness to compare prompts and retrieval settings",
      ],
      stack: ["Python", "Embeddings", "Vector store", "LLM API"],
      isPlaceholder: true,
    },
    {
      title: "Agentic workflow prototype (coming soon)",
      summary:
        "Multi-step tool-using flow with guardrails, structured outputs, and user-visible reasoning boundaries for safer automation.",
      highlights: [
        "Tool schema + validation; graceful fallbacks when tools fail",
        "Observability hooks for tracing steps and latency",
      ],
      stack: ["TypeScript", "LLM API", "Structured outputs"],
      isPlaceholder: true,
    },
  ] satisfies Project[],
  skillGroups: [
    {
      title: "LLM applications",
      items: [
        "Prompting, structured outputs, tool use",
        "RAG patterns: chunking, retrieval, re-ranking basics",
        "Evals: regression sets, LLM-as-judge (with caveats)",
      ],
    },
    {
      title: "Backend & APIs",
      items: [
        "REST/JSON APIs, auth boundaries, rate limits",
        "Async jobs and retries; idempotency for integrations",
        "Testing and error contracts for production services",
      ],
    },
    {
      title: "Data & tooling",
      items: [
        "ETL-lite pipelines, embeddings, labeling workflows",
        "Notebooks to production: config-driven experiments",
        "Observability: logs, metrics, trace-friendly request IDs",
      ],
    },
    {
      title: "Delivery",
      items: [
        "CI, typed TS/Python, linting",
        "Deployment basics (containers or PaaS)",
        "Performance: web vitals, API latency budgets",
      ],
    },
  ] satisfies SkillGroup[],
} as const;
