const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = parseInt(input[0]);
const num = input[1];

let result = 0;
for (let i = 0; i < N; i++) {
  result += parseInt(num[i]);
}

console.log(result);
