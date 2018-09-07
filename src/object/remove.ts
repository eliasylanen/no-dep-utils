import { Omit } from '../../types';

export const removeKey = <O extends object, K extends string>(
  obj: O,
  keyToRemove: K,
): K extends keyof O ? Omit<O, K> : typeof obj => {
  return Object.keys(obj).reduce((acc: object, key: string): object => {
    return key === keyToRemove
      ? acc
      : typeof obj[key as keyof O] === 'object'
        ? { ...acc, [key]: removeKey(obj[key as keyof O] as {}, keyToRemove) }
        : { ...acc, [key]: obj[key as keyof O] };
  }, Object.create(null));
};

export const removeValue = <O extends object, V>(
  obj: O,
  valueToRemove: V,
): {} => {
  return Object.keys(obj).reduce((acc: {}, key: string) => {
    return obj[key as keyof {}] === valueToRemove
      ? acc
      : typeof obj[key as keyof O] === 'object'
        ? { ...acc, [key]: removeValue(obj[key as keyof {}], valueToRemove) }
        : { ...acc, [key]: obj[key as keyof O] };
  }, {});
};
