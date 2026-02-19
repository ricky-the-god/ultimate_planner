"use client";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Design your architecture",
    description:
      "Drag services, databases, queues, and APIs onto the canvas. Connect them with typed edges to define data flow.",
  },
  {
    number: "02",
    title: "Add specifications",
    description:
      "Annotate each component with tech stack, scaling requirements, and implementation notes directly in the node.",
  },
  {
    number: "03",
    title: "Generate AI plan",
    description:
      "One click transforms your visual design into a structured implementation plan with tasks, dependencies, and priorities.",
  },
  {
    number: "04",
    title: "Export & execute",
    description:
      "Export as markdown for Claude, GPT, or your preferred AI assistant. Or generate infrastructure-as-code directly.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">From diagram to deployment</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A streamlined workflow that respects how senior engineers actually think and work.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-border via-primary/50 to-border md:left-1/2 md:block" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col gap-8 md:flex-row md:items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Step number indicator */}
                <div className="absolute left-0 flex size-16 items-center justify-center rounded-full border border-border bg-background text-2xl font-bold text-primary md:left-1/2 md:-translate-x-1/2">
                  {step.number}
                </div>

                {/* Content */}
                <div className={`ml-24 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-24 md:text-right" : "md:pl-24"}`}>
                  <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
