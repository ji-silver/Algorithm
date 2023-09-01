const fs = require("fs");

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    const select = [...input];
    select.splice(i, 1);
    select.splice(j - 1, 1);

    let sum = select.reduce((a, b) => a + b);
    if (sum === 100) {
      let sorted = select.sort((a, b) => a - b);
      for (let k = 0; k < sorted.length; k++) {
        console.log(sorted[k]);
      }
      process.exit(0);
    }
  }
}
