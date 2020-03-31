import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(a: number, b: number): boolean {
    return this.data[a] > this.data[b];
  }

  swap(a: number, b: number): void {
    const temp = this.data[a];
    this.data[a] = this.data[b];
    this.data[b] = temp;
  }
}
