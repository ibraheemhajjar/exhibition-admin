'use client';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

interface SelectOption {
  label: string;
  value: string;
}

interface FormSelectProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label?: string;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
}

export function FormSelect<T extends FieldValues>({
  form,
  name,
  label,
  options,
  placeholder = 'الرجاء الاختيار',
  required = false,
}: FormSelectProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className="gap-2.5">
          {label && (
            <FormLabel className="text-base font-medium text-neutral-950!">
              {label}
              {required && <span className="text-error-500">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <Select
              value={field.value || undefined}
              onValueChange={field.onChange}
            >
              <SelectTrigger
                dir="rtl"
                className={cn(
                  'w-full rounded-2xl border-0 bg-neutral-50 p-4 h-fit!',
                  'text-base! text-neutral-950 placeholder:text-neutral-400',
                  'focus-visible:ring focus-visible:ring-neutral-700',
                  'outline-none',
                  'disabled:cursor-not-allowed disabled:opacity-50',
                  'shadow-none',
                  fieldState.error && 'ring ring-error-500!'
                )}
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent
                className="min-w-100 max-w-fit p-4 rounded-lg border-none shadow-sm"
                align="end"
                side="bottom"
              >
                <p
                  className="text-base font-normal text-start text-neutral-950 mb-2"
                  dir="rtl"
                >
                  {label}
                </p>
                {options.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="text-base hover:cursor-pointer justify-center"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage className="text-sm text-error-500" />
        </FormItem>
      )}
    />
  );
}
