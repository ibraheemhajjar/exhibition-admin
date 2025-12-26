'use client';

import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface AuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const AuthButton = forwardRef<HTMLButtonElement, AuthButtonProps>(
  ({ children, loading, disabled, className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          'w-full h-fit rounded-full',
          'bg-neutral-950 text-neutral-50',
          'hover:bg-neutral-950/75 hover:cursor-pointer',
          'text-[18px] font-semibold',
          'px-2.75 py-4',
          className
        )}
        {...props}
      >
        {loading && <Loader2 className="ms-2 size-5 animate-spin" />}
        {children}
      </Button>
    );
  }
);

AuthButton.displayName = 'AuthButton';
