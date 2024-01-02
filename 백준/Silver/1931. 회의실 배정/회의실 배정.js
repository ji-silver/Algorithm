const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = parseInt(input[0]); // 회의 수
let arr = input.slice(1).map((i) => i.split(" ").map(Number)); // [시작 시간, 끝 시간]

// 회의가 겹치지 않게 회의의 최대 개수 찾기
arr.sort((a, b) => {
  // 끝나는 시간이 같으면 시작 시간을 기준으로 정렬
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  // 끝나는 시간을 기준으로 정렬
  return a[1] - b[1];
});

function meeting(arr) {
  let count = 0;
  let endTime = 0;

  for (let i = 0; i < arr.length; i++) {
    let meetings = arr[i];

    // 현재 시작시간이 회의 종료시간보다 크거나 같으면
    if (meetings[0] >= endTime) {
      count++;
      endTime = meetings[1];
    }
  }
  return count;
}

const result = meeting(arr);
console.log(result);
