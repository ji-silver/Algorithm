const fs = require("fs");

let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let n = input[0];
let arr = input.slice(1);

let stack = [];
let result = [];
let current = 1;

for (let i = 0; i < n; i++) {
  while (stack.length === 0 || stack[stack.length - 1] !== arr[i]) {
    if (current > n) {
      console.log("NO");
      return;
    }

    stack.push(current);
    result.push("+");
    current++;
  }

  stack.pop();
  result.push("-");
}

console.log(result.join("\n"));
