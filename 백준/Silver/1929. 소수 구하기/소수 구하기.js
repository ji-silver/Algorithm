const fs = require("fs");

let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let M = input[0];
let N = input[1];
let result = [];

for (let i = M; i <= N; i++) {
  if (i <= 1) continue;
  let isPrime = true;

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    result.push(i);
  }
}

console.log(result.join("\n"));
