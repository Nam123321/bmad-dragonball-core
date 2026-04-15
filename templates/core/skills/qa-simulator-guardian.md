---
name: qa-simulator-guardian
description: Advanced 3-Round Deliverable QA Simulation Gate with Auto-Fix. Checks deliverables against BMAD's 8-Pillars, Project Context, and UX bounds using mental execution (Inner Monologue). Automatically resolves bugs if host agent has edit tools.
---

# 🛡️ QA Simulator Guardian (BMAD Edition)

## 📌 OVERVIEW & AGENT INSTRUCTIONS
This skill acts as the final Quality Assurance (QA) bridge between Agent creation and User delivery. It evaluates deliverables (Code, UI Specs, Prompts, Documents) in the context of the specific project's architecture and BMAD standards.

### Host AI (You) Instructions:
1. **Always load `{project-root}/_bmad/project-context.md`** first to understand the project domain.
2. **Always evaluate against `{project-root}/.agent/skills/taxonomy-8-pillars.md`**.
3. **Inner Monologue is Mandatory:** You must use `<scratchpad>` to reason. Do not output the full test cases loudly.
4. **Auto-Fix Protocol:** If the result is FIXABLE, and you have tool access (e.g., `replace_file_content`), **DO NOT just print a checklist**. Wait for the user to say "Approve", then automatically execute the fixes using your tools.

---

## 🚦 FRAMEWORK EXECUTION RULES

| Guardrail | Enforcement | Rationale |
|-----------|-------------|-----------|
| **Round Limit** | Max 3 Rounds | Diminishing returns after round 3. Stops hallucination loops. |
| **Pass Score** | ≥ 8.5 / 10 | Must achieve high threshold to be considered production-ready. |
| **Delta Lock** | `< 0.5` improvement in 2 rounds | If no improvement, stop and request external expert review. |
| **Delegation** | Routing | If a specialized agent (Vegeta for Code, Songoku for Prompts) handles this exact domain better, delegate to them immediately. |

---

## 🛠️ THE 5-STEP SIMULATION PIPELINE

### STEP 0: BMAD CONTEXT & SUB-ROUTING
1. **Context Load:** Read `{project-root}/_bmad/project-context.md`. What is the architectural goal of this project? (e.g., AI-Embedded, High Security, etc.).
2. **Adaptive Test Case Count:** Mentally calculate complexity based on steps, branches, and actors.
   - *Light (≤3 steps, 1 output):* 10 mental test cases.
   - *Medium (4-6 steps, branches, or 2 actors):* 15-20 test cases.
   - *Heavy (>6 steps, complex logic/multi-actor):* 25-30 test cases.
3. **Determine Type & Specific Criteria:** Classify the deliverable into ONE of 13 types:
   1. **Skill/Prompts (.md):** Check Trigger accuracy, backward compatibility. (Songoku Domain)
   2. **Web App/UI:** Check responsive logic, error states. (Piccolo Domain)
   3. **Plans/Roadmaps:** Check budget/time feasibility. (Bulma Domain)
   4. **SOP/Excel:** Check dropdown validation, `IFERROR`.
   5. **Emails:** Check tone consistency, CTA clarity.
   6. **Chatbots:** Check KB separation, maximum token limits.
   7. **Landing Pages:** Check Trust signals, conversion friction.
   8. **Training:** Check progressive difficulty.
   9. **Policy:** Check legal loopholes.
   10. **Pitch Deck:** Check story arc, clear "Ask".
   11. **Automation:** Check trigger logic, Idempotency. (Vegeta Domain)
   12. **Pure Prompt:** Check CO-STAR/RISEN framework.
   13. **Wildcard:** Generate 3 custom criteria.

### STEP 1: UX RELEVANCE GATING
Before simulating, evaluate if REAL-USER empathy is needed:
- **Rate UX Relevance (0 to 5):** 
  - 0-2 (Internal Data, Backend API, Server Config)
  - 3-5 (UI Components, Sales SOPs, Chatbot Responses)
- **Decision:** If Score ≥ 3, declare `"UX Simulation: REQUIRED"`. 
  - *Note: If REQUIRED, you must evaluate against `{project-root}/.agent/skills/user-simulation-guardian/SKILL.md` in tandem.*
  - If < 3, declare `"UX Simulation: SKIPPED"`.

### STEP 2: INNER MONOLOGUE MENTAL RUN
Inside a `<scratchpad>` block, mentally generate your adaptive test cases.
Evaluate against:
- **BMAD 8-Pillars:** Check `{project-root}/.agent/skills/taxonomy-8-pillars.md`.
- **The 6 Core Axes:** Completeness, Clarity, Edge Cases, Efficiency, Scalability, Output Quality.

### STEP 3: HYBRID SCORECARD & DELTA TRACKER
*Calculate points internally out of 10. Output EXACTLY this template:*

```markdown
## ⚖️ QA SIMULATION GATE (Round X/3)
**Domain:** [Classified Type 1-13] | **UX relevance:** [Score/5 - REQUIRED/SKIPPED]

### Scorecard (The 6 Core Axes)
| # | Axis | Score | Brief Note |
|---|------|-------|------------|
| 1 | Completeness | X/10 | Covers all requirements? |
| 2 | Clarity | X/10 | Unambiguous logic/instructions? |
| 3 | Edge Cases (8-Pillars) | X/10 | BMAD pillars satisfied? |
| 4 | Efficiency | X/10 | Token/Compute redundancy? |
| 5 | Scalability | X/10 | Valid at 10x scale? |
| 6 | Output Quality | X/10 | Usable as-is? |
| 7 | REAL-USER Empathy | X/10 | [Or N/A] |

**TOTAL AVERAGE: X.X / 10**

### 🔄 Delta Tracker (Guardrail Enforcement)
| Metric | Value |
|--------|-------|
| Previous Round Score | [N/A or X.X] |
| Current Round Score | X.X |
| **Delta** | **[Current - Prev]** |
| Delta Lock Triggered? | [Yes: FORCE STOP / No: Continue] |

### 🔴 Bugs & Gaps
1. [Severity] [Description] → **Fix:** [Actionable Coding/Writing Suggestion]

### 💡 Verdict
- [PASS / FIXABLE / REBUILD / FORCE STOP] 
```

### STEP 4: RESOLUTION
- If **PASS**: Complete task.
- If **FIXABLE**: Tell the user: *"Please reply with 'Approve' and I will automatically apply these fixes to the files."* *(If you lack tools, provide a copy-paste Checklist instead).*
- If **REBUILD**: Provide a new Architecture Skeleton and request rebuild authority.
