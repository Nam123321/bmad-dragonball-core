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
</steps>
