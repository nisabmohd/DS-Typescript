import { SingleListNode } from "../single-linkedlist";

export default class CircularLinkedList<T> {
  private head: SingleListNode<T> | null; // Reference to the head node
  private tail: SingleListNode<T> | null; // Reference to the tail node
  private listSize: number; // Number of elements in the list

  // Constructor to initialize an empty circular linked list
  public constructor() {
    this.head = null;
    this.tail = null;
    this.listSize = 0;
  }

  // Increment linked list size
  private incrementSize() {
    this.listSize++;
  }

  // Decrement linked list size
  private decrementSize() {
    this.listSize--;
  }

  // Initialize the list with a single node
  private init(val: T) {
    this.head = new SingleListNode<T>(val);
    this.tail = this.head;
    this.tail.next = this.head; // Circular reference
    this.incrementSize();
  }

  // Method to insert an element at the beginning of the list
  public insertFirst(val: T) {
    if (this.head == null && this.tail == null) {
      return this.init(val);
    }
    const node = new SingleListNode<T>(val);
    this.tail!.next = node;
    node.next = this.head;
    this.head = node;
    this.incrementSize();
  }

  // Method to insert an element at the end of the list
  public insertLast(val: T) {
    if (this.head == null && this.tail == null) {
      return this.init(val);
    }
    const node = new SingleListNode<T>(val);
    this.tail!.next = node;
    node.next = this.head;
    this.tail = node;
    this.incrementSize();
  }

  // Method to insert an element at a specific index in the list
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

  // Method to clear the list
  public clear() {
    this.head = null;
    this.tail = null;
    this.listSize = 0;
  }

  // Method to delete the first element from the list
  public deleteFirst(): T | undefined {
    if (this.head == null && this.tail == null) return;
    const val = this.head!.val;
    if (this.size == 1) {
      this.clear();
      return val;
    }
    this.head = this.head!.next;
    this.tail!.next = this.head;
    this.decrementSize();
    return val;
  }

  // Method to delete the last element from the list
  public deleteLast(): T | undefined {
    if (this.head == null && this.tail == null) return;
    const val = this.tail!.val;
    if (this.size == 1) {
      this.clear();
      return val;
    }
    let temp = this.head;
    while (temp!.next != this.tail) {
      temp = temp!.next;
    }
    temp!.next = this.head;
    this.decrementSize();
    return val;
  }

  // Method to delete an element at a specific index from the list
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

  // Getter method to retrieve the size of the list
  public get size() {
    return this.listSize;
  }

  // Iterate over linkedlist via passing a callback
  public forEach(cb: (val: T) => void) {
    let temp = this.head;
    if (temp == null) return;
    cb(temp.val);
    temp = temp.next;
    while (temp != null && temp != this.head) {
      cb(temp!.val);
      temp = temp.next;
    }
  }
}
