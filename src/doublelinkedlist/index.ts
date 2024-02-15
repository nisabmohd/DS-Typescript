class DoubleListNode<T> {
  val: T;
  next: DoubleListNode<T> | null;
  prev: DoubleListNode<T> | null;
  public constructor(
    val: T,
    prev?: DoubleListNode<T> | null,
    next?: DoubleListNode<T> | null
  ) {
    this.val = val;
    this.next = next ?? null;
    this.prev = prev ?? null;
  }
}

export default class DoubleLinkedList<T = any> {
  private head: DoubleListNode<T> | null;
  private tail: DoubleListNode<T> | null;
  private listSize: number;

  public constructor() {
    this.head = null;
    this.tail = null;
    this.listSize = 0;
  }

  public get size() {
    return this.listSize;
  }

  private incrementSize() {
    this.listSize++;
  }

  private decrementSize() {
    this.listSize--;
  }

  private init(val: T) {
    const node = new DoubleListNode(val);
    this.head = node;
    this.tail = this.head;
    this.incrementSize();
  }

  public insertFirst(val: T) {
    if (this.head == null && this.tail == null) {
      return this.init(val);
    }
    const node = new DoubleListNode(val);
    this.head!.prev = node;
    node.next = this.head;
    this.head = node;
    this.incrementSize();
  }

  public insertLast(val: T) {
    if (this.head == null && this.tail == null) return this.init(val);
    const node = new DoubleListNode(val);
    this.tail!.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.incrementSize();
  }

  public insertAt(val: T, index: number) {
    if (index > this.size || index < 0) throw new Error("Invalid index!");
    if (index == 0) return this.insertFirst(val);
    if (index == this.size) return this.insertLast(val);
    const node = new DoubleListNode(val);
    let temp = this.head!;
    while (index > 1) {
      temp = temp.next!;
      index--;
    }
    node.next = temp.next;
    temp.next!.prev = node;
    node.prev = temp;
    temp.next = node;
    this.incrementSize();
  }

  public deleteFirst(): T | undefined {
    if (this.size == 0) return;
    const val = this.head!.val;
    if (this.size == 1) {
      this.clear();
      return val;
    }
    this.head = this.head!.next;
    this.head!.prev = null;
    this.decrementSize();
    return val;
  }

  public deleteLast(): T | undefined {
    if (this.size == 0) return;
    const val = this.tail!.val;
    if (this.size == 1) {
      this.clear();
      return val;
    }
    this.tail = this.tail!.prev;
    this.tail!.next = null;
    this.decrementSize();
    return val;
  }

  public deleteAt(index: number) {
    if (index >= this.size || index < 0) throw new Error("Invalid index!");
    if (this.head == null) return;
    if (index == 0) return this.deleteFirst();
    if (index == this.size - 1) return this.deleteLast();
    let temp = this.head!;
    while (index > 0) {
      temp = temp.next!;
      index--;
    }

    const val = temp.val;
    temp.prev!.next = temp.next;
    temp.next!.prev = temp.prev;
    this.decrementSize();
    return val;
  }

  public clear() {
    this.head = null;
    this.tail = null;
    this.listSize = 0;
  }

  public forEach(cb: (val: T) => void) {
    let node = this.head;
    while (node != null) {
      cb(node.val);
      node = node.next;
    }
  }
}
