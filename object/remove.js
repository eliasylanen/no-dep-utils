export const key = (obj, keyToRemove) => {
  return Object.keys(obj).reduce((acc, key) => {
    return key === keyToRemove
      ? acc
      : typeof obj[key] === 'object'
        ? { ...acc, [key]: key(obj[key], keyToRemove) }
        : { ...acc, [key]: obj[key] };
  }, {});
};

export const value = (obj, valueToRemove) => {
  return Object.keys(obj).reduce((acc, key) => {
    return obj[key] === valueToRemove
      ? acc
      : typeof obj[key] === 'object'
        ? { ...acc, [key]: key(obj[key], keyToRemove) }
        : { ...acc, [key]: obj[key] };
  }, {});
};
