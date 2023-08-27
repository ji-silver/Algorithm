const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const x = input.shift();

const arr = [...new Set(input)];

const sorted = arr.sort((a, b) => {
  if (a.length === b.length) {
    return a.localeCompare(b);
  }
  return a.length - b.length;
});

for (let i = 0; i < sorted.length; i++) {
  console.log(sorted[i]);
}
