const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const x = input.map((x) => Number(x));
const maxNum = Math.max.apply(null, x);

console.log(maxNum);
console.log(x.indexOf(maxNum) + 1);