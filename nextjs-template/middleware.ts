import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en-US', 'fr-FR'],
  // Used when no locale matches
  defaultLocale: 'en-US',
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr-FR|en-US)/:path*'],
};
