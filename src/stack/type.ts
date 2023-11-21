export interface IStack<T> {
  push: (val: T) => ThisType<T>;
  pop: () => T | undefined;
  readonly size: number;
  readonly peek: T | undefined;
}
