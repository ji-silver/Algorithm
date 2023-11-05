const fs = require("fs");

let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let T = input[0];
for (let i = 1; i <= T; i++) {
  let n = input[i];
  let dp = new Array(n + 1).fill(0); // 0부터 n까지의 1, 2, 3의 합 저장

  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;

  for (let j = 3; j <= n; j++) {
    dp[j] = dp[j - 1] + dp[j - 2] + dp[j - 3];
  }
  console.log(dp[n]);
}
