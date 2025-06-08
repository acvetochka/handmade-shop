// import { useTranslation } from "@/i18n/I18nProvider";

// export const useListFromDictionary = <T extends Record<string, any> = any>(
//   group: string
// ): (T & { id: string })[] => {
//   const { raw } = useTranslation();
//   const groupData = raw?.[group] || {};

//   return Object.entries(groupData).map(([id, value]) => ({
//     id,
//     ...(value as T),
//   }));
// };
