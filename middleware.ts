import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, locales } from './src/lib/i18n';
import type { Locale } from './src/lib/i18n';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const cookieLocale = request.cookies.get('preferred-locale')?.value;

    // Перевірка, що значення є в масиві допустимих локалей
    const locale: Locale = locales.includes(cookieLocale as Locale)
      ? (cookieLocale as Locale)
      : defaultLocale;

    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next|favicon.ico|flags|.*\\..*).*)',
  ],
};
