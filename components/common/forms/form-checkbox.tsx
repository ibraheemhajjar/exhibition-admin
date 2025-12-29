'use client';

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

interface FormCheckboxProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  required?: boolean;
}

export function FormCheckbox<T extends FieldValues>({
  form,
  name,
  label,
  required = false,
}: FormCheckboxProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex items-center gap-2">
          <FormControl>
            <Checkbox
              id={name}
              checked={field.value || false}
              onCheckedChange={field.onChange}
              className="rounded-full size-5 border-neutral-500"
            />
          </FormControl>
          <Label
            htmlFor={name}
            className="text-base text-neutral-950 font-normal cursor-pointer"
          >
            {label}
            {required && <span className="text-error-500">*</span>}
          </Label>
          <FormMessage className="text-sm text-error-500" />
        </FormItem>
      )}
    />
  );
}
