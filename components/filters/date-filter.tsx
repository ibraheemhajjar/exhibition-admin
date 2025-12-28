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
        fromDate.toISOString().split('T')[0], // YYYY-MM-DD
        toDate.toISOString().split('T')[0]
      );
    }
  };

  const triggerLabel =
    fromDate && toDate
      ? `من ${fromDate.toLocaleDateString('en-GB')} إلى ${toDate.toLocaleDateString('en-GB')}`
      : title;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl text-base font-medium text-neutral-950 hover:bg-neutral-50 transition-colors"
        >
          <span>{triggerLabel}</span>
          <ChevronDown className="size-5 text-neutral-600" />
        </button>
      </PopoverTrigger>

      <PopoverContent className="w-80 p-4" align="end">
        <div className="flex flex-col gap-4">
          {/* Title */}
          <h3 className="text-lg font-semibold text-neutral-950">{title}</h3>

          <Separator />

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
