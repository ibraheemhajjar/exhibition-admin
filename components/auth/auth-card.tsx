import { cn } from '@/lib/utils';

interface AuthCardProps {
  children: React.ReactNode;
  className?: string;
}

export function AuthCard({ children, className }: AuthCardProps) {
  return (
    <div
      className={cn(
        'w-full max-w-125 max-h-[85vh]',
        'h-fit overflow-y-auto',
        'rounded-3xl bg-neutral-50',
        'p-6',
        className
      )}
    >
      {children}
    </div>
  );
}
