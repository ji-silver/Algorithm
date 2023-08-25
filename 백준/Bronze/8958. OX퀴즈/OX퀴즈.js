const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const x = parseInt(input[0]);
const y = input;

let arr = [];
let result = 0;
let score = 0;

for (let i = 1; i <= x; i++) {
  arr = y[i].split("");
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === "O") {
      score++;
      result += score;
    } else {
      score = 0;
    }
  }
  console.log(result);
  result = 0;
  score = 0;
}
