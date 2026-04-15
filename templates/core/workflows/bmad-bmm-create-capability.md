---
name: 'create-capability'
description: 'Build a new Skill, Workflow, or Agent from external knowledge sources using Whis'
---

# /create-capability — Capability Creation Pipeline

> **Agent:** Whis (Capability Management Master)
> **Purpose:** Guided workflow to create new AI capabilities (Skills, Workflows, or Agents) from external knowledge sources.

## Overview

This workflow guides the creation of new BMAD capabilities through a structured 4-phase pipeline:

1. **Triage** — Understand the user's need and classify what type of capability is required
2. **Spec** — Gather data sources and produce a capability specification document
3. **Forge** — Crawl data, distill knowledge, and generate the physical files
4. **Validate** — Lint, test, and register the new capability in the BMAD system

## Execution

Follow these steps in order:

### Step 1: Triage
Read and execute: `step-w-01-triage.md`

### Step 2: Specification
Read and execute: `step-w-02-spec.md`

### Step 3: Forge
Read and execute: `step-w-03-forge.md`

### Step 4: Validation
Read and execute: `step-w-04-validate.md`
