import CircularQueue from ".";

// Instantiate a circular queue with capacity 5
const queue = new CircularQueue<number>(5);

// Insert elements into the queue
queue.insert(1);
queue.insert(2);
queue.insert(3);
queue.insert(4);
queue.insert(5);

// Output: [1, 2, 3, 4, 5]
console.log(queue);

// Try inserting into a full queue (should throw an error)
try {
  queue.insert(6);
} catch (err) {
  const error = err as Error;
  console.log(error.message); // Output: Invalid insertion on full queue
}

// Remove elements from the queue
queue.delete();
queue.delete();

// Output: [null, null, 3, 4, 5]
console.log(queue);

// Insert more elements to fill the empty positions
queue.insert(6);
queue.insert(7);

// Output: [6, 7, 3, 4, 5]
console.log(queue);

// Remove an element from the queue
queue.delete();

// Output: [6, null, 3, 4, 5]
console.log(queue);

// Insert an element
queue.insert(8);

// Output: [6, 8, 3, 4, 5]
console.log(queue);

// Remove elements from the queue until it's empty
queue.delete();
queue.delete();
queue.delete();
queue.delete();
queue.delete();

// Output: [null, null, null, null, null]
console.log(queue);

// Try deleting from an empty queue (should throw an error)
try {
  queue.delete();
} catch (err) {
  const error = err as Error;
  console.log(error.message); // Output: Invalid deletion on empty queue
}
