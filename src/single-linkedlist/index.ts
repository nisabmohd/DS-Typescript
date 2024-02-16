// Represents a node in a singly linked list
export class SingleListNode<T> {
  val: T; // Value stored in the node
  next: SingleListNode<T> | null; // Reference to the next node
  public constructor(val: T, next?: SingleListNode<T> | null) {
    this.val = val;
    this.next = next ?? null;
  }
}

export default class SingleLinkedList<T = any> {
  private listSize: number; // Number of nodes in the list
  private head: SingleListNode<T> | null; // Reference to the first node in the list
  private tail: SingleListNode<T> | null; // Reference to the tail node

  // Constructor to initialize an empty linked list
  public constructor() {
    this.listSize = 0; // init size with zero
    this.head = null; // head points to null initially
    this.tail = this.head; // tail initially points to null
  }

  // Increment linkedlist size
  private incrementSize() {
    this.listSize++;
  }

  // Decrement linkedlist size
  private decrementSize() {
    this.listSize--;
  }

  // Initialize list with a single node
  private init(val: T) {
    const node = new SingleListNode(val);
    this.head = node;
    this.tail = this.head;
    this.incrementSize();
  }

  // Insert a node at the end of the list
  public insertLast(val: T) {
    if (this.head == null && this.tail == null) return this.init(val);
    if (this.tail) {
      const node = new SingleListNode(val);
      this.tail.next = node;
      this.tail = node;
      this.incrementSize();
    }
  }

  // Insert a node at the beginning of the list
  public insertFirst(val: T) {
    if (this.head == null && this.tail == null) return this.init(val);
    const node = new SingleListNode(val);
    node.next = this.head;
    this.head = node;
    this.incrementSize();
  }

  // Insert a node at a specific index in the list
  public insertAt(val: T, index: number) {
    if (index > this.size || index < 0) throw new Error("Invalid index!");
    if (index == 0) return this.insertFirst(val);
    if (index == this.size) return this.insertLast(val);
    let temp = this.head;
    while (index > 1) {
      temp = temp?.next!;
      index--;
    }
    const node = new SingleListNode(val);
    node.next = temp?.next!;
    temp!.next = node;
    this.incrementSize();
  }

  // Remove all nodes from the list
  public clear() {
    this.head = null;
    this.tail = this.head;
    this.listSize = 0;
  }

  // Delete the first node from the list
  public deleteFirst(): T | undefined {
    if (this.head == null) return;
    const val = this.head.val;
    if (this.size == 1) {
      this.clear();
      return val;
    }
    this.head = this.head.next;
    this.decrementSize();
    return val;
  }

  // Delete the last node from the list
  public deleteLast(): T | undefined {
    if (this.head == null || this.tail == null) return;
    const val = this.tail.val;
    if (this.size == 1) {
      this.clear();
      return val;
    }
    let temp = this.head;
    while (temp.next?.next != null) {
      temp = temp.next;
    }
    temp.next = null;
    this.decrementSize();
    return val;
  }

  // Delete the node at a specific index from the list
  public deleteAt(index: number): T | undefined {
    if (index >= this.size || index < 0) throw new Error("Invalid index!");
    if (this.head == null) return;
    if (index == 0) return this.deleteFirst();
    if (index == this.size - 1) return this.deleteLast();

    let temp = this.head;
    while (index > 1) {
      temp = temp.next!;
      index--;
    }
    const val = temp.next!.val;
    temp.next = temp.next!.next;
    this.decrementSize();
    return val;
  }

  // Get linkedlist size
  public get size() {
    return this.listSize;
  }

  // Iterate over linkedlist via passing a callback
  public forEach(cb: (item: T) => void) {
    let temp = this.head;
    while (temp != null) {
      cb(temp.val);
      temp = temp.next;
    }
  }
}
