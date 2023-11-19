const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim();

let result = 0;
let current = 0;
let isAddition = true;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "+") {
    result = result + (isAddition ? current : -current);
    current = 0;
  } else if (input[i] === "-") {
    result = result + (isAddition ? current : -current);
    current = 0;
    isAddition = false;
  } else {
    // 문자를 숫자로 변환
    // 123일 때 input[0] = 1, input[1] = 1 * 10 + 2 = 12, input[3] = 12 * 10 + 3 = 123
    current = current * 10 + parseInt(input[i]);
  }
}

result = result + (isAddition ? current : -current);

console.log(result);
