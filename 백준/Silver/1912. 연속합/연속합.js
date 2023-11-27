const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let n = parseInt(input[0]);
let arr = input[1].split(" ").map(Number);
let dp = new Array(n);
dp[0] = arr[0];
let maxSum = dp[0];

for (let i = 1; i < n; i++) {
  dp[i] = Math.max(dp[i - 1] + arr[i], arr[i]);
  maxSum = Math.max(maxSum, dp[i]);
}
console.log(maxSum);
