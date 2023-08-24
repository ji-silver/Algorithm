const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

if (a === b && a === c) {
  console.log(10000 + a * 1000);
} else if ((a === b && a !== c) || (a === c && a !== b)) {
  console.log(1000 + a * 100);
} else if (b === c && a !== b) {
  console.log(1000 + b * 100);
} else {
  const maxNum = Math.max(a, b, c);
  console.log(maxNum * 100);
}
