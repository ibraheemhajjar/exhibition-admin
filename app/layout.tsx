import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from '@/components/ui/sonner';
import { IconSprite } from '@/components/icons/sprite';
import { GraphQLProvider } from '@/lib/graphql/apollo-provider';

const expoArabic = localFont({
  src: [
    {
      path: '../public/fonts/expo-arabic/ExpoArabic-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/expo-arabic/ExpoArabic-Book.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/expo-arabic/ExpoArabic-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/expo-arabic/ExpoArabic-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/expo-arabic/ExpoArabic-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-expo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'نظام إدارة المعارض',
  description: 'نظام إدارة المعارض والفعاليات',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${expoArabic.variable} font-sans antialiased`}>
        <SessionProvider>
          <GraphQLProvider>
            <IconSprite />
            {children}
            <Toaster position="top-left" dir="rtl" />
          </GraphQLProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
