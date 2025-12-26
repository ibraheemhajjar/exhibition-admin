'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'sonner';
import { AuthCard } from '@/components/auth/auth-card';
import { AuthButton } from '@/components/common/buttons/auth-button';
import { FormInput } from '@/components/common/forms/form-input';
import { FormPasswordInput } from '@/components/common/forms/form-password-input';
import { Form } from '@/components/ui/form';
import { loginSchema, type LoginFormData } from '@/lib/schemas/auth';
import Image from 'next/image';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    try {
      const result = await signIn('credentials', {
        identifier: data.identifier,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        toast.error('فشل في تسجيل الدخول', {
          description:
            'يرجى التحقق من البريد الإلكتروني وكلمة المرور والمحاولة مرة أخرى',
        });
      } else if (result?.ok) {
        toast.success('تم تسجيل الدخول بنجاح');
        router.push('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('حدث خطأ', {
        description: 'حاول مرة أخرى',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard>
      <div className="flex flex-col items-center">
        {/* Logo */}
        <Image
          src="/images/Logo_Color_AR.png"
          alt="Logo"
          width={155}
          height={80}
          className="object-contain mb-6"
          priority
        />
        {/* Title & Description */}
        <div className="mb-10 text-center">
          <h1 className="text-[32px] font-bold text-neutral-950 mb-4">
            أهلاً بك من جديد
          </h1>
          <p className="text-base font-medium text-neutral-500 mx-2">
            سجل الدخول إلى حسابك باستخدام البريد الالكتروني الخاص بك وكلمة
            المرور.
          </p>
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="mb-10 space-y-4">
              <FormInput
                form={form}
                name="identifier"
                placeholder="Email Address"
                direction="ltr"
                className={'bg-neutral-200'}
                required
              />

              <FormPasswordInput
                form={form}
                name="password"
                placeholder="Password"
                className={'bg-neutral-200'}
                required
              />
            </div>

            <Link
              href="/forgot-password"
              className="block text-sm font-medium text-primary-500 hover:underline mb-4 text-center w-fit mx-auto"
            >
              نسيت كلمة السر؟
            </Link>

            <AuthButton type="submit" loading={loading}>
              تسجيل الدخول
            </AuthButton>
          </form>
        </Form>
      </div>
    </AuthCard>
  );
}
