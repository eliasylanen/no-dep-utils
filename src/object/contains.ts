import { AnyObj } from '../../types';

export const containsValue = <O extends object, V>(obj: O, find: V): boolean =>
  Object.values(obj).reduce((acc: boolean, value: any): boolean => {
    return !!acc
      ? acc
      : typeof value === 'object'
        ? containsValue(value, find)
        : acc || value === find;
  }, false);

export const containsKey = <O extends object>(obj: O, find: string): boolean =>
  Object.keys(obj).reduce((acc: boolean, key: string): boolean => {
    return !!acc
      ? acc
      : key === find
        ? true
        : typeof obj[key as keyof O] === 'object'
          ? containsKey((obj as AnyObj)[key], find)
          : false;
  }, false);
