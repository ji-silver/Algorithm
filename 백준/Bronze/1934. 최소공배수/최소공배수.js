const fs = require("fs");

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((i) => i.split(" ").map(Number));

for (let i = 0; i < input.length; i++) {
  let gcd = 1;
  let x = input[i][0];
  let y = input[i][1];
  let num = x > y ? y : x;

  for (let i = 2; i <= num; i++) {
    if (x % i === 0 && y % i === 0) {
      gcd = i;
    }
  }
  console.log((x * y) / gcd);
}
