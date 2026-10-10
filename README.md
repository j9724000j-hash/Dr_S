# 🌸 موقع د. سمية الحلبي — Dr. Sumaia Alhalabi

موقع فاخر ثنائي اللغة (عربي أولاً / RTL + إنجليزي / LTR) لعيادة طب وجراحة
الفم والأسنان في دمشق — أوتوستراد المزة. مبني بـ **Astro** بإخراج ثابت
(Static) جاهز للنشر على **Hostinger**.

> **المرجع الأعلى للمواصفات:** [`AAA/docs/Dr.S_Website.md`](AAA/docs/Dr.S_Website.md)
> (Master Prompt) — و[`BRAND.md`](BRAND.md) للهوية البصرية.

---

## 🧱 التقنيات

| العنصر | القيمة |
|---|---|
| الإطار | Astro 7 — إخراج ثابت 100% |
| الواجهات | HTML دلالي + CSS نقي + قدر ضئيل جداً من Vanilla JS (صفر اعتماديات واجهة) |
| الخطوط | `@fontsource`: Montserrat (EN) · Tajawal (AR) · Great Vibes (شعار) |
| الصور | أساتذة PNG في `AAA/masters/` (خارج النشر) + نسخ WebP محسّنة في `public/images/` يخدمها الموقع |
| SEO | sitemap · robots · canonical · hreflang (ar/en/x-default) · OG/Twitter · JSON-LD |

## 🚀 التشغيل

```bash
npm install
npm run dev              # معاينة محلية على :4321
npm run build            # إنتاج dist/ جاهز للنشر (الافتراضي: جذر النطاق)
npm run build:netlify    # نفس build لكن مع ضبط SITE_URL و SITE_BASE لـ Netlify
npm run build:pages      # نفس build لكن لموقع معاينة GitHub Pages (/Dr_S)
npm run build:infinityfree # نفس build لحزمة InfinityFree (/)
npm run verify           # فحص dist/ بعد البناء: كل رابط محلي له ملف فعلي
```

> إن أعدت توليد الصور، شغّل: `node scripts/optimize-images.mjs`
> (يولّد نسخ WebP من ملفات الـPNG دون المساس بالأصل).

## 🗺️ بنية الصفحات (17 مساراً × لغتين = 34 صفحة)

| المسار | المحتوى |
|---|---|
| `/` و `/en/` | الرئيسية |
| `/about` و `/en/about/` | عن الدكتورة |
| `/services` و `/en/services/` | نظرة الخدمات |
| `/services/{restorations, cosmetic-fillings, teeth-cleaning, tooth-extraction, partial-dentures, removable-dentures}` | 6 صفحات خدمة × لغتين |
| `/faq` و `/en/faq/` | الأسئلة الشائعة |
| `/journal` و `/en/journal/` | المجلة التثقيفية (4 مقالات × لغتين) |
| `/contact` و `/en/contact/` | التواصل (الهاتف أولاً — بلا نماذج) |
| `/404` و `/en/404/` | صفحة الخطأ |

**التحويل الأساسي في الموقع: الاتصال الهاتفي** — `tel:+963948567231`
(spec §0.7: لا نظام حجز، لا نماذج اتصال).

## 🗂️ أين يقع كل شيء؟

| ما تبحث عنه | المكان |
|---|---|
| **البيانات المؤكدة** (هاتف/واتساب/عنوان/فيسبوك) | `src/data/clinic.ts` |
| نصوص الواجهة ثنائية اللغة | `src/i18n/ui.ts` |
| عناوين/أوصاف كل صفحة (عربي + إنجليزي) | `src/data/meta.ts` |
| الخدمات الست (المحتوى الكامل للغتين) | `src/data/services.ts` |
| الأسئلة الشائعة | `src/data/faq.ts` |
| مقالات المجلة | `src/data/journal.ts` |
| مسارات الصور + أبعادها | `src/data/images.ts` |
| الأيقونات (SVG مدمجة) | `src/data/icons.ts` |
| التخطيط العام + الميتا + hreflang + JSON-LD | `src/layouts/BaseLayout.astro` |
| الأنماط + رموز التصميم | `src/styles/global.css` |
| إعداد الدومين (مركزي) | `astro.config.mjs → site` |

