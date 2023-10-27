const fs = require("fs");

let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1);

let stack = [];
let answer = [];

for (let i = 0; i < input.length; i++) {
  const [command, arg] = input[i].split(" ");
  if (command === "push") {
    stack.push(parseInt(arg));
  } else if (command === "pop") {
    if (stack.length === 0) {
      answer.push(-1);
    } else {
      answer.push(stack.pop());
    }
  } else if (command == "size") {
    answer.push(stack.length);
  } else if (command === "empty") {
    if (stack.length === 0) {
      answer.push(1);
    } else {
      answer.push(0);
    }
  } else if (command === "top") {
    if (stack.length === 0) {
      answer.push(-1);
    } else {
      answer.push(stack[stack.length - 1]);
    }
  }
}

console.log(answer.join("\n"));
