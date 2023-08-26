const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const x = parseInt(input[0]);
const y = input[1].split(" ").map(Number);
const maxNum = Math.max(...y);

console.log(
  y.map((i) => (i / maxNum) * 100).reduce((a, b) => a + b) / x.toFixed(2)
);
