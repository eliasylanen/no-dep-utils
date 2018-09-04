import { anyObj, Omit } from '../../types';

export const removeKey = (
  obj: anyObj,
  keyToRemove: string,
): Omit<anyObj, 'keyToRemove'> => {
  return Object.keys(obj).reduce((acc, key) => {
    return key === keyToRemove
      ? acc
      : typeof obj[key] === 'object'
        ? { ...acc, [key]: removeKey(obj[key], keyToRemove) }
        : { ...acc, [key]: obj[key] };
  }, {});
};

export const removeValue = (obj: anyObj, valueToRemove: unknown) => {
  return Object.keys(obj).reduce((acc, key) => {
    return obj[key] === valueToRemove
      ? acc
      : typeof obj[key] === 'object'
        ? { ...acc, [key]: removeValue(obj[key], valueToRemove) }
        : { ...acc, [key]: obj[key] };
  }, {});
};
