const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim();

// 여는 괄호일 때 막대시 시작, 닫는 괄호일 때 막대기 끝
// 레이저는 () 한 쌍일 때 표현
// 잘려진 막대기 수 구하기

let total = 0;
let stack = [];

for (let i = 0; i < input.length; i++) {
  // 여는 괄호일 때 스택에 추가
  if (input[i] === "(") {
    stack.push(i);
  } else {
    // 스택 마지막이 여는 괄호, 현재 i가 닫는 괄호일 때 = 레이저
    if (stack[stack.length - 1] + 1 === i) {
      stack.pop();
      total += stack.length; // 레이저로 잘린 개수 누적
    } else {
      // 그냥 닫는 괄호 ')' 일 때
      stack.pop();
      total++;
    }
  }
}

console.log(total);
