const fs = require("fs");

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("")
  .map(Number);

const sorted = input.sort((a, b) => b - a);

console.log(sorted.join(""));
