const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let A = parseInt(input[0]);
let arr = input[1].split(" ").map(Number);
let dp = new Array(A).fill(1);

for (let i = 1; i < A; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
      dp[i] = dp[j] + 1;
    }
  }
}
let maxLength = Math.max(...dp);
console.log(maxLength);
