type anyObj = {
  [key: string]: any;
};

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export { anyObj, Omit };
