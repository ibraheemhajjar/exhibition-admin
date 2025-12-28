import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ className, children, isLoading, disabled, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          'w-full h-fit rounded-full shrink',
          'bg-primary-500 text-white',
          'border border-primary-500',
          'hover:bg-primary-500/75 hover:cursor-pointer',
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
  }
);

PrimaryButton.displayName = 'PrimaryButton';
