const fs = require("fs");

let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

let count = 0;

for (let i = 0; i < input.length; i++) {
  let word = input[i];
  let arr = [];
  let isGroupWord = true;

  for (let j = 0; j < word.length; j++) {
    let curr = word[j];
    if (arr.includes(curr)) {
      if (prev !== curr) {
        isGroupWord = false;
        break;
      }
    } else {
      arr.push(curr);
    }
    prev = curr;
  }

  if (isGroupWord) {
    count++;
  }
}

console.log(count);
