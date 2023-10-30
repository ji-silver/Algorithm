const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// N = 동전 종류 수, K = 금액
let [N, K] = input[0].split(" ").map(Number);
let arr = input.slice(1).map(Number);

let count = 0;
let index = N - 1;

// 0보다 클때까지 반복
while (K > 0) {
  // 끝에서부터 시작 (K보다 작거나 같을 때 실행)
  if (arr[index] <= K) {
    // arr[index]를 K로 나누고 소수점 버리기
    let coin = Math.floor(K / arr[index]);
    count += coin; // 몇개를 사용했는지 count와 함께 더하기
    K -= coin * arr[index];
  }
  // 아니면 index 하나씩 줄이기
  index--;
}

console.log(count);
