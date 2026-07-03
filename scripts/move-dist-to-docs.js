import fs from 'fs';
import path from 'path';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const docsDir = path.join(root, 'docs');

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const item of fs.readdirSync(src)) {
      copyRecursive(path.join(src, item), path.join(dest, item));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

try {
  // remove existing docs
  if (fs.existsSync(docsDir)) {
    fs.rmSync(docsDir, { recursive: true, force: true });
  }

  if (!fs.existsSync(distDir)) {
    console.error('dist folder not found. Run `npm run build` first.');
    process.exit(1);
  }

  copyRecursive(distDir, docsDir);
  console.log('Copied dist -> docs');
} catch (err) {
  console.error(err);
  process.exit(1);
}
