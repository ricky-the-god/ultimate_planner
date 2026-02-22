"use client";

interface UseCase {
  title: string;
  description: string;
  example: string;
}

const useCases: UseCase[] = [
  {
    title: "Microservices Architecture",
    description: "Design event-driven systems with clear service boundaries, message queues, and API gateways.",
    example: "E-commerce platform with 12 services",
  },
  {
    title: "Data Pipeline Design",
    description: "Map out ETL flows, data lakes, and real-time streaming architectures with proper lineage tracking.",
    example: "Analytics pipeline processing 1M events/day",
  },
  {
    title: "Security Architecture",
    description: "Document authentication flows, authorization policies, and security boundaries across your stack.",
    example: "Zero-trust network architecture",
  },
  {
    title: "Cloud Infrastructure",
    description: "Plan multi-region deployments, disaster recovery, and auto-scaling strategies visually.",
    example: "Global CDN with 5 edge regions",
  },
];

export const UseCases = () => {
  return (
    <section id="use-cases" className="relative px-6 py-32">
      {/* Dot pattern */}
      <div className="pointer-events-none absolute inset-0 bg-cosmos-dots" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16">
          <span className="mb-4 block font-mono-tight text-[11px] text-primary/80 uppercase tracking-widest">
            Use Cases
          </span>
          <h2 className="max-w-2xl font-normal text-3xl text-editorial text-zinc-950 leading-tight tracking-tight md:text-4xl lg:text-5xl dark:text-zinc-50">
            Built for real-world architecture
          </h2>
        </div>

        {/* Use case list */}
        <div className="space-y-3">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="group flex flex-col gap-4 rounded-xl border border-zinc-950/10 bg-zinc-950/[0.02] p-6 transition-all duration-300 hover:border-zinc-950/20 hover:bg-zinc-950/[0.04] md:flex-row md:items-center md:justify-between dark:border-zinc-50/10 dark:bg-zinc-50/[0.02] dark:hover:border-zinc-50/20 dark:hover:bg-zinc-50/[0.04]"
            >
              {/* Left: Number + Title */}
              <div className="flex items-start gap-6 md:items-center">
                <span className="font-mono-tight text-[11px] text-zinc-950/30 dark:text-zinc-50/30">0{index + 1}</span>
                <div>
                  <h3 className="mb-1 font-normal text-sm text-zinc-950 tracking-tight dark:text-zinc-50">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-zinc-950/50 dark:text-zinc-50/50">{useCase.description}</p>
                </div>
              </div>

              {/* Right: Example */}
              <div className="ml-10 font-mono-tight text-[11px] text-zinc-950/40 md:ml-0 md:text-right dark:text-zinc-50/40">
                <span className="rounded-full border border-zinc-950/10 bg-zinc-950/5 px-3 py-1.5 dark:border-zinc-50/10 dark:bg-zinc-50/5">
                  {useCase.example}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
