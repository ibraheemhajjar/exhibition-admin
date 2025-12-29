'use client';

import { FormField, FormItem, FormLabel } from '@/components/ui/form';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

interface FormImageUploadProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label?: string;
}

export function FormImageUpload<T extends FieldValues>({
  form,
  name,
  label,
}: FormImageUploadProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem className="w-full gap-2.5 p-4 rounded-2xl bg-neutral-100">
          {label && (
            <FormLabel className="text-base font-medium text-neutral-950!">
              {label}
            </FormLabel>
          )}
          <div className="border-2 border-dashed border-primary-500 rounded-2xl p-8 flex flex-col items-center justify-center gap-2  min-h-50">
            <p className="text-xs text-primary-500 font-medium text-center">
              انقر لرفع صورة الغلاف
            </p>
          </div>
        </FormItem>
      )}
    />
  );
}
