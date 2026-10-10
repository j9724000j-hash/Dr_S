/**
 * Image optimization pass (spec §33/§34):
 *
 *   • Source masters (PNG, never modified): AAA/masters/
 *     — the AAA/ folder keeps everything that is NOT served by the site.
 *   • Published WebP files: public/images/ — only the files the site uses
 *     (PUBLISHED below). Unused masters stay in AAA/ and are not deployed.
 *   • Social-share image (og:image): public/images/og-home.jpg (1200×630),
 *     generated from the hero master. JPEG is used because some social
 *     crawlers do not support WebP for og:image.
 *
 * Usage: node scripts/optimize-images.mjs
 */
import { readdirSync, existsSync } from 'node:fs';
import sharp from 'sharp';
import path from 'node:path';

const MASTERS = path.resolve('AAA/masters');
const OUT = path.resolve('public/images');

/** الملفات المنشورة فعلاً في الموقع (كل ما عداها يبقى في AAA/ ولا يُنشر) */
const PUBLISHED = [
  '01_Hero_Clinic_Signature_Homepage',
  '02_Signature_Smile_Editorial_Portrait',
  '03_Treatment_Room_Precision_Comfort',
  '04_Reception_First_Impression',
  '05_Treatment_Room_Patient_View',
  '07_Dental_Instruments_Still_Life',
  '08_Tooth_Restoration_3D_Visualization',
  '09_Cosmetic_Filling_Precision_Detail',
  '10_Consultation_Human_Trust',
  '11_Comfort_Patient_Experience',
  '12_Natural_Smile_Beauty_Campaign',
  '13_Floral_Dental_Still_Life',
  '14_Abstract_Tooth_Digital_Artwork',
  '16_Minimal_Tooth_Outline',
];

const report = [];

for (const stem of PUBLISHED) {
  const src = path.join(MASTERS, `${stem}.png`);
  if (!existsSync(src)) throw new Error(`Missing master: ${src}`);
  const out = path.join(OUT, `${stem}.webp`);
  const img = sharp(src).rotate(); // respect EXIF orientation
  const meta = await img.metadata();
  const width = Math.min(meta.width, 1600);
  const height = Math.round((width / meta.width) * meta.height);
  await img.resize({ width, withoutEnlargement: true }).webp({ quality: 82 }).toFile(out);
  report.push({ file: stem, width, height });
  console.log(`✓ ${stem}.png → ${stem}.webp (${width}×${height})`);
}

// صورة المشاركة الاجتماعية (og:image) — JPEG 1200×630
const heroSrc = path.join(MASTERS, '01_Hero_Clinic_Signature_Homepage.png');
await sharp(heroSrc)
  .rotate()
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(path.join(OUT, 'og-home.jpg'));
console.log('✓ og-home.jpg (1200×630)');

// Emit a JSON map of intrinsic sizes (used for width/height attrs → no CLS)
const sizes = Object.fromEntries(report.map((r) => [r.file, [r.width, r.height]]));
console.log('\n--- sizes.json ---');
console.log(JSON.stringify(sizes, null, 2));
