const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim();
let N = input.split("").map(Number);
N.sort((a, b) => b - a);

let sum = N.reduce((acc, num) => acc + num, 0);

// 30의 배수인지 확인
if (sum % 3 === 0 && N[N.length - 1] === 0) {
  console.log(N.join(""));
} else {
  console.log(-1);
}
