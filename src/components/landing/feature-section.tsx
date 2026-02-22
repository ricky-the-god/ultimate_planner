"use client";

interface Feature {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

const features: Feature[] = [
  {
    number: "01",
    title: "Visual Canvas",
    description:
      "Drag-and-drop components onto an infinite canvas. Design microservices, databases, and APIs with precision.",
    tags: ["React Flow", "Infinite Pan", "Zoom"],
  },
  {
    number: "02",
    title: "AI-Powered Plans",
    description:
      "Generate detailed implementation plans from your diagrams. Export markdown ready for Claude, GPT, or Copilot.",
    tags: ["Claude API", "Markdown", "Export"],
  },
  {
    number: "03",
    title: "Code-First Export",
    description: "Export your architecture as Terraform, Docker Compose, or Kubernetes manifests with a single click.",
    tags: ["Terraform", "K8s", "Docker"],
  },
  {
    number: "04",
    title: "Real-time Sync",
    description: "Work together with your team in real-time. Share, comment, and iterate on designs instantly.",
    tags: ["Supabase", "WebSocket", "Collab"],
  },
];

export const FeatureSection = () => {
  return (
    <section id="features" className="relative px-6 py-32">
      {/* Subtle dot pattern */}
      <div className="pointer-events-none absolute inset-0 bg-cosmos-dots" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16">
          <span className="mb-4 block font-mono-tight text-[11px] text-primary/80 uppercase tracking-widest">
            Features
          </span>
          <h2 className="max-w-2xl font-normal text-3xl text-editorial text-zinc-950 leading-tight tracking-tight md:text-4xl lg:text-5xl dark:text-zinc-50">
            Everything you need to architect at scale
          </h2>
        </div>

        {/* Feature grid - cosmos style */}
        <div className="grid gap-4 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={feature.number}
              className="group relative rounded-xl border border-zinc-950/10 bg-zinc-950/[0.02] p-8 transition-all duration-300 hover:border-zinc-950/20 hover:bg-zinc-950/[0.04] dark:border-zinc-50/10 dark:bg-zinc-50/[0.02] dark:hover:border-zinc-50/20 dark:hover:bg-zinc-50/[0.04]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Number */}
              <span className="mb-6 block font-mono-tight text-[11px] text-zinc-950/30 dark:text-zinc-50/30">
                {feature.number}
              </span>

              {/* Title */}
              <h3 className="mb-3 font-normal text-lg text-zinc-950 tracking-tight dark:text-zinc-50">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mb-6 text-sm text-zinc-950/50 leading-relaxed dark:text-zinc-50/50">
                {feature.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 font-mono-tight text-[10px]">
                {feature.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-950/10 bg-zinc-950/5 px-2.5 py-1 text-zinc-950/40 dark:border-zinc-50/10 dark:bg-zinc-50/5 dark:text-zinc-50/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover glow */}
              <div className="-inset-px pointer-events-none absolute rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
