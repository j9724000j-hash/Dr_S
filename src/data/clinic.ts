/**
 * بيانات العيادة — source of truth للتواصل (spec §54: Content Variables)
 *
 * ⚠️ قواعد سلامة المعلومات (spec §0.8/§5):
 * تُستخدم المعلومات المُتحقَّق منها فقط. أي معلومة غير مؤكدة تبقى معلّقة
 * كـ TODO ولا تظهر في الموقع.
 *
 * مؤكد حالياً: الاسم، التخصص، الهاتف، واتساب، فيسبوك (الاسم)، العنوان.
 * غير مؤكد بعد: الدومين، أوقات العمل، الإيميل، رابط فيسبوك الدقيق.
 */
export const clinic = {
  nameAr: 'د. سميّا الحلبي',
  nameEn: 'Dr. Sumaya Alhalabi',
  specialtyAr: 'طب الأسنان العلاجي و التجميلي',
  specialtyEn: 'Therapeutic & Cosmetic Dentistry',

  /** الهاتف المُتحقَّق منه (spec §0.7) — بالتنسيق الدولي الموحَّد في كل مكان */
  phone: '+963948567231',
  phoneHref: 'tel:+963948567231',

  whatsapp: '963948567231',
  whatsappUrl: 'https://wa.me/963948567231',

  facebook: 'Sumaia Alhalabi',
  // TODO: تأكيد رابط صفحة فيسبوك الدقيق (حالياً رابط بحث بالاسم)
  facebookUrl: 'https://www.facebook.com/search/top?q=Sumaia%20Alhalabi',

  locationAr: 'دمشق - أوتوستراد المزة',
  locationEn: 'Mezzeh Autostrad, Damascus, Syria',
  mapsUrl: 'https://www.google.com/maps?q=Mezzeh+Autostrad,+Damascus,+Syria',

  // TODO: تأكيد أوقات العمل قبل عرضها (غير مؤكدة بعد — لا تُعرض حالياً)
  // hoursAr: ['السبت – الخميس', '9:00 ص – 9:00 م'],
  // hoursEn: ['Saturday – Thursday', '9:00 AM – 9:00 PM'],

  // TODO: تأكيد الإيميل الرسمي قبل عرضه (غير مؤكد بعد — لا يُعرض حالياً)
  // email: '',
} as const;
