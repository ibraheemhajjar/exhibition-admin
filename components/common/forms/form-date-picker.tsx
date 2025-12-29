'use client';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { DateInput } from '@/components/common/inputs/date-input';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

interface FormDatePickerProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  minDate?: Date;
  maxDate?: Date;
  inputClassName?: string;
}

export function FormDatePicker<T extends FieldValues>({
  form,
  name,
  label,
  placeholder = 'dd/mm/yy',
  required = false,
  disabled = false,
  minDate,
  maxDate,
  inputClassName,
}: FormDatePickerProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full gap-1">
          {label && (
            <FormLabel className="text-base font-medium text-neutral-950!">
              {label}
              {required && <span className="text-error-500">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <DateInput
              value={field.value}
              onChange={field.onChange}
              placeholder={placeholder}
              minDate={minDate}
              maxDate={maxDate}
              disabled={disabled}
              className={inputClassName}
            />
          </FormControl>
          <FormMessage className="text-sm text-error-500" />
        </FormItem>
      )}
    />
  );
}
