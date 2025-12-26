'use client';

import { Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'sonner';
import { ArrowRight } from 'lucide-react';
import { AuthCard } from '@/components/auth/auth-card';
import { AuthButton } from '@/components/common/buttons/auth-button';
import { FormPasswordInput } from '@/components/common/forms/form-password-input';
import { Form } from '@/components/ui/form';
import {
  resetPasswordSchema,
  type ResetPasswordFormData,
} from '@/lib/schemas/auth';
import { authApi } from '@/lib/api/auth';

function ResetPasswordContent() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';

  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = async (data: ResetPasswordFormData) => {
    setLoading(true);
    try {
      const result = await authApi.resetPassword({
        identifier: email,
        password: data.password,
      });

      if (result) {
        toast.success('تم تغيير كلمة المرور بنجاح');
        router.push('/success');
      }
    } catch (error) {
      console.error('Reset password error:', error);
      toast.error('حدث خطأ، حاول مرة أخرى');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard>
      {/* Back Button */}
      <button
        onClick={() =>
          router.push(`/verify-otp?email=${encodeURIComponent(email)}`)
        }
        className="text-neutral-950 hover:bg-neutral-100 hover:cursor-pointer p-1 rounded-md mb-5"
      >
        <ArrowRight className="size-6" />
      </button>

      <div className="flex flex-col items-center">
        {/* Title */}
        <div className="mb-10 text-center">
          <h1 className="text-[32px] font-bold text-neutral-950">
            استرجاع كلمة المرور
          </h1>
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="mb-10 space-y-4">
              <FormPasswordInput
                form={form}
                name="password"
                label="أدخل كلمة مرور جديدة"
                placeholder="Password"
                className="bg-neutral-200"
                required
              />

              <FormPasswordInput
                form={form}
                name="confirmPassword"
                label="تأكيد كلمة المرور الجديدة"
                placeholder="Password"
                className="bg-neutral-200"
                required
              />
            </div>

            <AuthButton type="submit" loading={loading}>
              تأكيد
            </AuthButton>
          </form>
        </Form>
      </div>
    </AuthCard>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}
