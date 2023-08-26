const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const x = parseInt(input[0]);
const y = parseInt(input[1]);

let gcd = 1;
let num = x > y ? y : x;
for (let i = 2; i <= num; i++) {
  if (x % i === 0 && y % i === 0) {
    gcd = i;
  }
}

console.log(gcd);
console.log((x * y) / gcd);
