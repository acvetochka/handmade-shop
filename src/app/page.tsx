import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { defaultLocale, locales } from "@/lib/i18n";

export default async function RootPage() {
  const cookieStore = await cookies();
  const preferredLocale = cookieStore.get("preferred-locale")?.value;

  const locale =
    preferredLocale &&
    locales.includes(preferredLocale as (typeof locales)[number])
      ? preferredLocale
      : defaultLocale;

  redirect(`/${locale}`);
}
