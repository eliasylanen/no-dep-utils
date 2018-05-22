export const removeKey = (obj, keyToRemove) => {
  return Object.keys(obj).reduce((acc, key) => {
    return key === keyToRemove
      ? acc
      : typeof obj[key] === 'object'
        ? { ...acc, [key]: removeKey(obj[key], keyToRemove) }
        : { ...acc, [key]: obj[key] };
  }, {});
};

export const removeValue = (obj, valueToRemove) => {
  return Object.keys(obj).reduce((acc, key) => {
    return obj[key] === valueToRemove
      ? acc
      : typeof obj[key] === 'object'
        ? { ...acc, [key]: removeValue(obj[key], keyToRemove) }
        : { ...acc, [key]: obj[key] };
  }, {});
};
