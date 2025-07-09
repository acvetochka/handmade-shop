import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { defaultLocale, locales } from "@/lib/i18n";

export default async function RootPage() {
  // const cookieStore =
  //   cookies() as import("next/headers").ReadonlyRequestCookies;
  // const preferredLocale = cookieStore.get("preferred-locale")?.value;

  const cookieStore = await cookies();
  const preferredLocale = cookieStore.get("preferred-locale")?.value;

  // const locale = locales.includes(preferredLocale)
  //   ? preferredLocale
  //   : defaultLocale;

  const locale =
    preferredLocale &&
    locales.includes(preferredLocale as (typeof locales)[number])
      ? preferredLocale
      : defaultLocale;

  redirect(`/${locale}`);
}
