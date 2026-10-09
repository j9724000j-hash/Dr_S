# 🌸 موقع د. سمية الحلبي — Dr. Sumaia Alhalabi

موقع فاخر ثنائي اللغة (عربي أولاً / RTL + إنجليزي / LTR) لعيادة طب وجراحة
الفم والأسنان في دمشق — أوتوستراد المزة. مبني بـ **Astro** بإخراج ثابت
(Static) جاهز للنشر على **Hostinger**.

> **المرجع الأعلى للمواصفات:** [`public/Dr.S_Website.md`](public/Dr.S_Website.md)
> (Master Prompt) — و[`BRAND.md`](BRAND.md) للهوية البصرية.

---

## 🧱 التقنيات

| العنصر | القيمة |
|---|---|
| الإطار | Astro 7 — إخراج ثابت 100% |
| الواجهات | HTML دلالي + CSS نقي + قدر ضئيل جداً من Vanilla JS (صفر اعتماديات واجهة) |
| الخطوط | `@fontsource`: Montserrat (EN) · Tajawal (AR) · Great Vibes (شعار) |
| الصور | أساتذة PNG في `public/images/` + نسخ WebP محسّنة يخدمها الموقع |
| SEO | sitemap · robots · canonical · hreflang (ar/en/x-default) · OG/Twitter · JSON-LD |

## 🚀 التشغيل

```bash
npm install
npm run dev        # معاينة محلية على :4321
npm run build      # إنتاج dist/ جاهز للنشر
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

الصور الحالية (19 ملفاً) **مفاهيم بصرية بهوية العيادة** وليست تصويراً
واقعياً (مع إخلاء مسؤولية ظاهر في تذييل الموقع). عند توفر الصور الحقيقية:

1. استبدل ملف الـPNG المطابق في `public/images/` (نفس الاسم).
2. شغّل `node scripts/optimize-images.mjs`.
3. انتهينا — لا تخطيط ولا كود يتغيّر (`src/data/images.ts` يجمع المسارات في مكان واحد).

## 🐙 معاينة GitHub Pages (منشورة تلقائياً)

- **الرابط:** <https://j9724000j-hash.github.io/Dr_S/> (والنسخة الإنجليزية:
  <https://j9724000j-hash.github.io/Dr_S/en/>)
- **متطلب لمرة واحدة:** مصدر Pages في إعدادات المستودع = **GitHub Actions**
  (`Settings → Pages → Build and deployment → Source: GitHub Actions`).
- **Workflow:** `.github/workflows/deploy-pages.yml` — يعمل عند كل دفع إلى
  `main` أو إلى فرع الجلسة، ويمكن تشغيله يدوياً (`workflow_dispatch`).
  الخطوات: `npm ci` → `npm run build` → رفع `dist/` كـartifact → نشر عبر
  GitHub Pages (`build_type: workflow`، بلا أي بناء Jekyll تلقائي).
- المسار والـcanonical والـhreflang والصور والـsitemap كلها تُبنى من
  `site + base` في `astro.config.mjs` عبر `withBase()`/`localizePath()`،
  لذا لا روابط مكسورة تحت مسار المستودع.

للبناء من أجل الدومين الحقيقي (جذر الموقع) دون تعديل أي كود:

```bash
SITE_URL=https://drsumaiaalhalabi.com SITE_BASE=/ npm run build
```

## 🌐 النشر على Hostinger

1. `npm run build` محلياً (أو على أي CI).
2. ارفع **محتوى مجلد `dist/`** إلى `public_html/` عبر مدير الملفات أو FTP.
3. لا يحتاج الموقع Node.js في الإنتاج — ملفات ثابتة فقط.
4. بعد ربط الدومين الحقيقي: حدّث `site` في `astro.config.mjs` ثم أعد البناء.

## 🛡️ قواعد سلامة المعلومات الملتزم بها

لا مؤهلات/سنوات خبرة/إحصائيات/تقييمات/آراء مرضى/قبل-بعد مُختلقة —
فقط معلومات مؤكدة أو إغفال واضح (انظر §0.8 و§5 في الملف المرجعي).
