import SingleLinkedList from "./linkedlist/singlelinkedlist";

const linkedlist = new SingleLinkedList<number>();
linkedlist
  .insertFirst(2)
  .insertFirst(1)
  .insertAt(99, 0)
  .removeFirst()
  .forEach((item) => console.log(item));
