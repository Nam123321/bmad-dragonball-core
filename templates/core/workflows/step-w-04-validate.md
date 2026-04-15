---
description: 'Step W-04: Validate — Lint, test, and register the new capability'
---

# Step W-04: Validation & Registration

## Objective
Verify that the newly created capability files are structurally sound, follow BMAD conventions, and are properly registered in the system.

## Instructions

### 1. Structural Validation

#### For SKILL files (`.agent/skills/<name>/SKILL.md`):
- [ ] File has valid YAML frontmatter with `name` and `description` fields
- [ ] Contains required sections: "When to Use", "Core Rules", "Anti-Patterns", "Best Practices"
- [ ] No broken markdown formatting (unclosed code blocks, missing headers)
- [ ] File size is reasonable (500-5000 lines; flag if outside this range)

#### For WORKFLOW files:
- [ ] Gateway `.md` file has valid YAML frontmatter with `name` and `description`
- [ ] All step files referenced in the gateway actually exist
- [ ] Step files follow naming convention: `step-<prefix>-NN-<name>.md`
- [ ] Each step has "Exit Criteria" section

#### For AGENT files:
- [ ] Agent `.md` has valid YAML frontmatter
- [ ] XML structure is well-formed (all tags properly opened and closed)
- [ ] `<activation>` section contains all 8 standard steps
- [ ] `<menu>` section has at least MH, CH, and DA items
- [ ] All `exec=` paths in menu items point to existing files

### 2. Convention Compliance

Run the following checks:
- [ ] File names use kebab-case (lowercase with hyphens)
- [ ] No hardcoded absolute paths (all use `{project-root}` placeholder)
- [ ] Template wrapper exists in `templates/core/workflows/` (if applicable)
- [ ] Active copy exists in `.agent/workflows/` or `.agent/agents/`

### 3. Integration Smoke Test

- [ ] If creating a Skill: Verify another agent (e.g., Vegeta) can reference it via `{project-root}/.agent/skills/<name>/SKILL.md`
- [ ] If creating a Workflow: Verify the gateway `.md` correctly chains to all step files
- [ ] If creating an Agent: Verify the agent can be activated and displays its menu

### 4. Register in System

- Log the new capability creation as an Instinct (meta-learning):
```jsonl
{"ts":"<today>","src":"create-capability","ctx":"meta,<capability-type>","bad":"capability gap","good":"<name> created","sev":1}
```
- Append the above to `.agent/memory/instincts.jsonl`

### 5. Finalize Sprint Tracker

```yaml
phases:
  validate: done
status: complete
completed_at: <date>
```

### 6. Report to User

Present a summary:
```
✅ Capability Created Successfully!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Type: [SKILL / WORKFLOW / AGENT]
Name: <name>
Files Created:
  - <file 1>
  - <file 2>
  - ...
Next Steps:
  - <how to use the new capability>
  - <which agents benefit from it>
```

## Exit Criteria
- [ ] All structural validations pass
- [ ] Convention compliance verified
- [ ] Integration smoke test passed
- [ ] Instinct logged
- [ ] Sprint tracker finalized
- [ ] User has received the completion report
