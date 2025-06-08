"use client";

import { usePathname } from "next/navigation";
import { useTransition, useState, useEffect } from "react";
import { locales } from "@/lib/i18n";
import {
  switcherWrapper,
  selectedLocaleStyle,
  dropdownStyle,
  dropdownItem,
  flagImage,
  arrowStyle,
  arrowOpen,
} from "./LanguageSwitcher.styles";
import Image from "next/image";

const localeToFlag: Record<string, string> = {
  de: "de.svg",
  en: "gb.svg",
  ua: "ua.svg",
};

export const LanguageSwitcher = () => {
  const pathname = usePathname();
  // const router = useRouter();
  const [, startTransition] = useTransition();
  const [open, setOpen] = useState(false);

  const currentLocale = pathname.split("/")[1];

  useEffect(() => {
    // Зберігаємо поточну мову в localStorage при завантаженні
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred-locale", currentLocale);
    }
  }, [currentLocale]);

  const handleChange = (locale: string) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred-locale", locale);
      document.cookie = `preferred-locale=${locale}; path=/; max-age=31536000`;
      window.location.href = newPath;
    }
    setOpen(false);
    startTransition(() => {
      // router.push(newPath);
      window.location.href = newPath;
    });
  };

  return (
    <div css={switcherWrapper}>
      <button css={selectedLocaleStyle} onClick={() => setOpen(!open)}>
        <Image
          src={`/flags/${localeToFlag[currentLocale]}`}
          width={50}
          height={25}
          alt={currentLocale}
          css={flagImage}
        />
        <span css={[arrowStyle, open && arrowOpen]}>▼</span>
      </button>
      {open && (
        <div css={dropdownStyle}>
          {locales
            .filter((loc) => loc !== currentLocale)
            .map((locale) => (
              <button
                key={locale}
                onClick={() => handleChange(locale)}
                css={dropdownItem}
              >
                <Image
                  src={`/flags/${localeToFlag[locale]}`}
                  width={50}
                  height={25}
                  alt={locale}
                  css={flagImage}
                />
              </button>
            ))}
        </div>
      )}
    </div>
  );
};
