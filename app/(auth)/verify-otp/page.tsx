'use client';

import { Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'sonner';
import { ArrowRight, Loader2 } from 'lucide-react';
import { AuthCard } from '@/components/auth/auth-card';
import { AuthButton } from '@/components/common/buttons/auth-button';
import { FormOtpInput } from '@/components/common/forms/form-otp-input';
import { Form } from '@/components/ui/form';
import { verifyOtpSchema, type VerifyOtpFormData } from '@/lib/schemas/auth';
import { authApi } from '@/lib/api/auth';
import { useCountdown } from '@/hooks/use-countdown';

function VerifyOtpContent() {
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';
  const { isExpired, reset, formattedTime } = useCountdown(60);

  const form = useForm<VerifyOtpFormData>({
    resolver: zodResolver(verifyOtpSchema),
    defaultValues: {
      otp: '',
    },
  });

  const handleResend = async () => {
    if (!isExpired) return;

    setResendLoading(true);
    try {
      /* ===== PRODUCTION CODE (Correct Implementation) =====
    const result = await authApi.validateEmail({ email });

    if (result) {
      toast.success('تم إرسال رمز جديد');
      reset();
      form.reset();
    }
    ===================================================== */

      // TESTING CODE: Always succeed regardless of response
      await authApi.validateEmail({ email }).catch(() => {});

      toast.success('تم إرسال رمز جديد');
      reset();
      form.reset();
    } catch (error) {
      console.error('Resend OTP error:', error);
      toast.error('حدث خطأ، حاول مرة أخرى');
    } finally {
      setResendLoading(false);
    }
  };

  const onSubmit = async (data: VerifyOtpFormData) => {
    setLoading(true);
    try {
      const result = await authApi.verifyOtp({ email, otp: data.otp });

      if (result) {
        toast.success('تم التحقق بنجاح');
        router.push(`/reset-password?email=${encodeURIComponent(email)}`);
      }
    } catch (error) {
      console.error('Verify OTP error:', error);
      toast.error('رمز التحقق غير صحيح');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard>
      {/* Back Button */}
      <button
        onClick={() => router.push('/forgot-password')}
        className="text-neutral-950 hover:bg-neutral-100 hover:cursor-pointer p-1 rounded-md mb-5"
      >
        <ArrowRight className="size-6" />
      </button>

      <div className="flex flex-col items-center">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-[32px] font-bold text-neutral-950">
            أدخل الرمز
          </h1>
          <p className="mx-2 text-base font-medium text-neutral-500">
            يرجى إدخال الرمز المكون من 6 أرقام الذي أرسلناه إلى بريدك الإلكتروني{' '}
            {email}
          </p>
        </div>

        <div className="mb-14 text-center">
          <p className="mb-1 text-base font-normal text-neutral-950">
            يمكنك إرسال رمز جديد بعد: {formattedTime} ثانية
          </p>
          <button
            onClick={handleResend}
            disabled={!isExpired || resendLoading}
            className={`text-base font-medium flex items-center justify-center mx-auto gap-2 ${
              isExpired && !resendLoading
                ? 'text-neutral-500 hover:cursor-pointer hover:text-neutral-700'
                : 'text-neutral-400'
            }`}
          >
            {resendLoading && <Loader2 className="size-4 animate-spin" />}
            إرسال رمز جديد
          </button>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="mb-14">
              <FormOtpInput form={form} name="otp" required />
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

export default function VerifyOtpPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyOtpContent />
    </Suspense>
  );
}
