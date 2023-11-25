const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim();

let N = parseInt(input);
let MOD = 15746;
let dp = new Array(N + 1).fill(0);
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= N; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
}

console.log(dp[N]);
