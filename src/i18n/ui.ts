export const languages = {
  ar: 'العربية',
  en: 'English',
} as const;

export type Locale = keyof typeof languages;
export const defaultLocale: Locale = 'ar';

/**
 * واجهة المستخدم — كل النصوص المشتركة ثنائية اللغة (spec §0.16.6)
 * العناوين والأوصاف الفريدة لكل صفحة في: src/data/meta.ts
 */
export const ui = {
  ar: {
    'brand.sub': 'طب وجراحة الفم والأسنان',

    'nav.label': 'التنقل الرئيسي',
    'nav.home': 'الرئيسية',
    'nav.about': 'عن الدكتورة',
    'nav.services': 'الخدمات',
    'nav.faq': 'الأسئلة الشائعة',
    'nav.journal': 'المجلة',
    'nav.contact': 'التواصل',

    'cta.call': 'اتصلي الآن',
    'cta.call.aria': 'الاتصال بالعيادة',
    'cta.whatsapp': 'مراسلة عبر واتساب',
    'cta.services': 'استكشفي الخدمات',
    'cta.more': 'التفاصيل',
    'cta.allServices': 'جميع الخدمات',
    'cta.faq': 'الأسئلة الشائعة',
    'cta.read': 'اقرئي المقال',
    'cta.journal': 'زيارة المجلة',
    'cta.backHome': 'العودة للرئيسية',

    'hero.badge': 'General & Cosmetic Dentistry',
    'hero.title1': 'ابتسامة صحية',
    'hero.title2': 'تبدأ بعناية دقيقة',
    'hero.sub':
      'طب وجراحة الفم والأسنان بعناية شخصية وأسلوب هادئ — من الفحص الدوري والوقاية إلى الترميم والحشوات التجميلية.',
    'hero.note': 'د. سمية الحلبي — دمشق، أوتوستراد المزة',

    'home.intro.eyebrow': 'مرحباً بك',
    'home.intro.title': 'عناية أسنان بأسلوب مختلف',
    'home.intro.p1':
      'في عيادة د. سمية الحلبي نؤمن أن العناية بالأسنان يجب أن تكون تجربة هادئة ومريحة، تبدأ بالاستماع إليك وتنتهي بابتسامة صحية.',
    'home.intro.p2':
      'نقدم خدمات طب الأسنان العام والترميم والحشوات التجميلية والتنظيف والوقاية — بأسلوب يراعي التفاصيل ويحترم وقتك وراحتك.',

    'home.services.eyebrow': 'خدماتنا',
    'home.services.title': 'خدمات مؤكدة بعناية مسؤولة',
    'home.services.sub': 'ست خدمات أساسية نقدّمها بدقة واهتمام بالتفاصيل.',

    'home.values.eyebrow': 'نهجنا',
    'home.values.title': 'لماذا تختارين عيادتنا؟',
    'home.values.sub': 'مبادئ بسيطة نلتزم بها في كل موعد.',

    'home.experience.eyebrow': 'تجربة المريضة',
    'home.experience.title': 'راحة تسبق العلاج',
    'home.experience.sub': 'تجربة مصممة حول هدوئك وثقتك، خطوة بخطوة.',

    'home.doctor.title': 'د. سمية الحلبي',
    'home.doctor.role': 'طب وجراحة الفم والأسنان',
    'home.doctor.philosophy':
      '«أؤمن أن الابتسامة الجميلة تبدأ بعناية دقيقة، وبأن كل مريضة تستحق وقتاً كافياً للاستماع إليها وشرح خياراتها بوضوح.»',
    'home.doctor.cta': 'تعرّفي على الدكتورة',

    'home.tour.eyebrow': 'أجواء العيادة',
    'home.tour.title': 'مساحات صُممت لراحتك',
    'home.tour.sub': 'لمحات بصرية من أجواء العيادة — صور توضيحية بهوية العيادة.',

    'home.faq.eyebrow': 'الأسئلة الشائعة',
    'home.faq.title': 'إجابات تهمك',
    'home.faq.sub': 'أكثر ما تسأل عنه مريضاتنا — بإجابات واضحة ومسؤولة.',

    'home.journal.eyebrow': 'المجلة',
    'home.journal.title': 'تثقيف بأسلوب بسيط',
    'home.journal.sub': 'مقالات قصيرة موثوقة عن صحة الفم والأسنان.',

    'home.contact.title': 'هل لديك سؤال أو موعد؟',
    'home.contact.sub': 'أسهل طريقة للتواصل هي الاتصال المباشر — نحن بانتظارك.',

    'value.precision': 'دقة في التفاصيل',
    'value.precision.desc': 'كل خطوة تُنفَّذ بعناية، من التشخيص إلى اللمسة الأخيرة.',
    'value.calm': 'هدوء وراحة',
    'value.calm.desc': 'أجواء هادئة وأسلوب متأنٍّ يخفف أي توتر.',
    'value.listening': 'استماع حقيقي',
    'value.listening.desc': 'نأخذ وقتنا للاستماع إليك وشرح خياراتك بوضوح.',
    'value.prevention': 'وقاية أولاً',
    'value.prevention.desc': 'نؤمن بأن العناية المبكرة خير من العلاج المتأخر.',

    'experience.step1': 'استقبال دافئ',
    'experience.step1.desc': 'تستقبلين بابتسامة وخصوصية تامة منذ اللحظة الأولى.',
    'experience.step2': 'فحص متأنٍّ',
    'experience.step2.desc': 'فحص شامل مع شرح واضح لما نراه وخياراتك المتاحة.',
    'experience.step3': 'علاج بعناية',
    'experience.step3.desc': 'تنفيذ دقيق يراعي راحتك في كل خطوة.',
    'experience.step4': 'متابعة واهتمام',
    'experience.step4.desc': 'إرشادات واضحة بعد الجلسة وباب مفتوح لأسئلتك.',

    'about.eyebrow': 'عن الدكتورة',
    'about.title': 'د. سمية الحلبي',
    'about.role': 'طب وجراحة الفم والأسنان',
    'about.p1':
      'د. سمية الحلبي طبيبة أسنان متخصصة في طب وجراحة الفم والأسنان، تستقبل مريضاتها في عيادتها بدمشق — أوتوستراد المزة.',
    'about.p2':
      'تؤمن بأن العلاقة بين الطبيبة ومريضتها تقوم على الثقة والوضوح: وقت كافٍ للاستماع، شرح مبسط للخيارات، وعناية دقيقة في التنفيذ.',
    'about.philosophyTitle': 'فلسفة العناية',
    'about.approachTitle': 'ماذا تتوقعين في العيادة',
    'about.approach1': 'الاستماع أولاً لفهم احتياجك ومخاوفك.',
    'about.approach2': 'شرح الخيارات المتاحة بلغة واضحة قبل أي إجراء.',
    'about.approach3': 'عناية دقيقة بالتفاصيل أثناء العلاج.',
    'about.approach4': 'إرشادات متابعة واضحة بعد كل زيارة.',
    'about.portraitNote': 'ستُعرض الصورة الشخصية للدكتورة هنا فور توفرها.',
    'about.cta': 'اتصلي للحجز أو الاستفسار',

    'services.eyebrow': 'الخدمات',
    'services.title': 'خدماتنا في طب الأسنان',
    'services.sub':
      'ست خدمات أساسية نقدمها بعناية — كل خدمة لها صفحة كاملة تشرحها بوضوح.',
    'services.note':
      'الخدمات المعروضة هي الخدمات المؤكدة حالياً. لمعرفة الأنسب لحالتك، يُنصح بالفحص السريري.',

    'service.what': 'ما هذا العلاج؟',
    'service.forWhom': 'لمن قد يكون مناسباً؟',
    'service.expect': 'ماذا تتوقعين عادةً؟',
    'service.process': 'المسار العام للجلسة',
    'service.care': 'نصائح للعناية',
    'service.faqs': 'أسئلة شائعة حول الخدمة',
    'service.related': 'خدمات ذات صلة',
    'service.journal': 'اقرئي أيضاً في المجلة',
    'service.call.title': 'جاهزون للإجابة عن أسئلتك',
    'service.call.text': 'لكل حالة خصوصيتها — الاتصال هو أسرع طريقة لمعرفة ما يناسبك.',
    'service.disclaimer':
      'هذا المحتوى تثقيفي عام ولا يغني عن الفحص السريري أو يشكّل نصيحة طبية فردية.',

    'breadcrumb.home': 'الرئيسية',
    'breadcrumb.aria': 'مسار التنقل',

    'faq.eyebrow': 'الأسئلة الشائعة',
    'faq.title': 'أسئلة تهمك، وإجابات واضحة',
    'faq.sub': 'جمعنا أكثر الأسئلة تكراراً وأجبنا عنها بوضوح ومسؤولية.',
    'faq.more.title': 'لم تجدي سؤالك؟',
    'faq.more.text': 'يسعدنا الإجابة مباشرة — الاتصال أسهل مما تظنين.',

    'journal.eyebrow': 'المجلة',
    'journal.title': 'مجلة العيادة التثقيفية',
    'journal.sub': 'مقالات قصيرة وموثوقة عن صحة الفم والأسنان، بأسلوب بسيط.',
    'journal.readMin': 'دقائق قراءة',
    'journal.related': 'الخدمة المرتبطة',
    'journal.back': 'العودة إلى المجلة',
    'journal.published': 'نُشر في',

    'contact.eyebrow': 'التواصل',
    'contact.title': 'يسعدنا تواصلك',
    'contact.sub':
      'أسهل طريقة لحجز موعد أو الاستفسار هي الاتصال المباشر. كما يمكن التواصل عبر واتساب.',
    'contact.call.title': 'اتصلي الآن',
    'contact.call.desc': 'الطريقة الأسرع للحجز والاستفسار.',
    'contact.whatsapp': 'واتساب',
    'contact.whatsapp.desc': 'راسلينا وسنرد عليك.',
    'contact.facebook': 'فيسبوك',
    'contact.facebook.desc': 'صفحتنا على فيسبوك.',
    'contact.location': 'العنوان',
    'contact.location.desc': 'دمشق - أوتوستراد المزة.',
    'contact.maps': 'افتحي في خرائط جوجل',
    'contact.hours.pending': 'أوقات العمل: سيتم الإعلان عنها قريباً.',

    'footer.about':
      'عيادة د. سمية الحلبي لطب وجراحة الفم والأسنان في دمشق — عناية دقيقة وأسلوب هادئ واهتمام شخصي.',
    'footer.links': 'روابط سريعة',
    'footer.contact': 'التواصل',
    'footer.follow': 'تابعينا',
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.disclaimer':
      'الصور المستخدمة في الموقع صور توضيحية بهوية العيادة (مفاهيم بصرية) وليست تصويراً واقعياً، وستُستبدل بصور حقيقية عند توفرها.',

    'notfound.title': 'الصفحة غير موجودة',
    'notfound.text': 'يبدو أن الصفحة التي تبحثين عنها غير موجودة أو تم نقلها.',

    'lang.aria': 'تغيير اللغة',
    'lang.current': 'اللغة الحالية: العربية',

    'callbar.label': 'اتصلي الآن',
  },

  en: {
    'brand.sub': 'Dentistry — Oral & Dental Surgery',

    'nav.label': 'Main navigation',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.faq': 'FAQ',
    'nav.journal': 'Journal',
    'nav.contact': 'Contact',

    'cta.call': 'Call Now',
    'cta.call.aria': 'Call the clinic',
    'cta.whatsapp': 'Message on WhatsApp',
    'cta.services': 'Explore Services',
    'cta.more': 'Details',
    'cta.allServices': 'All Services',
    'cta.faq': 'FAQ',
    'cta.read': 'Read Article',
    'cta.journal': 'Visit Journal',
    'cta.backHome': 'Back to Home',

    'hero.badge': 'General & Cosmetic Dentistry',
    'hero.title1': 'A Healthy Smile',
    'hero.title2': 'Begins with Precise Care',
    'hero.sub':
      'Oral and dental care with a personal touch and a calm approach — from routine check-ups and prevention to restorations and cosmetic fillings.',
    'hero.note': 'Dr. Sumaya Alhalabi — Mezzeh Autostrad, Damascus',

    'home.intro.eyebrow': 'Welcome',
    'home.intro.title': 'Dental care, done differently',
    'home.intro.p1':
      'At Dr. Sumaya Alhalabi’s clinic, we believe dental care should be a calm, comfortable experience — one that begins with listening to you and ends with a healthy smile.',
    'home.intro.p2':
      'We offer general dentistry, restorations, cosmetic fillings, cleaning and prevention — with attention to detail and respect for your time and comfort.',

    'home.services.eyebrow': 'Our Services',
    'home.services.title': 'Confirmed services, responsible care',
    'home.services.sub': 'Six core services delivered with precision and attention to detail.',

    'home.values.eyebrow': 'Our Approach',
    'home.values.title': 'Why patients choose our clinic',
    'home.values.sub': 'Simple principles we honour at every appointment.',

    'home.experience.eyebrow': 'Patient Experience',
    'home.experience.title': 'Comfort comes first',
    'home.experience.sub': 'An experience designed around your calm and trust, step by step.',

    'home.doctor.title': 'Dr. Sumaya Alhalabi',
    'home.doctor.role': 'Dentistry — Oral & Dental Surgery',
    'home.doctor.philosophy':
      '“I believe a beautiful smile begins with precise care, and that every patient deserves enough time to be heard and to understand her options clearly.”',
    'home.doctor.cta': 'Meet the Doctor',

    'home.tour.eyebrow': 'Clinic Atmosphere',
    'home.tour.title': 'Spaces designed for your comfort',
    'home.tour.sub': 'Visual glimpses of the clinic atmosphere — conceptual brand imagery.',

    'home.faq.eyebrow': 'FAQ',
    'home.faq.title': 'Answers that matter to you',
    'home.faq.sub': 'What our patients ask most — answered clearly and responsibly.',

    'home.journal.eyebrow': 'Journal',
    'home.journal.title': 'Education, made simple',
    'home.journal.sub': 'Short, trustworthy articles on oral and dental health.',

    'home.contact.title': 'Have a question or an appointment?',
    'home.contact.sub': 'The easiest way to reach us is a direct call — we are waiting for you.',

    'value.precision': 'Precision in detail',
    'value.precision.desc': 'Every step is carried out with care, from diagnosis to the final touch.',
    'value.calm': 'Calm & comfort',
    'value.calm.desc': 'A calm atmosphere and an unhurried approach that eases any tension.',
    'value.listening': 'True listening',
    'value.listening.desc': 'We take the time to listen to you and explain your options clearly.',
    'value.prevention': 'Prevention first',
    'value.prevention.desc': 'We believe early care is better than late treatment.',

    'experience.step1': 'A warm welcome',
    'experience.step1.desc': 'You are greeted with a smile and full privacy from the first moment.',
    'experience.step2': 'A careful examination',
    'experience.step2.desc': 'A comprehensive exam with a clear explanation of findings and options.',
    'experience.step3': 'Careful treatment',
    'experience.step3.desc': 'Precise delivery that keeps your comfort in mind at every step.',
    'experience.step4': 'Follow-up & care',
    'experience.step4.desc': 'Clear aftercare guidance and an open door for your questions.',

    'about.eyebrow': 'About the Doctor',
    'about.title': 'Dr. Sumaya Alhalabi',
    'about.role': 'Dentistry — Oral & Dental Surgery',
    'about.p1':
      'Dr. Sumaya Alhalabi is a dentist specialising in dentistry and oral & dental surgery, welcoming her patients at her clinic in Damascus — Mezzeh Autostrad.',
    'about.p2':
      'She believes the relationship between doctor and patient rests on trust and clarity: enough time to listen, a plain explanation of options, and precise care in delivery.',
    'about.philosophyTitle': 'Philosophy of care',
    'about.approachTitle': 'What to expect at the clinic',
    'about.approach1': 'Listening first, to understand your needs and concerns.',
    'about.approach2': 'Explaining the available options in plain language before any procedure.',
    'about.approach3': 'Precise attention to detail during treatment.',
    'about.approach4': 'Clear follow-up guidance after every visit.',
    'about.portraitNote': 'The doctor’s portrait will appear here once it is available.',
    'about.cta': 'Call to book or enquire',

    'services.eyebrow': 'Services',
    'services.title': 'Our dental services',
    'services.sub':
      'Six core services delivered with care — each with a full page explaining it clearly.',
    'services.note':
      'The services shown are those currently confirmed. To find what suits your case, a clinical examination is recommended.',

    'service.what': 'What is this treatment?',
    'service.forWhom': 'Who might it be suitable for?',
    'service.expect': 'What can you generally expect?',
    'service.process': 'How a session generally goes',
    'service.care': 'Care tips',
    'service.faqs': 'Frequently asked questions',
    'service.related': 'Related services',
    'service.journal': 'Read more in the Journal',
    'service.call.title': 'Ready to answer your questions',
    'service.call.text': 'Every case is unique — a call is the fastest way to learn what suits you.',
    'service.disclaimer':
      'This content is general education; it does not replace a clinical examination and is not individual medical advice.',

    'breadcrumb.home': 'Home',
    'breadcrumb.aria': 'Breadcrumb',

    'faq.eyebrow': 'FAQ',
    'faq.title': 'Questions that matter, answered clearly',
    'faq.sub': 'We gathered the most frequent questions and answered them clearly and responsibly.',
    'faq.more.title': 'Did you not find your question?',
    'faq.more.text': 'We are happy to answer directly — calling is easier than you think.',

    'journal.eyebrow': 'Journal',
    'journal.title': 'The clinic’s educational journal',
    'journal.sub': 'Short, trustworthy articles on oral and dental health, in a simple style.',
    'journal.readMin': 'min read',
    'journal.related': 'Related service',
    'journal.back': 'Back to the Journal',
    'journal.published': 'Published',

    'contact.eyebrow': 'Contact',
    'contact.title': 'We would love to hear from you',
    'contact.sub':
      'The easiest way to book an appointment or enquire is a direct call. You can also reach us on WhatsApp.',
    'contact.call.title': 'Call Now',
    'contact.call.desc': 'The fastest way to book and enquire.',
    'contact.whatsapp': 'WhatsApp',
    'contact.whatsapp.desc': 'Message us and we will reply.',
    'contact.facebook': 'Facebook',
    'contact.facebook.desc': 'Our Facebook page.',
    'contact.location': 'Address',
    'contact.location.desc': 'Mezzeh Autostrad, Damascus.',
    'contact.maps': 'Open in Google Maps',
    'contact.hours.pending': 'Opening hours: to be announced soon.',

    'footer.about':
      'Dr. Sumaya Alhalabi’s clinic for dentistry and oral & dental surgery in Damascus — precise care, a calm approach and personal attention.',
    'footer.links': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.follow': 'Follow Us',
    'footer.rights': 'All rights reserved',
    'footer.disclaimer':
      'Images on this website are conceptual brand visuals, not real photography; they will be replaced with real imagery when available.',

    'notfound.title': 'Page not found',
    'notfound.text': 'The page you are looking for does not exist or has been moved.',

    'lang.aria': 'Change language',
    'lang.current': 'Current language: English',

    'callbar.label': 'Call Now',
  },
};

export type UIKey = keyof typeof ui.ar;
