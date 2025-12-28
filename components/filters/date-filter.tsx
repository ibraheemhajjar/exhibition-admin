'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { DateRangePicker } from '@/components/common/inputs/date-range-picker';

interface DateFilterProps {
  title?: string;
  onChange: (fromDate?: string, toDate?: string) => void;
}

export function DateFilter({ title = 'التاريخ', onChange }: DateFilterProps) {
  const [open, setOpen] = useState(false);
  const [fromDate, setFromDate] = useState<Date>();
  const [toDate, setToDate] = useState<Date>();

  const handleDateChange = () => {
    // Only trigger when BOTH dates are selected
    if (fromDate && toDate) {
      onChange(
        fromDate.toISOString().split('T')[0],
        toDate.toISOString().split('T')[0]
      );
      setOpen(false);
    }
  };

  const triggerLabel =
    fromDate && toDate
      ? `${toDate.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' })} - ${fromDate.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' })}`
      : title;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-1.25 px-2.75 py-1.5 bg-white rounded-full text-sm text-neutral-950 hover:text-neutral-700 transition-colors hover:cursor-pointer"
        >
          <span className="text-start">{triggerLabel}</span>
          <ChevronDown className={`size-5 ${open ? 'rotate-180' : ''}`} />
        </button>
      </PopoverTrigger>

      <PopoverContent
        className="w-80 sm:w-100 p-4 rounded-lg border-none shadow-sm"
        align="end"
      >
        <div className="flex flex-col gap-4">
          {/* Title */}
          <h3 className="text-sm sm:text-base font-medium text-neutral-950">
            {title}
          </h3>

          <Separator className="text-zinc-300" />

          {/* Date Range Picker */}
          <DateRangePicker
            fromDate={fromDate}
            toDate={toDate}
            onFromDateChange={(date) => {
              setFromDate(date);
              if (date && toDate) handleDateChange();
            }}
            onToDateChange={(date) => {
              setToDate(date);
              if (fromDate && date) handleDateChange();
            }}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
