#!/usr/bin/env node
/**
 * فحص ناتج البناء dist/ — شبكة أمان ضد «موقع بلا تنسيق» و«روابط مكسورة».
 *
 * ماذا يفحص؟
 *   1) كل رابط محلي (href/src في HTML و url() في CSS) يشير إلى ملف موجود فعلاً
 *      داخل dist/ — وهذا بالضبط ما كان يفشل عند النشر على جذر نطاق بينما
 *      البناء مضبوط على base="/Dr_S": ملفات CSS والخطوط ترجع 404 فتظهر
 *      الصفحة نصوصاً وروابط بلا أي تنسيق.
 *   2) أن بادئة النشر (base) في الناتج مطابقة لـ SITE_BASE المطلوبة (إن حُدّدت).
 *   3) وجود الملفات الأساسية: index.html و 404.html و robots.txt و sitemap-index.xml.
 *   4) أن كل صفحة HTML مرتبطة بملف CSS واحد على الأقل (تحذير لا خطأ).
 *
 * الاستخدام:
 *   node scripts/check-dist.mjs [dist-dir]     # أو:  npm run verify
 *
 * رمز الخروج: 0 = سليم، 1 = توجد أخطاء (يُفشل بناء Netlify/Actions عمداً).
 */
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const DIST = path.resolve(process.cwd(), process.argv[2] ?? 'dist');

/** كل ملفات ومجلدات المسار المحدد (مسارات نسبية بصيغة posix) */
async function walk(dir, base = dir) {
  const out = { files: new Set(), dirs: new Set() };
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const rel = path.relative(base, full).split(path.sep).join('/');
    if (entry.isDirectory()) {
      out.dirs.add(rel);
      const sub = await walk(full, base);
      for (const f of sub.files) out.files.add(f);
      for (const d of sub.dirs) out.dirs.add(d);
    } else {
      out.files.add(rel);
    }
  }
  return out;
}

/** '/Dr_S/' أو '/' أو '' → '/Dr_S' أو '' (بادئة بلا شُرط زائدة) */
const normalizeBase = (b) => {
  const s = String(b ?? '').trim();
  if (!s || s === '/') return '';
  return `/${s.replace(/^\/+/, '').replace(/\/+$/, '')}`;
};

/** رابط محلي = يبدأ بـ / واحدة (لا خارجي ولا protocol-relative ولا tel:/mailto:/#) */
const isLocalRef = (ref) => !!ref && ref.startsWith('/') && !ref.startsWith('//');

/* ---------- التحقّق من وجود ناتج البناء ---------- */

try {
  if (!(await stat(DIST)).isDirectory()) throw new Error('not a directory');
} catch {
  console.error(`[verify] خطأ: لا يوجد مجلد بناء في ${DIST}`);
  console.error('[verify]        شغّل npm run build:netlify (أو npm run build) أولاً.');
  process.exit(1);
}

const { files, dirs } = await walk(DIST);
const htmlFiles = [...files].filter((f) => f.endsWith('.html')).sort();
const cssFiles = [...files].filter((f) => f.endsWith('.css')).sort();

if (htmlFiles.length === 0) {
  console.error(`[verify] خطأ: لا توجد أي صفحة HTML داخل ${DIST} — هل هذا ناتج بناء Astro فعلاً؟`);
  process.exit(1);
}

/* ---------- 1) استنتاج base الفعلية من الناتج ---------- */

let detectedBase = '';
for (const f of [...htmlFiles, ...cssFiles]) {
  const text = await readFile(path.join(DIST, f), 'utf8');
  const m = text.match(/(?:href|src|url\()\s*["'(]?\s*(\/[^"'()\s]*?)_astro\//);
  if (m) {
    detectedBase = normalizeBase(m[1]);
    break;
  }
}

const expectedBase = normalizeBase(process.env.SITE_BASE);
const base = expectedBase || detectedBase;

const errors = [];
const warnings = [];

if (expectedBase && expectedBase !== detectedBase) {
  errors.push(
    `بادئة النشر غير مطابقة: SITE_BASE="${expectedBase || '/'}" لكن الناتج مبنيّ على ` +
      `"${detectedBase || '/'}" — أعد البناء بالأمر الصحيح (npm run build:netlify).`,
  );
}

/* ---------- 2) فحص كل رابط محلي ---------- */

/** رابط URL محلي ← مسار ملف داخل dist (مع إزالة بادئة النشر) */
function resolveRef(ref) {
  let p = ref.split('#')[0].split('?')[0];
  try {
    p = decodeURIComponent(p);
  } catch {
    /* ترميز غير سليم — نفحصه كما هو */
  }

  if (base) {
    if (p === base || p === `${base}/`) p = '/';
    else if (p.startsWith(`${base}/`)) p = p.slice(base.length);
    else return { ok: false, reason: `لا يبدأ ببادئة النشر "${base}/" ← 404 على الخادم` };
  }

  const rel = p.replace(/^\/+/, '');
  if (rel === '') return files.has('index.html') ? { ok: true } : { ok: false, reason: 'index.html مفقود' };

  const trimmed = rel.replace(/\/+$/, '');
  for (const candidate of [rel, `${trimmed}/index.html`, `${trimmed}.html`]) {
    if (files.has(candidate)) return { ok: true };
  }
  if (dirs.has(trimmed)) return { ok: false, reason: 'المجلد موجود لكنه لا يحتوي index.html' };
  return { ok: false, reason: 'الملف غير موجود في dist/' };
}

const ATTR_RE = /(?:href|src)\s*=\s*(?:"([^"]*)"|'([^']*)')/gi;
const CSS_URL_RE = /url\(\s*(?:"([^"]*)"|'([^']*)'|([^'")]+))\s*\)/gi;

