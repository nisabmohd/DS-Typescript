// run the file by command -> ts-node src/deque/test.ts

// Import the Deque class
import Deque from ".";

// Create a new instance of Deque
const deque = new Deque<number>();

// Test insertFirst and insertLast methods
deque.insertFirst(1);
deque.insertLast(2);
deque.insertFirst(3);
deque.insertLast(4);

// Test size property
console.log("Deque size:", deque.size); // Expected output: 4

// Test deleteFirst method
console.log("Deleted element from the front:", deque.deleteFirst()); // Expected output: 3

// Test deleteLast method
console.log("Deleted element from the back:", deque.deleteLast()); // Expected output: 4

// Test size property after deletions
console.log("Deque size after deletions:", deque.size); // Expected output: 2
