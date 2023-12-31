import { Maybe } from "../../globalTypes";
import { LinkedList } from "../type";

class SingleLinkNode<T> {
  val: T;
  next: Maybe<SingleLinkNode<T>>;
  constructor(val: T, next?: SingleLinkNode<T>) {
    this.val = val;
    this.next = next;
  }
}

export default class SingleLinkedList<T = any> implements LinkedList<T> {
  private head: Maybe<SingleLinkNode<T>>;
  private tail: Maybe<SingleLinkNode<T>>;
  public size: number = 0;

  public insertFirst(val: T) {
    const newNode = new SingleLinkNode<T>(val);
    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = this.head;
      this.size++;
      return this;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
    return this;
  }

  public insertLast(val: T) {
    const newNode = new SingleLinkNode<T>(val);
    if (!this.head && !this.tail) {
      return this.insertFirst(val);
    }
    this.tail!.next = newNode;
    this.size++;
    return this;
  }

  public insertAt(val: T, index: number) {
    if (index > this.size) return this;
    if (index == 0) {
      return this.insertFirst(val);
    }
    if (index == this.size) {
      return this.insertLast(val);
    }
    let node = this.head;
    while (index - 1 > 0) {
      node = node?.next;
      index--;
    }
    const newNode = new SingleLinkNode<T>(val);
    newNode.next = node?.next;
    node!.next = newNode;
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
      this.size--;
      return removedVal;
    }
  }

  public removeLast() {
    if (this.size == 0) return undefined;
    if (this.size == 1) {
      const removedVal = this.head!.val;
      this.clear();
      return removedVal;
    }
    let node = this.head;
    while (node?.next?.next) {
      node = node.next;
    }
    const removedVal = node!.next!.val;
    node!.next = null;
    this.size--;
    return removedVal;
  }

  public removeAt(index: number) {
    if (index < 0 || index >= this.size) return undefined;
    if (this.size == 1) {
      const removedVal = this.head?.val;
      this.clear();
      return removedVal;
    }
    let node = this.head;
    while (index - 1 > 0) {
      node = node?.next;
    }
    const removedVal = node?.next?.val;
    node!.next = node?.next?.next;
    this.size--;
    return removedVal;
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
    return [...this].join(" -> ");
  }

  *[Symbol.iterator]() {
    let tempNode = this.head;
    while (tempNode) {
      yield tempNode.val;
      tempNode = tempNode.next;
    }
  }
}
