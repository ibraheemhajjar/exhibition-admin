'use client';

import { useState } from 'react';
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
import { Eye, EyeOff } from 'lucide-react';

interface FormPasswordInputProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

export function FormPasswordInput<T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  disabled = false,
  required = false,
  className,
}: FormPasswordInputProps<T>) {
  const [showPassword, setShowPassword] = useState(false);

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
            <div className="relative">
              <Input
                {...field}
                type={showPassword ? 'text' : 'password'}
                placeholder={placeholder}
                disabled={disabled}
                dir="ltr"
                className={cn(
                  'rounded-2xl border-0 bg-neutral-50 p-4 pe-12 h-fit',
                  'text-base! text-neutral-950 placeholder:text-neutral-400',
                  'focus-visible:ring focus-visible:ring-neutral-700',
                  'outline-none',
                  'disabled:cursor-not-allowed disabled:opacity-50',
                  'shadow-none',
                  fieldState.error && 'ring ring-error-500!',
                  className
                )}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute start-4 top-1/2 -translate-y-1/2 text-neutral-950 hover:cursor-pointer"
                disabled={disabled}
              >
                {showPassword ? (
                  <EyeOff className="size-6" />
                ) : (
                  <Eye className="size-6" />
                )}
              </button>
            </div>
          </FormControl>
          <FormMessage className="text-sm text-error-500" />
        </FormItem>
      )}
    />
  );
}
