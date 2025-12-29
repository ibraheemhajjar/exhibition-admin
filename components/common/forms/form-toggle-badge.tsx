'use client';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Badge } from '@/components/ui/badge';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

interface BadgeOption {
  label: string;
  value: string;
}

interface FormToggleBadgeProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label?: string;
  options: BadgeOption[];
  required?: boolean;
}

export function FormToggleBadge<T extends FieldValues>({
  form,
  name,
  label,
  options,
  required = false,
}: FormToggleBadgeProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full gap-2.5">
          {label && (
            <FormLabel className="text-base font-medium text-neutral-950!">
              {label}
              {required && <span className="text-error-500">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <div className="flex flex-wrap gap-3">
              {options.map((option) => {
                const isSelected = field.value?.includes(option.value) || false;

                return (
                  <Badge
                    key={option.value}
                    variant={isSelected ? 'default' : 'outline'}
                    onClick={() => {
                      const currentValues = field.value || [];
                      if (isSelected) {
                        field.onChange(
                          currentValues.filter(
                            (v: string) => v !== option.value
                          )
                        );
                      } else {
                        field.onChange([...currentValues, option.value]);
                      }
                    }}
                    className={`
                      cursor-pointer px-4 py-1.5 text-base font-normal rounded-full transition-colors
                      ${
                        isSelected
                          ? 'bg-neutral-950 text-white hover:bg-neutral-800'
                          : 'bg-white text-neutral-700 border-warning-400 hover:bg-neutral-100'
                      }
                    `}
                  >
                    {option.label}
                  </Badge>
                );
              })}
            </div>
          </FormControl>
          <FormMessage className="text-sm text-error-500" />
        </FormItem>
      )}
    />
  );
}
