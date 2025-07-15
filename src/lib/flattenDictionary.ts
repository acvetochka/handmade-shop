export type NestedDictionary = {
  [key: string]: string | NestedDictionary;
};

export type Dictionary = Record<string, string>;

export type FlattenDictionaryParams = {
  obj: NestedDictionary;
  parentKey?: string;
  result?: Dictionary;
};

export const flattenDictionary = ({
  obj,
  parentKey = "",
  result = {},
}: FlattenDictionaryParams): Record<string, string> => {
  for (const key in obj) {
    const fullKey = parentKey ? `${parentKey}.${key}` : key;
    const value = obj[key];
    if (typeof value === "object" && value !== null) {
      flattenDictionary({ obj: value, parentKey: fullKey, result });
    } else if (typeof value === "string") {
      result[fullKey] = value;
    }
  }
  return result;
};
