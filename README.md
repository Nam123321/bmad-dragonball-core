# BMAD-DragonBall

A Global, Agentic SDLC Framework packed with Dragon Ball character-themed specialized AI personas, workflows, and tools.

## What is BMAD-DragonBall?

BMAD-DragonBall transforms standard software development processes into an epic, multi-agent automated pipeline. Instead of relying on one generic AI, your project is managed by a team of highly specialized Agent Personas:

- **Grand-Priest (Master)**: Orchestrates the entire flow
- **King-Kai (PM)**: Project Manager, scope and sprint planning
- **Bulma (Analyst)**: Breaks down requirements and business logic
- **Piccolo (Architect)**: System design and structural integrity
- **Vegeta (Dev)**: Hardcore code generation and implementation
- **Tien-Shinhan (QA)**: Three-eyed bug squashing and automated testing
- **Trunks (Scrum Master)**: Timeline and process adherence
- **Songoku (AI Engineer)**: (Optional Module) Master of LLMs, RAG, and AI Ops

## Installation

As this is a global CLI tool, install it globally via npm:

```bash
npm install -g bmad-db
```

Or run via npx:
```bash
npx bmad-db init
```

## Usage

### 1. Initialize the Core Team
In your new or existing project directory, summon the core team (Bulma, Vegeta, Piccolo, etc.) and basic workflows.
```bash
npx bmad-db init --platform <cursor|antigravity|claude|codex>
```
*Note: Depending on the platform chosen, the CLI will output `.cursor/rules/*.mdc`, `.agent/workflows/*.md`, or `.claude/*.md`.*

### 2. Add Extension Packs (Library)
Not every project needs marketing bots or advanced docker optimizers. Add what you need:
```bash
npx bmad-db add ai-pack             # Summons Songoku for AI-embedded apps
npx bmad-db add frontend-pack       # Summons Android-18 for advanced UI & Stitch integrations
npx bmad-db add backend-pack        # Summons Shenron for Data Architecture & Integrity protocols
npx bmad-db add devops-pack         # Docker slimming and CI/CD tools
```

## The BMAD Process

1. **Ideation**: Run `/creative-intelligence` (Gotenks)
2. **Analysis**: Run `/create-prd` (Bulma)
3. **Architecture**: Run `/create-architecture` (Piccolo)
4. **Module Research**: Run `/research-project-modules` (Grand-Priest) -> Evaluates if your project needs `ai-pack`, `frontend-pack`, etc., and instructs you to install them via `npx bmad-db add`.
5. **Execution**: Run `/sprint-planning`, `/create-story`, `/dev-story` (Vegeta, King-Kai)
6. **Code Review & QA**: Run `/code-review`, `/fix-bug` (Tien-Shinhan, Trunks)
