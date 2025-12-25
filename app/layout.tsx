import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

const expoArabic = localFont({
  src: [
    {
      path: '../public/fonts/expo-arabic/Expo_Arabic_Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/expo-arabic/Expo_Arabic_Book.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/expo-arabic/Expo_Arabic_Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/expo-arabic/Expo_Arabic_Bold.ttf',
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
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
