---
name: User Simulation Guardian
description: >
  1st-Principle User Thinking — REAL-USER Protocol for simulating authentic 
  user behavior across application personas. Forces non-linear, context-aware thinking 
  when designing features, reviewing UI specs, and validating interaction patterns.
  Prevents linear/developer-centric design by requiring business context awareness,
  industry-specific scenarios, and multi-persona validation.
---

# 🧑‍💼 User Simulation Guardian SKILL

## Purpose

Forces every feature design and UI spec through the lens of **real users in real contexts** — not the linear flows developers and designers imagine. This SKILL provides:

1. **REAL-USER Protocol** — 8-dimension framework for user simulation
2. **Configurable Personas** — Define personas matching your project's user types (B2B, B2C, SaaS, etc.)
3. **Context Scenarios** — Real-world conditions (peak traffic, low connectivity, first-time use)
4. **Feature Validation Checklist** — Gate check that blocks approval of linear-only designs

## When to Use

| Context | Trigger | Required? |
|---------|---------|-----------|
| `/create-ui-spec` | Before finalizing UI spec | ✅ MANDATORY |
| `/Vegeta-story` | When implementing interaction patterns | ✅ MANDATORY |
| `/code-review` | Reviewing user-facing features | ✅ MANDATORY |
| `/simulate-user` | Dedicated user simulation workflow | ✅ MANDATORY |
| `/create-epics-and-stories` | Writing acceptance criteria | ⚡ RECOMMENDED |
| `/Gotenks` | Ideation sessions | ⚡ RECOMMENDED |

---

## 1. REAL-USER Protocol (8 Dimensions)

> 🚨 **MANDATORY:** Every UI spec and user-facing feature MUST be analyzed through ALL 8 dimensions before approval. Skipping any dimension requires explicit justification documented in the spec.

### R — Reality Context

```
Answer BEFORE designing:

BUSINESS CONTEXT:
□ What industry/domain is this product for?
□ What are the product's unique characteristics?
□ What channels exist? (B2B wholesale, B2C retail, hybrid?)
□ Which portal is the user on? Who is the target audience?

USER CONTEXT:
□ Where is the user physically? (field, warehouse, office, home?)
□ What device? (phone with wet hands, tablet in vehicle, desktop?)
□ Focus level? (multitasking? rushing? relaxed?)
□ Environment? (noisy outdoor? quiet office? bright sunlight?)
```

### E — Emotion & Motivation

```
□ WHY are they opening the app RIGHT NOW? 
  → Urgent need? Daily routine? Boss requested?
  → Browsing? Checking order status? Comparing prices?
□ Emotional state? 
  → Frustrated by complex UI? Rushed because a customer is waiting?
  → Relaxed during downtime? Curious about new features?
□ Expectations?
  → "Fast, accurate, no thinking required"
  → "I want AI to understand me and suggest what I need"
```

### A — Action Pattern (NOT linear)

```
🚨 CRITICAL: Users NEVER follow the flow designers draw.

Real patterns to simulate:
□ JUMP: User jumps between pages (catalog → orders → catalog)
□ ABANDON: Leaves mid-flow, returns 2 hours later
□ MULTI-TAB: Opens multiple tabs to compare
□ COPY-PASTE: Pastes from chat/email instead of retyping
□ VOICE-FIRST: Speaks before typing (field agents)
□ REPEAT: 80% of actions are the same as last time → "redo last order"
□ APPEND: "Oh, add 2 more items" → append to existing transaction?
□ INTERRUPT: Mid-action → phone call → returns → state lost?
□ BATCH: Doesn't want one-by-one — wants to process a full list at once
```

### L — Language & Literacy

```
□ Abbreviations and shorthand common in the domain
□ Emoji usage in input fields
□ Spelling errors and typos
□ Regional language/dialect variations
□ Mixed-content input: order + question + emoji in same message
□ Vague quantities: "a few" = 3? 5? "some" = how many?
□ Context-dependent terms: "small bottle" — what size exactly?
```

### U — Unexpected Paths

```
□ Back button mid-flow → state lost?
□ Device orientation change → layout breaks?
□ Double-tap / double-click → duplicate action?
□ Intermittent internet → retry → duplicate submission?
□ App killed by OS (OOM) → return → resume from where?
□ Tab switch → SSE/WebSocket stream lost?
□ Multiple devices: start on phone, finish on desktop
```

### S — Social Context

```
□ Field agent standing in front of a client → needs speed, looks professional
□ Business client → price-sensitive, comparing, wants good deals
□ End consumer → considers quality, budget, personal preferences
□ Supervisor in a meeting → needs quick summary, not details
□ Online agent → managing multiple activities simultaneously
□ Team lead → switching between selling and team management
```

### E — Edge Behaviors

```
□ Very large input (100+ items, long text) → scroll performance? input time?
□ Very small input (1 item, 1 word) → overkill UI? bypass flow?
□ 3 consecutive actions → fatigue, wants shortcut
□ Item becomes unavailable mid-transaction → UX for out-of-stock?
□ Price changes between browsing and confirming → surprise?
□ Re-using previous transaction → "repeat last order"
□ Acting on behalf of someone else → "place order for branch X"
```

### R — Repeat Patterns

```
□ 80% of transactions are similar to last time → "reorder" must be flow #1
□ "Same as yesterday" = most common use case
□ Monday planning, Friday summary → daily/weekly rhythm
□ First month → onboarding moment
□ Seasonal peaks → volume increases 3-5x → system must handle scale
□ Purchase cycles: B2B buys weekly, B2C buys daily
```

