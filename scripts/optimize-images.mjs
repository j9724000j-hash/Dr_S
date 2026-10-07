/**
 * Image optimization pass (spec §33/§34):
 * Converts the 19 brand PNG masters in public/images/ to optimized WebP
 * copies used by the site. The original PNGs are NEVER modified — they
 * remain the replaceable master assets (spec §0.5 / Phase A).
 *
 * Usage: node scripts/optimize-images.mjs
 */
import { readdirSync } from 'node:fs';
import sharp from 'sharp';
import path from 'node:path';

const dir = path.resolve('public/images');
const files = readdirSync(dir).filter((f) => f.endsWith('.png'));
const report = [];

for (const f of files) {
  const src = path.join(dir, f);
  const out = path.join(dir, f.replace(/\.png$/, '.webp'));
  const img = sharp(src).rotate(); // respect EXIF orientation
  const meta = await img.metadata();
  const pipeline = img.resize({ width: Math.min(meta.width, 1600), withoutEnlargement: true });
  await pipeline.webp({ quality: 82 }).toFile(out);
  const width = Math.min(meta.width, 1600);
  const height = Math.round((width / meta.width) * meta.height);
  report.push({ file: f.replace(/\.png$/, ''), width, height });
  console.log(`✓ ${f} → ${path.basename(out)} (${width}×${height})`);
}

// Emit a JSON map of intrinsic sizes (used for width/height attrs → no CLS)
const sizes = Object.fromEntries(report.map((r) => [r.file, [r.width, r.height]]));
console.log('\n--- sizes.json ---');
console.log(JSON.stringify(sizes, null, 2));
