const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let x = parseInt(input[0]);
let repeatStr = "";
for (let i = 1; i <= x; i++) {
  let arr = input[i].split(" "); // 배열 [ '3', 'ABC' ]
  let num = parseInt(arr[0]); // 배열 앞자리 3
  let str = arr[1];
  for (let j = 0; j < str.length; j++) {
    repeatStr += str[j].repeat(num);
  }
  if (i !== x) {
    repeatStr += "\n";
  }
}

console.log(repeatStr);
