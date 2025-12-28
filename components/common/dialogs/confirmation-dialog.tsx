'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { PrimaryButton } from '@/components/common/buttons/primary-button';
import { SecondaryButton } from '@/components/common/buttons/secondary-button';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/icons/sprite';

interface ConfirmationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  confirmText: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel?: () => void;
  variant?: 'warning' | 'danger' | 'info';
  isLoading?: boolean;
}

export function ConfirmationDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  variant = 'warning',
  isLoading = false,
}: ConfirmationDialogProps) {
  const handleConfirm = () => {
    onConfirm();
    if (!isLoading) {
      onOpenChange(false);
    }
  };

  const handleCancel = () => {
    onCancel?.();
    onOpenChange(false);
  };

  const iconColors = {
    warning: 'text-warning-500',
    danger: 'text-error-500',
    info: 'text-primary-500',
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="max-w-90! sm:max-w-140! md:max-w-180! lg:max-w-200! rounded-2xl p-6 sm:p-10 border-0 shadow-sm gap-6 sm:gap-10"
      >
        <DialogHeader className="flex flex-col items-center text-center gap-4 sm:gap-8">
          <Icon
            id="warning"
            className={cn('size-24 sm:size-37.5', iconColors[variant])}
          />
          <DialogTitle className="text-lg sm:text-2xl font-medium text-neutral-950 text-center">
            {title}
          </DialogTitle>
          {description && (
            <DialogDescription className="text-base text-neutral-600">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>

        <div className={cn('flex flex-col-reverse sm:flex-row gap-4')}>
          <SecondaryButton onClick={handleConfirm} isLoading={isLoading}>
            {confirmText}
          </SecondaryButton>
          {cancelText && (
            <PrimaryButton onClick={handleCancel}>{cancelText}</PrimaryButton>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
