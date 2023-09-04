const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let maxLength = Math.max(...input.map((i) => i.length));
let str = "";
for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j][i]) {
      str += input[j][i];
    }
  }
}

console.log(str);