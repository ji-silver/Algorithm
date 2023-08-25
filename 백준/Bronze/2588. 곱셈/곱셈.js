const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const x = input[0];
const y = input[1];
for (let i = x.length - 1; i >= 0; i--) {
  console.log(parseInt(x * y[i]));
}
console.log(parseInt(x * y));