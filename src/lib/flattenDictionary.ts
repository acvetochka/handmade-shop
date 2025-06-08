export type NestedDictionary = {
  [key: string]: string | NestedDictionary;
};

export const flattenDictionary = (
  obj: NestedDictionary,
  parentKey = "",
  result: Record<string, string> = {}
): Record<string, string> => {
  for (const key in obj) {
    const fullKey = parentKey ? `${parentKey}.${key}` : key;
    const value = obj[key];
    if (typeof value === "object" && value !== null) {
      flattenDictionary(value, fullKey, result);
    } else if (typeof value === "string") {
      result[fullKey] = value;
    }
  }
  return result;
};
