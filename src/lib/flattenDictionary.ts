export const flattenDictionary = (
    obj: Record<string, any>,
    parentKey = '',
    result: Record<string, string> = {}
  ): Record<string, string> => {
    for (const key in obj) {
      const fullKey = parentKey ? `${parentKey}.${key}` : key;
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        flattenDictionary(obj[key], fullKey, result);
      } else {
        result[fullKey] = obj[key];
      }
    }
    return result;
  };
  