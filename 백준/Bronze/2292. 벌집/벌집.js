const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString();

const num = parseInt(input);

let count = 1;
let x = 1;
while (x < num) {
  x = x + 6 * count;
  count++;
}
console.log(count);