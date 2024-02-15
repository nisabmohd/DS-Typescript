// run the file by command -> ts-node src/circularlinkedlist/test.ts

import CircularLinkedList from ".";

// Function to print the elements of the circular linked list
function printList(circularList: CircularLinkedList<number>) {
  console.log("List elements:");
  circularList.forEach((val) => console.log(val));
  console.log("List size:", circularList.size);
}

// Test the initialization of an empty list
const circularList = new CircularLinkedList<number>();
printList(circularList); // Output: List elements: (empty) | List size: 0

// Test inserting elements at the beginning of the list
circularList.insertFirst(1);
circularList.insertFirst(2);
printList(circularList); // Output: List elements: 2, 1 | List size: 2

// Test inserting elements at the end of the list
circularList.insertLast(3);
circularList.insertLast(4);
printList(circularList); // Output: List elements: 2, 1, 3, 4 | List size: 4

// Test inserting elements at a specific index
circularList.insertAt(5, 1); // Insert 5 at index 1
printList(circularList); // Output: List elements: 2, 5, 1, 3, 4 | List size: 5

// Test deleting elements from the list
circularList.deleteFirst(); // Delete first element
circularList.deleteLast(); // Delete last element
printList(circularList); // Output: List elements: 5, 1, 3 | List size: 3

// Test deleting an element at a specific index
circularList.deleteAt(1); // Delete element at index 1
printList(circularList); // Output: List elements: 5, 3 | List size: 2
