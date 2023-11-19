const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = parseInt(input[0]);
let scores = input.slice(1).map(Number);

let dp = new Array(n).fill(0);

// 첫번째 계단 밟기
dp[0] = scores[0];

// (첫번째 계단과 두번째 계단을 더한값)과 (첫번째 계단을 밟지 않고 두번째 계단만 밟은 값) 중 더 큰 값을 dp[1]에 저장
dp[1] = Math.max(scores[0] + scores[1], scores[1]);

for (let i = 2; i < n; i++) {
  // 이전 계단이 두 번째 계단보다 클 때만 i - 3을 고려
  let option = i - 3 >= 0 ? dp[i - 3] : 0;
  dp[i] = Math.max(dp[i - 2] + scores[i], option + scores[i - 1] + scores[i]);
}
console.log(dp[n - 1]);
