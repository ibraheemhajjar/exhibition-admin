'use client';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

interface RadioOption {
  label: string;
  value: string | boolean | number;
}

interface FormRadioGroupProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label?: string;
  options: RadioOption[];
  required?: boolean;
}

export function FormRadioGroup<T extends FieldValues>({
  form,
  name,
  label,
  options,
  required = false,
}: FormRadioGroupProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full gap-2.5" dir="rtl">
          {label && (
            <FormLabel className="text-base font-medium text-neutral-950!">
              {label}
              {required && <span className="text-error-500">*</span>}
            </FormLabel>
          )}
          <FormControl className="">
            <RadioGroup
              value={String(field.value)} // Convert to string for UI
              onValueChange={(stringValue) => {
                // Find original value from options
                const option = options.find(
                  (opt) => String(opt.value) === stringValue
                );
                if (option) {
                  field.onChange(option.value); // Pass original type (boolean/string/number)
                }
              }}
              className="flex items-center gap-6"
            >
              {options.map((option) => (
                <div
                  key={String(option.value)}
                  className="flex items-center gap-2 grow"
                  dir="rtl"
                >
                  <RadioGroupItem
                    value={String(option.value)} // Convert to string for RadioGroup
                    id={`${name}-${String(option.value)}`}
                    dir="ltr"
                    className="size-5 border-neutral-500 hover:cursor-pointer"
                  />
                  <Label
                    htmlFor={`${name}-${String(option.value)}`}
                    className="text-base text-neutral-950 font-medium cursor-pointer"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage className="text-sm text-error-500" />
        </FormItem>
      )}
    />
  );
}
