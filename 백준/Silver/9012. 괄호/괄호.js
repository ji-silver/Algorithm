const fs = require("fs");

let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

for (let i = 0; i < input.length; i++) {
  let arr = input[i];
  let stack = [];
  let result = "YES";
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === "(") {
      stack.push(arr[j]);
    } else if (arr[j] === ")") {
      if (stack.length !== 0 && stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        result = "NO";
        break;
      }
    }
  }

  if (stack.length !== 0) {
    result = "NO";
  }
  console.log(result);
}
