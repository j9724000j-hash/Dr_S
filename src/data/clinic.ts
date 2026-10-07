/** بيانات العيادة الثابتة — source of truth للتواصل */
export const clinic = {
  nameAr: 'د. سمية الحلبي',
  nameEn: 'Dr. Sumaia Alhalabi',
  specialtyAr: 'طب وجراحة الفم والأسنان',
  specialtyEn: 'General & Cosmetic Dentistry',
  phone: '0948567237',
  phoneIntl: '+971 94 856 7237',
  phoneHref: 'tel:+971948567237',
  whatsapp: '971948567237',
  whatsappUrl: 'https://wa.me/971948567237',
  instagram: '@Dr.SumaiaAlhalabi',
  instagramUrl: 'https://www.instagram.com/Dr.SumaiaAlhalabi',
  // TODO: تأكيد الاسم العربي الدقيق للمنطقة (Al Muwaileh)
  locationAr: 'الشارقة، الإمارات العربية المتحدة',
  locationEn: 'Al Muwaileh, Sharjah, UAE',
  mapsUrl: 'https://www.google.com/maps?q=Al+Muwaileh,+Sharjah,+UAE',
  mapsEmbed: 'https://www.google.com/maps?q=Al+Muwaileh,+Sharjah,+UAE&output=embed',
  hoursAr: ['السبت – الخميس', '9:00 ص – 9:00 م'],
  hoursEn: ['Saturday – Thursday', '9:00 AM – 9:00 PM'],
  email: 'info@drsumaiaalhalabi.com', // TODO: تأكيد الإيميل الحقيقي
} as const;
