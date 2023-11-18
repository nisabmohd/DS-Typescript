export interface LinkedList<T> {
  // add Methods
  insertFirst: (val: T) => LinkedList<T>;
  insertLast: (val: T) => LinkedList<T>;
  insertAt: (val: T, index: number) => LinkedList<T>;

  // remove methods
  removeFirst: () => LinkedList<T>;
  removeLast: () => LinkedList<T>;
  removeAt: (index: number) => LinkedList<T>;
  clear: () => void;

  // iterate methods
  forEach: (cb: (item: T) => void) => void;
}
