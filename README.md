# Ultimate Planner

**The Figma of System Design** — A visual-first architecture tool for senior engineers to design complex systems, make critical decisions, and generate executable AI planning files.

## The Problem: Blind AI Coding

AI coding assistants are powerful, but they operate blind. Without understanding your system's architecture, scalability constraints, or security requirements, they generate code in isolation — leading to:

- Inconsistent architectural decisions across your codebase
- Components that don't align with your infrastructure choices
- Repeated context-setting in every AI conversation
- No visual spec for AI agents to validate their output against

**Ultimate Planner bridges this gap.** It provides AI with a complete visual and contextual understanding of your system before a single line of code is written.

---

## Core Features

### Visual Systemizer

An infinite canvas built with React Flow for architecting complex distributed systems.

- Drag-and-drop system components: **Microservices**, **Databases**, **Caches**, **Message Queues**, **Load Balancers**, **CDNs**, **Third-party APIs**
- Define relationships, data flows, and dependencies visually
- Export architecture as code-ready specifications

### Senior-Level Decision Panels

Each component prompts you with critical architectural questions — not simple settings.

| Component | Decision Prompts |
|-----------|------------------|
| Database | ACID vs. BASE? Read/write ratio? Sharding strategy? |
| Cache | Write-through vs. write-behind? Eviction policy? TTL strategy? |
| Service | Sync vs. async communication? Circuit breaker config? |
| API Gateway | Rate limiting? Auth strategy? Request transformation? |

These decisions are captured and included in the generated AI context.

### AI Context Bridge

Upload UI screenshots, wireframes, or design inspirations. The AI analyzes visual inputs and suggests:

- Backend data models and API structures
- Component boundaries and service decomposition
- Infrastructure requirements based on UI complexity

### Claude Code Integration

One-click generation of AI-ready planning files:

```
your-project/
├── CLAUDE_PLAN.md          # Complete system spec for Claude
└── .claude/
    ├── settings.json       # Project-specific Claude config
    ├── agents/
    │   ├── design-reviewer.md
    │   ├── security-auditor.md
    │   └── performance-analyst.md
    └── mcp/
        ├── playwright.json # Visual testing config
        └── context7.json   # Documentation fetching
```

### Agentic Iteration Loop

Integration with Playwright MCP enables AI agents to:

1. **See** the running implementation via browser automation
2. **Compare** rendered output against the visual architecture
3. **Self-correct** when implementation drifts from spec
4. **Validate** component interactions match defined data flows

---

## Technical Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 15 (App Router) |
| **Styling** | Tailwind CSS v4, shadcn/ui |
| **Canvas** | React Flow |
| **Auth & Database** | Supabase (Auth, PostgreSQL, Edge Functions) |
| **AI** | Vercel AI SDK, Anthropic Claude 3.5 Sonnet/Opus |
| **Deployment** | Vercel, GitHub Actions |
| **Tooling** | TypeScript, Biome, Husky |

---

## Installation

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- Supabase account (for auth and persistence)
- Anthropic API key

### Setup

```bash
# Clone the repository
git clone https://github.com/ricky-the-god/ultimate_planner.git
cd ultimate_planner

# Install dependencies
pnpm install

# Copy environment template
cp .env.example .env.local

# Configure environment variables
# NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
# ANTHROPIC_API_KEY=your_anthropic_key

# Start development server
pnpm dev
```

Your app will be running at [http://localhost:3000](http://localhost:3000)

---

## MCP Integration

Ultimate Planner is designed to work seamlessly with Claude Code's MCP (Model Context Protocol) servers.

### Playwright MCP

Enables visual validation of implementations against your architecture.

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@anthropic/mcp-playwright"]
    }
  }
}
```

**Use cases:**
- Screenshot comparison between spec and implementation
- Automated visual regression testing
- Component interaction validation

### Context7 MCP

Fetches up-to-date documentation for libraries in your stack.

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["@anthropic/mcp-context7"]
    }
  }
}
```

**Use cases:**
- Auto-fetch docs for dependencies in your architecture
- Ensure AI uses current API references
- Reduce hallucination in generated code

### Recommended MCP Configuration

Add to your `~/.claude/settings.json`:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@anthropic/mcp-playwright"]
    },
    "context7": {
      "command": "npx",
      "args": ["@anthropic/mcp-context7"]
    }
  }
}
```

---

## Project Structure

```
ultimate_planner/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (main)/
│   │   │   ├── dashboard/      # Dashboard pages
│   │   │   └── auth/           # Authentication flows
│   │   └── layout.tsx
│   ├── components/
│   │   └── ui/                 # shadcn/ui components
│   ├── lib/
│   │   ├── preferences/        # Theme & layout management
│   │   └── utils.ts
│   └── stores/                 # Zustand state management
├── .claude/                    # Claude Code configuration
└── media/                      # Static assets
```

---

## Roadmap

### Phase 1: Foundation (Current)
- [x] Dashboard UI framework
- [x] Theme system with presets
- [x] Authentication flows
- [ ] React Flow canvas integration
- [ ] Basic component library (services, databases)

### Phase 2: Intelligence
- [ ] Decision panel system
- [ ] AI Context Bridge (screenshot analysis)
- [ ] CLAUDE_PLAN.md generation
- [ ] Sub-agent configurations

### Phase 3: Validation
- [ ] Playwright MCP integration
- [ ] Visual diff comparison
- [ ] Agentic iteration loop
- [ ] Architecture drift detection

### Phase 4: Collaboration
- [ ] Real-time multiplayer editing
- [ ] Version control for architectures
- [ ] Team decision audit logs
- [ ] Export to Mermaid/PlantUML

---

## Contributing

Contributions are welcome. This project follows a colocation-based architecture — each feature keeps its pages, components, and logic inside its route folder.

```bash
# Format and lint
pnpm check:fix

# Run type checks
pnpm build
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## License

MIT License. See [LICENSE](LICENSE) for details.

---

<p align="center">
  <strong>Stop coding blind. Start with a visual spec.</strong>
</p>
