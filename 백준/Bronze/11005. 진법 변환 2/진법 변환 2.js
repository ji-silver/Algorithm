const fs = require("fs");

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let x = input[0];
let y = input[1];
let result = x.toString(y).toUpperCase();

console.log(result);
