type NodePrimitive = string | number | boolean | null;
type NodeObject = { [k: string]: NodeValue };
type NodeArray = NodeValue[];
type NodeValue = NodeArray | NodeObject | NodePrimitive;

type GuardTypeMap = {
  string: string;
  number: number;
  boolean: boolean;
  object: object;
};

class Node {
  value: NodeValue;
  children: Node[];
  constructor() {
    this.value = null;
    this.children = Array(26).fill(null);
  }
}

class Trie {
  root: Node;
  constructor() {
    this.root = new Node();
  }

  insert(key: string, value: NodeValue) {
    key = key.toLowerCase();

    let node = this.root;
    for (let i = 0; i < key.length; i++) {
      const alphabetIndex = key[i].charCodeAt(0) - 97;
      if (!node.children[alphabetIndex]) {
        const newNode = new Node();
        node.children[alphabetIndex] = newNode;
      }
      node = node.children[alphabetIndex];
    }
    node.value = value;
  }

  find(key: string): Node | null {
    key = key.toLowerCase();
    let node = this.root;
    for (let i = 0; i < key.length; i++) {
      const alphabetIndex = key[i].charCodeAt(0) - 97;

      if (!node.children[alphabetIndex]) {
        return null;
      }

      node = node.children[alphabetIndex];
    }

    while (!node.value && node.children) {
      const nodeWithChildren = node.children.find((i) => i !== null);

      if (!nodeWithChildren) {
        return null;
      }

      node = nodeWithChildren;
    }

    if (!node.value) {
      return null;
    }

    return node;
  }

  findValue<K extends keyof GuardTypeMap>(
    key: string,
    guard: K
  ): GuardTypeMap[K] | null {
    key = key.toLowerCase();
    let node = this.root;
    for (let i = 0; i < key.length; i++) {
      const alphabetIndex = key[i].charCodeAt(0) - 97;

      if (!node.children[alphabetIndex]) {
        return null;
      }

      node = node.children[alphabetIndex];
    }

    while (!node.value && node.children) {
      const nodeWithChildren = node.children.find((i) => i !== null);

      if (!nodeWithChildren) {
        return null;
      }

      node = nodeWithChildren;
    }

    if (!node.value || typeof node.value !== guard) {
      return null;
    }

    return node.value as GuardTypeMap[K];
  }

  remove(key: string) {
    const node = this.find(key);
    if (node) node.value = null;
  }
}

export { Trie };
