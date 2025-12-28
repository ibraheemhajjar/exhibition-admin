'use client';

import { useState } from 'react';
import { CalendarDays } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface DateInputProps {
  value?: Date;
  onChange: (date: Date | undefined) => void;
  placeholder?: string;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  className?: string;
}

export function DateInput({
  value,
  onChange,
  placeholder = 'dd/mm/yy',
  minDate,
  maxDate,
  disabled,
  className,
}: DateInputProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          disabled={disabled}
          className={cn(
            'flex items-center w-full! p-4 gap-2.5 rounded-2xl bg-neutral-200 text-neutral-950 text-sm sm:text-base font-normal cursor-pointer',
            !value && 'text-neutral-500',
            disabled && 'opacity-50 cursor-not-allowed',
            className
          )}
        >
          <CalendarDays className="size-4 sm:size-5 text-neutral-700 stroke-[1.5]" />
          <span className="text-neutral-700" dir="ltr">
            {value ? format(value, 'dd/MM/yy') : placeholder}
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-0 border-0 shadow-lg rounded-3xl"
        align="start"
      >
        <Calendar
          mode="single"
          selected={value}
          defaultMonth={value}
          onSelect={(date) => {
            onChange(date);
            setOpen(false);
          }}
          dir="ltr"
          showOutsideDays={false}
          disabled={(date) => {
            if (minDate && date < minDate) return true;
            if (maxDate && date > maxDate) return true;
            return false;
          }}
          autoFocus
          className="rounded-3xl p-6"
          classNames={{
            caption_label: 'text-lg font-semibold',
            weekday:
              'font-semibold flex-1 font-normal text-[0.8rem] select-none text-neutral-600',
            button_previous:
              'border-2 border-neutral-300 rounded-lg p-1 hover:cursor-pointer',
            button_next:
              'border-2 border-neutral-300 rounded-lg p-1 hover:cursor-pointer',
            day_button: 'font-semibold! hover:cursor-pointer',
            disabled: 'text-neutral-500',
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
