const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const x = parseInt(input[0] * input[1] * input[2]);
const result = x.toString().split("").map(Number);

for (let i = 0; i <= 9; i++) {
  console.log(result.filter((x) => x === i).length);
}
