"use client";

import { Card, CardContent } from "@/components/ui/card";

interface UseCase {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const useCases: UseCase[] = [
  {
    icon: (
      <svg aria-hidden="true" className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
    title: "Microservices Architecture",
    description: "Design event-driven systems with clear service boundaries, message queues, and API gateways.",
  },
  {
    icon: (
      <svg aria-hidden="true" className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
    title: "Data Pipeline Design",
    description: "Map out ETL flows, data lakes, and real-time streaming architectures with proper lineage tracking.",
  },
  {
    icon: (
      <svg aria-hidden="true" className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Security Architecture",
    description: "Document authentication flows, authorization policies, and security boundaries across your stack.",
  },
  {
    icon: (
      <svg aria-hidden="true" className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
    title: "Cloud Infrastructure",
    description: "Plan multi-region deployments, disaster recovery, and auto-scaling strategies visually.",
  },
];

export const UseCases = () => {
  return (
    <section id="use-cases" className="bg-secondary/30 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Built for real-world architecture</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Whether you&apos;re designing a greenfield system or documenting existing infrastructure.
          </p>
        </div>

        {/* Use case grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className="border-border/50 bg-background/50 backdrop-blur-sm transition-all hover:border-border"
            >
              <CardContent className="flex gap-4 p-6">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {useCase.icon}
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">{useCase.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{useCase.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
