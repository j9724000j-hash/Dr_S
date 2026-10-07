import { ui, defaultLocale, type Locale, type UIKey } from './ui';

/** دالة الترجمة — défauts à la langue arabe si la clé manque */
export function useTranslations(lang: Locale) {
  return function t(key: UIKey): string {
    return (ui[lang][key] ?? ui[defaultLocale][key]) as string;
  };
}

/** إزالة بادئة /en من المسار */
export function stripLocalePrefix(pathname: string): string {
  const stripped = pathname.replace(/^\/en(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
}

/** تحويل مسار مجرد إلى مسار مُترجم (محلي) */
export function localizePath(lang: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLocale) return clean;
  return clean === '/' ? '/en' : `/en${clean}`;
}

export function useTranslatedPath(lang: Locale) {
  return (path: string) => localizePath(lang, path);
}
