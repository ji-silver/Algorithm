const fs = require("fs");

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 0; i < input.length; i++) {
  if (input[i] === -1) break;
  let num = input[i];
  let arr = [];
  let result = 0;
  for (let j = 1; j <= Math.floor(num / 2); j++) {
    if (num % j === 0) {
      arr.push(j);
      result += j;
    }
  }
  if (result === num) {
    console.log(`${num} = ${arr.join(" + ")}`);
  } else {
    console.log(`${num} is NOT perfect.`);
  }
}
