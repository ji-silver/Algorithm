const fs = require("fs");

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let result = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === 0) break;
  let arr = input[i].toString();
  let numLength = arr.length;
  let isPalindrome = true;
  for (let j = 0; j < Math.floor(numLength / 2); j++) {
    if (arr[j] !== arr[numLength - j - 1]) {
      isPalindrome = false;
      break;
    }
  }
  result.push(isPalindrome ? "yes" : "no");
}

console.log(result.join("\n"));
