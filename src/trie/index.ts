type Char = string; // Define the type for character used in TrieNode's map

// Define TrieNode class representing a node in the Trie
class TrieNode {
  public map: Map<Char, TrieNode>;
  public isWord: boolean;
  public constructor() {
    this.map = new Map<Char, TrieNode>();
    this.isWord = false;
  }
}

export default class Trie {
  private root: TrieNode; // root of trienode

  // Constructor to initialize Trie with an empty root node
  public constructor() {
    this.root = new TrieNode();
  }

  // Inserts a word into the Trie
  public insert(word: string) {
    let node = this.root;
    for (let c of word) {
      if (!node.map.has(c)) node.map.set(c, new TrieNode());
      node = node.map.get(c)!;
    }
    node.isWord = true; // Mark end of word
  }

  // Deletes a word from the Trie
  public delete(word: string) {
    let node = this.root;
    for (let c of word) {
      if (!node.map.has(c)) return;
      node = node.map.get(c)!;
    }
    node.isWord = false; // Return true if end of word
  }

  //  Checks if a word is present in the Trie
  public has(word: string) {
    let node = this.root;
    for (let c of word) {
      if (!node.map.has(c)) return false;
      node = node.map.get(c)!;
    }
    return node.isWord; // Return true if end of word
  }

  // Checks if any word starts with the given prefix
  public startsWith(prefix: string) {
    let node = this.root;
    for (let c of prefix) {
      if (!node.map.has(c)) return false;
      node = node.map.get(c)!;
    }
    return true; // Return true if prefix found
  }

  // clears the trie and remove all words
  public clear() {
    this.root = new TrieNode();
  }
}
