const apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

let colors: string[] = ["red", "green", "blue"];
let myNums: number[] = [1, 2, 3, 4];
let truths: boolean[] = [false, true, false];

class Car {}

let car: Car = new Car();

let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use Type Annotations
// 1) function that returns any type
const json = '{"x": 10, "y": 13}';
const coordinates: { x: number; y: number } = JSON.parse(json);

// 2) When declare variable on one line and declare later
let words = ["red", "green"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) Variable type can not be inferred correctly
let numbers = [-10, -1, 12];
let numAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numAboveZero = numbers[i];
  }
}
