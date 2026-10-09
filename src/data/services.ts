import type { Locale } from '../i18n/ui';
import { img } from './images';
import type { IconName } from './icons';

/**
 * الخدمات المؤكدة فقط (spec §15) — ست خدمات صريحة من المادة المصدرية.
 * أي خدمة إضافية تتطلب تأكيداً قبل إضافتها.
 * المحتوى تعليمي عام ومسؤول طبياً، ولا يقدّم تشخيصاً أو نصيحة فردية (spec §40).
 */

export interface ServiceFaq { q: string; a: string; }

export interface ServiceContent {
  name: string;
  tagline: string;
  shortDesc: string;
  what: string[];
  forWhom: string[];
  expect: string[];
  process: { title: string; desc: string }[];
  care: string[];
  faqs: ServiceFaq[];
}

export interface Service {
  slug: string;
  icon: IconName;
  image: string;
  imageAlt: Record<Locale, string>;
  related: string[];
  journal?: string; // مقال مرتبط في المجلة إن وُجد
  content: Record<Locale, ServiceContent>;
}

export const services: Service[] = [
  {
    slug: 'restorations',
    icon: 'tooth',
    image: img.tooth3d,
    imageAlt: {
      ar: 'تصوير توضيحي ثلاثي الأبعاد لترميم سن — مفهوم بصري بهوية العيادة',
      en: 'Conceptual 3D visualization of a tooth restoration — brand visual',
    },
    related: ['cosmetic-fillings', 'tooth-extraction'],
    journal: 'cosmetic-fillings-guide',
    content: {
      ar: {
        name: 'ترميم الأسنان وعلاج النخور',
        tagline: 'إعادة السن لوظيفته وشكله الطبيعي بعناية دقيقة',
        shortDesc:
          'علاج النخور وترميم الأسنان المتضررة للحفاظ على السن الطبيعي ووظيفته أطول فترة ممكنة.',
        what: [
          'يهدف الترميم إلى معالجة الضرر الذي أصاب السن — سواء بسبب النخر (التسوّس) أو الكسور أو التآكل — وإعادة بناء الجزء المفقود منه.',
          'يعتمد اختيار طريقة الترميم ومادته على موضع السن وحجم الضرر وتقدير الطبيبة بعد الفحص السريري.',
        ],
        forWhom: [
          'من لديهن نخر (تسوّس) لم يُعالج بعد.',
          'من لديهن سن متصدع أو مكسور جزئياً.',
          'من فقدن حشوة قديمة أو تهتّكت.',
          'من يعانين من حساسية أو ألم عند تناول الطعام — ويلزم الفحص لتحديد السبب.',
        ],
        expect: [
          'يبدأ الموعد بفحص السن وقد يُستخدم التصوير الشعاعي عند الحاجة لتقييم مدى الضرر.',
          'تشرح لك الطبيبة خطة العلاج المقترحة والبدائل المتاحة قبل البدء.',
          'يُزال الجزء المتضرر ويُرمَّم السن بمادة مناسبة، مع مراعاة شكل السن ووظيفته في المضغ.',
          'تتلقين إرشادات العناية بعد الجلسة ومواعيد المتابعة إن لزم.',
        ],
        process: [
          { title: 'الفحص والتقييم', desc: 'فحص سريري وتحديد مدى الضرر والحالة العامة للسن.' },
          { title: 'خطة العلاج', desc: 'شرح الخيارات المتاحة واختيار الأنسب لحالتك.' },
          { title: 'الترميم', desc: 'إزالة الجزء المتضرر وبناء السن بدقة مع ضبط الإطباق.' },
          { title: 'المتابعة', desc: 'إرشادات للعناية المنزلية ومتابعة دورية للاطمئنان.' },
        ],
        care: [
          'تنظيف الأسنان مرتين يومياً بمعجون يحتوي على الفلورايد.',
          'تقليل السكريات والوجبات الخفيفة المتكررة بين الوجبات.',
          'زيارة دورية للفحص حتى دون وجود ألم — فالكشف المبكر يحمي من تفاقم النخر.',
        ],
        faqs: [
          {
            q: 'هل ترميم السن مؤلم؟',
            a: 'تُستخدم أساليب حديثة لتقليل الانزعاج أثناء العلاج، وتختلف التجربة من حالة لأخرى. أخبري الطبيبة بأي قلق لديك مسبقاً لتأخذه بعين الاعتبار.',
          },
          {
            q: 'كم يعيش الترميم؟',
            a: 'يعتمد ذلك على مادة الترميم وموضع السن والعناية المنزلية. الفحص الدوري يساعد على اكتشاف أي تآكل مبكراً.',
          },
          {
            q: 'هل يمكن ترميم أي سن متضرر؟',
            a: 'ليس دائماً؛ فبعض الحالات المتقدمة تحتاج حلولاً أخرى يقررها الطبيب بعد الفحص. لذلك يُنصح بعدم تأخير العلاج.',
          },
        ],
      },
      en: {
        name: 'Restorative Dentistry & Cavities',
        tagline: 'Restoring function and natural form with precise care',
        shortDesc:
          'Treating cavities and restoring damaged teeth to preserve the natural tooth and its function for as long as possible.',
        what: [
          'Restorative treatment addresses damage to a tooth — whether from decay, fractures or wear — and rebuilds the lost structure.',
          'The choice of technique and material depends on the tooth’s position, the extent of damage, and the doctor’s assessment after a clinical examination.',
        ],
        forWhom: [
          'Anyone with an untreated cavity.',
          'Anyone with a partially cracked or broken tooth.',
          'Anyone whose old filling has failed or worn down.',
          'Anyone experiencing sensitivity or pain when eating — an examination is needed to identify the cause.',
        ],
        expect: [
          'The appointment begins with an examination of the tooth; radiographs may be used when needed to assess the damage.',
          'The doctor explains the proposed treatment plan and available alternatives before starting.',
          'The damaged part is removed and the tooth is restored with a suitable material, respecting its shape and chewing function.',
          'You receive aftercare guidance and follow-up recommendations where appropriate.',
        ],
        process: [
          { title: 'Examination & Assessment', desc: 'A clinical examination to determine the extent of damage and the tooth’s condition.' },
          { title: 'Treatment Plan', desc: 'Explaining the available options and choosing what suits your case.' },
          { title: 'Restoration', desc: 'Removing the damaged part and precisely rebuilding the tooth with a proper bite.' },
          { title: 'Follow-up', desc: 'Home-care guidance and periodic check-ups for peace of mind.' },
        ],
        care: [
          'Brush twice daily with a fluoride toothpaste.',
          'Reduce sugary snacks and frequent between-meal eating.',
          'Keep regular check-ups even without pain — early detection prevents decay from progressing.',
        ],
        faqs: [
          {
            q: 'Is restoring a tooth painful?',
            a: 'Modern techniques are used to minimise discomfort during treatment, and experiences vary. Tell the doctor about any concerns beforehand so they can be addressed.',
          },
          {
            q: 'How long does a restoration last?',
            a: 'It depends on the material, the tooth’s position and your home care. Regular check-ups help detect early wear.',
          },
          {
            q: 'Can any damaged tooth be restored?',
            a: 'Not always; some advanced cases require other solutions determined after examination. That is why early treatment is advised.',
          },
        ],
      },
    },
  },
  {
    slug: 'cosmetic-fillings',
    icon: 'sparkle',
    image: img.filling,
    imageAlt: {
      ar: 'لقطة مقربة توضيحية لحشوة تجميلية — مفهوم بصري بهوية العيادة',
      en: 'Conceptual close-up of a cosmetic filling — brand visual',
    },
    related: ['restorations', 'teeth-cleaning'],
    journal: 'cosmetic-fillings-guide',
    content: {
      ar: {
        name: 'الحشوات التجميلية',
        tagline: 'حشوات بلون السن الطبيعي بدقة التفاصيل',
        shortDesc:
          'حشوات بلون السن تُعالج النخر وتعيد للسن مظهره الطبيعي بتناسق مع الأسنان المجاورة.',
        what: [
          'الحشوة التجميلية مادة بلون السن تُستخدم لسد النخر أو إصلاح الشقوق الصغيرة والفجوات، مع الاهتمام بالمظهر النهائي.',
          'تُختار درجة اللون بعناية لتتناسق مع لون سنك الطبيعي، وتُنحت الحشوة لتحافظ على شكل السن ووظيفته.',
        ],
        forWhom: [
          'من لديهن نخر صغير أو متوسط يرغبن بعلاجه بمظهر طبيعي.',
          'من لديهن حشوة قديمة داكنة يرغبن باستبدالها.',
          'من لديهن كسر صغير أو فجوة بين الأسنان — بعد تقييم الحالة.',
        ],
        expect: [
          'فحص السن وتحديد مدى ملاءمة الحشوة التجميلية لحالتك.',
          'اختيار درجة اللون المناسبة وتنظيف الجزء المتضرر.',
          'وضع الحشوة على طبقات ونحتها وضبط الإطباق ثم تلميعها.',
          'إرشادات للمحافظة على الحشوة وبقية الأسنان.',
        ],
        process: [
          { title: 'التقييم', desc: 'فحص السن والتأكد من أن الحشوة التجميلية الخيار المناسب.' },
          { title: 'اختيار اللون', desc: 'مطابقة درجة الحشوة مع لون السن الطبيعي.' },
          { title: 'التنفيذ', desc: 'إزالة الضرر، وضع الحشوة، النحت وضبط الإطباق.' },
          { title: 'التلميع', desc: 'لمسة نهائية لمظهر طبيعي وملمس ناعم.' },
        ],
        care: [
          'العناية اليومية المعتادة: تفريش مرتين يومياً وخيط الأسنان.',
          'تجنّب العض على الأشياء القاسية كالأقلام والثلج.',
          'الفحص الدوري للتأكد من سلامة الحشوات مع الوقت.',
        ],
        faqs: [
          {
            q: 'هل تختلف الحشوة التجميلية عن الحشوة العادية؟',
            a: 'الفرق الأساسي في اللون والمظهر؛ فالحشوات التجميلية تُطابق لون السن الطبيعي، بينما تختار بعض الحشوات التقليدية لوناً معدنياً. الخيار المناسب يحدده الفحص.',
          },
          {
            q: 'هل الحشوة التجميلية مناسبة للنخور الكبيرة؟',
            a: 'ليست دائماً؛ النخور الواسعة قد تحتاج حلولاً أخرى كالترميمات الأكبر. التقييم السريري هو الفيصل.',
          },
          {
            q: 'هل يتغيّر لون الحشوة مع الوقت؟',
            a: 'قد تتأثر قليلاً بالعادات كالتدخين والإكثار من المنبهات، والعناية الجيدة والفحص الدوري يحافظان على مظهرها.',
          },
        ],
      },
      en: {
        name: 'Cosmetic Fillings',
        tagline: 'Tooth-coloured fillings with attention to detail',
        shortDesc:
          'Tooth-coloured fillings that treat decay and restore the natural look of the tooth in harmony with neighbouring teeth.',
        what: [
          'A cosmetic filling is a tooth-coloured material used to treat cavities or repair small chips and gaps, with attention to the final appearance.',
          'The shade is carefully matched to your natural tooth colour, and the filling is sculpted to preserve the tooth’s shape and function.',
        ],
        forWhom: [
          'Anyone with a small to moderate cavity who wants a natural-looking treatment.',
          'Anyone wishing to replace an old dark filling.',
          'Anyone with a small chip or gap — after the case is assessed.',
        ],
        expect: [
          'An examination to confirm a cosmetic filling suits your case.',
          'Shade selection and removal of the damaged part.',
          'Layered placement, sculpting, bite adjustment and polishing.',
          'Guidance on caring for the filling and the rest of your teeth.',
        ],
        process: [
          { title: 'Assessment', desc: 'Examining the tooth to confirm a cosmetic filling is appropriate.' },
          { title: 'Shade Matching', desc: 'Matching the filling to the natural tooth colour.' },
          { title: 'Placement', desc: 'Removing damage, placing, sculpting and adjusting the bite.' },
          { title: 'Polishing', desc: 'A final polish for a natural look and smooth feel.' },
        ],
        care: [
          'Usual daily care: brushing twice a day and flossing.',
          'Avoid biting hard objects such as pens or ice.',
          'Regular check-ups to keep fillings in good condition over time.',
        ],
        faqs: [
          {
            q: 'How do cosmetic fillings differ from regular ones?',
            a: 'The main difference is colour and appearance: cosmetic fillings match the natural tooth, while some traditional fillings have a metallic look. The right option is decided after examination.',
          },
          {
            q: 'Are cosmetic fillings suitable for large cavities?',
            a: 'Not always; extensive decay may need larger restorations. The clinical assessment decides.',
          },
          {
            q: 'Does the filling colour change over time?',
            a: 'It can be slightly affected by habits such as smoking or heavy coffee consumption; good care and regular check-ups help maintain its appearance.',
          },
        ],
      },
    },
  },
  {
    slug: 'teeth-cleaning',
    icon: 'smile',
    image: img.floral,
    imageAlt: {
      ar: 'تنسيق زهور وأدوات — مفهوم بصري للعناية والنظافة بهوية العيادة',
      en: 'Floral still life — conceptual visual of care and cleanliness',
    },
    related: ['restorations', 'cosmetic-fillings'],
    journal: 'what-to-expect-cleaning',
    content: {
      ar: {
        name: 'تنظيف وتلميع الأسنان',
        tagline: 'وقاية دورية لابتسامة صحية',
        shortDesc:
          'إزالة التصبغات والجير المتراكم وتلميع الأسنان — خطوة وقائية أساسية لصحة الفم واللثة.',
        what: [
          'التنظيف الاحترافي يزيل الترسبات والجير الذي لا يزيله التفريش المنزلي، خاصة عند حدود اللثة وبين الأسنان.',
          'يُختتم عادةً بالتلميع، ويُعد من أهم خطوات الوقاية من أمراض اللثة والنخر.',
        ],
        forWhom: [
          'الجميع تقريباً — كجزء من العناية الدورية بالفم.',
          'من يلاحظن تصبغات على الأسنان بسبب القهوة أو الشاي أو التدخين.',
          'من يعانين من نزف اللثة عند التفريش — ويلزم الفحص للتقييم.',
          'من يرغبن بالاطمئنان على صحة الفم بشكل دوري.',
        ],
        expect: [
          'فحص عام للفم واللثة قبل البدء.',
          'إزالة الجير والترسبات بأدوات مناسبة.',
          'تلميع الأسنان لإزالة التصبغات السطحية.',
          'نصائح شخصية للعناية المنزلية حسب حالتك.',
        ],
        process: [
          { title: 'الفحص', desc: 'تقييم حالة اللثة والأسنان قبل التنظيف.' },
          { title: 'إزالة الجير', desc: 'تنظيف دقيق للترسبات المتراكمة فوق خط اللثة وتحته.' },
          { title: 'التلميع', desc: 'تلميع السطح لإزالة التصبغات ومنح ملمساً ناعماً.' },
          { title: 'الإرشاد', desc: 'توصيات للعناية المنزلية وموعد الجلسة القادمة.' },
        ],
        care: [
          'التفريش مرتين يومياً لمدة دقيقتين.',
          'استخدام خيط الأسنان أو الفرشاة بين السنية يومياً.',
          'جلسة تنظيف دورية حسب توصية الطبيبة لحالتك.',
        ],
        faqs: [
          {
            q: 'كم مرة أحتاج تنظيف الأسنان في العيادة؟',
            a: 'يختلف حسب حالة كل شخص؛ التوصية العامة الشائعة كل ستة أشهر، وتحدّد الطبيبة الأنسب لحالتك بعد الفحص.',
          },
          {
            q: 'هل التنظيف يزيل التصبغات؟',
            a: 'يزيل التصبغات السطحية الناتجة عن الطعام والشراب والتدخين، أما تغير اللون الداخلي للأسنان فله تقييم مختلف.',
          },
          {
            q: 'هل التنظيف مريح؟',
            a: 'غالباً جلسة لطيفة، وقد تشعر بعض الحالات بحساسية بسيطة مؤقتة. أخبري الطبيبة بأي انزعاج ليُراعى أثناء الجلسة.',
          },
        ],
      },
      en: {
        name: 'Teeth Cleaning & Polishing',
        tagline: 'Regular prevention for a healthy smile',
        shortDesc:
          'Removal of stains and built-up tartar followed by polishing — a fundamental preventive step for gum and oral health.',
        what: [
          'Professional cleaning removes tartar and plaque that home brushing cannot, especially along the gumline and between teeth.',
          'It usually concludes with polishing, and is one of the most important steps in preventing gum disease and decay.',
        ],
        forWhom: [
          'Almost everyone — as part of regular oral care.',
          'Anyone noticing stains from coffee, tea or smoking.',
          'Anyone whose gums bleed when brushing — an examination is needed.',
          'Anyone who wants periodic reassurance about their oral health.',
        ],
        expect: [
          'A general examination of the mouth and gums before starting.',
          'Removal of tartar and plaque with appropriate instruments.',
          'Polishing to remove surface stains.',
          'Personal home-care advice tailored to your case.',
        ],
        process: [
          { title: 'Examination', desc: 'Assessing the condition of gums and teeth before cleaning.' },
          { title: 'Tartar Removal', desc: 'Careful cleaning of deposits above and below the gumline.' },
          { title: 'Polishing', desc: 'Polishing the surfaces to lift stains and leave them smooth.' },
          { title: 'Guidance', desc: 'Home-care recommendations and timing for your next visit.' },
        ],
        care: [
          'Brush twice daily for two minutes.',
          'Floss or use interdental brushes daily.',
          'Regular cleaning sessions as recommended for your case.',
        ],
        faqs: [
          {
            q: 'How often should I have a professional cleaning?',
            a: 'It varies by individual; the common general guidance is every six months, and the doctor advises what suits your case after examination.',
          },
          {
            q: 'Does cleaning remove stains?',
            a: 'It removes surface stains caused by food, drink and smoking; internal tooth discolouration is assessed differently.',
          },
          {
            q: 'Is the cleaning comfortable?',
            a: 'It is usually a gentle session, though some cases feel brief mild sensitivity. Tell the doctor about any discomfort so it can be taken into account.',
          },
        ],
      },
    },
  },
  {
    slug: 'tooth-extraction',
    icon: 'extract',
    image: img.toothOutline,
    imageAlt: {
      ar: 'رسم توضيحي بسيط لسن — مفهوم بصري هادئ بهوية العيادة',
      en: 'Minimal tooth outline — calm conceptual brand visual',
    },
    related: ['partial-dentures', 'removable-dentures'],
    content: {
      ar: {
        name: 'قلع الأسنان',
        tagline: 'عناية دقيقة عندما يكون القلع هو الخيار الأنسب',
        shortDesc:
          'قلع السن عندما لا يعود الحفاظ عليه ممكناً أو مناسباً — بخطوات دقيقة وتعليمات واضحة للتعافي.',
        what: [
          'القلع هو إزالة السن عندما يصبح الحفاظ عليه غير ممكن أو غير مناسب صحياً، وهو دائماً خيار يُدرس بعد تقييم البدائل.',
          'تُولي الطبيبة اهتماماً خاصاً لراحة المريضة أثناء الجلسة وبعدها، مع تعليمات واضحة للعناية بموضع القلع.',
        ],
        forWhom: [
          'من لديهن سن متضرر بشدة لا يمكن ترميمه.',
          'من لديهن سن عقلي (عقل) يسبب مشاكل متكررة — بعد التقييم.',
          'من يحتجن قلعات لأسباب تقويمية أو علاجية يحددها الفحص.',
        ],
        expect: [
          'فحص السن وتقييم الحالة، وقد يُستخدم التصوير الشعاعي.',
          'شرح خطوات القلع وتعليمات ما بعد الجلسة قبل البدء.',
          'إجراء القلع بعناية مع مراعاة الراحة قدر الإمكان.',
          'خطة لتعويض السن إن كان ذلك مناسباً لحالتك.',
        ],
        process: [
          { title: 'التقييم', desc: 'فحص شامل وتحديد ما إذا كان القلع الخيار الأنسب.' },
          { title: 'التحضير', desc: 'شرح الخطوات والإجابة عن أسئلتك قبل الجلسة.' },
          { title: 'القلع', desc: 'إجراء دقيق مع عناية بموضع السن والأنسجة المحيطة.' },
          { title: 'ما بعد القلع', desc: 'تعليمات العناية وخيارات التعويض والمتابعة.' },
        ],
        care: [
          'اتباع تعليمات الطبيبة حرفياً في الساعات والأيام الأولى.',
          'تجنّب المضمضة العنيفة والتدخين في الفترة الأولى.',
          'التواصل مع العيادة عند أي عرض غير متوقع.',
        ],
        faqs: [
          {
            q: 'هل القلع هو الحل دائماً؟',
            a: 'لا؛ الحفاظ على السن الطبيعي هو الأولوية دائماً، ولا يُلجأ للقلع إلا عندما تصبح البدائل غير مناسبة. الفحص هو الذي يقرر.',
          },
          {
            q: 'ماذا أفعل بعد القلع؟',
            a: 'تتلقين تعليمات مكتوبة وشفوية بعد الجلسة: الراحة، طريقة التنظيف، والأطعمة المناسبة. الالتزام بها يساعد على تعافٍ سليم.',
          },
          {
            q: 'هل أحتاج لتعويض السن المقلوع؟',
            a: 'يعتمد على موضع السن وتأثير غيابه على المضغ وبقية الأسنان. تُناقش الخيارات معك إن كان التعويض مناسباً.',
          },
        ],
      },
      en: {
        name: 'Tooth Extraction',
        tagline: 'Precise care when extraction is the right option',
        shortDesc:
          'Removing a tooth when preserving it is no longer possible or appropriate — with careful technique and clear recovery guidance.',
        what: [
          'Extraction is the removal of a tooth when preserving it is no longer possible or medically appropriate; it is always considered after evaluating the alternatives.',
          'Special attention is given to patient comfort during and after the session, with clear instructions for caring for the extraction site.',
        ],
        forWhom: [
          'Anyone with a severely damaged tooth that cannot be restored.',
          'Anyone whose wisdom tooth causes recurring problems — after assessment.',
          'Anyone needing extractions for orthodontic or treatment reasons determined by examination.',
        ],
        expect: [
          'An examination of the tooth; radiographs may be used.',
          'An explanation of the steps and aftercare before starting.',
          'A careful extraction with comfort in mind.',
          'A plan to replace the tooth if appropriate for your case.',
        ],
        process: [
          { title: 'Assessment', desc: 'A full examination to determine whether extraction is the best option.' },
          { title: 'Preparation', desc: 'Explaining the steps and answering your questions beforehand.' },
          { title: 'Extraction', desc: 'A precise procedure with care for the site and surrounding tissues.' },
          { title: 'Aftercare', desc: 'Care instructions, replacement options and follow-up.' },
        ],
        care: [
          'Follow the doctor’s instructions closely in the first hours and days.',
          'Avoid vigorous rinsing and smoking during the initial period.',
          'Contact the clinic if anything unexpected occurs.',
        ],
        faqs: [
          {
            q: 'Is extraction always the answer?',
            a: 'No; preserving the natural tooth is always the priority. Extraction is considered only when alternatives are unsuitable. The examination decides.',
          },
          {
            q: 'What should I do after an extraction?',
            a: 'You receive written and verbal aftercare: rest, cleaning guidance and suitable foods. Following them supports proper healing.',
          },
          {
            q: 'Do I need to replace the extracted tooth?',
            a: 'It depends on the tooth’s position and the effect of its absence on chewing and the other teeth. Options are discussed with you where appropriate.',
          },
        ],
      },
    },
  },
  {
    slug: 'partial-dentures',
    icon: 'denture',
    image: img.abstractTooth,
    imageAlt: {
      ar: 'عمل فني رقمي تجريدي لسن — مفهوم بصري بهوية العيادة',
      en: 'Abstract digital tooth artwork — conceptual brand visual',
    },
    related: ['removable-dentures', 'tooth-extraction'],
    journal: 'denture-care',
    content: {
      ar: {
        name: 'أطقم الأسنان الجزئية',
        tagline: 'تعويض أنيق للأسنان المفقودة',
        shortDesc:
          'أطقم جزئية ثابتة الإحساس تعوّض فقدان بعض الأسنان وتحافظ على وظيفة المضغ والمظهر.',
        what: [
          'الطقم الجزئي حل متحرك يعوّض فقدان عدد من الأسنان، ويثبت على الأسنان المتبقية بدقة.',
          'يُصمم ليبدو طبيعياً ويحافظ على محاذاة الأسنان المتبقية ويمنع ميلانها نحو الفراغ.',
        ],
        forWhom: [
          'من فقدن عدداً من الأسنان ولا يناسبهن حل آخر بعد التقييم.',
          'من يرغبن بالحفاظ على وظيفة المضغ والمظهر بعد فقدان أسنان.',
          'من يحتجن حلاً وسطاً قبل خيارات طويلة الأمد — حسب الحالة.',
        ],
        expect: [
          'فحص شامل للفم والأسنان المتبقية واللثة.',
          'أخذ القياسات والتصميم المناسب لحالتك.',
          'تجربة الطقم وضبطه حتى يصبح مريحاً.',
          'تعليمات الاستخدام والعناية اليومية.',
        ],
        process: [
          { title: 'التقييم', desc: 'دراسة الحالة وعدد الأسنان المفقودة وموضعها.' },
          { title: 'القياسات', desc: 'قوالب دقيقة لتصميم طقم مناسب لفمك.' },
          { title: 'التجربة والضبط', desc: 'جلسات ضبط للملاءمة والراحة والمظهر.' },
          { title: 'التسليم والمتابعة', desc: 'تعليمات العناية ومتابعة دورية.' },
        ],
        care: [
          'تنظيف الطقم يومياً بفرشاة مخصصة.',
          'خلعه ليلاً وإبقاؤه في محلول مناسب حسب الإرشادات.',
          'الفحص الدوري للتأكد من الملاءمة مع الوقت.',
        ],
        faqs: [
          {
            q: 'هل الطقم الجزئي مريح؟',
            a: 'يحتاج بعض الاعتياد في الأيام الأولى، ويُضبط تدريجياً حتى يصبح مريحاً. المتابعة بعد الاستلام مهمة لإجراء أي تعديل.',
          },
          {
            q: 'هل يؤثر الطقم على الكلام؟',
            a: 'قد تلاحظين فرقاً بسيطاً في البداية ويتحسّن ذلك سريعاً مع الاعتياد.',
          },
          {
            q: 'كم يعيش الطقم الجزئي؟',
            a: 'يعتمد على العناية وتغيّر شكل الفم مع الوقت؛ الفحص الدوري يحدد متى يلزم التعديل أو الاستبدال.',
          },
        ],
      },
      en: {
        name: 'Partial Dentures',
        tagline: 'An elegant replacement for missing teeth',
        shortDesc:
          'Partial dentures that replace some missing teeth while preserving chewing function and appearance.',
        what: [
          'A partial denture is a removable solution that replaces several missing teeth and is retained precisely by the remaining teeth.',
          'It is designed to look natural, keep the remaining teeth aligned and stop them drifting into the gaps.',
        ],
        forWhom: [
          'Anyone who has lost several teeth and for whom another solution is unsuitable after assessment.',
          'Anyone wishing to preserve chewing function and appearance after tooth loss.',
          'Anyone needing an intermediate solution before longer-term options — depending on the case.',
        ],
        expect: [
          'A comprehensive examination of the mouth, remaining teeth and gums.',
          'Impressions and a design suited to your case.',
          'Trying and adjusting the denture until it is comfortable.',
          'Instructions for daily use and care.',
        ],
        process: [
          { title: 'Assessment', desc: 'Studying the case: how many teeth are missing and where.' },
          { title: 'Impressions', desc: 'Precise moulds to design a denture that fits your mouth.' },
          { title: 'Fitting & Adjustment', desc: 'Adjustment visits for fit, comfort and appearance.' },
          { title: 'Delivery & Follow-up', desc: 'Care instructions and periodic check-ups.' },
        ],
        care: [
          'Clean the denture daily with a dedicated brush.',
          'Remove it at night and store it appropriately as instructed.',
          'Regular check-ups to ensure the fit over time.',
        ],
        faqs: [
          {
            q: 'Are partial dentures comfortable?',
            a: 'They need a short adaptation period, and are adjusted gradually until comfortable. Post-delivery follow-ups matter for any fine-tuning.',
          },
          {
            q: 'Does a denture affect speech?',
            a: 'You may notice a slight difference at first; it usually improves quickly as you adapt.',
          },
          {
            q: 'How long does a partial denture last?',
            a: 'It depends on care and on natural changes in the mouth over time; regular check-ups determine when adjustment or replacement is needed.',
          },
        ],
      },
    },
  },
  {
    slug: 'removable-dentures',
    icon: 'plate',
    image: img.instruments,
    imageAlt: {
      ar: 'أدوات طب أسنان بعناية — مفهوم بصري للدقة بهوية العيادة',
      en: 'Carefully arranged dental instruments — conceptual visual of precision',
    },
    related: ['partial-dentures', 'tooth-extraction'],
    journal: 'denture-care',
    content: {
      ar: {
        name: 'أطقم الأسنان المتحركة الكاملة',
        tagline: 'استعادة الابتسامة والوظيفة عند فقدان الأسنان',
        shortDesc:
          'أطقم كاملة متحركة تُصمم بعناية لتعويض فقدان جميع الأسنان واستعادة المظهر ووظيفة المضغ.',
        what: [
          'الطقم الكامل المتحرك يعوّض فقدان جميع أسنان الفك الواحد أو الفكين، ويُصمم ليحاكي شكل الأسنان واللثة الطبيعي.',
          'يركز التصميم على الثبات والراحة والمظهر الطبيعي معاً.',
        ],
        forWhom: [
          'من فقدن جميع أسنان الفك أو معظمها.',
          'من يحتجن حلاً وظيفياً وتجميلياً بعد فقدان الأسنان.',
          'من يبحثن عن خيار يمكن تجديده وتعديله مع الوقت.',
        ],
        expect: [
          'فحص شامل للفم واللثة ودراسة الحالة.',
          'قياسات دقيقة وجلسات تجربة لضبط الملاءمة.',
          'تسليم الطقم مع تعليمات الاستخدام والتكيّف.',
          'متابعة دورية لضبط الملاءمة مع تغيّر الفم الطبيعي.',
        ],
        process: [
          { title: 'التقييم', desc: 'فحص الفم واللثة ومناقشة التوقعات.' },
          { title: 'القياسات والتجربة', desc: 'قوالب وجلسات تجربة للوصول إلى الملاءمة المثالية.' },
          { title: 'التسليم', desc: 'استلام الطقم مع شرح كامل للعناية والتكيّف.' },
          { title: 'المتابعة', desc: 'زيارات ضبط وتعديل حسب الحاجة.' },
        ],
        care: [
          'تنظيف الطقم يومياً والعناية باللثة.',
          'خلع الطقم ليلاً لإراحة الأنسجة.',
          'زيارات دورية للتأكد من الملاءمة وسلامة الأنسجة.',
        ],
        faqs: [
          {
            q: 'كم يستغرق التعوّد على الطقم الكامل؟',
            a: 'يختلف من شخص لآخر؛ غالباً بضعة أسابيع من التكيّف التدريجي، وتساعد المتابعة والضبط على تسريع ذلك.',
          },
          {
            q: 'هل أستطيع تناول الطعام بشكل طبيعي؟',
            a: 'يتحسّن المضغ تدريجياً مع التعوّد؛ يُنصح بالبدء بأطعمة طرية وتقطيع الطعام قطعاً صغيرة.',
          },
          {
            q: 'متى أحتاج لتغيير الطقم؟',
            a: 'يتغيّر شكل الفم مع الوقت، والفحص الدوري يحدد متى يلزم إعادة البطانة أو الاستبدال.',
          },
        ],
      },
      en: {
        name: 'Removable Complete Dentures',
        tagline: 'Restoring smile and function after tooth loss',
        shortDesc:
          'Complete removable dentures, carefully designed to replace all teeth and restore appearance and chewing function.',
        what: [
          'A complete removable denture replaces all teeth of one or both jaws, and is designed to mimic the natural look of teeth and gums.',
          'The design focuses on stability, comfort and a natural appearance together.',
        ],
        forWhom: [
          'Anyone who has lost all or most of their teeth in a jaw.',
          'Anyone needing a functional and aesthetic solution after tooth loss.',
          'Anyone looking for an option that can be renewed and adjusted over time.',
        ],
        expect: [
          'A comprehensive examination of the mouth and gums.',
          'Precise impressions and try-in visits to fine-tune the fit.',
          'Delivery of the denture with usage and adaptation guidance.',
          'Periodic follow-ups to maintain the fit as the mouth naturally changes.',
        ],
        process: [
          { title: 'Assessment', desc: 'Examining the mouth and gums and discussing expectations.' },
          { title: 'Impressions & Try-ins', desc: 'Moulds and try-in visits to reach the ideal fit.' },
          { title: 'Delivery', desc: 'Receiving the denture with full care and adaptation guidance.' },
          { title: 'Follow-up', desc: 'Adjustment visits as needed.' },
        ],
        care: [
          'Clean the denture daily and care for your gums.',
          'Remove it at night to rest the tissues.',
          'Regular visits to check fit and tissue health.',
        ],
        faqs: [
          {
            q: 'How long does adapting to complete dentures take?',
            a: 'It varies by person; usually a few weeks of gradual adaptation, and follow-ups with adjustments help speed this up.',
          },
          {
            q: 'Can I eat normally?',
            a: 'Chewing improves gradually as you adapt; start with soft foods and cut food into small pieces.',
          },
          {
            q: 'When will I need to change the denture?',
            a: 'The mouth changes shape over time; regular check-ups determine when relining or replacement is needed.',
          },
        ],
      },
    },
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
