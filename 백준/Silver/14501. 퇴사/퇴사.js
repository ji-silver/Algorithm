const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let N = parseInt(input[0]);
let arr = input.slice(1).map((i) => i.split(" ").map(Number));

const dp = Array(N + 1).fill(0);
for (let i = N - 1; i >= 0; i--) {
  const [T, P] = arr[i];

  if (i + T <= N) {
    dp[i] = Math.max(dp[i + T] + P, dp[i + 1]);
  } else {
    dp[i] = dp[i + 1];
  }
}

console.log(dp[0]);
