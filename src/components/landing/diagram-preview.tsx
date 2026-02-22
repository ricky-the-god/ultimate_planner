"use client";

import { useEffect, useState } from "react";

interface Node {
  id: string;
  label: string;
  type: "service" | "database" | "api" | "queue";
  x: number;
  y: number;
}

interface Edge {
  from: string;
  to: string;
}

const nodes: Node[] = [
  { id: "api", label: "API Gateway", type: "api", x: 180, y: 40 },
  { id: "auth", label: "Auth Service", type: "service", x: 60, y: 140 },
  { id: "user", label: "User Service", type: "service", x: 300, y: 140 },
  { id: "queue", label: "Message Queue", type: "queue", x: 180, y: 240 },
  { id: "db", label: "PostgreSQL", type: "database", x: 180, y: 340 },
];

const edges: Edge[] = [
  { from: "api", to: "auth" },
  { from: "api", to: "user" },
  { from: "auth", to: "queue" },
  { from: "user", to: "queue" },
  { from: "queue", to: "db" },
];

const getNodeCenter = (node: Node) => ({
  x: node.x + 60,
  y: node.y + 20,
});

const nodeColors = {
  service: "from-blue-500/20 to-blue-600/10 border-blue-500/30",
  database: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/30",
  api: "from-amber-500/20 to-amber-600/10 border-amber-500/30",
  queue: "from-purple-500/20 to-purple-600/10 border-purple-500/30",
};

const nodeGlows = {
  service: "shadow-blue-500/20",
  database: "shadow-emerald-500/20",
  api: "shadow-amber-500/20",
  queue: "shadow-purple-500/20",
};

const nodeIcons = {
  service: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
    />
  ),
  database: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
    />
  ),
  api: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
    />
  ),
  queue: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
    />
  ),
};

export const DiagramPreview = () => {
  const [activeEdge, setActiveEdge] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveEdge((prev) => (prev + 1) % edges.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative h-[420px] w-full max-w-[420px]">
      {/* Glow backdrop */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent" />

      {/* SVG for edges */}
      <svg aria-hidden="true" className="absolute inset-0 h-full w-full" style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.75 0.15 75 / 0.3)" />
            <stop offset="100%" stopColor="oklch(0.75 0.15 75 / 0.1)" />
          </linearGradient>
          <linearGradient id="activeEdgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.75 0.15 75 / 0.8)" />
            <stop offset="100%" stopColor="oklch(0.75 0.15 75 / 0.4)" />
          </linearGradient>
        </defs>
        {edges.map((edge, index) => {
          const fromNode = nodes.find((n) => n.id === edge.from);
          const toNode = nodes.find((n) => n.id === edge.to);
          if (!fromNode || !toNode) return null;
          const from = getNodeCenter(fromNode);
          const to = getNodeCenter(toNode);
          const isActive = index === activeEdge;

          return (
            <g key={`${edge.from}-${edge.to}`}>
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={isActive ? "url(#activeEdgeGradient)" : "url(#edgeGradient)"}
                strokeWidth={isActive ? 2 : 1}
                className="transition-all duration-500"
              />
              {isActive && (
                <circle r="3" fill="oklch(0.75 0.15 75)" className="animate-pulse">
                  <animateMotion dur="1s" repeatCount="1" path={`M${from.x},${from.y} L${to.x},${to.y}`} />
                </circle>
              )}
            </g>
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node, index) => (
        <div
          key={node.id}
          className={`absolute flex items-center gap-2 rounded-lg border bg-gradient-to-br px-3 py-2 shadow-lg transition-all duration-500 ${nodeColors[node.type]} ${nodeGlows[node.type]}`}
          style={{
            left: node.x,
            top: node.y,
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(10px)",
            transitionDelay: `${index * 100}ms`,
          }}
        >
          <svg
            aria-hidden="true"
            className="size-4 text-zinc-950/70 dark:text-zinc-50/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
          >
            {nodeIcons[node.type]}
          </svg>
          <span className="font-mono-tight text-xs text-zinc-950/80 dark:text-zinc-50/80">{node.label}</span>
        </div>
      ))}

      {/* Floating labels */}
      <div
        className="-right-4 absolute top-8 rounded border border-zinc-950/10 bg-zinc-950/5 px-2 py-1 backdrop-blur-sm dark:border-zinc-50/10 dark:bg-zinc-50/5"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateX(0)" : "translateX(-10px)",
          transitionDelay: "600ms",
          transition: "all 500ms",
        }}
      >
        <span className="font-mono-tight text-[10px] text-zinc-950/50 dark:text-zinc-50/50">v2.1.0</span>
      </div>

      <div
        className="-left-2 absolute bottom-20 rounded border border-zinc-950/10 bg-zinc-950/5 px-2 py-1 backdrop-blur-sm dark:border-zinc-50/10 dark:bg-zinc-50/5"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateX(0)" : "translateX(10px)",
          transitionDelay: "700ms",
          transition: "all 500ms",
        }}
      >
        <span className="font-mono-tight text-[10px] text-emerald-600/80 dark:text-emerald-400/80">connected</span>
      </div>
    </div>
  );
};
