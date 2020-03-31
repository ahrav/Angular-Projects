import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(a: number, b: number): boolean {
    return this.data[a].toLowerCase() > this.data[b].toLowerCase();
  }

  swap(a: number, b: number): void {
    const characters = this.data.split("");
    const temp = characters[a];
    characters[a] = characters[b];
    characters[b] = temp;

    this.data = characters.join("");
  }
}
