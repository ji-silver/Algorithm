const fs = require("fs");

let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .slice(1);

let arr = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] !== 0) {
    arr.push(input[i]);
  } else {
    arr.pop();
  }
}

console.log(arr.length > 0 ? arr.reduce((a, b) => a + b) : 0);
