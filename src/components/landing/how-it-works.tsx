"use client";

interface Step {
  number: string;
  title: string;
  description: string;
  code?: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Design",
    description:
      "Drag services, databases, and APIs onto the canvas. Connect them with typed edges to define data flow.",
    code: "canvas.addNode({ type: 'service' })",
  },
  {
    number: "02",
    title: "Annotate",
    description:
      "Add specifications to each component—tech stack, scaling requirements, and implementation notes directly in the node.",
    code: "node.setMeta({ stack: 'Next.js' })",
  },
  {
    number: "03",
    title: "Generate",
    description:
      "One click transforms your visual design into a structured implementation plan with tasks, dependencies, and priorities.",
    code: "await ai.generatePlan(canvas)",
  },
  {
    number: "04",
    title: "Export",
    description:
      "Export as markdown for Claude or GPT, or generate infrastructure-as-code directly for Terraform and Kubernetes.",
    code: "export({ format: 'terraform' })",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative border-zinc-950/10 border-y px-6 py-32 dark:border-zinc-50/10">
      {/* Subtle gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/[0.02] to-transparent dark:from-zinc-50/[0.02]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16">
          <span className="mb-4 block font-mono-tight text-[11px] text-primary/80 uppercase tracking-widest">
            Process
          </span>
          <h2 className="max-w-2xl font-normal text-3xl text-editorial text-zinc-950 leading-tight tracking-tight md:text-4xl lg:text-5xl dark:text-zinc-50">
            From diagram to deployment
          </h2>
        </div>

        {/* Steps - horizontal on desktop */}
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="group relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute top-4 left-full hidden h-px w-8 bg-zinc-950/10 md:block dark:bg-zinc-50/10">
                  <div className="-translate-y-1/2 absolute top-1/2 right-0 size-1 rounded-full bg-zinc-950/20 dark:bg-zinc-50/20" />
                </div>
              )}

              {/* Number with dot */}
              <div className="mb-6 flex items-center gap-3">
                <span className="size-1.5 rounded-full bg-primary" />
                <span className="font-mono-tight text-[11px] text-zinc-950/30 dark:text-zinc-50/30">{step.number}</span>
              </div>

              {/* Title */}
              <h3 className="mb-3 font-normal text-base text-zinc-950 tracking-tight dark:text-zinc-50">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mb-4 text-sm text-zinc-950/50 leading-relaxed dark:text-zinc-50/50">{step.description}</p>

              {/* Code snippet */}
              {step.code && (
                <code className="block rounded-lg border border-zinc-950/10 bg-zinc-950/[0.02] px-3 py-2.5 font-mono-tight text-[11px] text-zinc-950/40 dark:border-zinc-50/10 dark:bg-zinc-50/[0.02] dark:text-zinc-50/40">
                  {step.code}
                </code>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
