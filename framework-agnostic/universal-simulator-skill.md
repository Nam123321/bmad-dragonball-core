---
name: universal-simulator-skill
description: A universally applicable Monolithic QA Framework combining Pre-Deployment Quality Assurance and UX Simulation. Agnostic to project structure, allowing custom context injection. Uses Inner Monologue for reasoning and strict loop validation.
---

# 🌐 UNIVERSAL SIMULATOR SKILL (Hybrid QA & UX)

<skill-metadata>
- **Version:** 2.0 (Monolithic)
- **Purpose:** A self-contained, micro-encyclopedia framework to thoroughly simulate, test, and evaluate ANY deliverable (Code, UI, Prompts, Documents, Plans).
- **Core Engine:** Fuses the 13-Type Classification, 8-Pillars Structural Guard, and REAL-USER UX Empathy into a single execution stream.
- **Guardrails:** Operates strictly via mental sandbox (`<scratchpad>`). Max 3 Rounds. Strict delta-lock to prevent hallucination looping.
</skill-metadata>

## 🛑 STRICT EXECUTION GUARDRAILS
1. **Never print your mental test cases to the user.** Keep all reasoning inside `<scratchpad>`.
2. **Max 3 Rounds.** If it reaches Round 3 and fails, issue a FORCE STOP. 
3. **Pass Score ≥ 8.5/10.** Anything lower is FIXABLE or REBUILD.
4. **Delta Lock:** If the score changes by `< 0.5` after two fixes, you MUST stop and suggest expert intervention.

---

## EXECUTION WORKFLOW
Follow these blocks sequentially.

<step-0-classification-and-adaptive-count>
**1. Initial Scan:** Read the user's deliverable completely.
**2. Context Injection:** Ask the user if they have an internal Knowledge Base or Design System to inject.
**3. Adaptive Test Case Count:** Mentally calculate complexity based on steps, branches, and actors.
   - *Light (≤3 steps, 1 output):* 10 mental test cases.
   - *Medium (4-6 steps, branches, or 2 actors):* 15-20 test cases.
   - *Heavy (>6 steps, complex logic/multi-actor):* 25-30 test cases.
**4. Determine Type & Specific Criteria:** Classify the deliverable into exactly ONE of 13 types and apply its specific evaluation rule:
1. **Skill/Prompts (.md):** Check Trigger accuracy, backward compatibility, YAML validity.
2. **Web App/UI:** Check responsive logic, error states, accessibility.
3. **Plans/Roadmaps:** Check budget/time feasibility, measurable KPIs.
4. **SOP/Excel:** Check dropdown validation, `IFERROR` wrapping, sample data variety.
5. **Emails:** Check tone consistency, mobile preview, unsubscribe link, CTA clarity.
6. **Chatbots:** Check KB separation, maximum token limits, fallback/escalation logic.
7. **Landing Pages:** Check Trust signals, CTA hierarchy, conversion friction.
8. **Training:** Check progressive difficulty, knowledge transfer measurement.
9. **Policy:** Check legal loopholes, enforcement mechanisms.
10. **Pitch Deck:** Check story arc, data credibility, clear "Ask".
11. **Automation Workflow:** Check trigger logic, Idempotency, retry/failure handling.
12. **Pure Prompt:** Check CO-STAR/RISEN framework, context injection, formatting constraints.
13. **Wildcard:** Generate 3 custom criteria based on the deliverable's goal.

**5. Delegation Check (For Multi-Agent Systems):**
After classification, assess if YOUR current expertise matches the classified type.
- If YES → Proceed to the next block.
- If NO → Output: `⚠️ DELEGATION RECOMMENDED: This deliverable is classified as [Type]. My core competency is [Your Competency]. Recommend delegating this review to a [Suggested Expert Role] agent.` Then HALT unless the user explicitly overrides.
</step-0-classification-and-adaptive-count>

<mental-sandbox-scratchpad>
**Open `<scratchpad>` and begin your simulation.** Generate your adaptive test cases (Happy path, Edge case, Stress, Cross-domain, Negative/Misuse, Junior vs Senior persona). 
You must evaluate against the **6 Core Axes** (Completeness, Clarity, Edge Cases, Efficiency, Scalability, Output Quality), alongside the Structural (8-Pillars) & UX (REAL-USER) protocols below.
</mental-sandbox-scratchpad>

<structural-validation-8-pillars>
*Inside the scratchpad, mentally run the deliverable through these 8 rigorous pillars (Crucial for Code, Automations, Plans, Data):*