---

## 2. Persona System

Personas are stored in `{project-root}/.agent/skills/user-simulation-guardian/personas/`.

### Loading Protocol

```
1. Identify which personas are relevant for the feature being analyzed
2. Load MINIMUM 3 personas per feature
3. For each persona, walk through the FULL REAL-USER Protocol
4. Document gaps/conflicts between persona experiences
5. If feature is multi-portal → MUST include personas from EACH portal
```

### Persona Registry (Template — Customize per project)

| ID | Role | Portal | Type | Priority |
|----|------|--------|------|----------|
| P1 | Business Client | Customer Portal | B2B Customer | ⭐ Always |
| P2 | Field Agent / Sales Rep | Staff App | B2B/B2C Sales | ⭐ Always |
| P3 | Admin / Operator | Admin Dashboard | Internal | When admin features |
| P4 | Supervisor / Manager | Admin Dashboard | Internal | When management features |
| P5 | End Consumer | Customer Portal | B2C Consumer | ⭐ Always for storefront |

> **Note:** Customize these personas to match YOUR project's actual user types. Create persona files in the `personas/` directory with detailed behavioral profiles.

---

## 3. Scenario System

Scenarios are stored in `{project-root}/.agent/skills/user-simulation-guardian/scenarios/`.

### Scenario Selection

```
MANDATORY: Every feature MUST be tested against AT LEAST 2 scenarios.
RECOMMENDED: Cross-test persona × scenario combinations.

Example grid:
┌──────────────┬──────────┬──────────┬────────────┬──────────────┐
│ Persona \     │ Peak     │ Low      │ First-time │ Domain       │
│ Scenario     │ Traffic  │ Connect  │ User       │ Specific     │
├──────────────┼──────────┼──────────┼────────────┼──────────────┤
│ Biz Client   │ ✅ Must  │ ⚡ Should│ ⚡ Should  │ ⚡ Should    │
│ Field Agent  │ ✅ Must  │ ✅ Must  │ ⚡ Should  │ ❌ N/A       │
│ Consumer     │ ⚡ Should│ ⚡ Should│ ✅ Must    │ ✅ Must      │
│ Admin        │ ❌ N/A   │ ❌ N/A   │ ⚡ Should  │ ❌ N/A       │
│ Supervisor   │ ⚡ Should│ ❌ N/A   │ ❌ N/A     │ ❌ N/A       │
└──────────────┴──────────┴──────────┴────────────┴──────────────┘
```

---

## 4. Feature Validation Gate

> 🚨 **This gate BLOCKS approval of any UI spec or feature that only has linear-flow thinking.**

Load checklist from `{project-root}/.agent/skills/user-simulation-guardian/checklists/feature-validation.md`.

### Quick Gate Check (for inline use)

```
PASS/FAIL criteria — ALL must pass:
□ ≥3 personas simulated with documented findings
□ ≥2 scenarios cross-tested
□ Business context (R-dimension) explicitly documented
□ At least 1 non-linear path identified and addressed
□ Copy-paste/voice path designed (not just click path)
□ "Reorder/repeat" path designed for applicable features
□ Edge behaviors (very large, very small, interrupted) addressed
□ Language/input variants documented (abbreviations, emoji, regional)
```

---

## 5. Output Format

After running user simulation, produce this output for inclusion in UI spec or story:

```markdown
### 🧑‍💼 User Simulation Report

**Feature:** [Feature name]
**Date:** [Date]
**Personas tested:** P1 (Business Client), P2 (Field Agent), P5 (Consumer)
**Scenarios tested:** Peak Traffic, First-time User

#### Business Context
- **Industry:** [e.g., E-commerce, SaaS, Healthcare]
- **Channel:** [B2B + B2C]
- **Portal user type:** [Customer Portal: end consumers + business clients]

#### Findings

| # | Persona | Scenario | Gap Found | Severity | Resolution |
|:-:|---------|----------|-----------|----------|------------|
| 1 | Consumer | First-time | Onboarding flow too complex for new users | HIGH | Add guided tour |
| 2 | Field Agent | Peak Traffic | Batch processing unavailable during high load | MEDIUM | Add batch mode |
| 3 | Biz Client | Repeat | No "reorder" shortcut | HIGH | Add reorder button |

#### Non-Linear Paths Identified
1. [Path description + how it's handled]
2. [Path description + how it's handled]

#### Gate Result: ✅ PASS / ❌ FAIL (with reason)
```

---

## 6. Integration Hooks

### In `/create-ui-spec` (Step N — before finalization)
```
GATE: Load user-simulation-guardian SKILL
→ Run REAL-USER Protocol against the UI spec
→ Minimum 3 personas + 2 scenarios
→ Append User Simulation Report to UI spec
→ FAIL = do not approve UI spec
```

### In `/Vegeta-story` (Step 2 — after loading story)
```
CHECK: If story has UI components:
→ Load user-simulation-guardian SKILL
→ Reference persona files for the target portal
→ Validate interaction patterns against REAL-USER A-dimension
```

### In `/code-review` (Step 3 — adversarial review)
```
CHECK: For user-facing code:
→ Load user-simulation-guardian SKILL
→ Verify edge behaviors (U-dimension) are handled
→ Verify language variants (L-dimension) are handled
→ Add findings to review report
```
