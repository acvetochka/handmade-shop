// // hooks/useListFromDictionary.ts
// import { useTranslation } from "@/i18n/I18nProvider";

// /**
//  * Повертає список унікальних ID для вказаного шаблону перекладів.
//  * Наприклад, якщо є ключі "products.phone.title", "products.book.title" —
//  * цей хук поверне ["phone", "book"]
//  */
// export const useListFromDictionary = (prefix: string): string[] => {
//   const { t } = useTranslation();

//   const ids = Array.from(
//     new Set(
//       Object.keys(t)
//         .filter((key) => key.startsWith(`${prefix}.`) && key.endsWith(".title"))
//         .map((key) => key.split(".")[1])
//     )
//   );

//   return ids;
// };

import { useTranslation } from "@/i18n/I18nProvider";

export const useListFromDictionary = <T extends Record<string, any> = any>(
  group: string
): (T & { id: string })[] => {
  const { raw } = useTranslation();
  const groupData = raw?.[group] || {};

  return Object.entries(groupData).map(([id, value]) => ({
    id,
    ...(value as T),
  }));
};
