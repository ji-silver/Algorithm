const fs = require("fs");

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let A = input[0];
let B = input[1];
let arr = [];
let result = 0;

for (let i = 1; i <= 1000; i++) {
  for (let j = 0; j < i; j++) arr.push(i);
  if (arr.length > 1000) break;
}

for (let i = A - 1; i < B; i++) {
  result += arr[i];
}
console.log(result);
