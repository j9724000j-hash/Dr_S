#!/usr/bin/env node
/**
 * بناء موجّه لمنصّة نشر محددة.
 *
 * لماذا هذا السكربت؟
 *   كتابة المتغيّرات أمام الأمر (SITE_URL=… SITE_BASE=… npm run build) لا تعمل
 *   على Windows (cmd/PowerShell)، وهذا السكربت يضبطها داخل Node مباشرة فيعمل
 *   على كل الأنظمة بلا أي اعتمادية إضافية.
 *
 * الاستخدام:
 *   node scripts/build-target.mjs netlify        # npm run build:netlify
 *   node scripts/build-target.mjs pages          # npm run build:pages
 *   node scripts/build-target.mjs infinityfree   # npm run build:infinityfree
 *
 * كل الأهداف تبني إلى dist/ — امسح dist/ (أو أعد البناء) قبل رفع حزمة إلى منصة أخرى.
 */
import { spawn } from 'node:child_process';
import process from 'node:process';

/** عناوين النشر المعروفة — نفس القيم في astro.config.mjs و netlify.toml و workflows */
export const TARGETS = {
  netlify: {
    label: 'Netlify (جذر النطاق)',
    SITE_URL: 'https://dr-sumaiaalhalabi.netlify.app',
    SITE_BASE: '/',
  },
  pages: {
    label: 'GitHub Pages (مسار المستودع /Dr_S)',
    SITE_URL: 'https://j9724000j-hash.github.io',
    SITE_BASE: '/Dr_S',
  },
  infinityfree: {
    label: 'InfinityFree (مجلد htdocs — جذر النطاق)',
    SITE_URL: 'https://dr-sumaiaalhalabi.gt.tc',
    SITE_BASE: '/',
  },
};

const name = String(process.argv[2] ?? '').trim().toLowerCase();
const target = TARGETS[name];

if (!target) {
  const list = Object.keys(TARGETS).join(' | ');
  console.error(`خطأ: هدف غير معروف "${name}". الأهداف المتاحة: ${list}`);
  process.exit(2);
}

console.log(`→ البناء من أجل: ${target.label}`);
console.log(`   SITE_URL=${target.SITE_URL}`);
console.log(`   SITE_BASE=${target.SITE_BASE}`);

const child = spawn(
  process.platform === 'win32' ? 'npm.cmd' : 'npm',
  ['run', 'astro', '--', 'build'],
  {
    stdio: 'inherit',
    env: {
      ...process.env,
      SITE_URL: target.SITE_URL,
      SITE_BASE: target.SITE_BASE,
      ASTRO_TELEMETRY_DISABLED: '1',
    },
  },
);

child.on('error', (err) => {
  console.error('تعذّر تشغيل npm:', err.message);
  process.exit(1);
});

child.on('exit', (code) => {
  process.exit(code ?? 1);
});
