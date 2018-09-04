import { AnyObj } from '../../types';

export const removeKey = (obj: AnyObj, keyToRemove: string): AnyObj => {
  return Object.keys(obj).reduce((acc: {}, key: string) => {
    return key === keyToRemove
      ? acc
      : typeof obj[key] === 'object'
        ? { ...acc, [key]: removeKey(obj[key], keyToRemove) }
        : { ...acc, [key]: obj[key] };
  }, {});
};

export const removeValue = (obj: AnyObj, valueToRemove: unknown): AnyObj => {
  return Object.keys(obj).reduce((acc: {}, key: string) => {
    return obj[key] === valueToRemove
      ? acc
      : typeof obj[key] === 'object'
        ? { ...acc, [key]: removeValue(obj[key], valueToRemove) }
        : { ...acc, [key]: obj[key] };
  }, {});
};
