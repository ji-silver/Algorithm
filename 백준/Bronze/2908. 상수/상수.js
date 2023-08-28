const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim();

let arr = input.split("");

let num = arr
  .reverse()
  .join("")
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

console.log(num[0]);