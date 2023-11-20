const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = parseInt(input);
const MOD = 10007;
let dp = new Array(n + 1).fill(0);

// 직사각형 크기가 1일 때 경우의 수 1, 크기가 2일 때 경우의 수 3가지
dp[1] = 1;
dp[2] = 3;

for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] * 2) % MOD;
}

console.log(dp[n]);
