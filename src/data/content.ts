import type { Locale } from '../i18n/ui';
import type { IconName } from './icons';
import { img } from './images';

/* ---------- الخدمات / Services ---------- */
export interface ServiceItem { name: string; desc: string; icon: IconName; image: string; }
export const services: Record<Locale, ServiceItem[]> = {
  ar: [
    { name: 'طب الأسنان العام', desc: 'فحص شامل، حشوات تجميلية، علاج الجذور وأمراض اللثة بأحدث التقنيات.', icon: 'tooth', image: img.instruments },
    { name: 'تجميل الأسنان', desc: 'تصميم ابتسامة وفينير البورسلين لابتسامة طبيعية ساحرة.', icon: 'sparkle', image: img.smileCampaign },
    { name: 'تبييض الأسنان', desc: 'تبييض احترافي بالعيادة لابتسامة أكثر إشراقاً في جلسة واحدة.', icon: 'smile', image: img.heroSmile },
    { name: 'زراعة الأسنان', desc: 'زرعات تيتانيوم عالية الجودة تبدو وتعمل كأسنان طبيعية.', icon: 'implant', image: img.tooth3d },
    { name: 'تقويم الأسنان', desc: 'تقويم شفاف وتقليدي لجميع الأعمار.', icon: 'braces', image: img.toothOutline },
    { name: 'الوقاية والعناية', desc: 'تنظيف الأسنان والفلورايد وإرشادات العناية المنزلية.', icon: 'shield', image: img.floral },
  ],
  en: [
    { name: 'General Dentistry', desc: 'Comprehensive exams, cosmetic fillings, root canal and gum treatment with the latest technology.', icon: 'tooth', image: img.instruments },
    { name: 'Cosmetic Dentistry', desc: 'Smile design and porcelain veneers for a naturally stunning smile.', icon: 'sparkle', image: img.smileCampaign },
    { name: 'Teeth Whitening', desc: 'Professional in-clinic whitening for a brighter smile in a single visit.', icon: 'smile', image: img.heroSmile },
    { name: 'Dental Implants', desc: 'High-quality titanium implants that look and work like natural teeth.', icon: 'implant', image: img.tooth3d },
    { name: 'Orthodontics', desc: 'Clear aligners and modern braces for all ages.', icon: 'braces', image: img.toothOutline },
    { name: 'Prevention & Care', desc: 'Cleaning, fluoride and home-care guidance to keep your smile healthy.', icon: 'shield', image: img.floral },
  ],
};

/* ---------- القيم / Values ---------- */
export interface ValueItem { name: string; desc: string; icon: IconName; }
export const values: Record<Locale, ValueItem[]> = {
  ar: [
    { name: 'رعاية متكاملة', desc: 'من التشخيص إلى العلاج والمتابعة.', icon: 'tooth' },
    { name: 'طب تجميل أسنان', desc: 'ابتسامة طبيعية تليق بوجهك.', icon: 'sparkle' },
    { name: 'رعاية شخصية', desc: 'اهتمام خاص بكل مريضة في أجواء مريحة.', icon: 'heart' },
    { name: 'ثقة وأمان', desc: 'تعقيم كامل ومعايير سلامة عالمية.', icon: 'shield' },
  ],
  en: [
    { name: 'Complete Care', desc: 'From diagnosis to treatment and follow-up.', icon: 'tooth' },
    { name: 'Cosmetic Dentistry', desc: 'A natural smile that suits your face.', icon: 'sparkle' },
    { name: 'Personal Care', desc: 'Individual attention in a relaxing atmosphere.', icon: 'heart' },
    { name: 'Trust & Safety', desc: 'Full sterilization and international safety standards.', icon: 'shield' },
  ],
};

/* ---------- إحصائيات / Stats (TODO: تأكيد الأرقام) ---------- */
export interface StatItem { value: string; label: string; }
export const stats: Record<Locale, StatItem[]> = {
  ar: [
    { value: '+10', label: 'سنوات من الخبرة' },
    { value: '+500', label: 'مريضة سعيدة' },
    { value: '4.9', label: 'تقييم المرضى' },
  ],
  en: [
    { value: '+10', label: 'Years of Experience' },
    { value: '+500', label: 'Happy Patients' },
    { value: '4.9', label: 'Patient Rating' },
  ],
};

