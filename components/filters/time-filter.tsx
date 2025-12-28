'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { DateRangePicker } from '@/components/common/inputs/date-range-picker';
import { TimeFilter } from '@/types/dashboard';

interface TimeFilterProps {
  defaultValue?: TimeFilter;
  onChange: (filter: {
    timeFilter: TimeFilter;
    fromDate?: string;
    toDate?: string;
  }) => void;
}

const filterLabels: Record<TimeFilter, string> = {
  [TimeFilter.TODAY]: 'اليوم',
  [TimeFilter.THIS_WEEK]: 'هذا الأسبوع',
  [TimeFilter.THIS_MONTH]: 'هذا الشهر',
  [TimeFilter.DURATION]: 'تاريخ مخصص',
};

export function TimeFilterComponent({
  defaultValue = TimeFilter.THIS_MONTH,
  onChange,
}: TimeFilterProps) {
  const [open, setOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] =
    useState<TimeFilter>(defaultValue);
  const [fromDate, setFromDate] = useState<Date>();
  const [toDate, setToDate] = useState<Date>();

  const handleFilterChange = (value: string) => {
    const filter = value as TimeFilter;
    setSelectedFilter(filter);

    // Reset dates when selecting predefined filters
    if (filter !== TimeFilter.DURATION) {
      setFromDate(undefined);
      setToDate(undefined);
      onChange({ timeFilter: filter });
      setOpen(false);
    }
  };

  const handleDateChange = (newFromDate?: Date, newToDate?: Date) => {
    const from = newFromDate || fromDate;
    const to = newToDate || toDate;

    // Only trigger when BOTH dates are selected
    if (from && to) {
      onChange({
        timeFilter: TimeFilter.DURATION,
        fromDate: from.toISOString().split('T')[0], // YYYY-MM-DD
        toDate: to.toISOString().split('T')[0],
      });
    }
  };

  const triggerLabel =
    selectedFilter === TimeFilter.DURATION && fromDate && toDate
      ? `${toDate.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' })} - ${fromDate.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' })}`
      : filterLabels[selectedFilter];

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
            فلتر
          </h3>

          <Separator className="text-zinc-300" />

          {/* Radio Options */}
          <RadioGroup
            value={selectedFilter}
            onValueChange={handleFilterChange}
            dir="rtl"
          >
            <div className="flex flex-col gap-7">
              <div className="flex items-center gap-2.5">
                <RadioGroupItem
                  value={TimeFilter.TODAY}
                  id="today"
                  className="size-5 sm:size-6 border border-neutral-600 cursor-pointer"
                />
                <Label
                  htmlFor="today"
                  className="text-sm sm:text-base text-neutral-950 cursor-pointer"
                >
                  اليوم
                </Label>
              </div>

              <div className="flex items-center gap-2.5">
                <RadioGroupItem
                  value={TimeFilter.THIS_WEEK}
                  id="week"
                  className="size-5 sm:size-6 border border-neutral-600 cursor-pointer"
                />
                <Label
                  htmlFor="week"
                  className="text-sm sm:text-base text-neutral-950 cursor-pointer"
                >
                  هذا الأسبوع
                </Label>
              </div>

              <div className="flex items-center gap-2.5">
                <RadioGroupItem
                  value={TimeFilter.THIS_MONTH}
                  id="month"
                  className="size-5 sm:size-6 border border-neutral-600 cursor-pointer"
                />
                <Label
                  htmlFor="month"
                  className="text-sm sm:text-base text-neutral-950 cursor-pointer"
                >
                  هذا الشهر
                </Label>
              </div>

              <div className="flex items-center gap-2.5 mb-2">
                <RadioGroupItem
                  value={TimeFilter.DURATION}
                  id="custom"
                  className="size-5 sm:size-6 border border-neutral-600 cursor-pointer"
                />
                <Label
                  htmlFor="custom"
                  className="text-sm sm:text-base text-neutral-950 cursor-pointer"
                >
                  تاريخ مخصص
                </Label>
              </div>
            </div>
          </RadioGroup>

          {/* Date Range Picker - Show only when DURATION selected */}
          {selectedFilter === TimeFilter.DURATION && (
            <DateRangePicker
              fromDate={fromDate}
              toDate={toDate}
              onFromDateChange={(date) => {
                setFromDate(date);
                handleDateChange(date, toDate); // Pass new date directly
              }}
              onToDateChange={(date) => {
                setToDate(date);
                handleDateChange(fromDate, date); // Pass new date directly
              }}
            />
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
