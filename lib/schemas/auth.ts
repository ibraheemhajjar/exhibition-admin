import { z } from 'zod';

export const loginSchema = z.object({
  identifier: z
    .string()
    .min(1, 'البريد الإلكتروني مطلوب')
    .email('البريد الإلكتروني غير صالح'),
  password: z
    .string()
    .min(1, 'كلمة المرور مطلوبة')
    .min(8, 'يجب أن تكون كلمة المرور مكونة من 8 خانات على الأقل'),
});

export type LoginFormData = z.infer<typeof loginSchema>;

// Later we'll add forgotPasswordSchema, resetPasswordSchema, etc.