/* ---------- المعرض / Gallery ---------- */
export interface GalleryItem { key: string; src: string; title: string; desc: string; }
export const gallery: Record<Locale, GalleryItem[]> = {
  ar: [
    { key: 'heroClinic', src: img.heroClinic, title: 'العيادة', desc: 'مساحة مصممة لراحتك وخصوصيتك' },
    { key: 'reception', src: img.reception, title: 'الاستقبال', desc: 'استقبال أنيق بالدفء والخصوصية' },
    { key: 'roomPrecision', src: img.roomPrecision, title: 'غرفة العلاج', desc: 'أحدث التجهيزات لراحة قصوى' },
    { key: 'roomPatient', src: img.roomPatient, title: 'غرفة المريضة', desc: 'تجربة مريحة وهادئة' },
    { key: 'roomAlt', src: img.roomAlt, title: 'زاوية العلاج', desc: 'تصميم يراعي كل احتياج' },
    { key: 'instruments', src: img.instruments, title: 'أدوات معقمة', desc: 'معايير تعقيم صارمة' },
    { key: 'tooth3d', src: img.tooth3d, title: 'ترميم الأسنان', desc: 'تقنيات حديثة لترميم متقن' },
    { key: 'filling', src: img.filling, title: 'حشوات تجميلية', desc: 'حشوات طبيعية الشكل' },
    { key: 'consultation', src: img.consultation, title: 'الاستشارة', desc: 'نأخذ الوقت الكافي للاستماع إليكِ' },
    { key: 'comfort', src: img.comfort, title: 'راحة المريضة', desc: 'أجواء هادئة وخصوصية' },
    { key: 'smileCampaign', src: img.smileCampaign, title: 'ابتسامة طبيعية', desc: 'نتائج تليق بوجهك' },
    { key: 'floral', src: img.floral, title: 'لمسة طبيعية', desc: 'لمسات طبيعية في ديكور العيادة' },
  ],
  en: [
    { key: 'heroClinic', src: img.heroClinic, title: 'The Clinic', desc: 'A space designed around your comfort and privacy' },
    { key: 'reception', src: img.reception, title: 'Reception', desc: 'An elegant welcome with warmth and privacy' },
    { key: 'roomPrecision', src: img.roomPrecision, title: 'Treatment Room', desc: 'State-of-the-art equipment for maximum comfort' },
    { key: 'roomPatient', src: img.roomPatient, title: 'Patient Suite', desc: 'A calm, comfortable experience' },
    { key: 'roomAlt', src: img.roomAlt, title: 'Treatment Corner', desc: 'A design that caters to your every need' },
    { key: 'instruments', src: img.instruments, title: 'Sterile Instruments', desc: 'Strict sterilization standards' },
    { key: 'tooth3d', src: img.tooth3d, title: 'Tooth Restoration', desc: 'Modern techniques for precise restoration' },
    { key: 'filling', src: img.filling, title: 'Cosmetic Fillings', desc: 'Natural-looking fillings' },
    { key: 'consultation', src: img.consultation, title: 'Consultation', desc: 'We take the time to listen to you' },
    { key: 'comfort', src: img.comfort, title: 'Patient Comfort', desc: 'A calm and private atmosphere' },
    { key: 'smileCampaign', src: img.smileCampaign, title: 'Natural Smile', desc: 'Results that suit your face' },
    { key: 'floral', src: img.floral, title: 'Natural Touch', desc: 'Natural touches in our clinic decor' },
  ],
};

/** شريط جولة العيادة — يظهر في الصفحة الرئيسية */
export const tourStripKeys = ['reception', 'roomPrecision', 'comfort'] as const;

/* ---------- نبذة / About ---------- */
export const aboutParagraphs: Record<Locale, string[]> = {
  ar: [
    'تتمتع الدكتورة سمية الحلبي بخبرة تزيد عن 10 سنوات في مجال طب وجراحة الفم والأسنان، مع تركيز خاص على طب تجميل الأسنان وتصميم الابتسامة.',
    'نسعى لتقديم رعاية أسنان مخصصة تجمع بين أحدث التقنيات الطبية والراحة النفسية لكل مريضة، من أول زيارة.',
  ],
  en: [
    'Dr. Sumaia Alhalabi has over 10 years of experience in oral & dental surgery, with a special focus on cosmetic dentistry and smile design.',
    'We strive to provide personalized dental care that combines the latest technology with genuine comfort for every patient, from the very first visit.',
  ],
};

export const credentials: Record<Locale, string[]> = {
  ar: [
    'أكثر من 10 سنوات من الخبرة السريرية',
    'تخصص في تجميل الأسنان وتصميم الابتسامة',
    'شهادات اعتماد دولية في طب الأسنان التجميلي',
    'عضو جمعية أطباء الأسنان',
  ],
  en: [
    '10+ years of clinical experience',
    'Specialized in cosmetic dentistry & smile design',
    'International certifications in cosmetic dentistry',
    'Member of the dental association',
  ],
};
