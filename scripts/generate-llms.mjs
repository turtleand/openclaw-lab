import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const TOPICS_DIR = join(import.meta.dirname, '..', 'src', 'content', 'topics');
const PUBLIC_DIR = join(import.meta.dirname, '..', 'public');

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { data: {}, body: content };
  const body = content.slice(match[0].length).trim();
  const data = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w[\w-]*):\s*"?([^"]*)"?\s*$/);
    if (m) data[m[1]] = m[2].trim();
  }
  return { data, body };
}

function stripMdx(body) {
  return body
    .replace(/^import\s+.*$/gm, '')
    .replace(/<[A-Z]\w+[^>]*\/>/g, '')
    .replace(/<[A-Z]\w+[^>]*>[\s\S]*?<\/[A-Z]\w+>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

async function main() {
  const files = (await readdir(TOPICS_DIR)).filter(f => f.endsWith('.mdx'));
  const topics = [];

  for (const file of files) {
    const content = await readFile(join(TOPICS_DIR, file), 'utf-8');
    const { data, body } = parseFrontmatter(content);
    const slug = file.replace(/\.mdx$/, '');
    topics.push({ slug, ...data, body });
  }

  // Generate llms.txt
  let llms = `# Turtleand OpenClaw Lab

> Practical setup guides for the OpenClaw AI assistant platform. From installation to advanced automation.

## Guides
`;

  for (const t of topics) {
    llms += `- [${t.title}](https://openclaw.turtleand.com/topics/${t.slug}): ${t.summary || ''}\n`;
  }

  llms += `
## About
Created by Turtleand — documenting real-world OpenClaw deployment and configuration.
- Portal: https://turtleand.com
- OpenClaw docs: https://docs.openclaw.ai
- GitHub: https://github.com/turtleand
`;

  await writeFile(join(PUBLIC_DIR, 'llms.txt'), llms);
  console.log('Generated public/llms.txt');

  // Generate llms-full.txt
  let full = `# Turtleand OpenClaw Lab — Full Content\n\n`;
  for (const t of topics) {
    full += `---\n\n# ${t.title}\n\n${stripMdx(t.body)}\n\n`;
  }

  await writeFile(join(PUBLIC_DIR, 'llms-full.txt'), full);
  console.log('Generated public/llms-full.txt');
}

main().catch(err => { console.error(err); process.exit(1); });
