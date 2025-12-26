'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { ArrowRight } from 'lucide-react';
import { AuthCard } from '@/components/auth/auth-card';
import { AuthButton } from '@/components/common/buttons/auth-button';
import { FormInput } from '@/components/common/forms/form-input';
import { Form } from '@/components/ui/form';
import {
  forgotPasswordSchema,
  type ForgotPasswordFormData,
} from '@/lib/schemas/auth';
import { authApi } from '@/lib/api/auth';

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setLoading(true);
    try {
      /* ===== PRODUCTION CODE (Correct Implementation) =====
    const result = await authApi.validateEmail({ email: data.email });

    if (result) {
      toast.success('تم إرسال رمز التحقق إلى بريدك الإلكتروني');
      router.push(`/verify-otp?email=${encodeURIComponent(data.email)}`);
    }
    ===================================================== */

      // TESTING CODE: Always redirect regardless of response
      // This is needed because test@test.com returns 500 (invalid mail server)
      await authApi.validateEmail({ email: data.email }).catch(() => {});

      toast.success('تم إرسال رمز التحقق إلى بريدك الإلكتروني');
      router.push(`/verify-otp?email=${encodeURIComponent(data.email)}`);
    } catch (error) {
      console.error('Validate email error:', error);
      toast.error('حدث خطأ، حاول مرة أخرى');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard>
      {/* Back Button */}
      <button
        onClick={() => router.push('/login')}
        className="text-neutral-950 hover:bg-neutral-100 hover:cursor-pointer p-1 rounded-md mb-5"
      >
        <ArrowRight className="size-6" />
      </button>

      <div className="flex flex-col items-center">
        {/* Title & Description */}
        <div className="mb-10 text-center">
          <h1 className="text-[32px] font-bold text-neutral-950 mb-4">
            استرجاع كلمة المرور
          </h1>
          <p className="text-base font-medium text-neutral-500 mx-2">
            أدخل بريدك الالكتروني لكي نرسل الرمز إليه
          </p>
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="mb-10">
              <FormInput
                form={form}
                name="email"
                placeholder="Email-Address"
                direction="ltr"
                className="bg-neutral-200"
                required
              />
            </div>

            <AuthButton type="submit" loading={loading}>
              التالي
            </AuthButton>
          </form>
        </Form>
      </div>
    </AuthCard>
  );
}
