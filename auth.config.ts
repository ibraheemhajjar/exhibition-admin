import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/');
      const isOnAuth =
        nextUrl.pathname.startsWith('/login') ||
        nextUrl.pathname.startsWith('/forgot-password') ||
        nextUrl.pathname.startsWith('/verify-otp') ||
        nextUrl.pathname.startsWith('/reset-password') ||
        nextUrl.pathname.startsWith('/success');

      if (isOnDashboard && !isOnAuth) {
        if (isLoggedIn) return true;
        return false; // Redirect to login
      } else if (isLoggedIn && isOnAuth) {
        return Response.redirect(new URL('/', nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
