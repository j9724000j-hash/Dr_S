# AAA — ملفات خارج النشر

كل ما هو **غير مستخدم في الموقع النهائي** يُحفظ في هذا المجلد. محتوياته لا تدخل
`dist/` ولا حزم الرفع (Netlify / GitHub Pages / InfinityFree / Hostinger).

| المجلد | المحتوى | ملاحظات |
|---|---|---|
| `masters/` | 20 ملف PNG الأصلية (19 صورة + نسخة "(1)") | مصدر توليد WebP عبر `node scripts/optimize-images.mjs` |
| `images/` | نسخ WebP غير مستخدمة: 06 و15 و17 و18 و19 ونسخة "(1)" | احتياطية — لا تُنشر حتى تُستخدم في الصفحات |
| `docs/` | `Dr.S_Website.md` (المواصفة الأصلية) و`images-README.md` | وثائق داخلية |
| `infinityfree/` | كل ما يخص النشر على InfinityFree: سكربت الحزمة، قوالب `.htaccess`، وworkflow معطّل | انظر `infinityfree/README.md` |

**لإعادة استخدام صورة:** انقلها إلى `public/images/`، وأضف اسمها (بدون الامتداد)
إلى قائمة `PUBLISHED` في `scripts/optimize-images.mjs`، ثم أضف مدخلها في `src/data/images.ts`.
