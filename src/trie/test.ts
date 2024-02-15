// run the file by command -> ts-node src/trie/test.ts

import Trie from ".";

// Create a function to run tests
function runTests() {
  const trie = new Trie();

  // Test case 1: Inserting words
  trie.insert("apple");
  trie.insert("banana");
  trie.insert("orange");
  console.log("After inserting words:");

  console.log("Does trie contain 'apple'?", trie.has("apple")); // Output: Does trie contain 'apple'? true
  console.log("Does trie contain 'banana'?", trie.has("banana")); // Output: Does trie contain 'banana'? true
  console.log("Does trie contain 'orange'?", trie.has("orange")); // Output: Does trie contain 'orange'? true
  console.log("Does trie contain 'grape'?", trie.has("grape")); // Output: Does trie contain 'grape'? false

  // Test case 2: Deleting words
  trie.delete("banana");
  console.log("After deleting 'banana':");

  console.log("Does trie contain 'banana'?", trie.has("banana")); // Output: Does trie contain 'banana'? false

  // Test case 3: Checking prefix
  console.log(
    "Does trie have words starting with 'app'?",
    trie.startsWith("app")
  ); // Output: Does trie have words starting with 'app'? true
  console.log(
    "Does trie have words starting with 'ban'?",
    trie.startsWith("ban")
  ); // Output: Does trie have words starting with 'ban'? false
}

// Run the tests
runTests();
