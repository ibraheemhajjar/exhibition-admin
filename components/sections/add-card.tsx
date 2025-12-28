import Link from 'next/link';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AddCardProps {
  label: string;
  href: string;
  className?: string;
}

export function AddCard({ label, href, className }: AddCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'flex flex-col items-center justify-center gap-2.5 rounded-2xl bg-neutral-100 p-2.5 transition-colors hover:bg-neutral-100/75 min-h-40',
        className
      )}
    >
      <div className="flex items-center justify-center size-12.5 rounded-full bg-neutral-950">
        <Plus className="size-8 stroke-[2.5] text-neutral-100" />
      </div>
      <p className="text-lg font-medium text-neutral-950">{label}</p>
    </Link>
  );
}
