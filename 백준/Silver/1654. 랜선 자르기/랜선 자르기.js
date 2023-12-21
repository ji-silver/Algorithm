const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 이미 가지고 있는 랜선 개수 K, 필요한 랜선 개수 N
const [K, N] = input[0].split(" ").map(Number);
const arr = input.slice(1).map(Number);

// 이진 탐색 하기 (시작, 끝 값 설정)
let start = 1;
let end = Math.max(...arr); // (... 전개 연산자 사용 이유는 배열 각 요소를 전달하기 위해)

// start가 end보다 작거나 같을 때까지 반복
while (start <= end) {
  let mid = Math.floor((start + end) / 2); // 중간 값
  let count = 0; // 랜선 개수 저장

  // ex. [802, 743, 457, 539]일 때 mid가 200이면 200만큼 잘라서 개수 세기
  for (let i = 0; i < K; i++) {
    count += Math.floor(arr[i] / mid);
  }

  // 목표 개수보다 크거나 같으면
  if (count >= N) {
    start = mid + 1; // 더 만들 수 있으므로 start를 증가시키기
  } else {
    end = mid - 1; // 더 못만들기때문에 더 작은 길이 찾기 위해 end 감소
  }
}
const result = end; // 최대 랜선 길이 저장
console.log(result);
