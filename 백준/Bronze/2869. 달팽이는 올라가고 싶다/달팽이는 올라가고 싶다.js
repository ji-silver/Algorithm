const fs = require("fs");

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const A = input[0]; // 올라간 높이
const B = input[1]; // 내려간 높이
const V = input[2]; // 높이

// 총 올라가야하는 높이에서 하루에 올라갈 수 있는 높이로 나누기
const days = Math.ceil((V - B) / (A - B));

console.log(days);
