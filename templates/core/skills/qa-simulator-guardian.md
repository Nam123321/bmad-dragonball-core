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
2. **Sub-Routing Assessment:** Classify the deliverable:
   - *Logic/Code* → Focus: Syntax, Performance, Big-O, Security (Vegeta/Piccolo Domain)
   - *Creative/Marketing* → Focus: Branding, Conversion, Storytelling (Hercule/Majin Buu Domain)
   - *Prompt/AI* → Focus: Context windows, Hallucination risk (Songoku Domain)

### STEP 1: UX RELEVANCE GATING
Before simulating, evaluate if REAL-USER empathy is needed:
- **Rate UX Relevance (0 to 5):** 
  - 0-2 (Internal Data, Backend API, Server Config)
  - 3-5 (UI Components, Sales SOPs, Chatbot Responses)
- **Decision:** If Score ≥ 3, declare `"UX Simulation: REQUIRED"`. 
  - *Note: If REQUIRED and you need deep UX empathy, you should call `{project-root}/.agent/skills/user-simulation-guardian/SKILL.md` in tandem.*
  - If < 3, declare `"UX Simulation: SKIPPED (Reason)"`.

### STEP 2: INNER MONOLOGUE MENTAL RUN
Inside a `<scratchpad>` block, mentally generate 10-20 test cases.
Evaluate against:
- **BMAD 8-Pillars:** Check Input Boundary, State Transitions, Concurrency, Data Integrity, Integration, Permissions, Infrastructure, Business Rules.
- **Efficiency:** Are tokens or compute wasted?
- **Clarity:** Is it overly complex? 

### STEP 3: SCORECARD
*Calculate points internally out of 10. Output EXACTLY this template:*

```markdown
## ⚖️ QA SIMULATION GATE (Round X/3)
**Domain:** [Domain from Step 0] | **UX relevance:** [Score/5 - REQUIRED/SKIPPED]

### Scorecard
| Axis | Score | Brief Note |
|------|-------|------------|
| Context Alignment (Project Rules) | X/10 | ... |
| Efficiency & Maintainability | X/10 | ... |
| 8-Pillars Compliance | X/10 | ... |
| UX Empathy (If Applicable) | X/10 | [Or N/A] |
**TOTAL: X.X / 10**

### 🔴 Bugs & Gaps
1. [Severity] [Description] → **Fix:** [Actionable Coding/Writing Suggestion]

### 💡 Verdict
- [PASS / FIXABLE / REBUILD / FORCE STOP] 
```

### STEP 4: RESOLUTION
- If **PASS**: Complete task.
- If **FIXABLE**: Tell the user: *"Please reply with 'Approve' and I will automatically apply these fixes to the files."* *(If you lack tools, provide a copy-paste Checklist instead).*
- If **REBUILD**: Provide a new Architecture Skeleton and request rebuild authority.
