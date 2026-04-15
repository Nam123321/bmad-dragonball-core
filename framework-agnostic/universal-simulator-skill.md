---
name: universal-simulator-skill
description: A universally applicable framework combining Pre-Deployment Quality Assurance and UX Simulation. Agnostic to project structure, allowing custom context injection. Uses Inner Monologue for reasoning and strict loop validation.
---

# 🌐 UNIVERSAL SIMULATOR SKILL (Hybrid QA & UX)

## 🎯 PURPOSE
This skill provides a 2-in-1 simulation gate for ANY project or architecture. It mentally evaluates deliverables (Code, UI, Prompts, Documents) against Structural Quality and User Experience (REAL-USER empathy). It prevents endless AI loops via strict constraints while operating perfectly without needing autonomous code execution tools.

---

## 🛑 GUARDRAILS (STRICT ENFORCEMENT)

| Rule | Limitation | Rationale |
|------|------------|-----------|
| **Round Limit** | Max 3 Simulation Rounds | Diminishing returns after round 3. Stops hallucination loops. |
| **Pass Score** | ≥ 8.5 / 10 | Must achieve high threshold to proceed. |
| **Delta Lock** | `< 0.5` improvement in 2 rounds | If no improvement, stop and request external expert review. |
| **Reasoning Method** | Hidden `<scratchpad>` | Mentally analyze without blasting the user with huge logs. |
| **Silent QA** | Minimal Output | Only output summary scorecard, bug list, and fix instructions. |

---

## 🛡️ AGENT INTEGRATION GUIDELINES (For the Host AI)
*Read this before executing this skill on a deliverable.*
- **To Auto-Fix:** If you are an agent equipped with filesystem/MCP tools (like `replace_file_content`, `git`, or `bash`), **DO NOT** just output a checklist. Once the user approves the verdict, use your tools to physically apply the fixes to the target files.
- **To Delegate:** If you have sub-agents (e.g., Code Gen Agent, QA Agent), use the Sub-Routing step to delegate the fix to them.
- **Text-Only Mode:** If you do not have tools, output copy-paste blocks for the user.

---

## 🛠️ THE 5-STEP FRAMEWORK

### STEP 0: CLASSIFICATION & SUB-ROUTING
1. **Load Context:** Review any user-provided knowledge bases, design systems, or context rules.
2. **Sub-Routing Assessment:** Classify the deliverable into one of the following main domains to dictate the core QA focus:
   - *Logic/Code* → Focus: Syntax, Performance, Big-O, Security
   - *Process/SOPs* → Focus: Loop-holes, Dead-ends, Redundancies
   - *Creative/Marketing* → Focus: Branding, Conversion, Storytelling
   - *Prompt/AI Spec* → Focus: Context-window, Instruction clarity, Hallucination-risk
   *(Host Agent Note: If you have a specialized expert agent for this domain, pause and delegate the deliverable to them. If not, proceed yourself).*

### STEP 1: UX SIMULATION GATING (Relevance Score)
Before jumping into user simulation, evaluate if REAL-USER empathy is needed:
- **Rate UX Relevance (0 to 5):** 
  - 0-2 (Internal Database, Backend Script, API)
  - 3-5 (UI, Chatbot, Customer Process, Sales Deck)
- **Decision:** If Score ≥ 3, declare `"UX Simulation: REQUIRED"`. If < 3, declare `"UX Simulation: SKIPPED"` and provide a 1-sentence reason (e.g., "This is a backend cron-job script with no human interface").

### STEP 2: MENTAL RUN & INNER MONOLOGUE
**YOU MUST NOT OUTPUT THIS RUN DIRECTLY.**
Do all reasoning inside a `<scratchpad>` XML block:
- **QA Analysis:** Walk through the artifact based on the domain focus (from Step 0).
- **UX Empathy (If REQUIRED in Step 1):** Think through Reality Context, Emotion, Action Patterns, Unpredictable behavior, and Language semantics of the end user.
- **Mental Sandbox:** Imagine running 10-20 test cases (happy path, edge cases, stress tests). Document failures.

### STEP 3: HYBRID SCORING & SUMMARY
*Calculate a score out of 10 inside the scratchpad. Then produce this exact format:*

```markdown
## 📊 SIMULATION RESULTS (Round X/3)
**Domain:** [Domain from Step 0] | **UX relevance:** [Score/5 - REQUIRED/SKIPPED (Reason)]

### Scorecard
| Axis | Score | Brief Note |
|------|-------|------------|
| Completeness & Domain Accuracy | X/10 | ... |
| Efficiency & Scalability | X/10 | ... |
| UX & Human Error (If Applicable)| X/10 | [Or N/A] |
| Edge Cases & Fail-safes | X/10 | ... |
**TOTAL: X.X / 10**

### 🔴 Bugs & Gaps
1. [Severity] [Description] → **Fix:** [Actionable Suggestion]

### 💡 Verdict
- [PASS / FIXABLE / REBUILD / FORCE STOP] 
```

### STEP 4: RESOLUTION INSTRUCTIONS
- If **PASS**: Output success and stop.
- If **FIXABLE**: Produce the Fix Checklist. *(Host Agent: Await user approval, then execute Auto-Fix if equipped).*
- If **REBUILD**: Provide a new Skeleton architecture and wait for user approval.
