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

export interface StatusOption {
  value: string;
  label: string;
}

interface StatusFilterProps {
  options: StatusOption[];
  defaultValue?: string;
  title?: string;
  onChange: (value: string) => void;
}

export function StatusFilter({
  options,
  defaultValue,
  title = 'الحالة',
  onChange,
}: StatusFilterProps) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>(
    defaultValue || options[0]?.value || ''
  );

  const handleChange = (value: string) => {
    setSelectedValue(value);
    onChange(value);
    setOpen(false);
  };

  const selectedLabel =
    options.find((opt) => opt.value === selectedValue)?.label || title;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-1.25 px-2.75 py-1.5 bg-white rounded-full text-sm text-neutral-950 hover:text-neutral-700 transition-colors hover:cursor-pointer"
        >
          <span className="text-start">{selectedLabel}</span>
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

          {/* Radio Options */}
          <RadioGroup
            value={selectedValue}
            onValueChange={handleChange}
            dir="rtl"
          >
            <div className="flex flex-col gap-7">
              {options.map((option) => (
                <div key={option.value} className="flex items-center gap-2.5">
                  <RadioGroupItem
                    value={option.value}
                    id={option.value}
                    className="size-5 sm:size-6 border border-neutral-600 cursor-pointer"
                  />
                  <Label
                    htmlFor={option.value}
                    className="text-sm sm:text-base text-neutral-950 cursor-pointer"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
      </PopoverContent>
    </Popover>
  );
}
