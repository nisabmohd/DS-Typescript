// run the file by command -> ts-node src/double-linkedlist/test.ts

import DoubleLinkedList from ".";

// Test the DoubleLinkedList class
const list = new DoubleLinkedList<number>();

// Test insertFirst
list.insertFirst(1);
list.insertFirst(2);
console.log("List after insertFirst:", list.size); // Expected output: 2
console.log("List elements after insertFirst:");
list.forEach((val) => console.log(val)); // Expected output: 2, 1

// Test insertLast
list.insertLast(3);
list.insertLast(4);
console.log("List after insertLast:", list.size); // Expected output: 4
console.log("List elements after insertLast:");
list.forEach((val) => console.log(val)); // Expected output: 2, 1, 3, 4

// Test insertAt
list.insertAt(5, 2);
list.insertAt(6, 5);
console.log("List after insertAt:", list.size); // Expected output: 6
console.log("List elements after insertAt:");
list.forEach((val) => console.log(val)); // Expected output: 2, 1, 5, 3, 4, 6

// Test deleteFirst
list.deleteFirst();
console.log("List after deleteFirst:", list.size); // Expected output: 5
console.log("List elements after deleteFirst:");
list.forEach((val) => console.log(val)); // Expected output: 1, 5, 3, 4, 6

// Test deleteLast
list.deleteLast();
console.log("List after deleteLast:", list.size); // Expected output: 4
console.log("List elements after deleteLast:");
list.forEach((val) => console.log(val)); // Expected output: 1, 5, 3, 4

// Test deleteAt
list.deleteAt(1);
console.log("List after deleteAt:", list.size); // Expected output: 3
console.log("List elements after deleteAt:");
list.forEach((val) => console.log(val)); // Expected output: 1, 3, 4