let refsChecked = 0;
const broken = [];

async function scan(relFile, regex) {
  const text = await readFile(path.join(DIST, relFile), 'utf8');
  regex.lastIndex = 0;
  let m;
  while ((m = regex.exec(text)) !== null) {
    const ref = [m[1], m[2], m[3]].find((v) => typeof v === 'string' && v.length > 0);
    if (!ref || !isLocalRef(ref)) continue;
    refsChecked += 1;
    const result = resolveRef(ref);
    if (!result.ok) broken.push({ from: relFile, ref, reason: result.reason });
  }
  if (relFile.endsWith('.html') && !/rel="stylesheet"/i.test(text) && !/<style/i.test(text)) {
    warnings.push(`${relFile}: لا يوجد فيها أي CSS (لا رابط stylesheet ولا <style>).`);
  }
}

for (const f of htmlFiles) await scan(f, ATTR_RE);
for (const f of cssFiles) await scan(f, CSS_URL_RE);

/* ---------- 3) الملفات الأساسية ---------- */

for (const required of ['index.html', '404.html', 'robots.txt', 'sitemap-index.xml']) {
  if (!files.has(required)) errors.push(`ملف أساسي مفقود في جذر dist/: ${required}`);
}
/* ---------- 3b) لا تُنشر وثائق داخلية ولا أصول المصدر (SEC-001 / PERF-001) ---------- */
// الوثائق الداخلية موجودة في AAA/ (خارج النشر)، وصور PNG الأصلية في AAA/masters/.
// أي ملف من هذه الأنواع داخل dist/ يعني أن الإعداد تغيّر دون قصد.
const forbiddenInDist = [...files].filter(
  (f) => /\.md$/i.test(f) || /\.png$/i.test(f) || /\.map$/i.test(f),
);
if (forbiddenInDist.length) {
  errors.push(
    `ملفات يجب ألا تُنشر (وثائق/مصادر/خرائط): ${forbiddenInDist.slice(0, 5).join(', ')}` +
      (forbiddenInDist.length > 5 ? ` … (+${forbiddenInDist.length - 5})` : '') +
      ' — انقلها إلى AAA/ أو استبعدها من public/.',
  );
}

if (!files.has('en/index.html')) errors.push('ملف أساسي مفقود: en/index.html (النسخة الإنجليزية)');
if (!dirs.has('en/404') && !files.has('en/404.html')) {
  errors.push('صفحة الخطأ الإنجليزية مفقودة (en/404/)');
}
if (!dirs.has('_astro') || ![...files].some((f) => f.startsWith('_astro/') && f.endsWith('.css'))) {
  errors.push('لا يوجد أي ملف CSS داخل dist/_astro/ — الموقع سيظهر بلا تنسيق.');
}

/* ---------- التقرير ---------- */

const uniqueBroken = new Map();
for (const b of broken) {
  const key = b.ref;
  if (!uniqueBroken.has(key)) uniqueBroken.set(key, b);
}

console.log('');
console.log('── [verify] فحص dist/ ─────────────────────────────────');
console.log(`  المجلد          : ${DIST}`);
console.log(`  بادئة النشر     : ${base ? `${base}/` : '/ (جذر النطاق)'}`);
console.log(`  صفحات HTML      : ${htmlFiles.length}`);
console.log(`  ملفات CSS       : ${cssFiles.length}`);
console.log(`  إجمالي الملفات  : ${files.size}`);
console.log(`  روابط محلية مفحوصة: ${refsChecked}`);
console.log(`  روابط مكسورة    : ${uniqueBroken.size}`);
console.log(`  أخطاء           : ${errors.length}`);
console.log(`  تحذيرات         : ${warnings.length}`);

if (uniqueBroken.size > 0) {
  console.log('');
  console.log('  روابط لا يقابلها ملف في dist/:');
  for (const b of [...uniqueBroken.values()].slice(0, 25)) {
    console.log(`    ✗ ${b.ref}   ← في ${b.from}  (${b.reason})`);
  }
  if (uniqueBroken.size > 25) console.log(`    … و${uniqueBroken.size - 25} غيرها`);
  errors.push(`${uniqueBroken.size} رابطاً محلياً لا يقابله ملف في dist/ (التفاصيل أعلاه).`);
}

for (const w of warnings.slice(0, 10)) console.log(`  ⚠ ${w}`);

console.log('──────────────────────────────────────────────────────');

if (errors.length > 0) {
  console.error('');
  console.error('[verify] فشل الفحص:');
  for (const e of errors) console.error(`  • ${e}`);
  console.error('');
  console.error('[verify] لم يُنشر أي شيء — أصلح السبب ثم أعد البناء.');
  process.exit(1);
}

console.log('[verify] ✓ الناتج سليم: كل الروابط المحلية لها ملفات فعلية.');
