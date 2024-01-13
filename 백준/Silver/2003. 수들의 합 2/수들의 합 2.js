const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let [N, M] = input[0].split(" ").map(Number);
let numbers = input[1].split(" ").map(Number);

let count = 0;
let start = 0,
  end = 0,
  sum = 0;

while (end <= N) {
  if (sum === M) {
    count++;
    sum -= numbers[start++];
  } else if (sum < M) {
    sum += numbers[end++];
  } else {
    sum -= numbers[start++];
  }
}

console.log(count);
