import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface DestructiveButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const DestructiveButton = forwardRef<
  HTMLButtonElement,
  DestructiveButtonProps
>(({ className, children, isLoading, disabled, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      disabled={disabled || isLoading}
      className={cn(
        'w-full h-fit rounded-full shrink',
        'bg-error-100 text-error-500',
        'border border-error-100',
        'hover:bg-error-100/75 hover:cursor-pointer',
        'text-base sm:text-[18px] font-semibold',
        'px-2.75 py-4',
        className
      )}
      {...props}
    >
      {isLoading && <Loader2 className="ms-2 size-5 animate-spin" />}
      {children}
    </Button>
  );
});

DestructiveButton.displayName = 'DestructiveButton';
