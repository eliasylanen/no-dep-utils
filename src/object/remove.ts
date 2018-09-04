import { AnyObj } from '../../types';

export const removeKey = <O extends object>(
  obj: O,
  keyToRemove: string,
): object => {
  return Object.keys(obj).reduce((acc: object, key: string) => {
    return key === keyToRemove
      ? acc
      : typeof obj[key as keyof O] === 'object'
        ? { ...acc, [key]: removeKey((obj as AnyObj)[key], keyToRemove) }
        : { ...acc, [key]: obj[key as keyof O] };
  }, {});
};

export const removeValue = <O extends object, V>(
  obj: O,
  valueToRemove: V,
): object => {
  return Object.keys(obj).reduce((acc: {}, key: string) => {
    return (obj as AnyObj)[key] === valueToRemove
      ? acc
      : typeof obj[key as keyof O] === 'object'
        ? { ...acc, [key]: removeValue((obj as AnyObj)[key], valueToRemove) }
        : { ...acc, [key]: obj[key as keyof O] };
  }, {});
};
