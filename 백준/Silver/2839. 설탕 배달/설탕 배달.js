const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim();

input = parseInt(input);
let count = 0;

// 3을 먼저 계속 빼기
// 5로 나눴을 때 0이 아니거나 input이 0보다 클 때
while (input % 5 !== 0 && input > 0) {
  input -= 3;
  count++;
}

if (input < 0) {
  console.log(-1);
} else {
  count += input / 5;
  console.log(count);
}
