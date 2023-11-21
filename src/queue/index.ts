import DoubleLinkedList from "../linkedlist/doublelinkedlist";
import { IQueue } from "./type";

export default class Queue<T> implements IQueue<T> {
  private list: DoubleLinkedList<T>;
  constructor() {
    this.list = new DoubleLinkedList<T>();
  }

  add(val: T) {
    this.list.insertLast(val);
    return this;
  }

  remove() {
    return this.list.removeLast();
  }

  get peek() {
    return this.list.getAt(0);
  }

  get size() {
    return this.list.size;
  }

  toString() {
    return [...this.list];
  }
}
