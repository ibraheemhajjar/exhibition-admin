'use client';

import { cn } from '@/lib/utils';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

interface FormInputProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  direction?: 'ltr' | 'rtl';
  className?: string;
}

export function FormInput<T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  type = 'text',
  disabled = false,
  required = false,
  direction = 'rtl',
  className,
}: FormInputProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className="w-full gap-1">
          {label && (
            <FormLabel className="text-base font-medium text-neutral-950!">
              {label}
              {required && <span className="text-error-500">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <Input
              {...field}
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              dir={direction}
              className={cn(
                'rounded-2xl border-0 bg-neutral-50 p-4 h-fit',
                'text-base! text-neutral-950 placeholder:text-neutral-400',
                'focus-visible:ring focus-visible:ring-neutral-700',
                'outline-none',
                'disabled:cursor-not-allowed disabled:opacity-50',
                'shadow-none',
                fieldState.error && 'ring ring-error-500!',
                className
              )}
            />
          </FormControl>
          <FormMessage className="text-sm text-error-500" />
        </FormItem>
      )}
    />
  );
}
