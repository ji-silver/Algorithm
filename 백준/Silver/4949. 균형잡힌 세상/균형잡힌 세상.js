const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  if (input[i] === ".") break;

  let stack = [];
  let line = input[i];
  let check = true;

  for (let j = 0; j < line.length; j++) {
    let char = line[j];
    if (char === "(" || char === "[") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0 || stack[stack.length - 1] !== "(") {
        check = false;
        break;
      }
      stack.pop();
    } else if (char === "]") {
      if (stack.length === 0 || stack[stack.length - 1] !== "[") {
        check = false;
        break;
      }
      stack.pop();
    }
  }
  console.log(check && stack.length === 0 ? "yes" : "no");
}
