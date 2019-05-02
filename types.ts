export interface AnyObj {
  [key: string]: any;
}

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type Head<T extends any[]> = T[0];

export type Tail<T extends any[]> = ((...args: T) => any) extends ((
  _: any,
  ...tail: infer TT
) => any)
  ? TT
  : [];

export type HasTail<T extends any[]> = T extends ([] | [any]) ? false : true;
