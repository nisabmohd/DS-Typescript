export interface IQueue<T> {
  add: (val: T) => ThisType<T>;
  remove: () => T | undefined;
  readonly peek: T | undefined;
  readonly size: number;
}
