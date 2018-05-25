export const containsValue = (obj, find) =>
  Object.values(obj).reduce((acc, value) => {
    return !!acc
      ? acc
      : typeof value === 'object'
        ? containsValue(value, find)
        : acc || value === find;
  }, false);

export const containsKey = (obj, find) =>
  Object.keys(obj).reduce((acc, key) => {
    return !!acc
      ? acc
      : key === find
        ? true
        : typeof obj[key] === 'object'
          ? containsKey(obj[key], find)
          : false;
  }, false);
