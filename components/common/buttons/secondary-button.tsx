import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const SecondaryButton = forwardRef<
  HTMLButtonElement,
  SecondaryButtonProps
>(({ className, children, isLoading, disabled, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      disabled={disabled || isLoading}
      className={cn(
        'w-full h-fit rounded-full shrink',
        'border border-neutral-950 bg-transparent text-neutral-950',
        'hover:bg-neutral-100 hover:cursor-pointer',
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

SecondaryButton.displayName = 'SecondaryButton';
