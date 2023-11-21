import { Maybe } from "../../globalTypes";
import { LinkedList } from "../type";

class DoubleLinkedNode<T> {
  val: T;
  next: Maybe<DoubleLinkedNode<T>>;
  prev: Maybe<DoubleLinkedNode<T>>;
  constructor(val: T, prev?: DoubleLinkedNode<T>, next?: DoubleLinkedNode<T>) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

export default class DoubleLinkedList<T = any> implements LinkedList<T> {
  private head: Maybe<DoubleLinkedNode<T>>;
  private tail: Maybe<DoubleLinkedNode<T>>;
  public size: number = 0;

  public insertFirst(val: T) {
    const newNode = new DoubleLinkedNode<T>(val);
    if (this.size == 0) {
      this.head = newNode;
      this.tail = this.head;
      this.size++;
      return this;
    }
    newNode.next = this.head;
    this.head!.prev = newNode;
    this.head = newNode;
    this.size++;
    return this;
  }

  public insertLast(val: T) {
    const newNode = new DoubleLinkedNode<T>(val);
    if (this.size == 0) {
      return this.insertFirst(val);
    }
    newNode.prev = this.tail;
    this.tail!.next = newNode;
    this.tail = newNode;
    this.size++;
    return this;
  }

  public insertAt(val: T, index: number) {
    if (index < 0 || index >= this.size) return this;
    if (index == 0) return this.insertFirst(val);
    if (index == this.size) this.insertLast(val);
    let node = this.head;
    while (index) {
      node = node?.next;
      index--;
    }
    const newNode = new DoubleLinkedNode<T>(val);
    newNode.next = node;
    const prevNode = node?.prev;
    node!.prev = newNode;
    newNode.prev = prevNode;
    prevNode!.next = newNode;
    this.size++;
    return this;
  }

  public getAt(index: number) {
    let node = this.head;
    while (node && index) {
      node = node?.next;
      index--;
    }
    return node?.val;
  }

  public removeFirst() {
    if (this.head) {
      const removedVal = this.head.val;
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
      this.size--;
      return removedVal;
    }
  }

  public removeLast() {
    if (this.size == 0) return undefined;
    if (this.size == 1) {
      const removedVal = this.head?.val;
      this.clear();
      return removedVal;
    }
    const removedVal = this.tail?.val;
    this.tail = this.tail?.prev;
    this.tail!.next = null;
    this.size--;
    return removedVal;
  }

  public removeAt(index: number) {
    if (index < 0 || index >= this.size) return undefined;
    if (index == 0) return this.removeFirst();
    if (index == this.size - 1) return this.removeLast();
    let node = this.head;
    while (index) {
      node = node?.next;
      index--;
    }
    if (node && node.next && node.prev) {
      const removedVal = node.val;
      node.prev.next = node.next;
      node.next.prev = node.prev;
      this.size--;
      return removedVal;
    }
  }

  public clear() {
    this.head = null;
    this.tail = this.head;
    this.size = 0;
  }

  public forEach(cb: (item: T) => void) {
    const generator = this[Symbol.iterator]();
    while (true) {
      const o = generator.next();
      if (o.done) break;
      cb(o.value);
    }
  }

  toString(): string {
    return [...this].join(" <-> ");
  }

  *[Symbol.iterator]() {
    let tempNode = this.head;
    while (tempNode) {
      yield tempNode.val;
      tempNode = tempNode.next;
    }
  }
}
