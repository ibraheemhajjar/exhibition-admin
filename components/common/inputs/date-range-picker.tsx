'use client';

import { Label } from '@/components/ui/label';
import { DateInput } from './date-input';

interface DateRangePickerProps {
  fromDate?: Date;
  toDate?: Date;
  onFromDateChange: (date: Date | undefined) => void;
  onToDateChange: (date: Date | undefined) => void;
  disabled?: boolean;
}

export function DateRangePicker({
  fromDate,
  toDate,
  onFromDateChange,
  onToDateChange,
  disabled,
}: DateRangePickerProps) {
  return (
    <div className="flex w-full gap-4 items-center justify-between">
      <div className="flex flex-col gap-2.5 flex-1">
        <Label className="text-sm sm:text-base font-medium text-neutral-950">
          من
        </Label>
        <DateInput
          value={fromDate}
          onChange={onFromDateChange}
          placeholder="dd/mm/yy"
          maxDate={toDate} // Can't select "from" date after "to" date
          disabled={disabled}
        />
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <Label className="text-sm sm:text-base font-medium text-neutral-950">
          إلى
        </Label>
        <DateInput
          value={toDate}
          onChange={onToDateChange}
          placeholder="dd/mm/yy"
          minDate={fromDate} // Can't select "to" date before "from" date
          disabled={disabled}
        />
      </div>
    </div>
  );
}
