const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let N = parseInt(input[0]);
let arr = input.slice(1).map(Number);

arr.sort((a, b) => b - a);
let maxWeight = 0;

for (let i = 0; i < N; i++) {
  maxWeight = Math.max(maxWeight, arr[i] * (i + 1));
}

console.log(maxWeight);
