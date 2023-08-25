const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const x = parseInt(input[0]);
const y = input[1].split(" ").map((x) => Number(x));
const maxNum = Math.max.apply(null, y);
const minNum = Math.min.apply(null, y);

console.log(minNum, maxNum);
