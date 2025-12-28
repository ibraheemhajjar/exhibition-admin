'use client';

import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { Icon } from '@/components/icons/sprite';
import Image from 'next/image';
import { ConfirmationDialog } from '@/components/common/dialogs/confirmation-dialog';

export function Header() {
  const { data: session } = useSession();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const currentDate = new Date().toLocaleDateString('ar-EG', {
    weekday: 'long',
  });
  const numericDate = new Date()
    .toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
    .replace(/\//g, '.');

  const handleLogout = () => {
    signOut({ callbackUrl: '/login' });
  };

  return (
    <>
      <header className="flex items-center justify-between gap-5 bg-white px-4 sm:px-5 py-4 sm:py-6 sticky top-0 z-10 shadow-xs">
        {/* Date */}
        <div className="text-sm sm:text-base font-normal text-neutral-950">
          {currentDate} {numericDate}
        </div>

        {/* User Info */}
        <div className="flex items-center gap-2 sm:gap-6">
          <button
            onClick={() => setShowLogoutDialog(true)}
            className="size-9 sm:size-11.5 rounded-full bg-error-100 hover:bg-error-100/75 text-neutral-950 hover:cursor-pointer transition-colors"
            title="تسجيل الخروج"
          >
            <Icon id="door" className="size-full p-1.5 sm:p-2.5" />
          </button>

          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="relative size-9 sm:size-11.5">
              <Image
                className="rounded-full shrink-0"
                src={
                  session?.user?.image ||
                  '/images/Profile_avatar_placeholder.png'
                }
                alt="User Avatar"
                fill
              />
              <div className="absolute -bottom-1 end-0.5 bg-neutral-100 text-neutral-950 size-5.5 flex items-center justify-center rounded-full hover:cursor-pointer">
                <Icon id="edit" className="" size={12} />
              </div>
            </div>
            <div className="text-start">
              <h2 className="text-sm sm:text-base font-medium text-neutral-950">
                {session?.user?.name}
              </h2>
              <p className="text-xs font-medium text-neutral-500">
                {session?.user?.email}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Logout Confirmation Dialog */}
      <ConfirmationDialog
        open={showLogoutDialog}
        onOpenChange={setShowLogoutDialog}
        title="هل أنت متأكد من رغبتك في تسجيل الخروج من النظام؟"
        confirmText="نعم، تسجيل الخروج"
        cancelText="إلغاء"
        onConfirm={handleLogout}
        variant="warning"
      />
    </>
  );
}
