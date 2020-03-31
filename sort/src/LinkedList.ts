import { Sorter } from "./Sorter";

class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }
    let len = 1;
    let node = this.head;
    while (node.next) {
      len++;
      node = node.next;
    }
    return len;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error("INdex out of bounds");
    }

    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    throw new Error("Index out of bounds");
  }

  compare(a: number, b: number): boolean {
    if (!this.head) {
      throw new Error("List is empty");
    }

    return this.at(a).data > this.at(b).data;
  }

  swap(a: number, b: number): void {
    const left = this.at(a);
    const right = this.at(b);

    const lVal = left.data;
    left.data = right.data;
    right.data = lVal;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
