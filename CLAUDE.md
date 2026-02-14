# CLAUDE.md — Turtleand OpenClaw Lab

## Agent-Friendly PR Checklist
Every content PR must:
- [ ] Topic frontmatter complete: title, summary, module, status
- [ ] Summary is descriptive
- [ ] Build succeeds (llms.txt auto-generated)
- [ ] JSON-LD TechArticle schema present
- [ ] Author always "Turtleand" (pseudonymous, no real name, no LinkedIn)

## Bot Translation Layer
- `/llms.txt` — Auto-generated guide index
- `/llms-full.txt` — All guide content concatenated
- `/_headers` — Content Signals (alongside existing security headers)
- JSON-LD TechArticle schemas

## Stack
- Astro + MDX
- Content: `src/content/topics/*.mdx`
- Deploy: Netlify
