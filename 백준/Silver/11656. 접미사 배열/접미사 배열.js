const fs = require("fs");
const { parse } = require("path");

let input = fs.readFileSync("/dev/stdin").toString().trim();
let arr = [];
for (let i = 0; i < input.length; i++) {
  arr.push(input.slice(i));
}
arr.sort();
console.log(arr.join("\n"));
