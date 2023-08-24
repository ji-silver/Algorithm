const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const H = parseInt(input[0]);
const M = parseInt(input[1]);

const minutes = H * 60 + M; // 10 * 60 + 10 = 610
const total = (minutes - 45 + 1440) % 1440; // (1440 = 60분 * 24)
const newH = Math.floor(total / 60);
const newM = total % 60;

console.log(`${newH} ${newM}`);