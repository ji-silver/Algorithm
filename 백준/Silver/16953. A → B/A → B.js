const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim();

let [A, B] = input.split(" ").map(Number);
let count = 0;

// B가 더 크면 실행
while (B > A) {
  if (B % 10 === 1) {
    B = Math.floor(B / 10);
  } else if (B % 2 === 0) {
    B /= 2;
  } else {
    console.log(-1);
    return;
  }
  count++;
}
console.log(B === A ? count + 1 : -1);
