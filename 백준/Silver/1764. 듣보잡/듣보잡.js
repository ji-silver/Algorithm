const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input[0].split(" ");

let d = new Set();
let result = [];

for (let i = 1; i <= parseInt(N); i++) {
  d.add(input[i]);
}

for (let j = parseInt(N) + 1; j < input.length; j++) {
  if (d.has(input[j])) {
    result.push(input[j]);
  }
}

result.sort();
console.log(result.length);
for (let name of result) {
  console.log(name);
}
