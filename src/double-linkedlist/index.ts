class DoubleListNode<T> {
  val: T;
  next: DoubleListNode<T> | null;
  prev: DoubleListNode<T> | null;

  // Constructor to create a new node
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

  // Constructor to initialize an empty double linked list
  public constructor() {
    this.head = null;
    this.tail = null;
    this.listSize = 0;
  }

  // Getter method to retrieve the size of the list
  public get size() {
    return this.listSize;
  }

  // Method to increment the size of the list
  private incrementSize() {
    this.listSize++;
  }

  // Method to decrement the size of the list
  private decrementSize() {
    this.listSize--;
  }

  // Method to initialize the list with a single node
  private init(val: T) {
    const node = new DoubleListNode(val);
    this.head = node;
    this.tail = this.head;
    this.incrementSize();
  }

  // Method to insert an element at the beginning of the list
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

  // Method to insert an element at the end of the list
  public insertLast(val: T) {
    if (this.head == null && this.tail == null) return this.init(val);
    const node = new DoubleListNode(val);
    this.tail!.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.incrementSize();
  }

  // Method to insert an element at a specific index in the list
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

  // Method to delete the first element from the list
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

  // Method to delete the last element from the list
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

  // Method to delete an element at a specific index from the list
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

  // Method to clear the list
  public clear() {
    this.head = null;
    this.tail = null;
    this.listSize = 0;
  }

  // Method to iterate over all elements in the list
  public forEach(cb: (val: T) => void) {
    let node = this.head;
    while (node != null) {
      cb(node.val);
      node = node.next;
    }
  }
}
