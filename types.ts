interface AnyObj {
  [key: string]: any;
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export { AnyObj, Omit };
