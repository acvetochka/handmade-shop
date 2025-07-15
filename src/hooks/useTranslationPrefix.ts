// hooks/useTranslationPrefix.ts
import { useTranslation } from "@/providers/I18nProvider";

/**
 * Повертає функцію, яка дозволяє зручно викликати t("prefix.id.key")
 * Наприклад: const tProduct = useTranslationPrefix("products");
 * tProduct("phone", "title") → "Смартфон"
 */
export const useTranslationPrefix = (prefix: string) => {
  const { t } = useTranslation();

  return (id: string, key: string) => t(`${prefix}.${id}.${key}`);
};
