# AGENTS.md - openclaw-lab

See `CLAUDE.md` for content schema and publishing checks. This file gives repository-level guidance for Codex automatic PR reviews and other AI agents.

## Scope

Applies only to `openclaw-lab/`.

## Ecosystem role

- OpenClaw Lab is the applied agent-systems lab and proof-of-practice layer of Turtleand.
- Its job is to demonstrate real systems involving persistent agents, routing, scheduling, reliability, observability, automation boundaries, and operational trade-offs.
- Keep OpenClaw concrete and system-oriented. Avoid generic AI blog drift.
- Share public-safe lessons from real systems without revealing private vulnerabilities, exact attack paths, or sensitive operations.
- Route staged beginner teaching to `ai-lab/`, lower-level engineering craft to `build/`, compact doctrine to `handbook/`, ecosystem routing to `portal/`, and Hermes-specific notes to `hermes-lab/`.

## Project summary

- Stack: Astro + MDX
- Status: Active
- Primary content: persistent-agent operations, automation infrastructure, and applied system patterns

## Workflow

1. Read `CLAUDE.md` and `README.md` before changing content structure or deployment setup.
2. Prefer edits under `src/`, `public/`, and `scripts/`.
3. Do not modify `dist/` unless explicitly asked.
4. Treat `netlify.toml` and operational config as deployment-sensitive files. Change them only when the task requires it.

## Public-safety review

Reject changes that expose secrets, credentials, private infrastructure details, internal paths, specific vulnerabilities, attack paths, operational weaknesses, or sensitive automation details. Safe public lessons are allowed when they describe general patterns, architecture trade-offs, defensive principles, or non-sensitive implementation choices.

Keep private things private. Share learnings, not exposure.

## Content quality review

- Favor real operational constraints over abstract commentary.
- Preserve topics around provider optionality, persistent agents, routing, scheduling, reliability, observability, automation boundaries, session isolation, cost tracking, and long-running workflows.
- Avoid overclaiming, generic AI hype, unsupported reliability claims, and public descriptions that expose avoidable risk.
- Preserve Turtleand voice: calm, precise, direct, reflective when useful, practical when needed.
- Do not introduce em dashes in public writing.
- Keep humans responsible for direction, judgment, taste, ethics, and consequences.

## Repository integrity review

- Keep changes focused to the branch purpose.
- Do not silently modify generated or build output unless the repo explicitly tracks it or the change requires regeneration.
- Review generated public-proof files, routes, sitemaps, indexes, and field-note metadata when content changes require it.
- Run local validation before PR creation.

## PR review checklist

Codex and other agents should check:

- Does the change strengthen OpenClaw as a proof-of-practice agent-systems surface?
- Are claims grounded in real operational evidence and non-hype?
- Is anything private, unsafe, or operationally sensitive exposed?
- Are routes, builds, generated files, metadata, and indexes still correct?
- Is the diff small, coherent, and free from unrelated cleanup?

## Commands

- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
