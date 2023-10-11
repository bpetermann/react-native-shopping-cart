class TrieNode {
  value: any;
  children: any[];
  constructor() {
    this.value = null;
    this.children = Array(26).fill(undefined);
  }
}

export class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  insert(key: string, value: string) {
    key = key.toLowerCase();

    let node = this.root;
    for (let i = 0; i < key.length; i++) {
      const alphabetIndex = key[i].charCodeAt(0) - 97;
      if (!node.children[alphabetIndex]) {
        const newNode = new TrieNode();
        node.children[alphabetIndex] = newNode;
      }
      node = node.children[alphabetIndex];
    }
    node.value = value;
  }

  find(key: string) {
    key = key.toLowerCase();
    let node = this.root;
    for (let i = 0; i < key.length; i++) {
      const alphabetIndex = key[i].charCodeAt(0) - 97;

      if (!node.children[alphabetIndex]) {
        return false;
      }

      node = node.children[alphabetIndex];
    }

    while (node.value === null && node.children) {
      const nodeWithChildren = node.children.find((i) => i !== undefined);
      if (!nodeWithChildren) {
        return false;
      }
      node = nodeWithChildren;
    }

    if (node.value === null) {
      return false;
    }

    return node;
  }

  remove(key: string) {
    const node = this.find(key);
    if (node) node.value = null;
  }
}
