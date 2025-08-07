"use client";

import { JSX, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export const ScrollToHash = (): JSX.Element | null => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      waitForElement(hash).then((el) => {
        if (el) {
          smoothScrollToElement(el, 600);
        }
      });
    }
  }, [pathname, searchParams]);

  return null;
};

// Очікування елемента в DOM
function waitForElement(
  selector: string,
  timeout = 1000
): Promise<Element | null> {
  return new Promise((resolve) => {
    const el = document.querySelector(selector);
    if (el) return resolve(el);

    const observer = new MutationObserver(() => {
      const el = document.querySelector(selector);
      if (el) {
        observer.disconnect();
        resolve(el);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    setTimeout(() => {
      observer.disconnect();
      resolve(null);
    }, timeout);
  });
}

// Кастомний плавний скрол
function smoothScrollToElement(element: Element, duration = 500) {
  const start = window.scrollY;
  const target = element.getBoundingClientRect().top + start;
  const startTime = performance.now();

  function scroll(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const ease =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, start + (target - start) * ease);

    if (elapsed < duration) {
      requestAnimationFrame(scroll);
    }
  }

  requestAnimationFrame(scroll);
}