## ⚠️ Placeholders بانتظار التأكيد

- **الدومين**: `astro.config.mjs → site + base` — حالياً مضبوطان على معاينة
  GitHub Pages الفعلية `https://j9724000j-hash.github.io/Dr_S/`
- **أوقات العمل**: غير مؤكدة → غير معروضة (معلّقة في `src/data/clinic.ts`)
- **الإيميل**: غير مؤكد → غير معروض
- **رابط فيسبوك الدقيق**: حالياً رابط بحث بالاسم
- **الشعار الرسمي**: نسخة SVG مُعاد إنشاؤها في `src/components/Logo.astro`
- **صورة الدكتورة**: إطار أنيق قابل للاستبدال في `/about` دون أي تغيير تصميمي

## 🖼️ استبدال الصور المفاهيمية بصور حقيقية لاحقاً

الصور الحالية (19 ملف أصلي) **مفاهيم بصرية بهوية العيادة** وليست تصويراً
واقعياً (مع إخلاء مسؤولية ظاهر في تذييل الموقع). عند توفر الصور الحقيقية:

1. استبدل ملف الـPNG المطابق في `AAA/masters/` (نفس الاسم).
2. شغّل `node scripts/optimize-images.mjs`.
3. انتهينا — لا تخطيط ولا كود يتغيّر (`src/data/images.ts` يجمع المسارات في مكان واحد).

## 🐙 معاينة GitHub Pages (منشورة تلقائياً)

- **الرابط:** <https://j9724000j-hash.github.io/Dr_S/> (والنسخة الإنجليزية:
  <https://j9724000j-hash.github.io/Dr_S/en/>)
- **متطلب لمرة واحدة:** مصدر Pages في إعدادات المستودع = **GitHub Actions**
  (`Settings → Pages → Build and deployment → Source: GitHub Actions`).
- **Workflow:** `.github/workflows/deploy-pages.yml` — يعمل عند كل دفع إلى
  `main` فقط (لا تُنشر فروع `arena/*` على الموقع العام)، ويمكن تشغيله يدوياً (`workflow_dispatch`).
  الخطوات: `npm ci` → `npm run build` → رفع `dist/` كـartifact → نشر عبر
  GitHub Pages (`build_type: workflow`، بلا أي بناء Jekyll تلقائي).
- المسار والـcanonical والـhreflang والصور والـsitemap كلها تُبنى من
  `site + base` في `astro.config.mjs` عبر `withBase()`/`localizePath()`،
  لذا لا روابط مكسورة تحت مسار المستودع.

للبناء من أجل الدومين الحقيقي (جذر الموقع) دون تعديل أي كود:

```bash
SITE_URL=https://drsumaiaalhalabi.com SITE_BASE=/ npm run build
```

## 🌐 النشر على Netlify

الموقع مُعدّ للنشر على Netlify تلقائياً عبر هذا المستودع. الفيصل الوحيد:
**`SITE_BASE="/"`** — بدونه تُبنى الأصول (CSS والخطوط والصور) تحت `/Dr_S/`
(مسار معاينة GitHub Pages) فترجع 404 ← صفحة بلا تنسيق.

### الطريقة 1 — ربط المستودع بالكود (الأفضل)

1. افتح لوحة Netlify → New site from Git → اختر المستودع `Dr_S`.
2. **لا تغيّر** أي إعداد بناء: `netlify.toml` يضبط كل شيء (الأمر ومجلد النشر
   و`NODE_VERSION=22` و`SITE_BASE=/`).
