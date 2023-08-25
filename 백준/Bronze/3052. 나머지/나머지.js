const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = input.map(Number);
let arr = [];
for (let i = 0; i < num.length; i++) {
  arr.push(num[i] % 42);
}
const result = new Set(arr);
console.log(result.size);
