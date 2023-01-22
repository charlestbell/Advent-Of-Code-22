const fs = require("fs");

const rawInput = fs.readFileSync("./source.txt", "utf8");
console.log("RAW INPUT", rawInput);

for (var i = 3; i < rawInput.length; i++) {
  console.log(
    "INPUT",
    rawInput[i - 3],
    rawInput[i - 2],
    rawInput[i - 1],
    rawInput[i]
  );

  // compare -2 to 1
  switch (rawInput[i - 2]) {
    case rawInput[i - 3]:
      continue;
  }

  // compare -1 to 2
  switch (rawInput[i - 1]) {
    case rawInput[i - 2]:
    case rawInput[i - 3]:
      continue;
  }

  // compare current to 3
  switch (rawInput[i]) {
    case rawInput[i - 1]:
    case rawInput[i - 2]:
    case rawInput[i - 3]:
      continue;

    default:
      console.log("ANSWER: ", i);
      return;
  }
}
