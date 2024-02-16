import DoubleLinkedList from "../double-linkedlist";

// Queue class definition
export default class Queue<T> {
  private list: DoubleLinkedList<T>; // Internal representation of queue using Double Linked List

  // Constructor to initialize the queue with an empty Double Linked List
  public constructor() {
    this.list = new DoubleLinkedList<T>();
  }

  // Method to insert an element into the queue
  public insert(val: T) {
    this.list.insertLast(val);
  }

  // Getter method to retrieve the size of the queue
  public get size() {
    return this.list.size;
  }

  // Method to remove the element from the front of the queue
  public remove() {
    return this.list.deleteFirst();
  }

  // Method to iterate over all elements in the queue
  public forEach(cb: (val: T) => void) {
    this.list.forEach(cb);
  }
}
