/**
 * خريطة الصور — جميع مسارات الصور في مكان واحد
 * The 19 brand images live in /public/images/
 * NOTE: original file "10_Consultation_Human_Trust (1).png" is stored as
 * "10_Consultation_Human_Trust.png" (spaces/parens removed for clean URLs).
 */
export const img = {
  heroClinic: '/images/01_Hero_Clinic_Signature_Homepage.png',
  heroSmile: '/images/02_Signature_Smile_Editorial_Portrait.png',
  roomPrecision: '/images/03_Treatment_Room_Precision_Comfort.png',
  reception: '/images/04_Reception_First_Impression.png',
  roomPatient: '/images/05_Treatment_Room_Patient_View.png',
  roomAlt: '/images/06_Treatment_Room_Alternate_Angle.png',
  instruments: '/images/07_Dental_Instruments_Still_Life.png',
  tooth3d: '/images/08_Tooth_Restoration_3D_Visualization.png',
  filling: '/images/09_Cosmetic_Filling_Precision_Detail.png',
  consultation: '/images/10_Consultation_Human_Trust.png',
  comfort: '/images/11_Comfort_Patient_Experience.png',
  smileCampaign: '/images/12_Natural_Smile_Beauty_Campaign.png',
  floral: '/images/13_Floral_Dental_Still_Life.png',
  abstractTooth: '/images/14_Abstract_Tooth_Digital_Artwork.png',
  lavender: '/images/15_Lavender_Botanical_Branch.png',
  toothOutline: '/images/16_Minimal_Tooth_Outline.png',
  lavenderGradient: '/images/17_Soft_Lavender_Gradient.png',
  marble: '/images/18_Carrara_Marble_Texture.png',
  paperGrain: '/images/19_Soft_Grain_Paper_Texture.png',
} as const;

export type ImageKey = keyof typeof img;
