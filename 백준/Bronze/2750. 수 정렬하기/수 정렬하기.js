const fs = require("fs");

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

let arr = input.map(Number).sort((a, b) => a - b);

arr.forEach((e) => {
  console.log(e);
});
