// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: استبدل الدومين الحقيقي قبل النشر
  site: 'https://drsumaiaalhalabi.com',
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'en'],
    routing: {
      // العربية بدون بادئة: /about  —  English مع البادئة: /en/about
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
  server: {
    // allow any host for the sandbox preview (4321-*.e2b.app)
    allowedHosts: true,
  },
});
