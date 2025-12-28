'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { NAVIGATION_ITEMS } from '@/lib/constants/navigation';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-15 sm:w-18.75 bg-neutral-100 flex flex-col items-center px-3 sm:px-4.5 py-5">
      {/* Logo */}
      <div className="mb-10 w-9.75 h-17 relative">
        <Image
          src="/images/Sidebar_Logo_Color_AR.png"
          alt="Logo"
          fill
          className="absolute inset-0 object-contain"
        />
      </div>

      {/* Navigation Icons */}
      <nav className="flex flex-col items-center gap-5.5 p-1.25 bg-neutral-50 rounded-full overflow-y-auto mb-4">
        {NAVIGATION_ITEMS.navigationButtons.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'w-full flex items-center justify-center p-1.25 rounded-full transition-colors',
                isActive
                  ? 'bg-primary-500 text-neutral-50 '
                  : 'text-neutral-950 hover:bg-neutral-200'
              )}
              title={item.name}
            >
              <Icon className="size-full" />
            </Link>
          );
        })}
      </nav>

      {/* Theme Toggle (Bottom) */}
      <nav className="flex flex-col items-center gap-5.5 p-1.25 bg-neutral-50 rounded-full mt-auto">
        <button
          className="w-full flex items-center justify-center p-1.25 rounded-full text-neutral-950 hover:bg-neutral-200 transition-colors hover:cursor-pointer"
          title="تبديل السمة"
        >
          <NAVIGATION_ITEMS.themeToggle.icon className="size-full" />
        </button>
      </nav>
    </aside>
  );
}
