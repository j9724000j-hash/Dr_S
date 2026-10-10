# حزمة InfinityFree — مُنقلة إلى AAA

هذا المجلد يحوي كل ما يخص النشر على InfinityFree (`dr-sumaiaalhalabi.gt.tc`). لا يدخل شيء منه في البناء الرسمي للموقع، ولا يعمل workflow الحزمة تلقائياً.

| الملف | الوظيفة |
|---|---|
| `package-infinityfree.sh` | يبني ZIP جاهزاً من `dist/` مع `.htaccess` |
| `htaccess/root.htaccess` و`htaccess/en.htaccess` | قوالب `.htaccess` (المصدر الوحيد) |
| `workflow/package-infinityfree.yml` | workflow النشر كمرفق Release (**معطّل**: خارج `.github/workflows/`) |

## الاستخدام اليدوي

```bash
npm ci
SITE_URL=https://dr-sumaiaalhalabi.gt.tc SITE_BASE=/ npm run build
bash AAA/infinityfree/package-infinityfree.sh     # → release/dr-sumaiaalhalabi-infinityfree.zip
```

- الأرشيف يحتوي محتويات `dist/` مباشرةً (`index.html` في الجذر).
- يُضيف السكربت `.htaccess` للجذر (الصفحة الرئيسية، صفحة 404 العربية) و`en/.htaccess` (صفحة 404 الإنجليزية).
- مجلد `release/` مستثنى من Git.
- تحويل HTTP إلى HTTPS معطّل افتراضياً في القالب؛ فعّله بعد تفعيل شهادة SSL للدومين.

## تفعيل workflow الحزمة من جديد

GitHub يشغّل الـ workflows من `.github/workflows/` فقط. لإعادة تفعيله انقل الملف إلى هناك:
`git mv AAA/infinityfree/workflow/package-infinityfree.yml .github/workflows/`

## البناء الخاص بالدومين

الهدف `infinityfree` أُزيل من `scripts/build-target.mjs` و`astro.config.mjs`. الأمر المكافئ هو
`SITE_URL=https://dr-sumaiaalhalabi.gt.tc SITE_BASE=/ npm run build`.
