import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  providers: [],
  pages: {
    signIn: '/sign-in',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/home');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (
        isLoggedIn &&
        (nextUrl.pathname === '/' ||
          nextUrl.pathname === '/sign-in' ||
          nextUrl.pathname === '/sign-up')
      ) {
        return Response.redirect(new URL('/home', nextUrl));
      }
      return true;
    },
  },
} satisfies NextAuthConfig;
