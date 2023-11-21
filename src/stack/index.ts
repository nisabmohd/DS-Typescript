import DoubleLinkedList from "../linkedlist/doublelinkedlist";
import { IStack } from "./type";

export default class Stack<T> implements IStack<T> {
  private list: DoubleLinkedList<T> = new DoubleLinkedList<T>();

  push(val: T) {
    this.list.insertLast(val);
    return this;
  }

  pop() {
    return this.list.removeLast();
  }

  get size() {
    return this.list.size;
  }

  get peek() {
    return this.list.getAt(this.list.size - 1);
  }

  toString(): string {
    return [...this.list].toString();
  }
}
