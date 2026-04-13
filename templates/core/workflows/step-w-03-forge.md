---
description: 'Step W-03: Forge — Generate the physical capability files'
---

# Step W-03: Forge (Assembly & Distillation)

## Objective
Transform the approved `capability-spec.md` blueprint into production-ready BMAD capability files.

## Instructions

### 1. Load the Specification
Read the `capability-spec.md` generated in Step W-02. Verify it has status "spec-approved".

### 2. Generate Files Based on Capability Type

#### If Type = SKILL
Create directory and file:
```
.agent/skills/<skill-name>/SKILL.md
```

**SKILL.md Format (MANDATORY):**
```markdown
---
name: "<skill-name>"
description: "<one line description>"
---

# <Skill Name>

## When to Use This Skill
<conditions that trigger this skill's usage>

## Core Rules
1. <rule>
2. <rule>

## Anti-Patterns
- ❌ NEVER <bad pattern>
- ❌ NEVER <bad pattern>

## Best Practices
- ✅ ALWAYS <good pattern>
- ✅ ALWAYS <good pattern>

## Boilerplate / Snippets
<code blocks with common setup patterns>

## Version Notes
- <version-specific information>
```

#### If Type = WORKFLOW
Create the following files:
1. **Gateway**: `.agent/workflows/<workflow-name>.md` (with YAML frontmatter: name, description)
2. **Steps**: One `step-<prefix>-NN-<name>.md` per phase (follow existing BMAD step conventions)
3. **Template wrapper**: `templates/core/workflows/bmad-bmm-<workflow-name>.md` (for `bmad init` distribution)

#### If Type = AGENT
Create all of the following:
1. **Agent Persona**: `.agent/agents/<agent-name>.md` (XML-based persona with menu, following existing agent conventions like piccolo.md)
2. **Template wrapper**: `templates/core/workflows/bmad-agent-bmm-<agent-name>.md`
3. **Supporting Skills**: At least 1 `SKILL.md` in `.agent/skills/<agent-skill>/`
4. **Menu Items**: Wire workflow references into the agent's `<menu>` section

### 3. Wire into System

For ALL capability types:
- Ensure the new files follow BMAD naming conventions
- If creating a Workflow, add a corresponding `.agent/workflows/<name>.md` entry

### 4. Update Sprint Tracker

```yaml
phases:
  forge: done
```

## Exit Criteria
- [ ] All physical files exist at correct paths
- [ ] Files follow BMAD DSL conventions (YAML frontmatter, XML menus)
- [ ] Sprint tracker updated
- [ ] Ready for validation in Step W-04
