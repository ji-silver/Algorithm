const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString();

const N = parseInt(input);
let result = "";

for (let i = N; i > 0; i--) {
  result += i + "\n";
}

console.log(result);