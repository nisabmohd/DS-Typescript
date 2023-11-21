export interface LinkedList<T> {
  // add Methods
  insertFirst: (val: T) => LinkedList<T>;
  insertLast: (val: T) => LinkedList<T>;
  insertAt: (val: T, index: number) => LinkedList<T>;

  // remove methods
  removeFirst: () => T | undefined;
  removeLast: () => T | undefined;
  removeAt: (index: number) => T | undefined;
  clear: () => void;

  //retrive methods
  getAt: (index: number) => T | undefined;

  // iterate methods
  forEach: (cb: (item: T) => void) => void;

  readonly size: number;
}
