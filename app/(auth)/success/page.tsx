'use client';

import { useRouter } from 'next/navigation';
import { Check } from 'lucide-react';
import { AuthCard } from '@/components/auth/auth-card';
import { AuthButton } from '@/components/common/buttons/auth-button';

export default function SuccessPage() {
  const router = useRouter();

  return (
    <AuthCard>
      <div className="flex flex-col items-center">
        {/* Success Icon */}
        <div className="mb-6 flex items-center justify-center">
          <Check className="size-25 text-neutral-950" strokeWidth={2} />
        </div>

        {/* Success Message */}
        <h1 className="mb-6 text-center text-[32px] font-bold text-neutral-950">
          تم تغيير كلمة المرور بنجاح
        </h1>

        {/* Button */}
        <AuthButton onClick={() => router.push('/login')}>
          تسجيل الدخول
        </AuthButton>
      </div>
    </AuthCard>
  );
}
