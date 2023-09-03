const fs = require("fs");

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

let arr = input.map((i) => i.split(" "));

let str = "";
let answer = [];
for (let i = 0; i < arr.length; i++) {
  let result = arr[i];
  let reversed = result.map((i) => i.split("").reverse().join(""));
  answer.push(reversed);
}

answer.forEach((e) => {
  console.log(e.join(" "));
});
