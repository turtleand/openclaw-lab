# AGENTS.md — openclaw

See `CLAUDE.md` for content schema and publishing checks.

## Scope

Applies only to `openclaw/`.

## Ecosystem role

- OpenClaw is the proof-of-practice and operations layer of Turtleand.
- Its primary job is to demonstrate what deep AI integration looks like in real systems: agents, routing, scheduling, reliability, and operational tradeoffs.
- It should remain concrete and deployment-oriented rather than becoming a generic AI blog.

## Project summary

- Stack: Astro + MDX
- Status: Active
- Primary content: persistent-agent operations, automation infrastructure, and applied system patterns

## Workflow

1. Read `CLAUDE.md` and `README.md` before changing content structure or deployment setup.
2. Prefer edits under `src/`, `public/`, and `scripts/`.
3. Do not modify `dist/` unless explicitly asked.
4. Treat `netlify.toml` and operational config as deployment-sensitive files; change them only when the task requires it.

## Content guidance

- Favor real operational constraints over abstract commentary.
- Preserve topics around provider optionality, automation, reliability, session isolation, cost tracking, and long-running agent workflows.
- Use this project to show how ecosystem principles survive contact with real constraints.

## Cross-project boundaries

- Route staged beginner-to-builder teaching content to `ai-lab/`.
- Route lower-level engineering craft and implementation notes to `build/`.
- Route compact doctrine and reusable principles to `handbook/`.
- Route ecosystem framing and visitor routing to `portal/`.

## Commands

- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
