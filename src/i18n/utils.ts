import { ui, defaultLocale, type Locale, type UIKey } from './ui';
import { BASE, withBase, stripBase } from '../utils/paths';

/** دالة الترجمة — défauts à la langue arabe si la clé manque */
export function useTranslations(lang: Locale) {
  return function t(key: UIKey): string {
    return (ui[lang][key] ?? ui[defaultLocale][key]) as string;
  };
}

/**
 * إزالة بادئة النشر ثم بادئة /en من المسار.
 *   '/Dr_S'            → '/'        |  '/Dr_S/en'          → '/'
 *   '/Dr_S/about/'     → '/about/'  |  '/Dr_S/en/about/'   → '/about/'
 * (وعلى الجذر: '/en/about/' → '/about/')
 */
export function stripLocalePrefix(pathname: string): string {
  const withoutBase = stripBase(pathname);
  const stripped = withoutBase.replace(/^\/en(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
}

/**
 * تحويل مسار مجرد إلى مسار مُترجم مع بادئة النشر.
 *   localizePath('ar', '/about') → '/Dr_S/about/'
 *   localizePath('en', '/about') → '/Dr_S/en/about/'
 *   localizePath('ar', '/')      → '/Dr_S/'   |  localizePath('en', '/') → '/Dr_S/en/'
 */
export function localizePath(lang: Locale, path: string): string {
  // كل صفحات الموقع مجلدات (dist/xx/index.html) → شرطة أخيرة مطابقة للـcanonical
  let clean = path.startsWith('/') ? path : `/${path}`;
  if (!clean.endsWith('/')) clean = `${clean}/`;
  const localized = lang === defaultLocale ? clean : `/en${clean}`;
  return withBase(localized);
}

export function useTranslatedPath(lang: Locale) {
  return (path: string) => localizePath(lang, path);
}

export { BASE, withBase, stripBase };
