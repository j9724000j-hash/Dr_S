/**
 * المسار الأساسي للنشر — مصدر واحد لكل المسارات الداخلية والصور.
 *
 * القيمة تأتي من `base` في astro.config.mjs (عبر import.meta.env.BASE_URL):
 *   - معاينة GitHub Pages (مستودع مشروع): '/Dr_S/'
 *   - النشر على جذر دومين حقيقي: '/'
 *
 * لذلك لا يجوز أبداً كتابة رابط داخلي يبدأ بـ '/' مباشرة في القوالب أو
 * البيانات — استخدم withBase() أو localizePath() من src/i18n/utils.ts.
 */

/** قيمة base كما تُمرَّر من Astro: '/Dr_S' (بدون شرطة أخيرة) أو '' على الجذر */
export const BASE = import.meta.env.BASE_URL;

/** نفس القيمة بدون الشرطة المائلة الأخيرة: '/Dr_S' أو '' */
const BASE_NO_TRAILING = BASE.replace(/\/+$/, '');

/**
 * إضافة بادئة النشر إلى مسار داخلي.
 *   withBase('/about')  → '/Dr_S/about'
 *   withBase('/')       → '/Dr_S/'
 *   (وعلى الجذر: '/about' و '/')
 */
export function withBase(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (clean === '/' || clean === '') return `${BASE_NO_TRAILING}/`;
  return `${BASE_NO_TRAILING}${clean}`;
}

/**
 * إزالة بادئة النشر من مسار الطلب الحالي (Astro.url.pathname يتضمّن base).
 *   '/Dr_S/en/about/' → '/en/about/'
 *   '/Dr_S'           → '/'
 */
export function stripBase(pathname: string): string {
  if (!BASE_NO_TRAILING) return pathname === '' ? '/' : pathname;
  const stripped = pathname.startsWith(BASE_NO_TRAILING)
    ? pathname.slice(BASE_NO_TRAILING.length)
    : pathname;
  return stripped === '' ? '/' : stripped;
}
