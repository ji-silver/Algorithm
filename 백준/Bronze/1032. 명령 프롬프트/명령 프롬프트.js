const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);
const arr = input.slice(1);

let result = "";
for (let i = 0; i < arr[0].length; i++) {
  let char = true;
  for (let j = 1; j < n; j++) {
    if (arr[j][i] !== arr[0][i]) {
      char = false;
      break;
    }
  }
  if (char) {
    result += arr[0][i];
  } else {
    result += "?";
  }
}

console.log(result);
