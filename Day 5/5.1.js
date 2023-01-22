// [P]     [C]         [M]
// [D]     [P] [B]     [V] [S]
// [Q] [V] [R] [V]     [G] [B]
// [R] [W] [G] [J]     [T] [M]     [V]
// [V] [Q] [Q] [F] [C] [N] [V]     [W]
// [B] [Z] [Z] [H] [L] [P] [L] [J] [N]
// [H] [D] [L] [D] [W] [R] [R] [P] [C]
// [F] [L] [H] [R] [Z] [J] [J] [D] [D]
//  1   2   3   4   5   6   7   8   9

const fs = require("fs");

let stacks = [
  ["F", "H", "B", "V", "R", "Q", "D", "P"],
  ["L", "D", "Z", "Q", "W", "V"],
  ["H", "L", "Z", "Q", "G", "R", "P", "C"],
  ["R", "D", "H", "F", "J", "V", "B"],
  ["Z", "W", "L", "C"],
  ["J", "R", "P", "N", "T", "G", "V", "M"],
  ["J", "R", "L", "V", "M", "B", "S"],
  ["D", "P", "J"],
  ["D", "C", "N", "W", "V"],
];

const rawInput = fs.readFileSync("./source.txt", "utf8");
console.log("RAW INPUT", rawInput);

const separateLines = rawInput.split(/\r?\n|\r|\n/g);
console.log("SEPARATE LINES", separateLines);

const numbers = separateLines.map((line) => {
  const splitLine = line.split(" ");
  return (numbersOnly = splitLine.filter((line) =>
    !isNaN(line) ? line : null
  ));
});
console.log("NUMBERS", numbers);

const moveCrates = (numbers) => {
  numbers.forEach((numberArray) => {
    console.log("SOURCE STACK", stacks[numberArray[1] - 1]);
    // console.log(stacks[numberArray[1] - 1]);
    // console.log("Stacks", stacks);
    console.log("SOURCE STACK LENGTH", stacks[numberArray[1] - 1].length);
    console.log("DESTINATION STACK", stacks[numberArray[2] - 1]);
    console.log("DESTINATION LENGTH", stacks[numberArray[2] - 1].length);
    // console.log(
    //   stacks[numberArray[1] - 1].splice(
    //     stacks[numberArray[1] - 1].length - numberArray[0]
    //   )
    // );
    console.log("NUMBER OF MOVES", numberArray[0]);

    for (let i = 0; i < numberArray[0]; i++) {
      console.log("ITERATOR", i);
      const crate = stacks[numberArray[1] - 1].pop();
      console.log("CRATE", crate);
      console.log("DESTINATION STACK IN LOOP", stacks[numberArray[2] - 1]);
      stacks[numberArray[2] - 1].push(crate);
    }
    console.log("SOURCE STACK AFTER MOVE", stacks[numberArray[1] - 1]);
    console.log("DESTINATION STACK AFTER MOVE", stacks[numberArray[2] - 1]);
  });
  return stacks;
};

// stacks[numberArray[0]].length - (stacks[numberArray[0]] + 1)
const movedCrates = moveCrates(numbers);
console.log("MOVED CRATES", movedCrates);

const getTopCrates = () => {
  let string = "";
  stacks.forEach((stack) => {
    string = string.concat(stack[stack.length - 1]);
    console.log("STRING", string);
  });
  return string;
};

let finalOutput = getTopCrates();
console.log("FINAL OUTPUT", finalOutput);
