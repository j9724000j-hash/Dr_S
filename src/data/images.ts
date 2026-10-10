/**
 * خريطة الصور — جميع مسارات الصور في مكان واحد (سهولة الاستبدال مستقبلاً)
 * الصور الأصلية (أساتذة PNG قابلة للاستبدال): AAA/masters/ — خارج النشر.
 * الموقع يخدم فقط النسخ المحسّنة بصيغة WebP في public/images/ (الصور المستخدمة
 * فعلاً)، مولّدة عبر:
 *   node scripts/optimize-images.mjs   (spec §33/§34)
 * وصورة المشاركة الاجتماعية og-home.jpg تُولَّد من الأمر نفسه.
 * الملفات غير المستخدمة (06 و15 و17 و18 و19 ونسخة "(1)") موجودة في AAA/images/.
 */
import { withBase } from '../utils/paths';

/**
 * كل المسارات تمرّ عبر withBase() حتى تعمل على مسار مستودع GitHub Pages
 * (/Dr_S/) وعلى جذر الدومين الحقيقي ('/') بلا أي تغيير في القوالب.
 */
export const img = {
  heroClinic: withBase('/images/01_Hero_Clinic_Signature_Homepage.webp'),
  heroSmile: withBase('/images/02_Signature_Smile_Editorial_Portrait.webp'),
  roomPrecision: withBase('/images/03_Treatment_Room_Precision_Comfort.webp'),
  reception: withBase('/images/04_Reception_First_Impression.webp'),
  roomPatient: withBase('/images/05_Treatment_Room_Patient_View.webp'),
  instruments: withBase('/images/07_Dental_Instruments_Still_Life.webp'),
  tooth3d: withBase('/images/08_Tooth_Restoration_3D_Visualization.webp'),
  filling: withBase('/images/09_Cosmetic_Filling_Precision_Detail.webp'),
  consultation: withBase('/images/10_Consultation_Human_Trust.webp'),
  comfort: withBase('/images/11_Comfort_Patient_Experience.webp'),
  smileCampaign: withBase('/images/12_Natural_Smile_Beauty_Campaign.webp'),
  floral: withBase('/images/13_Floral_Dental_Still_Life.webp'),
  abstractTooth: withBase('/images/14_Abstract_Tooth_Digital_Artwork.webp'),
  toothOutline: withBase('/images/16_Minimal_Tooth_Outline.webp'),
} as const;

/** الأبعاد الأصلية (لعرض/ارتفاع <img> — يمنع انزياح التخطيط CLS) */
export const imgSize: Record<string, [number, number]> = {
  [img.heroClinic]: [1376, 768],
  [img.heroSmile]: [1264, 843],
  [img.roomPrecision]: [1264, 843],
  [img.reception]: [1264, 843],
  [img.roomPatient]: [1264, 843],
  [img.instruments]: [1264, 843],
  [img.tooth3d]: [1264, 843],
  [img.filling]: [1264, 843],
  [img.consultation]: [1264, 843],
  [img.comfort]: [1264, 843],
  [img.smileCampaign]: [928, 1152],
  [img.floral]: [1264, 843],
  [img.abstractTooth]: [1264, 843],
  [img.toothOutline]: [1264, 843],
};

export type ImageKey = keyof typeof img;
