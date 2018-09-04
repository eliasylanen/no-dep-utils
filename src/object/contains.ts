import { AnyObj } from '../../types';

export const containsValue = (obj: AnyObj, find: any): boolean =>
  Object.values(obj).reduce((acc: boolean, value: any): boolean => {
    return !!acc
      ? acc
      : typeof value === 'object'
        ? containsValue(value, find)
        : acc || value === find;
  }, false);

export const containsKey = (obj: AnyObj, find: string): boolean =>
  Object.keys(obj).reduce((acc: boolean, key: string): boolean => {
    return !!acc
      ? acc
      : key === find
        ? true
        : typeof obj[key] === 'object'
          ? containsKey(obj[key], find)
          : false;
  }, false);
