import { z } from 'zod';

// Schema for user login
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

// Schema for resetting password
export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, 'البريد الإلكتروني مطلوب')
    .email('البريد الإلكتروني غير صالح'),
});

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

// Schema for verifying OTP
export const verifyOtpSchema = z.object({
  otp: z
    .string()
    .length(6, 'يجب أن يكون رمز التحقق مكونًا من 6 أرقام')
    .regex(/^\d+$/, 'رمز التحقق يجب أن يحتوي على أرقام فقط'),
});

export type VerifyOtpFormData = z.infer<typeof verifyOtpSchema>;

// Schema for resetting password
export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, 'كلمة المرور مطلوبة')
      .min(8, 'يجب أن تكون كلمة المرور مكونة من 8 خانات على الأقل'),
    confirmPassword: z.string().min(1, 'تأكيد كلمة المرور مطلوب'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'كلمة المرور غير متطابقة',
    path: ['confirmPassword'],
  });

export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
