---
name: clone-website
description: 'Suite of skills for reverse-engineering websites. Includes DOM extraction, design token extraction, and interaction analysis. Used by Cell agent and available as sub-skills for Piccolo, Vegeta, and Tien-Shinhan.'
---

# Clone Website — Skill Suite

This skill suite provides three specialized sub-tools for website analysis and cloning. Each can be used independently or as part of the full clone pipeline.

## Sub-Skills

### 1. DOM Extractor (`dom-extractor.md`)
**Purpose:** Inject JavaScript into a browser page to recursively extract computed CSS styles from any DOM container.
**Used by:** Cell (full clone), Vegeta (component reference), Piccolo (UI spec enrichment)
**Output:** JSON tree of elements with exact `getComputedStyle()` values
**Usage:** Load and follow `{project-root}/.agent/skills/clone-website/dom-extractor.md`

### 2. Token Extractor (`token-extractor.md`)
**Purpose:** Extract the Design System tokens (colors, fonts, spacing, shadows, radius) from a target website.
**Used by:** Cell (full clone), Piccolo (Design Token initialization), Bulma (competitive analysis)
**Output:** Structured Design Token document (Markdown)
**Usage:** Load and follow `{project-root}/.agent/skills/clone-website/token-extractor.md`

### 3. Interaction Analyzer (`interaction-analyzer.md`)
**Purpose:** Sweep a page for interactive behaviors — scroll-driven, click-driven, hover states, animations, responsive breakpoints.
**Used by:** Cell (full clone), Tien-Shinhan (QA test case generation)
**Output:** Behavioral specification document (BEHAVIORS.md)
**Usage:** Load and follow `{project-root}/.agent/skills/clone-website/interaction-analyzer.md`

## Integration Points

| Agent | When to Invoke | Which Sub-Skill |
|-------|---------------|----------------|
| **Cell** | `/clone-website` full pipeline | All three |
| **Piccolo** | `/create-ui-spec` when PRD references a URL | `token-extractor` |
| **Vegeta** | Coding a UI component with external reference | `dom-extractor` |
| **Tien-Shinhan** | Generating interaction test cases | `interaction-analyzer` |
| **Bulma** | Competitive UI/UX benchmarking | `token-extractor` |

## Prerequisites
- The `browser_subagent` tool must be available in the current environment
- Target URLs must be publicly accessible (no auth-walled pages)

## Output Locations
All extraction outputs are saved under the project's `docs/research/cloned-specs/` directory:
- `design-tokens.md` — Global design tokens
- `PAGE_TOPOLOGY.md` — Section map
- `BEHAVIORS.md` — Interaction analysis
- `components/*.spec.md` — Individual component specifications
