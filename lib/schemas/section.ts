import { z } from 'zod';
import { FloorMaterial, SectionType } from '@/types/sections';

export const sectionSchema = z
  .object({
    name: z.string().min(1, 'اسم الجناح مطلوب'),
    totalAreaSqm: z
      .number({ message: 'المساحة الإجمالية مطلوبة' })
      .positive('المساحة يجب أن تكون أكبر من صفر'),
    ceilingHeightM: z
      .number({ message: 'ارتفاع السقف مطلوب' })
      .positive('الارتفاع يجب أن يكون أكبر من صفر'),
    floorMaterial: z.enum(
      [
        FloorMaterial.CONCRETE,
        FloorMaterial.CERAMIC,
        FloorMaterial.CARPET,
        FloorMaterial.WOOD,
        FloorMaterial.EPOXY,
        FloorMaterial.OTHER,
      ],
      { message: 'نوع الأرضية مطلوب' }
    ),
    hasLighting: z.boolean(),
    hasAirConditioning: z.boolean(),
    hasInternet: z.boolean(),
    hasEmergencyExit: z.boolean(),
    hasElectricity: z.boolean(),
    parkingSpots: z.boolean(),
    notes: z.string().optional(),
    sectionImage: z.string().optional(),
    services: z.array(z.string()),
    sectionType: z
      .enum([
        SectionType.OPEN,
        SectionType.EQUIPPED,
        SectionType.NOT_EQUIPPED,
        SectionType.CLOSED,
        SectionType.OTHER,
      ])
      .optional()
      .nullable(),
    hasReserveByAdmin: z.boolean(),
    reserveFrom: z.date().optional().nullable(),
    reserveTo: z.date().optional().nullable(),
  })
  .refine(
    (data) => {
      if (data.hasReserveByAdmin) {
        return data.reserveFrom && data.reserveTo;
      }
      return true;
    },
    {
      message: 'يجب تحديد تاريخ البداية والنهاية عند تحديد حالة محجوز',
      path: ['reserveFrom'],
    }
  )
  .refine(
    (data) => {
      if (data.reserveFrom && data.reserveTo) {
        return data.reserveTo >= data.reserveFrom;
      }
      return true;
    },
    {
      message: 'تاريخ النهاية يجب أن يكون بعد تاريخ البداية',
      path: ['reserveTo'],
    }
  );

export type SectionFormValues = z.infer<typeof sectionSchema>;