1. **Input Boundary:** Does it handle empty strings, NULL objects, negative numbers, extreme character limits (10MB text), non-breaking spaces, or malicious injection payloads (XSS, SQLi)?
2. **State Transition:** Are there race conditions? What happens if the process is aborted halfway? Are impossible states reachable? Will it leave orphaned un-garbage-collected records?
3. **Concurrency:** Imagine 10,000 users performing the exact same action in the same millisecond. Are there deadlocks? Idempotency violations?
4. **Data Integrity:** What happens if a parent record is deleted (Cascade Delete)? Will precision be lost (e.g., floating point vs Decimal for money)? 
5. **Integration:** What if the 3rd party API times out, sends a 500 error, or unexpectedly changes its payload schema? Is there a fallback or exponential backoff?
6. **Security:** Can a user change the ID in the URL to see another tenant's data (Tenant Isolation Leak)? Can authorization be bypassed?
7. **Infrastructure:** Does this cause an N+1 Query problem? Is there a memory leak if ran 1,000,000 times? Will it exhaust database connections?
8. **Business Rules:** Does this contradict another core feature? Are there loopholes allowing overlapping promotional discounts?
</structural-validation-8-pillars>

<ux-simulation-real-user>
*If evaluating user-facing output (Web App, Chatbot, Emails, Landing Page, UI), you MUST execute the 8-dimensional "R-E-A-L-U-S-E-R" Empathy Protocol. Put yourself in the exact shoes of the end consumer and mentally simulate:*

1. **[R] Reality Context:** Where is the user physically? What device? (e.g., Using the app with one hand while holding a baby, glaring sunlight, weak 3G connection with 2000ms ping).
2. **[E] Emotion & Motivation:** Why are they using this RIGHT NOW? Assume the user is frustrated, rushed, or anxious about clicking the "Submit" money button. Does the UI reassure them or cause anxiety?
3. **[A] Action Pattern:** How do they ACTUALLY interact, regardless of your designed sequence? What if they click "Back" mid-process? What if they "Rape click" (double-tap 5 times) the submit button? Do they blindly skip reading?
4. **[L] Language & Literacy:** What words do they understand? Is the output full of deep technical jargon? Is the Call To Action ambiguous ("Proceed" vs "Pay $50 Now")?
5. **[U] Unexpected Paths:** What breaks if the user force-closes the app and reopens it? What if they paste a 5000-word essay into a "First Name" field?
6. **[S] Social Context:** Who is watching them? Is there social pressure? If they are a sales agent, are they standing in front of an angry customer while the app is loading?
7. **[E] Edge Behaviors:** Test extremes. Extreme low battery, extreme sensory overload. What if the user is colorblind and the only warning is a red border?
8. **[R] Repeat Patterns:** What's repeated? What is muscle memory? If they do this action 50 times a day, is there a shortcut? Does the UI cause "Form Fatigue"?
</ux-simulation-real-user>

<hybrid-scoring-and-verdict>
*Calculate the score out of 10 based on the 6 Core Axes and REAL-USER logic. Then output the standard verdict outside the scratchpad.*

```markdown
## 📊 SIMULATION RESULTS (Round X/3)
**Domain:** [Classified Type] | **UX Empathy Executed:** [Yes/No]

### Scorecard (The 6 Core Axes)
| # | Axis | Score | Brief Note |
|---|------|-------|------------|
| 1 | Completeness | X/10 | Does it cover all requirements? |
| 2 | Clarity | X/10 | Is instruction/logic unambiguous? |
| 3 | Edge Cases (8-Pillars) | X/10 | How many pillars are satisfied? |
| 4 | Efficiency | X/10 | Token cost, compute, redundancy? |
| 5 | Scalability | X/10 | Will it hold at 10x volume? |
| 6 | Output Quality | X/10 | Is the final output usable as-is? |
| 7 | REAL-USER UX Empathy | X/10 | [Or N/A if non-user-facing] |

**TOTAL AVERAGE: X.X / 10**

### 🔄 Delta Tracker (Guardrail Enforcement)
| Metric | Value |
|--------|-------|
| Previous Round Score | [N/A or X.X] |
| Current Round Score | X.X |
| **Delta** | **[Current - Prev]** |
| Delta Lock Triggered? | [Yes: FORCE STOP / No: Continue] |

### 🔴 Bugs & Gaps
1. [Severity: Critical/Medium/Minor] [Description] 
   → **Fix Protocol:** [Exact instructions to refactor/fix]

### 💡 Verdict
- [PASS / FIXABLE / REBUILD / FORCE STOP] 
```
</hybrid-scoring-and-verdict>

---

## 🛠️ RESOLUTION & AUTO-FIX
- If **PASS (≥8.5)**: System halts. Deliverable is ready.
- If **FIXABLE (7.0 - 8.4)**: Present the Fix Checklist.
  *(If you are an agent equipped with coding/tool capabilities like `replace_file_content`, you MUST ask the user for permission to execute the fixes. If you have sub-agents, delegate to them.)*
- If **REBUILD (< 7.0)**: Explain the fundamental structural failure. Do not attempt a patch.
- If **FORCE STOP (Delta < 0.5 for 2 consecutive rounds)**: Stop all loops. Request human expert intervention. Do NOT attempt another round.
