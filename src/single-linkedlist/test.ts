// run the file by command -> ts-node src/single-linkedlist/test.ts

import SingleLinkedList from ".";

function runTests() {
  const list = new SingleLinkedList<number>();
  list.insertFirst(3);
  list.insertFirst(2);
  list.insertFirst(1);
  console.log("After inserting at the beginning:");
  console.log("Size of the list:", list.size);

  list.insertLast(4);
  list.insertLast(5);
  list.insertLast(6);
  console.log("After inserting at the end:");
  console.log("Size of the list:", list.size);

  list.insertAt(10, 2);
  list.insertAt(20, 5);
  console.log("After inserting at specific positions:");
  console.log("Size of the list:", list.size);

  list.deleteFirst();
  list.deleteFirst();
  console.log("After deleting from the beginning:");
  console.log("Size of the list:", list.size);

  list.deleteLast();
  list.deleteLast();
  console.log("After deleting from the end:");
  console.log("Size of the list:", list.size);

  list.deleteAt(2);
  console.log("After deleting at a specific position:");
  console.log("Size of the list:", list.size);

  console.log("Size of the list:", list.size);

  console.log("Elements in the list:");
  list.forEach((item) => console.log(item));
}

runTests();
