import type { Locale } from '../i18n/ui';

/**
 * عناوين وأوصاف فريدة لكل صفحة ولكل لغة (spec §17/§0.16.8)
 * المفاتيح = المسار بدون البادئة اللغوية (مثال: '/services/teeth-cleaning')
 */
export interface PageMeta { title: string; description: string; }

export const pageMeta: Record<string, Record<Locale, PageMeta>> = {
  '/': {
    ar: {
      title: 'د. سمية الحلبي | طب وجراحة الفم والأسنان — دمشق',
      description:
        'عيادة د. سمية الحلبي لطب وجراحة الفم والأسنان في دمشق — أوتوستراد المزة. ترميم، حشوات تجميلية، تنظيف ووقاية بعناية دقيقة. اتصلي الآن: 0948567231',
    },
    en: {
      title: 'Dr. Sumaya Alhalabi | Dentistry & Oral Surgery — Damascus',
      description:
        'Dr. Sumaya Alhalabi’s dental clinic in Damascus — Mezzeh Autostrad. Restorations, cosmetic fillings, cleaning and prevention with precise care. Call now: 0948567231',
    },
  },
  '/about': {
    ar: {
      title: 'عن الدكتورة سمية الحلبي | طب وجراحة الفم والأسنان',
      description:
        'تعرّفي على د. سمية الحلبي — طبيبة طب وجراحة الفم والأسنان في دمشق، وفلسفتها في العناية: استماع حقيقي، شرح واضح، ودقة في التفاصيل.',
    },
    en: {
      title: 'About Dr. Sumaya Alhalabi | Dentistry & Oral Surgery',
      description:
        'Meet Dr. Sumaya Alhalabi — dentist in oral & dental surgery in Damascus, and her philosophy of care: true listening, clear explanations and precise detail.',
    },
  },
  '/services': {
    ar: {
      title: 'خدمات طب الأسنان | د. سمية الحلبي — دمشق',
      description:
        'خدماتنا المؤكدة: ترميم الأسنان، الحشوات التجميلية، تنظيف وتلميع الأسنان، قلع الأسنان، الأطقم الجزئية والمتحركة — بعناية دقيقة في دمشق.',
    },
    en: {
      title: 'Dental Services | Dr. Sumaya Alhalabi — Damascus',
      description:
        'Our confirmed services: restorations, cosmetic fillings, cleaning & polishing, extractions, partial and removable dentures — with precise care in Damascus.',
    },
  },
  '/services/restorations': {
    ar: {
      title: 'ترميم الأسنان وعلاج النخور | د. سمية الحلبي',
      description:
        'علاج النخر وترميم الأسنان المتضررة للحفاظ على السن الطبيعي ووظيفته — شرح كامل للخطوات والنصائح في صفحة خدمة ترميم الأسنان.',
    },
    en: {
      title: 'Restorative Dentistry & Cavities | Dr. Sumaya Alhalabi',
      description:
        'Treating cavities and restoring damaged teeth to preserve the natural tooth and its function — full explanation of steps and tips on our restorations page.',
    },
  },
  '/services/cosmetic-fillings': {
    ar: {
      title: 'الحشوات التجميلية | د. سمية الحلبي — دمشق',
      description:
        'حشوات بلون السن الطبيعي تعالج النخر وتعيد المظهر الطبيعي بتناسق مع أسنانك — تعرّفي على التفاصيل والخطوات في صفحة الحشوات التجميلية.',
    },
    en: {
      title: 'Cosmetic Fillings | Dr. Sumaya Alhalabi — Damascus',
      description:
        'Tooth-coloured fillings that treat decay and restore a natural appearance in harmony with your teeth — details and steps on our cosmetic fillings page.',
    },
  },
  '/services/teeth-cleaning': {
    ar: {
      title: 'تنظيف وتلميع الأسنان | د. سمية الحلبي — دمشق',
      description:
        'إزالة الجير والتصبغات وتلميع الأسنان — خطوة وقائية أساسية لصحة اللثة والفم. تعرّفي على خطوات الجلسة ونصائح العناية.',
    },
    en: {
      title: 'Teeth Cleaning & Polishing | Dr. Sumaya Alhalabi — Damascus',
      description:
        'Removal of tartar and stains with polishing — a fundamental preventive step for gum and oral health. Learn the session steps and care tips.',
    },
  },
  '/services/tooth-extraction': {
    ar: {
      title: 'قلع الأسنان بعناية | د. سمية الحلبي — دمشق',
      description:
        'قلع السن عندما يكون الخيار الأنسب — بخطوات دقيقة وتعليمات واضحة للتعافي وخيارات التعويض. تفاصيل كاملة في صفحة الخدمة.',
    },
    en: {
      title: 'Careful Tooth Extraction | Dr. Sumaya Alhalabi — Damascus',
      description:
        'Extracting a tooth when it is the right option — with careful technique, clear recovery guidance and replacement options. Full details on the service page.',
    },
  },
  '/services/partial-dentures': {
    ar: {
      title: 'أطقم الأسنان الجزئية | د. سمية الحلبي — دمشق',
      description:
        'أطقم جزئية تعوّض فقدان بعض الأسنان وتحافظ على المظهر ووظيفة المضغ — تعرّفي على خطوات التصميم والعناية اليومية.',
    },
    en: {
      title: 'Partial Dentures | Dr. Sumaya Alhalabi — Damascus',
      description:
        'Partial dentures replacing some missing teeth while preserving appearance and chewing function — design steps and daily care explained.',
    },
  },
  '/services/removable-dentures': {
    ar: {
      title: 'أطقم الأسنان المتحركة الكاملة | د. سمية الحلبي — دمشق',
      description:
        'أطقم كاملة متحركة تُصمم بعناية لتعويض فقدان الأسنان واستعادة الابتسامة والمضغ — خطوات التصميم ونصائح العناية.',
    },
    en: {
      title: 'Removable Complete Dentures | Dr. Sumaya Alhalabi — Damascus',
      description:
        'Complete removable dentures carefully designed to replace missing teeth and restore smile and chewing — design steps and care tips.',
    },
  },
  '/faq': {
    ar: {
      title: 'الأسئلة الشائعة | د. سمية الحلبي',
      description:
        'إجابات واضحة ومسؤولة عن أكثر أسئلة الأسنان شيوعاً: الفحص الدوري، التفريش، نزف اللثة، الطوارئ والمزيد.',
    },
    en: {
      title: 'FAQ | Dr. Sumaya Alhalabi',
      description:
        'Clear, responsible answers to the most common dental questions: regular check-ups, brushing, bleeding gums, emergencies and more.',
    },
  },
  '/journal': {
    ar: {
      title: 'المجلة التثقيفية | د. سمية الحلبي',
      description:
        'مقالات قصيرة وموثوقة عن صحة الفم والأسنان: العناية اليومية، تنظيف الأسنان، الحشوات التجميلية والعناية بالأطقم.',
    },
    en: {
      title: 'Educational Journal | Dr. Sumaya Alhalabi',
      description:
        'Short, trustworthy articles on oral and dental health: daily care, professional cleaning, cosmetic fillings and denture care.',
    },
  },
  '/journal/daily-oral-care': {
    ar: {
      title: 'العناية اليومية بالأسنان: دليل بسيط | مجلة د. سمية الحلبي',
      description:
        'خطوات عملية للعناية اليومية بالفم: التفريش الصحيح، الخيط، وعادات صغيرة تحمي ابتسامتك — دليل بسيط من مجلة العيادة.',
    },
    en: {
      title: 'Daily Oral Care: A Simple Guide | Dr. Sumaya Alhalabi Journal',
      description:
        'Practical steps for daily oral care: proper brushing, flossing, and small habits that protect your smile — a simple guide from the clinic journal.',
    },
  },
  '/journal/what-to-expect-cleaning': {
    ar: {
      title: 'ماذا تتوقعين عند تنظيف الأسنان في العيادة؟ | مجلة د. سمية الحلبي',
      description:
        'جولة على جلسة التنظيف الاحترافي خطوة بخطوة: الفحص، إزالة الجير، التلميع، وما بعد الجلسة — مقال قصير من مجلة العيادة.',
    },
    en: {
      title: 'What to Expect at a Professional Teeth Cleaning | Journal',
      description:
        'A step-by-step tour of the professional cleaning session: examination, tartar removal, polishing and afterwards — a short article from the clinic journal.',
    },
  },
  '/journal/cosmetic-fillings-guide': {
    ar: {
      title: 'الحشوات التجميلية: ما الذي يجب معرفته؟ | مجلة د. سمية الحلبي',
      description:
        'كل ما تحتاجين معرفته عن الحشوات التجميلية: متى تُستخدم، كيف تتم مطابقة اللون، وكيف تحافظين عليها — مقال من مجلة العيادة.',
    },
    en: {
      title: 'Cosmetic Fillings: What Should You Know? | Journal',
      description:
        'Everything you need to know about cosmetic fillings: when they are used, how shades are matched, and how to maintain them — from the clinic journal.',
    },
  },
  '/journal/denture-care': {
    ar: {
      title: 'العناية بأطقم الأسنان المتحركة | مجلة د. سمية الحلبي',
      description:
        'دليل عملي للعناية اليومية بأطقم الأسنان المتحركة: التنظيف، التخزين، ومتى تزورين الطبيبة — مقال قصير من مجلة العيادة.',
    },
    en: {
      title: 'Caring for Removable Dentures | Dr. Sumaya Alhalabi Journal',
      description:
        'A practical guide to daily denture care: cleaning, storage, and when to see the doctor — a short article from the clinic journal.',
    },
  },
  '/contact': {
    ar: {
      title: 'التواصل والحجز | د. سمية الحلبي — دمشق',
      description:
        'تواصلي مع عيادة د. سمية الحلبي في دمشق — أوتوستراد المزة. الاتصال: 0948567231 أو عبر واتساب. يسعدنا الرد على استفساراتك.',
    },
    en: {
      title: 'Contact & Appointments | Dr. Sumaya Alhalabi — Damascus',
      description:
        'Reach Dr. Sumaya Alhalabi’s clinic in Damascus — Mezzeh Autostrad. Call 0948567231 or message on WhatsApp. We would love to hear from you.',
    },
  },
  '/404': {
    ar: {
      title: 'الصفحة غير موجودة | د. سمية الحلبي',
      description: 'الصفحة المطلوبة غير موجودة — عودي إلى الصفحة الرئيسية.',
    },
    en: {
      title: 'Page Not Found | Dr. Sumaya Alhalabi',
      description: 'The requested page does not exist — return to the homepage.',
    },
  },
};

export const getMeta = (path: string, lang: Locale): PageMeta =>
  pageMeta[path]?.[lang] ?? {
    title: lang === 'ar' ? 'د. سمية الحلبي' : 'Dr. Sumaya Alhalabi',
    description: '',
  };
