import { cn } from '@/lib/utils';

interface PageHeadingProps {
  title?: string;
  description?: string;
  className?: string;
}

export function PageHeading({
  title,
  description,
  className,
}: PageHeadingProps) {
  if (!title && !description) return null;

  return (
    <div
      className={cn(
        'flex flex-col w-full items-start gap-1 sm:gap-2.5',
        className
      )}
    >
      {title && (
        <h1 className="text-2xl sm:text-[32px] font-semibold leading-10.25 text-neutral-950">
          {title}
        </h1>
      )}
      {description && (
        <p className="text-sm sm:text-base font-normal text-neutral-600">
          {description}
        </p>
      )}
    </div>
  );
}
