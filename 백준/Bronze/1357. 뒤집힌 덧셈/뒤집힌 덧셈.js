const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let result = 0;
let arr = [];
for (let i = 0; i < input.length; i++) {
  let reversed = parseInt(input[i].split("").reverse().join(""));
  result += reversed;
}
arr.push(result.toString().split("").reverse().join(""));
console.log(parseInt(arr[0]));
