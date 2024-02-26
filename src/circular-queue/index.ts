export default class CircularQueue<T> {
  private arr: (T | undefined)[]; // Array to store queue elements
  private front: number; // Index of the front element
  private rear: number; // Index of the rear element
  private size: number; // Maximum capacity of the queue

  constructor(capacity: number) {
    this.arr = new Array(capacity); // Initialize array with given capacity
    this.front = -1; // Initialize front index to -1 (empty queue)
    this.rear = -1; // Initialize rear index to -1 (empty queue)
    this.size = capacity; // Store the maximum capacity of the queue
  }

  private isEmpty() {
    return this.front == -1;
  }

  private isFull() {
    return (this.rear + 1) % this.size == this.front;
  }

  public insert(val: T) {
    if (this.isFull()) throw new Error("Invalid insertion on full queue");
    if (this.isEmpty()) this.front = 0;
    this.rear = (this.rear + 1) % this.size;
    this.arr[this.rear] = val;
  }

  public delete(): T | undefined {
    if (this.isEmpty()) throw new Error("Invalid deletion on empty queue");
    const val = this.arr[this.front];
    this.arr[this.front] = undefined;
    if (this.front == this.rear) this.front = this.rear = -1;
    else this.front = (this.front + 1) % this.size;
    return val;
  }
}
