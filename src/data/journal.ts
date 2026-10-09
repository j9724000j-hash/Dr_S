import type { Locale } from '../i18n/ui';
import { img } from './images';

/**
 * المجلة — محتوى تثقيفي مسؤول (spec §16: Journal / Dental Education)
 * مقالات تعليمية عامة، لا تقدّم تشخيصاً ولا نصائح فردية (spec §40/§41).
 */
export interface ArticleSection { heading: string; body: string[]; }

export interface ArticleContent {
  title: string;
  description: string;
  intro: string;
  sections: ArticleSection[];
  closing: string;
}

export interface Article {
  slug: string;
  date: string; // تاريخ النشر الفعلي
  readMinutes: number;
  image: string;
  imageAlt: Record<Locale, string>;
  serviceSlug?: string; // الخدمة المرتبطة
  content: Record<Locale, ArticleContent>;
}

export const articles: Article[] = [
  {
    slug: 'daily-oral-care',
    date: '2026-10-07',
    readMinutes: 4,
    image: img.smileCampaign,
    imageAlt: {
      ar: 'ابتسامة طبيعية هادئة — مفهوم بصري بهوية العيادة',
      en: 'Calm natural smile — conceptual brand visual',
    },
    serviceSlug: 'teeth-cleaning',
    content: {
      ar: {
        title: 'العناية اليومية بالأسنان: دليل بسيط',
        description:
          'خطوات عملية للعناية اليومية بالفم والأسنان: التفريش الصحيح، الخيط، والعادات التي تحمي ابتسامتك.',
        intro:
          'صحة الفم تُبنى في الدقائق القليلة التي تقضينها يومياً أمام المرآة. هذا دليل عملي بسيط للعناية اليومية، والفحص الدوري يبقى الأساس لاكتشاف ما لا تراه العين.',
        sections: [
          {
            heading: 'التفريش: مرتان يومياً، دقيقتان كل مرة',
            body: [
              'استخدمي معجوناً يحتوي على الفلورايد وفرشاة بشعيرات ناعمة. غطّي الأسطح الخارجية والداخلية وأسطح المضغ، وتجنّبي الضغط القوي الذي قد يؤذي اللثة.',
              'بعد التفريش ابصقي المعجون دون مبالغة في المضمضة، ليبقى أثر الفلورايد الواقي على الأسنان.',
            ],
          },
          {
            heading: 'ما بين الأسنان لا يقل أهمية',
            body: [
              'الفرشاة وحدها لا تصل إلى الأسطح الجانبية. الخيط أو الفرشاة بين السنية مرة يومياً يزيلان بقايا الطعام واللويحات من هذه المناطق الضيقة.',
            ],
          },
          {
            heading: 'عادات صغيرة تصنع فرقاً كبيراً',
            body: [
              'قلّلي الوجبات الخفيفة السكرية المتكررة، واشربي الماء بعد الطعام. وإن تناولتِ مشروبات ملوّنة كالعصائر المركزة، فمن الأفضل أن تكون مع الوجبة لا على مدار اليوم.',
              'استبدلي فرشاة الأسنان كل ثلاثة أشهر تقريباً أو عند اهتراء شعيراتها.',
            ],
          },
          {
            heading: 'والفحص الدوري؟',
            body: [
              'العناية المنزلية لا تكشف النخر المبكر ولا مشاكل اللثة الصامتة. الزيارة الدورية لطبيبة الأسنان تكمل ما تبدأينه في المنزل.',
            ],
          },
        ],
        closing:
          'روتين بسيط ومنتظم اليوم يحمي ابتسامتك لسنوات. ولأي سؤال خاص بحالتك، الفحص السريري هو المرجع دائماً.',
      },
      en: {
        title: 'Daily Oral Care: A Simple Guide',
        description:
          'Practical steps for daily oral care: proper brushing, flossing, and the habits that protect your smile.',
        intro:
          'Oral health is built in the few minutes you spend each day in front of the mirror. This is a simple practical guide — with regular check-ups remaining the foundation for catching what the eye cannot see.',
        sections: [
          {
            heading: 'Brushing: twice a day, two minutes each',
            body: [
              'Use a fluoride toothpaste and a soft-bristled brush. Cover the outer, inner and chewing surfaces, and avoid aggressive pressure that can harm the gums.',
              'After brushing, spit out the toothpaste without over-rinsing, so the protective fluoride stays on the teeth.',
            ],
          },
          {
            heading: 'Between the teeth matters just as much',
            body: [
              'A toothbrush alone cannot reach the side surfaces. Floss or interdental brushes once a day remove food and plaque from these tight spaces.',
            ],
          },
          {
            heading: 'Small habits, big difference',
            body: [
              'Cut down on frequent sugary snacks and drink water after meals. If you have staining drinks, better with a meal than sipped all day long.',
              'Replace your toothbrush about every three months, or when the bristles wear.',
            ],
          },
          {
            heading: 'And the regular check-up?',
            body: [
              'Home care cannot reveal early decay or silent gum problems. Regular visits to your dentist complete what you start at home.',
            ],
          },
        ],
        closing:
          'A simple, consistent routine today protects your smile for years. For anything specific to your case, the clinical examination is always the reference.',
      },
    },
  },
  {
    slug: 'what-to-expect-cleaning',
    date: '2026-10-07',
    readMinutes: 3,
    image: img.comfort,
    imageAlt: {
      ar: 'أجواء راحة وهدوء — مفهوم بصري بهوية العيادة',
      en: 'A calm, comfortable atmosphere — conceptual brand visual',
    },
    serviceSlug: 'teeth-cleaning',
    content: {
      ar: {
        title: 'ماذا تتوقعين عند تنظيف الأسنان في العيادة؟',
        description:
          'جولة سريعة على جلسة التنظيف الاحترافي: خطواتها، مدتها، وما تشعرين به عادةً خلالها وبعدها.',
        intro:
          'جلسة تنظيف الأسنان من أكثر المواعيد بساطة، ومع ذلك تتردد كثيرات في حجزها بسبب تساؤلات غير مُجابة. إليك ما يحدث عادةً خطوة بخطوة.',
        sections: [
          {
            heading: 'تبدأ الجلسة بفحص سريع',
            body: [
              'قبل أي أداة، تُفحص اللثة والأسنان للتأكد من الحالة العامة وملاحظة أي منطقة تحتاج عناية خاصة.',
            ],
          },
          {
            heading: 'إزالة الجير والترسبات',
            body: [
              'بأدوات يدوية أو اهتزازية دقيقة، يُزال الجير المتراكم فوق خط اللثة وتحته. قد تسمعين صوتاً خفيفاً وتشعرين باهتزاز لطيف — وهذا طبيعي.',
            ],
          },
          {
            heading: 'التلميع ولمسة النهاية',
            body: [
              'تُلمَّع الأسنان لإزالة التصبغات السطحية فيصبح سطحها ناعماً وأملس، وهو ما يبطئ عودة الترسبات.',
            ],
          },
          {
            heading: 'وبعد الجلسة؟',
            body: [
              'قد تشعر بعض الحالات بحساسية بسيطة ومؤقتة، خاصة مع وجود التهاب لثة. تتلقين نصائح للعناية المنزلية وموعد الجلسة القادمة حسب حالتك.',
            ],
          },
        ],
        closing:
          'التنظيف الدوري استثمار صغير يقي من مشاكل أكبر. إن كانت لديك مخاوف خاصة، أخبري الطبيبة قبل الجلسة لتأخذها بعين الاعتبار.',
      },
      en: {
        title: 'What to Expect at a Professional Teeth Cleaning',
        description:
          'A quick tour of the professional cleaning session: its steps, duration, and what you usually feel during and after.',
        intro:
          'A cleaning appointment is one of the simplest visits, yet many hesitate to book one because of unanswered questions. Here is what usually happens, step by step.',
        sections: [
          {
            heading: 'It starts with a quick examination',
            body: [
              'Before any instrument, the gums and teeth are examined to check the general condition and note any area needing special care.',
            ],
          },
          {
            heading: 'Removing tartar and plaque',
            body: [
              'With precise hand or ultrasonic instruments, built-up tartar is removed above and below the gumline. You may hear a light sound and feel a gentle vibration — this is normal.',
            ],
          },
          {
            heading: 'Polishing and the finishing touch',
            body: [
              'The teeth are polished to lift surface stains, leaving them smooth — which slows the return of plaque.',
            ],
          },
          {
            heading: 'And afterwards?',
            body: [
              'Some cases feel brief, mild sensitivity, especially with gum inflammation. You receive home-care advice and timing for your next visit based on your case.',
            ],
          },
        ],
        closing:
          'Regular cleaning is a small investment that prevents bigger problems. If you have particular concerns, tell the doctor before the session so they can be considered.',
      },
    },
  },
  {
    slug: 'cosmetic-fillings-guide',
    date: '2026-10-07',
    readMinutes: 4,
    image: img.filling,
    imageAlt: {
      ar: 'تفاصيل حشوة تجميلية — مفهوم بصري بهوية العيادة',
      en: 'Cosmetic filling detail — conceptual brand visual',
    },
    serviceSlug: 'cosmetic-fillings',
    content: {
      ar: {
        title: 'الحشوات التجميلية: ما الذي يجب معرفته؟',
        description:
          'كل ما تحتاجين معرفته عن الحشوات التجميلية: متى تُستخدم، كيف تُنفَّذ، وكيف تحافظين عليها.',
        intro:
          'الحشوة التجميلية تجمع بين العلاج والمظهر: تعالج النخر وتعيد للسن شكله الطبيعي بلون مطابق. إليك الصورة الكاملة باختصار.',
        sections: [
          {
            heading: 'متى تُستخدم الحشوة التجميلية؟',
            body: [
              'لعلاج النخر الصغير والمتوسط، واستبدال الحشوات القديمة، وإصلاح الشقوق الصغيرة والفجوات — دائماً بعد تقييم سريري يؤكد ملاءمتها للحالة.',
            ],
          },
          {
            heading: 'كيف تتم مطابقة اللون؟',
            body: [
              'تُختار درجة المادة بعناية بجانب أسنانك الطبيعية قبل البدء، ثم تُوضع الحشوة على طبقات وتُنحت لتحاكي تشريح السن الأصلي.',
            ],
          },
          {
            heading: 'ماذا عن الإحساس بعد الجلسة؟',
            body: [
              'قد تظهر حساسية خفيفة مؤقتة تجاه البارد أو الحار في الأيام الأولى، وتزول عادةً سريعاً. إن استمرت، فالمتابعة مع الطبيبة ضرورية.',
            ],
          },
          {
            heading: 'كيف تحافظين عليها؟',
            body: [
              'بالعناية اليومية المعتادة، وتجنّب العض على القاسي، والفحص الدوري. الحشوة التجميلية جزء من سنك يعتني به كما تعتني ببقية أسنانك.',
            ],
          },
        ],
        closing:
          'الحشوات التجميلية خيار ناضج يجمع الوظيفة والجمال — والقرار المناسب لحالتك يحدده الفحص السريري.',
      },
      en: {
        title: 'Cosmetic Fillings: What Should You Know?',
        description:
          'Everything you need to know about cosmetic fillings: when they are used, how they are placed, and how to maintain them.',
        intro:
          'A cosmetic filling combines treatment and appearance: it treats decay and returns the tooth to its natural shape in a matching shade. Here is the full picture, briefly.',
        sections: [
          {
            heading: 'When is a cosmetic filling used?',
            body: [
              'For small to moderate cavities, replacing old fillings, and repairing minor chips and gaps — always after a clinical assessment confirms suitability.',
            ],
          },
          {
            heading: 'How is the shade matched?',
            body: [
              'The material shade is carefully selected beside your natural teeth before starting. The filling is then placed in layers and sculpted to mimic the original tooth anatomy.',
            ],
          },
          {
            heading: 'What about sensation afterwards?',
            body: [
              'Mild temporary sensitivity to hot or cold may appear in the first days and usually settles quickly. If it persists, a follow-up with the doctor is important.',
            ],
          },
          {
            heading: 'How do you maintain it?',
            body: [
              'With usual daily care, avoiding biting on hard objects, and regular check-ups. A cosmetic filling is part of your tooth — care for it as you care for the rest.',
            ],
          },
        ],
        closing:
          'Cosmetic fillings are a mature option combining function and aesthetics — and the right decision for your case is made after clinical examination.',
      },
    },
  },
  {
    slug: 'denture-care',
    date: '2026-10-07',
    readMinutes: 3,
    image: img.instruments,
    imageAlt: {
      ar: 'أدوات طب أسنان بعناية — مفهوم بصري بهوية العيادة',
      en: 'Carefully arranged dental instruments — conceptual brand visual',
    },
    serviceSlug: 'removable-dentures',
    content: {
      ar: {
        title: 'العناية بأطقم الأسنان المتحركة',
        description:
          'دليل عملي للعناية اليومية بأطقم الأسنان المتحركة: التنظيف، التخزين، ومتى تزورين الطبيبة.',
        intro:
          'الطقم المتحرك رفيق يومي يستحق عناية منتظمة ليبقى مريحاً ونظيفاً ويدوم طويلاً. هذه أساسيات العناية به.',
        sections: [
          {
            heading: 'التنظيف اليومي',
            body: [
              'نظّفي الطقم يومياً بفرشاة مخصصة وماء فاتر، وتجنّبي المعجون العادي القاسي على سطحه. يُفضَّل تنظيفه فوق حوض مملوء بالماء أو منشفة لحمايته إن انزلق.',
            ],
          },
          {
            heading: 'الراحة الليلية للفم',
            body: [
              'خلع الطقم ليلاً يريح اللثة والأنسجة. خزّنيه حسب إرشادات الطبيبة، ولا تتركيه يجف.',
            ],
          },
          {
            heading: 'العناية باللثة والفم',
            body: [
              'حتى مع الطقم الكامل، تبقى العناية باللثة واللسان وسقف الحلق مهمة — بتفريش لطيف أو مسح بقطعة شاش نظيفة.',
            ],
          },
          {
            heading: 'متى تزورين الطبيبة؟',
            body: [
              'دورياً للتأكد من الملاءمة، وفوراً عند أي ألم أو تقرح أو تخلخل مفاجئ في الطقم. الفم يتغيّر مع الوقت، والطقم يحتاج ضبطاً موازياً.',
            ],
          },
        ],
        closing:
          'عناية يومية بسيطة ومتابعة دورية تضمنان لك راحة الطقم وأناقة مظهره لسنوات.',
      },
      en: {
        title: 'Caring for Removable Dentures',
        description:
          'A practical guide to daily denture care: cleaning, storage, and when to see the doctor.',
        intro:
          'A removable denture is a daily companion that deserves regular care to stay comfortable, clean and long-lasting. These are the fundamentals.',
        sections: [
          {
            heading: 'Daily cleaning',
            body: [
              'Clean the denture daily with a dedicated brush and lukewarm water, and avoid regular toothpaste, which can be abrasive on its surface. Clean it over a basin of water or a towel to protect it if it slips.',
            ],
          },
          {
            heading: 'Nightly rest for your mouth',
            body: [
              'Removing the denture at night rests the gums and tissues. Store it as the doctor instructs, and never let it dry out.',
            ],
          },
          {
            heading: 'Caring for gums and mouth',
            body: [
              'Even with complete dentures, caring for the gums, tongue and palate matters — with gentle brushing or wiping with clean gauze.',
            ],
          },
          {
            heading: 'When to see the doctor?',
            body: [
              'Regularly to check the fit, and immediately for any pain, sore or sudden looseness. The mouth changes over time, and the denture needs matching adjustments.',
            ],
          },
        ],
        closing:
          'Simple daily care and regular follow-ups keep your denture comfortable and elegant for years.',
      },
    },
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
