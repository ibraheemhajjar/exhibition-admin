'use client';

import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  debounceDelay?: number;
  disabled?: boolean;
  className?: string;
  inputClassName?: string;
}

export function SearchInput({
  value,
  onChange,
  placeholder = 'ابحث...',
  debounceDelay = 500,
  disabled,
  className,
  inputClassName,
}: SearchInputProps) {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(localValue);
    }, debounceDelay);

    return () => clearTimeout(timer);
  }, [localValue, debounceDelay, onChange]);

  return (
    <div className={cn('relative w-full', className)}>
      <Search className="absolute right-4 top-1/2 -translate-y-1/2 size-5 text-neutral-500" />
      <input
        type="text"
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={cn(
          'w-full rounded-full bg-neutral-100 px-4 py-2.75 pr-12 text-sm text-neutral-950 placeholder:text-neutral-500',
          'focus:outline-none focus:ring focus:ring-primary-500',
          'disabled:opacity-50',
          inputClassName
        )}
      />
    </div>
  );
}
