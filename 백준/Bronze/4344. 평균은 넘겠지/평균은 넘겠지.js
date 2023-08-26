const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = parseInt(input[0]);
let answer = [];
for (let i = 1; i <= num; i++) {
  let x = input[i].split(" ").map(Number); // [5, 50, 50, 70, 80, 100]
  let num = x.splice(0, 1);
  let result = x.reduce((a, b) => a + b) / num;
  let avgLength = x.filter((x) => x > result).length;
  answer.push(((avgLength / num) * 100).toFixed(3) + "%");
}

console.log(answer.join("\n"));