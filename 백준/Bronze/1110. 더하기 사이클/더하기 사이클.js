const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim();

const n = parseInt(input);

let num = n;
let count = 0;
while (true) {
  let x = Math.floor(num / 10); // 십의 자리
  let y = num % 10; // 일의 자리

  // y * 10 해서 삽의자리로 이동, x + y를 10으로 나눈 나머지를 일의자리
  num = y * 10 + ((x + y) % 10);
  count++;
  if (n === num) {
    break;
  }
}
console.log(count);
