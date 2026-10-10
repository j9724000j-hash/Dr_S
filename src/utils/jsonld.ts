/**
 * تسلسل بيانات JSON-LD بأمان داخل <script type="application/ld+json">.
 * يُهرِّب "<" إلى \u003c حتى لا يستطيع نص يحوي "</script>" إنهاء الوسم
 * (دفاع وقائي — البيانات حالياً ثابتة، انظر SEC-005 في تقرير التدقيق).
 */
export const toJsonLd = (data: unknown): string =>
  JSON.stringify(data).replace(/</g, '\\u003c');
