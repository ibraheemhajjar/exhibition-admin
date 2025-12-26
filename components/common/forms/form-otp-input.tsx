'use client';

import { cn } from '@/lib/utils';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

interface FormOtpInputProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label?: string;
  required?: boolean;
}

export function FormOtpInput<T extends FieldValues>({
  form,
  name,
  label,
  required = false,
}: FormOtpInputProps<T>) {
  const otpBoxClass =
    'rounded-md sm:rounded-2xl! w-10 h-10 sm:w-16 sm:h-15  border-0! bg-neutral-200! focus-visible:ring! focus-visible:ring-neutral-700 text-xl sm:text-3xl font-medium';
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className="w-full space-y-2.5 flex flex-col" dir="ltr">
          {label && (
            <FormLabel className="text-base font-medium text-neutral-950">
              {label}
              {required && <span className="text-error-500 ms-1">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <InputOTP
              maxLength={6}
              value={field.value}
              onChange={field.onChange}
              className={cn(fieldState.error && 'ring ring-error-500!')}
            >
              <InputOTPGroup className="justify-between grow">
                <InputOTPSlot index={0} className={otpBoxClass} />
                <InputOTPSlot index={1} className={otpBoxClass} />
                <InputOTPSlot index={2} className={otpBoxClass} />
              </InputOTPGroup>
              -
              <InputOTPGroup className="justify-between grow">
                <InputOTPSlot index={3} className={otpBoxClass} />
                <InputOTPSlot index={4} className={otpBoxClass} />
                <InputOTPSlot index={5} className={otpBoxClass} />
              </InputOTPGroup>
            </InputOTP>
          </FormControl>
          <FormMessage className="text-sm text-error-500" dir="rtl" />
        </FormItem>
      )}
    />
  );
}
