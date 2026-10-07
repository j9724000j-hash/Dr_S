import type { Locale } from '../i18n/ui';

/**
 * الأسئلة الشائعة العامة (صفحة /faq) — تعليمية، مسؤولة، دون تشخيص
 * أو وعود طبية (spec §41).
 */
export interface FaqItem { q: string; a: string; }

export const faqs: Record<Locale, FaqItem[]> = {
  ar: [
    {
      q: 'كم مرة يجب زيارة طبيبة الأسنان؟',
      a: 'التوصية العامة الشائعة هي فحص دوري كل ستة أشهر، لكن الحالة المثالية تختلف من شخص لآخر حسب صحة الفم واللثة. الفحص الدوري يحدده بعد تقييم حالتك.',
    },
    {
      q: 'هل يجب أن أزور الطبيبة فقط عند وجود ألم؟',
      a: 'لا؛ كثير من مشاكل الأسنان تبدأ دون أعراض واضحة. الزيارة الدورية تساعد على اكتشاف النخر وأمراض اللثة مبكراً حين يكون علاجها أبسط.',
    },
    {
      q: 'ما الطريقة الصحيحة لتفريش الأسنان؟',
      a: 'مرتين يومياً لمدة دقيقتين بمعجون يحتوي على الفلورايد، بحركات لطيفة تغطي جميع الأسطح، مع تنظيف ما بين الأسنان بالخيط أو الفرشاة بين السنية يومياً.',
    },
    {
      q: 'هل نزف اللثة عند التفريش أمر طبيعي؟',
      a: 'النزف المتكرر قد يكون إشارة إلى التهاب اللثة ويستحق الفحص. لا توقفي التفريش، بل استمري بلطف وراجعي الطبيبة للتقييم.',
    },
    {
      q: 'هل التبييض مناسب للجميع؟',
      a: 'ليس بالضرورة؛ فملاءمته تعتمد على حالة الأسنان واللثة وسبب التصبغ. أي إجراء تجميلي يسبقه تقييم سريري يحدد المناسب لحالتك.',
    },
    {
      q: 'ماذا أفعل في الحالات الطارئة ككسر سن أو ألم شديد؟',
      a: 'تواصلي مع العيادة هاتفياً فوراً لطلب التوجيه. احتفظي بأي جزء مكسور من السن إن أمكن، ولا تتجاهلي الألم الشديد أو التورم.',
    },
    {
      q: 'هل تؤثر الحلويات فعلاً على الأسنان؟',
      a: 'السكريات غذاء للبكتيريا التي تنتج الأحماض المسببة للنخر. التقليل منها ومن الوجبات الخفيفة المتكررة، مع التنظيف الجيد، يقلل الخطر بشكل ملموس.',
    },
    {
      q: 'متى يجب أن يبدأ الأطفال بزيارة طبيب الأسنان؟',
      a: 'يُنصح عموماً بزيارة أولى مبكرة بعد ظهور الأسنان اللبنية للاطمئنان والتعوّد، وتكرارها دورياً حسب إرشادات الطبيب.',
    },
    {
      q: 'هل الصور الموجودة في الموقع صور العيادة الحقيقية؟',
      a: 'الصور المستخدمة حالياً صور توضيحية بهوية العيادة (مفاهيم بصرية) وليست تصويراً واقعياً للعيادة أو لحالات علاجية. سيتم استبدالها بصور حقيقية عند توفرها.',
    },
  ],
  en: [
    {
      q: 'How often should I visit the dentist?',
      a: 'The common general guidance is a check-up every six months, but the ideal interval varies by individual depending on oral and gum health. Your doctor advises what suits you after assessment.',
    },
    {
      q: 'Should I only visit when I have pain?',
      a: 'No; many dental problems begin without obvious symptoms. Regular visits help detect decay and gum disease early, when treatment is simpler.',
    },
    {
      q: 'What is the right way to brush my teeth?',
      a: 'Twice daily for two minutes with a fluoride toothpaste, using gentle strokes that cover all surfaces, plus daily cleaning between teeth with floss or interdental brushes.',
    },
    {
      q: 'Is bleeding when brushing normal?',
      a: 'Frequent bleeding can be a sign of gum inflammation and deserves an examination. Keep brushing gently and see the doctor for assessment.',
    },
    {
      q: 'Is whitening suitable for everyone?',
      a: 'Not necessarily; suitability depends on the condition of the teeth and gums and the cause of discolouration. Any cosmetic procedure is preceded by a clinical assessment.',
    },
    {
      q: 'What should I do in an emergency, like a broken tooth or severe pain?',
      a: 'Call the clinic immediately for guidance. Keep any broken tooth fragment if possible, and never ignore severe pain or swelling.',
    },
    {
      q: 'Do sweets really affect my teeth?',
      a: 'Sugar feeds the bacteria that produce the acids causing decay. Reducing sweets and frequent snacking, together with good cleaning, meaningfully lowers the risk.',
    },
    {
      q: 'When should children start visiting the dentist?',
      a: 'An early first visit after the baby teeth appear is generally advised, for reassurance and familiarity, with regular visits as the doctor recommends.',
    },
    {
      q: 'Are the photos on this website real photos of the clinic?',
      a: 'The current images are conceptual brand visuals aligned with the clinic’s identity — not real photography of the clinic or treatment cases. They will be replaced with real photography when available.',
    },
  ],
};
