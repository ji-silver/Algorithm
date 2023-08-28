const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n").splice(1);

const arr = input[0].split(" ").map(Number);

let count = 0;
for (let i = 0; i < arr.length; i++) {
  let isPrime = true;
  if (arr[i] === 1) {
    isPrime = false;
    continue;
  }
  for (let j = 2; j < arr[i]; j++) {
    if (arr[i] % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    count++;
  }
}
console.log(count);
