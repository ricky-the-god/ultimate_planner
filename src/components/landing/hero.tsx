"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import { DiagramPreview } from "./diagram-preview";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-24">
      {/* Cosmos background: micro-dot grid */}
      <div className="pointer-events-none absolute inset-0 bg-cosmos-dots" />

      {/* Cosmos radial gradient flare from top */}
      <div className="pointer-events-none absolute inset-0 bg-cosmos-gradient" />

      {/* Secondary ambient glow - subtle */}
      <div className="-translate-y-1/4 pointer-events-none absolute top-1/4 right-0">
        <div className="h-[500px] w-[500px] rounded-full bg-primary/8 blur-[180px]" />
      </div>

      {/* Main content - 2 column layout */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl items-center">
        <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left column - Content */}
          <div className="flex flex-col justify-center">
            {/* Version badge - cosmos glass style */}
            <div className="glass mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-zinc-950/10 px-4 py-2 dark:border-zinc-50/10">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-2 animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              <span className="font-mono-tight text-xs text-zinc-950/60 dark:text-zinc-50/60">v1.0 Beta</span>
              <span className="text-zinc-950/20 dark:text-zinc-50/20">|</span>
              <span className="font-mono-tight text-xs text-zinc-950/40 dark:text-zinc-50/40">Now available</span>
            </div>

            {/* Main headline */}
            <h1 className="mb-6 font-normal text-4xl text-editorial text-zinc-950 leading-[1.1] tracking-tight md:text-5xl lg:text-6xl dark:text-zinc-50">
              Design systems.
              <br />
              <span className="bg-gradient-to-r from-primary to-amber-500 bg-clip-text font-normal text-transparent dark:to-amber-300">
                Generate plans.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mb-10 max-w-md text-base text-zinc-950/50 leading-relaxed md:text-lg dark:text-zinc-50/50">
              A visual-first architecture tool for engineers who think in diagrams. Transform your system design into
              AI-ready implementation plans.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button
                size="lg"
                className="h-11 rounded-full border border-zinc-950/10 bg-zinc-950 px-6 font-normal text-sm text-zinc-50 hover:bg-zinc-950/90 dark:border-zinc-50/10 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-50/90"
                asChild
              >
                <Link href="/dashboard">
                  Open Canvas
                  <svg aria-hidden="true" className="ml-2 size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-11 rounded-full border-zinc-950/10 bg-zinc-950/5 px-6 font-normal text-sm text-zinc-950/80 hover:bg-zinc-950/10 hover:text-zinc-950 dark:border-zinc-50/10 dark:bg-zinc-50/5 dark:text-zinc-50/80 dark:hover:bg-zinc-50/10 dark:hover:text-zinc-50"
                asChild
              >
                <Link href="#how-it-works">How it works</Link>
              </Button>
            </div>

            {/* Tech specs */}
            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono-tight text-[11px] text-zinc-950/30 uppercase tracking-wider dark:text-zinc-50/30">
              <span className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-primary/60" />
                React Flow
              </span>
              <span className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-primary/60" />
                AI Export
              </span>
              <span className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-primary/60" />
                Real-time
              </span>
              <span className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-primary/60" />
                TypeScript
              </span>
            </div>
          </div>

          {/* Right column - Floating diagram preview */}
          <div className="relative hidden items-center justify-center lg:flex">
            {/* Glow behind diagram */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[300px] w-[300px] rounded-full bg-primary/10 blur-[100px]" />
            </div>
            <DiagramPreview />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="-translate-x-1/2 absolute bottom-8 left-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono-tight text-[10px] text-zinc-950/20 uppercase tracking-widest dark:text-zinc-50/20">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-zinc-950/20 to-transparent dark:from-zinc-50/20" />
        </div>
      </div>
    </section>
  );
};
