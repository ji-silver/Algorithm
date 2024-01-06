const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0]); // 집의 수
const arr = input.slice(1).map((i) => i.split(" ").map(Number)); // 비용

// 모든 집을 칠하는 비용의 최솟값 구하기
let dp = new Array(N).fill(0).map(() => new Array(3).fill(0));
dp[0][0] = arr[0][0];
dp[0][1] = arr[0][1];
dp[0][2] = arr[0][2];

for (let i = 1; i < N; i++) {
  dp[i][0] = arr[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
  dp[i][1] = arr[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
  dp[i][2] = arr[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
}

console.log(Math.min(dp[N - 1][0], dp[N - 1][1], dp[N - 1][2]));
