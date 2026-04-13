# BMAD Machine Memory Schema

> **⚠️ This file is for HUMAN reference only. Agents MUST read `instincts.jsonl` directly.**

## Instinct Record Format (Dense JSONL)

Each line in `instincts.jsonl` is a single JSON object with the following fields:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `ts` | string | ✅ | ISO date (YYYY-MM-DD) when the instinct was recorded |
| `src` | string | ✅ | Origin workflow: `fix-bug`, `code-review`, `audit-ux`, `self-check`, `ad-hoc` |
| `ctx` | string | ✅ | Comma-separated context tags (e.g., `nestjs,prisma,guard`) |
| `bad` | string | ✅ | The anti-pattern or mistake observed |
| `good` | string | ✅ | The correct pattern or fix applied |
| `sev` | number | ✅ | Severity 1-5 (1=minor style, 5=critical crash) |
| `file` | string | ❌ | File path where the issue was found (optional) |
| `ref` | string | ❌ | Reference link: Story ID, PR number, or doc link (optional) |

## Example Records

```jsonl
{"ts":"2026-04-07","src":"fix-bug","ctx":"nestjs,prisma","bad":"findMany() no limit","good":"findMany({take:50})","sev":5,"file":"order.service.ts"}
{"ts":"2026-04-07","src":"code-review","ctx":"react,nextjs","bad":"<a href>","good":"<Link href>","sev":3,"file":"nav.tsx"}
{"ts":"2026-04-06","src":"ad-hoc","ctx":"ui,modal","bad":"absolute center div","good":"use Drawer component from antd","sev":2}
{"ts":"2026-04-05","src":"audit-ux","ctx":"ui,bulk-action","bad":"floating cart on orders tab","good":"header action bar (consistent with products)","sev":4,"ref":"ux-patterns.yaml#bulk-action"}
```

## Graph Integration

When FalkorDB is available, each instinct SHOULD also be indexed as a Graph Node:
```cypher
GRAPH.QUERY featuregraph "CREATE (:Instinct {id:'inst_001', ctx:'nestjs,prisma', bad:'findMany() no limit', good:'findMany({take:50})', sev:5, ts:'2026-04-07', src:'fix-bug'})"
```

## Lifecycle

1. **Created** — Agent appends a line after fixing a bug or discovering a pattern.
2. **Indexed** — (Optional) Node created in FeatureGraph with `[:AFFECTS]` edges.
3. **Resolved** — Whis clusters instincts and upgrades a SKILL.md. Edge `[:RESOLVED_IN]` added.
4. **Archived** — Resolved instincts are moved to `instincts.archive.jsonl` (cold storage).
