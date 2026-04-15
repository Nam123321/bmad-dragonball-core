---
name: 'code-review'
description: 'Perform an ADVERSARIAL Senior Developer code review that finds 3-10 specific problems in every story. Challenges everything: code quality, test coverage, architecture compliance, security, performance. NEVER accepts `looks good` - must find minimum issues and can auto-fix with user approval.'
disable-model-invocation: true
---

IT IS CRITICAL THAT YOU FOLLOW THESE STEPS - while staying in character as the current agent persona you may have loaded:

<steps CRITICAL="TRUE">
1. Always LOAD the FULL @{project-root}/_bmad/core/tasks/workflow.xml
2. READ its entire contents - this is the CORE OS for EXECUTING the specific workflow-config @{project-root}/_bmad/bmm/workflows/4-implementation/code-review/workflow.yaml
3. Pass the yaml path @{project-root}/_bmad/bmm/workflows/4-implementation/code-review/workflow.yaml as 'workflow-config' parameter to the workflow.xml instructions
4. Follow workflow.xml instructions EXACTLY as written to process and follow the specific workflow config and its instructions
5. Save outputs after EACH section when generating any documents from templates
6. CRITICAL: BMAD Master decrees that you MUST conclude the review with a deterministic compiler check. You must run a terminal command to verify project compilation (e.g., `pnpm build`, `nest build`, or `tsc --noEmit`) before finalizing the review and updating the walkthrough. If compilation fails, HALT and flag as a CRITICAL finding.
7. CRITICAL — VISUAL ENFORCEMENT GATE: For frontend UI changes, you MUST enforce DOM-driven layout by verifying against Stitch CSS/HTML. Reference `.agent/skills/stitch-design-taste/SKILL.md`. If the component structure relies on backend schemas rather than Stitch's DOM outputs, you MUST flag it as a CRITICAL 'Schema-Driven Layout' failure and order a refactor.
8. CRITICAL — DATA-SPEC VALIDATION via FeatureGraph (ADR-002): After completing the standard code review, you MUST perform data-spec compliance checks using FeatureGraph MCP tools.

   PREREQUISITE: Check if FeatureGraph MCP tools are available (feature_impact, cross_feature, add_data_entity).
   → If NOT available → log "⚠️ WARNING: FeatureGraph unavailable, skipping data-spec validation" and SKIP steps 8-9.
   → If available → proceed:

   **8a. Query story's declared data entities:**
   ```
   Query: MATCH (s:Story {id: $storyId})-[:USES_ENTITY]->(de:DataEntity) RETURN de.name, de.key_fields, de.prisma_model
   ```
   For each DataEntity returned:
   ☐ **Schema Compliance:** Does the Prisma model in code match `de.key_fields`? Check field names, types, constraints.
   ☐ **DB Guardian:** Are required indexes present? Are `tenantId` compound indexes defined?

   **8b. Query story's declared events:**
   ```
   Query: MATCH (s:Story {id: $storyId})-[:PRODUCES]->(e:Event) RETURN e.name, e.type
   Query: MATCH (s:Story {id: $storyId})-[:CONSUMES]->(e:Event) RETURN e.name, e.type
   ```
   ☐ **Event Compliance:** Does code emit/consume ALL declared events?

   **8c. Query story's seed data:**
   ```
   Query: MATCH (s:Story {id: $storyId})-[:USES_ENTITY]->(de:DataEntity)-[:HAS_SEED]->(sd:SeedData) RETURN sd.model, sd.values
   ```
   ☐ **Seed Data:** If SeedData nodes exist → verify seed script matches `sd.values`.

   **8d. Deviation Detection:**
   ☐ Does the code introduce ANY model, field, enum, or event NOT declared in FeatureGraph?
   If deviations are detected → flag as 🛑 **DATA-SPEC DEVIATION** finding (CRITICAL severity).

9. CRITICAL — BACKWARD UPDATE BLOCKER via FeatureGraph (ADR-002): If step 8 detected any DATA-SPEC DEVIATION:
   - Story review is BLOCKED — do NOT mark as approved
   - List all deviations clearly with: field/model name, what code has, what FeatureGraph expects
   - Instruct developer to update FeatureGraph using MCP tools:
     a. New/changed model → call `add_data_entity(name, prisma_model, key_fields, story_id)`
     b. New event → call `add_event(name, type, producer_story, consumer_stories)`
     c. New seed data → call `add_seed_data(model, values, source_story)`
     d. New FR dependency → call `add_feature_relationship(fr_id1, relationship, fr_id2, reason, confidence)`
   - After developer completes backward update → re-run step 8 ONLY (max 1 re-check)
   - If deviations STILL exist after 1 re-check → ESCALATE to user with full deviation report, do NOT auto-fix

10. CRITICAL — QA SIMULATOR GUARDIAN AUDIT. Before concluding the code review, you MUST execute the Fat-Guardian Simulator mental run. Load the skill from `@{project-root}/.agent/skills/qa-simulator-guardian.md`. You must calculate the EXACT 7-row Hybrid Scorecard (6 Core Axes + 1 UX Empathy) based on the classified domain. Produce the Scorecard directly into your review output.
</steps>

