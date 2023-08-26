const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.splice(0, 1);
console.log(
  input
    .map(Number)
    .sort((a, b) => a - b)
    .join("\n")
);