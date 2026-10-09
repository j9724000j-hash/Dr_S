// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/*
 * عنوان النشر المركزي (يُستخدم لروابط canonical و hreflang و XML sitemap).
 *
 * الافتراضي = معاينة GitHub Pages الحقيقية لمستودع المشروع Dr_S:
 *   https://j9724000j-hash.github.io/Dr_S/
 *
 * للنشر لاحقاً على الدومين الحقيقي (Hostinger — جذر الموقع) دون أي تعديل كود:
 *   SITE_URL=https://drsumaiaalhalabi.com SITE_BASE=/ npm run build
 */
const SITE_URL = process.env.SITE_URL ?? 'https://j9724000j-hash.github.io';
const SITE_BASE = process.env.SITE_BASE ?? '/Dr_S';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  // الموقع منشور تحت مسار مستودع المشروع على GitHub Pages (base)،
  // وكل الروابط الداخلية والصور تمر عبر withBase()/localizePath().
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
});
