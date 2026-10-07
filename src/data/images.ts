/**
 * خريطة الصور — جميع مسارات الصور في مكان واحد (سهولة الاستبدال مستقبلاً)
 * الصور الأصلية (أساتذة قابلة للاستبدال): 19 ملفاً في public/images/*.png
 * الموقع يخدم نسخاً محسّنة بصيغة WebP مولّدة عبر:
 *   node scripts/optimize-images.mjs   (spec §33/§34)
 *
 * ملاحظة: الملف الأصلي "10_Consultation_Human_Trust (1).png" محفوظ باسم
 * "10_Consultation_Human_Trust" (بدون مسافات وأقواس لروابط نظيفة).
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
  roomAlt: withBase('/images/06_Treatment_Room_Alternate_Angle.webp'),
  instruments: withBase('/images/07_Dental_Instruments_Still_Life.webp'),
  tooth3d: withBase('/images/08_Tooth_Restoration_3D_Visualization.webp'),
  filling: withBase('/images/09_Cosmetic_Filling_Precision_Detail.webp'),
  consultation: withBase('/images/10_Consultation_Human_Trust.webp'),
  comfort: withBase('/images/11_Comfort_Patient_Experience.webp'),
  smileCampaign: withBase('/images/12_Natural_Smile_Beauty_Campaign.webp'),
  floral: withBase('/images/13_Floral_Dental_Still_Life.webp'),
  abstractTooth: withBase('/images/14_Abstract_Tooth_Digital_Artwork.webp'),
  lavender: withBase('/images/15_Lavender_Botanical_Branch.webp'),
  toothOutline: withBase('/images/16_Minimal_Tooth_Outline.webp'),
  lavenderGradient: withBase('/images/17_Soft_Lavender_Gradient.webp'),
  marble: withBase('/images/18_Carrara_Marble_Texture.webp'),
  paperGrain: withBase('/images/19_Soft_Grain_Paper_Texture.webp'),
} as const;

/** الأبعاد الأصلية (لعرض/ارتفاع <img> — يمنع انزياح التخطيط CLS) */
export const imgSize: Record<string, [number, number]> = {
  [img.heroClinic]: [1376, 768],
  [img.heroSmile]: [1264, 843],
  [img.roomPrecision]: [1264, 843],
  [img.reception]: [1264, 843],
  [img.roomPatient]: [1264, 843],
  [img.roomAlt]: [1264, 843],
  [img.instruments]: [1264, 843],
  [img.tooth3d]: [1264, 843],
  [img.filling]: [1264, 843],
  [img.consultation]: [1264, 843],
  [img.comfort]: [1264, 843],
  [img.smileCampaign]: [928, 1152],
  [img.floral]: [1264, 843],
  [img.abstractTooth]: [1264, 843],
  [img.lavender]: [1264, 843],
  [img.toothOutline]: [1264, 843],
  [img.lavenderGradient]: [1376, 768],
  [img.marble]: [1264, 843],
  [img.paperGrain]: [1264, 843],
};

export type ImageKey = keyof typeof img;
