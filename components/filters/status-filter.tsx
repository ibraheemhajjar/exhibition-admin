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
    setOpen(false); // Close popover after selection
  };

  const selectedLabel =
    options.find((opt) => opt.value === selectedValue)?.label || title;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl text-base font-medium text-neutral-950 hover:bg-neutral-50 transition-colors"
        >
          <span>{selectedLabel}</span>
          <ChevronDown className="size-5 text-neutral-600" />
        </button>
      </PopoverTrigger>

      <PopoverContent className="w-64 p-4" align="end">
        <div className="flex flex-col gap-4">
          {/* Title */}
          <h3 className="text-lg font-semibold text-neutral-950">{title}</h3>

          <Separator />

          {/* Radio Options */}
          <RadioGroup value={selectedValue} onValueChange={handleChange}>
            <div className="flex flex-col gap-3">
              {options.map((option) => (
                <div key={option.value} className="flex items-center gap-3">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label
                    htmlFor={option.value}
                    className="text-base text-neutral-950 cursor-pointer"
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
