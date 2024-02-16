import DoubleLinkedList from "../double-linkedlist";

// Deque class definition
export default class Deque<T> {
  private list: DoubleLinkedList<T>; // Internal representation of deque using Double Linked List

  // Constructor to initialize the deque with an empty Double Linked List
  public constructor() {
    this.list = new DoubleLinkedList<T>();
  }

  // Method to insert an element at the front of the deque
  public insertFirst(val: T) {
    this.list.insertFirst(val);
  }

  // Method to insert an element at the back of the deque
  public insertLast(val: T) {
    this.list.insertLast(val);
  }

  // Method to delete the element from the front of the deque and return it
  public deleteFirst() {
    return this.list.deleteFirst();
  }

  // Method to delete the element from the back of the deque and return it
  public deleteLast() {
    return this.list.deleteLast();
  }

  // Getter method to retrieve the size of the deque
  public get size() {
    return this.list.size;
  }
}
