// run the file by command -> ts-node src/queue/test.ts

import Queue from ".";

// Test the Queue class
const queue = new Queue<number>();

// Test insert
queue.insert(1);
queue.insert(2);
queue.insert(3);
console.log("Queue size after inserts:", queue.size); // Expected output: 3

// Test forEach
console.log("Queue elements:");
queue.forEach((val) => console.log(val)); // Expected output: 1, 2, 3

// Test remove
queue.remove();
queue.remove();

console.log("Queue size after remove:", queue.size); // Expected output: 2

// Test forEach after remove
console.log("Queue elements after remove:");
queue.forEach((val) => console.log(val)); // Expected output: 2, 3
