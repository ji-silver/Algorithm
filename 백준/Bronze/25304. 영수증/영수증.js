const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const X = parseInt(input[0]);
const N = parseInt(input[1]);

let result = [];
for (let i = 2; i < N + 2; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  result.push(a * b);
}

const answer = result.reduce((x, y) => x + y);
if (X === answer) {
  console.log("Yes");
} else {
  console.log("No");
}
