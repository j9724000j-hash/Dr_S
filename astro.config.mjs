// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/*
 * عنوان النشر المركزي: site + base.
 *
 *   site  → يُستخدم لروابط canonical و hreflang و og:url و XML sitemap.
 *   base  → بادئة المسار لكل الروابط الداخلية والصور والـCSS والخطوط
 *           (تمرّ كلها عبر withBase()/localizePath() في src/utils/paths.ts).
 *
 * ── ترتيب الأسبقية ──────────────────────────────────────────────────────────
 *   1) متغيّرا بيئة صريحان (يفوزان دائماً على كل ما يلي):
 *        SITE_URL=https://example.com SITE_BASE=/ npm run build
 *   2) كشف تلقائي لمنصّة النشر من متغيّرات البيئة:
 *        • Netlify         (NETLIFY=true)        → base="/"  والعنوان من متغيّر URL
 *        • GitHub Actions  (GITHUB_ACTIONS=true) → معاينة Pages: base="/Dr_S"
 *        • بناء محلي / أي استضافة أخرى           → base="/"  (جذر الموقع)
 *
 * ── لماذا لم يعد الافتراضي "/Dr_S"؟ ─────────────────────────────────────────
 *   القيمة "/Dr_S" تخصّ حالة واحدة فقط: معاينة GitHub Pages تحت مسار المستودع.
 *   حين كان هذا هو الافتراضي، أي بناء آخر (Netlify / Hostinger / غيرهما)
 *   ينتج HTML يشير إلى الأصول هكذا:  /Dr_S/_astro/xxx.css
 *   وعلى جذر النطاق لا وجود لذلك المسار ← 404 ← صفحة بلا CSS ولا خطوط
 *   (نصوص وروابط فقط). لذلك صار الافتراضي الآن هو الجذر "/"، ومعاينة GitHub
 *   Pages هي التي تطلب مسارها الفرعي صراحةً — مضبوط في:
 *     • .github/workflows/deploy-pages.yml  (env: SITE_URL + SITE_BASE)
 *     • npm run build:pages
 *     • الكشف التلقائي لـ GITHUB_ACTIONS أدناه (شبكة أمان إضافية)
 *
 * ── كيف تتأكد وقت البناء؟ ───────────────────────────────────────────────────
 *   يُطبع سطر واحد في بداية كل بناء (يظهر في سجل بناء Netlify وفي الطرفية):
 *     [astro.config] target=Netlify  site=https://…  base=/
 *   وبعد البناء:  npm run verify  ← يفحص أن كل رابط محلي في dist/ له ملف فعلي.
 */

/** عناوين النشر المعروفة للمشروع (كلها بلا تعديل على الكود — env فقط) */
const TARGETS = {
  /** معاينة GitHub Pages للمستودع (مسار فرعي) */
  pages: { url: 'https://j9724000j-hash.github.io', base: '/Dr_S' },
  /** Netlify — الجذر */
  netlify: { url: 'https://dr-sumaiaalhalabi.netlify.app', base: '/' },
};

const isNetlify = process.env.NETLIFY === 'true';
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

/**
 * الكشف التلقائي لمنصّة النشر.
 * على Netlify نأخذ العنوان من متغيّر `URL` الذي توفره المنصّة نفسها، فيبقى
 * canonical/sitemap صحيحاً تلقائياً عند ربط دومين حقيقي لاحقاً (بلا تعديل كود).
 */
const detected = isNetlify
  ? {
      target: 'Netlify',
      url: process.env.URL || process.env.DEPLOY_PRIME_URL || TARGETS.netlify.url,
      base: TARGETS.netlify.base,
    }
  : isGitHubActions
    ? { target: 'GitHub Pages (Actions)', url: TARGETS.pages.url, base: TARGETS.pages.base }
    : { target: 'local build / other host', url: TARGETS.netlify.url, base: '/' };

const SITE_URL = process.env.SITE_URL ?? detected.url;
const SITE_BASE = process.env.SITE_BASE ?? detected.base;

// سطر تشخيصي واحد: يكفي لقراءة site/base الفعلية في سجل بناء Netlify أو الطرفية.
console.log(`[astro.config] target=${detected.target} · site=${SITE_URL} · base=${SITE_BASE}`);

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: SITE_BASE,
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'en'],
    routing: {
      // العربية بدون بادئة: /about  —  English مع البادئة: /en/about
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // صفحات الخطأ 404 ليست جزءاً من خريطة الموقع (noindex)
      filter: (page) => !/\/404\/?$/.test(page),
    }),
  ],
  server: {
    // allow any host for the sandbox preview (4321-*.e2b.app)
    allowedHosts: true,
  },
  preview: {
    // معاينة dist/ محلياً من أي واجهة (نفس سبب allowedHosts أعلاه)
    allowedHosts: true,
  },
});
