"use client";

import { usePathname, useRouter } from "next/navigation";
import { JSX, MouseEvent } from "react";
import { useTranslation } from "@/providers";

interface LinkToHashProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const LinkToHash = ({
  id,
  children,
  className,
  onClick,
}: LinkToHashProps): JSX.Element => {
  const pathname = usePathname();
  const router = useRouter();
  const { locale } = useTranslation();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Викликаємо переданий onClick (наприклад, для закриття моб. меню)
    onClick?.();

    const basePath = `/${locale}`;
    const targetPath = `${basePath}/`;

    if (pathname === targetPath || pathname === `${basePath}`) {
      // вже на головній
      window.history.pushState(null, "", `#${id}`);

      const el = document.getElementById(id);
      if (el) {
        const offset = -80; // компенсуємо фіксований хедер
        const y = el.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      router.push(`/${locale}/#${id}`, { scroll: false });
    }
  };

  return (
    <a href={`/${locale}/#${id}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};
