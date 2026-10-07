# 🦷 موقع د. سمية الحلبي — Dr. Sumaia Alhalabi

موقع إلكتروني ثنائي اللغة (عربي RTL + English LTR) لعيادة طب وجراحة الفم والأسنان،
مبني بالإطار **Astro** (Zero-JS افتراضيًا، أداء ممتاز، SEO).

## 🚀 التشغيل / Run

```bash
npm install
npm run dev      # وضع التطوير — http://localhost:4321
npm run build    # build — موقع ثابت في dist/
npm run preview  # preview بعد الـ build
```

## 📁 هيكل المشروع / Structure

```
src/
  components/     # Header, Footer, Logo, Icon, SectionHeading + pages/
  layouts/        # BaseLayout (SEO + hreflang + خطوط)
  pages/          # صفحات العربية (/) + pages/en/ (English)
  i18n/           # ui.ts (نصوص) + utils.ts (t, localizePath)
  data/           # clinic.ts, content.ts, icons.ts, images.ts
  styles/         # global.css — design tokens للهوية البصرية
public/images/    # الصور الـ19 (انظر README.md داخل المجلد)
BRAND.md          # دليل الهوية البصرية الكامل
```

## 🎨 الهوية البصرية / Brand
- **Primary** `#5B3B82` · **Secondary** `#A98FCB` · **Accent** `#C9BBE8` · **Light** `#EDE7F6`
- خطوط: **Montserrat** (EN) · **Tajawal** (AR) · **Great Vibes** (شعار EN)
- لمزيد من التفاصيل: `BRAND.md`

## ✅ TODO
- [ ] الصور (19 ملف) — إعادة إرفاقها في `public/images/`
- [ ] الدومين الحقيقي في `astro.config.mjs` (`site`)
- [ ] تأكيد أوقات العمل والخدمات
- [ ] نظام حجز مواعيد (حسب البرومبت التفصيلي القادم)
