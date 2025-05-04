import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { defaultLocale, locales } from '@/lib/i18n';

export default function RootPage() {
  const cookieStore = cookies();
  const preferredLocale = cookieStore.get('preferred-locale')?.value;

  const locale = locales.includes(preferredLocale) ? preferredLocale : defaultLocale;

  redirect(`/${locale}`);
}
