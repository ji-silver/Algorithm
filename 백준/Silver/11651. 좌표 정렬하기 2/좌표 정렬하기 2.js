const fs = require("fs");
const { parse } = require("path");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let n = parseInt(input[0]);
let points = input.splice(1).map((i) => i.split(" ").map(Number));

points.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});
let result = [];
for (let i = 0; i < n; i++) {
  result.push(`${points[i][0]} ${points[i][1]}`);
}

console.log(result.join("\n"));
