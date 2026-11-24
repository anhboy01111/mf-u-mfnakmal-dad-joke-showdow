// Draft entry for u-mfnakmal-dad-joke-showdown-1d2ce3e5
import * as fs from 'node:fs';
import * as path from 'node:path';

function submitEntry(): void {
  const dir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'entry.txt'), "Why don't skeletons fight each other? They don't have the guts.", 'utf-8');
}

submitEntry();
