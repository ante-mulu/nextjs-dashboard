import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

const nextAuthInstance = NextAuth(authConfig);

export default nextAuthInstance;

export const config = {
  // This matcher specifies the routes that should go through the middleware.
  // Here, it matches all routes except those starting with 'api', '_next/static', '_next/image', or ending with '.png'.
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
