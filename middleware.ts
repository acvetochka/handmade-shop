import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, locales } from './src/lib/i18n';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // already has locale
  const pathnameIsMissingLocale = locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match only top-level paths that don't start with a known locale
    '/((?!_next|favicon.ico|assets|.*\\..*).*)',
  ],
};