3. بعد أول بناء: افحص سجل البناء (Deploy log) وتأكد أن السطر الأول يقول:
   ```
   [astro.config] target=Netlify · site=https://… · base=/
   ```
4. كل دفع إلى `main` يعيد البناء والنشر تلقائياً.

### الطريقة 2 — رفع مجلد dist/ يدوياً (سريع / بدون Git)

```bash
npm ci && npm run build:netlify && npm run verify
```
ثم افتح لوحة Netlify → Deploys → **Drag & drop** → اسحب مجلد `dist/` إلى المربع.

### ربط دومين حقيقي

أضف الدومين في لوحة Netlify (Domain management) — لا حاجة لتعديل أي ملف:
`astro.config.mjs` يأخذ العنوان من متغيّر `URL` الذي توفره Netlify تلقائياً،
فيبقى canonical/hreflang/sitemap صحيحة فوراً.

---

## 🌐 النشر على Hostinger

1. `npm run build` محلياً (أو على أي CI).
2. ارفع **محتوى مجلد `dist/`** إلى `public_html/` عبر مدير الملفات أو FTP.
3. لا يحتاج الموقع Node.js في الإنتاج — ملفات ثابتة فقط.
4. بعد ربط الدومين الحقيقي: حدّث `site` في `astro.config.mjs` ثم أعد البناء.

## 📦 حزمة InfinityFree (ZIP)

للرفع على استضافة InfinityFree المجانية (مجلد `htdocs`) على النطاق
`https://dr-sumaiaalhalabi.gt.tc`:

```bash
npm ci
SITE_URL=https://dr-sumaiaalhalabi.gt.tc SITE_BASE=/ npm run build
bash scripts/package-infinityfree.sh     # → release/dr-sumaiaalhalabi-infinityfree.zip
```

- الأرشيف يحتوي محتويات `dist/` مباشرةً (`index.html` في الجذر).
- يُضيف السكربت `.htaccess` للجذر (الصفحة الرئيسية، صفحة 404 العربية) و`en/.htaccess` (صفحة 404 الإنجليزية).
- قوالب `.htaccess` في `scripts/infinityfree/`. مجلد `release/` مستثنى من Git.
- تحويل HTTP إلى HTTPS معطّل افتراضياً في القالب؛ فعّله بعد تفعيل شهادة SSL للدومين.

## 🔐 الأمان والنشر

- **النشر الحي من `main` فقط.** دفع فروع `arena/*` لا ينشر على GitHub Pages (SEC-002).
- **لا تُنشر وثائق داخلية أو صور PNG أصلية.** كل ما هو خارج الموقع في `AAA/`. الفحص `npm run verify` يفشل إذا ظهر ملف `.md` أو `.png` أو `.map` داخل `dist/` (SEC-001 / PERF-001).
- **CSP في وضع المراقبة** (`Content-Security-Policy-Report-Only` في `netlify.toml`). السكربتان المضمّنان مسموحان بالـ hash. **إذا غيّرت أي سكربت مضمّن** (في `BaseLayout.astro` أو `Header.astro`) يجب تحديث الـ hash في `netlify.toml`. احسب الـ hash من نص السكربت في `dist/index.html`، بصيغة `sha256-<base64>`. بعد التأكد من عدم ظهور مخالفات في وحدة التحكم على كل الصفحات، يُغيَّر اسم الترويسة إلى `Content-Security-Policy` للفرض.
- **JSON-LD مُهرَّب** عبر `src/utils/jsonld.ts`. استخدمه دائماً عند إضافة بيانات منظمة جديدة.
- **تقرير التدقيق الكامل:** `AAA/docs/security-audit-report-ar.md`.

## 🛡️ قواعد سلامة المعلومات الملتزم بها

لا مؤهلات/سنوات خبرة/إحصائيات/تقييمات/آراء مرضى/قبل-بعد مُختلقة —
فقط معلومات مؤكدة أو إغفال واضح (انظر §0.8 و§5 في الملف المرجعي).
