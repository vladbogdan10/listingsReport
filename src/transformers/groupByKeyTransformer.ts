const groupByKey = <
  T extends Record<string, string | number>,
  K extends keyof T
>(
  array: T[],
  key: K
): Record<T[K], T[]> => {
  return array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {} as Record<T[K], T[]>);
};

export default groupByKey;
