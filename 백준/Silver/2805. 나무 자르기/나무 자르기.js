const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 주어진 나무 높이 중에 절단기의 높이를 조절해서 나무를 자를 때 최적의 높이 찾기
// 나무의 수: N, 필요한 나무의 길이: M
let [N, M] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let low = 0;
let high = Math.max(...arr);

let result = 0;

// low가 high보다 작거나 같을 때 까지
while (low <= high) {
  let mid = Math.floor((low + high) / 2); // 중간 값

  // 현재 높이로 잘랐을 때 총 길이 계산하기
  let total = arr.reduce((a, height) => {
    if (height > mid) {
      a += height - mid;
    }
    return a;
  }, 0);

  if (total >= M) {
    result = mid;
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}

console.log(result);
