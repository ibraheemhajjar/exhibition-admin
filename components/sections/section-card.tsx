import Link from 'next/link';
import { cn } from '@/lib/utils';

interface SectionCardProps {
  id: string;
  name: string;
  isAvailable: boolean;
  className?: string;
}

export function SectionCard({
  id,
  name,
  isAvailable,
  className,
}: SectionCardProps) {
  return (
    <Link
      href={`/sections/${id}`}
      className={cn(
        'relative flex items-center justify-center rounded-2xl bg-neutral-100 p-2.5 transition-colors hover:bg-neutral-100/75 min-h-40',
        className
      )}
    >
      {/* Status Badge */}
      <span
        className={cn(
          'absolute top-2.5 left-2.5 rounded-full px-4 py-1 text-sm font-semibold',
          isAvailable
            ? 'bg-success-100 text-success-500'
            : 'bg-error-100 text-error-500'
        )}
      >
        {isAvailable ? 'متاح' : 'محجوز'}
      </span>

      {/* Section Name */}
      <h3 className="text-[22px] font-medium text-neutral-950">{name}</h3>
    </Link>
  );
}
