// Stack class definition
// This class is a wrapper above the built-in JavaScript array, providing stack functionalities
class Stack<T> {
  private arr: T[]; // Array to store stack elements

  // Constructor to initialize an empty stack
  public constructor() {
    this.arr = [];
  }

  // Method to push an element onto the stack
  public push(val: T) {
    this.arr.push(val);
  }

  // Method to pop an element from the top of the stack and return it
  public pop(): T | undefined {
    return this.arr.pop();
  }

  // Getter method to retrieve the size of the stack
  public get size() {
    return this.arr.length;
  }
}
