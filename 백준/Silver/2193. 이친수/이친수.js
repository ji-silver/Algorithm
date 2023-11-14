const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim();
let n = parseInt(input);

let dp = new Array(n + 1).fill(0);

dp[1] = 1;
dp[2] = 1;

for (let i = 3; i <= n; i++) {
  dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
}

console.log(dp[n].toString());
