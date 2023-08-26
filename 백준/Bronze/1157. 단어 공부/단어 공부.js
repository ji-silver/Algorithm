const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim();

const x = input.toUpperCase();
let char = "";
let arr = [...new Set(x)];
let answer = 0;

// arr = [ 'M', 'I', 'S', 'P' ]
for (let i = 0; i < arr.length; i++) {
  let result = x.split(""); // ['M', 'I', 'S', 'S','I', 'S', 'S', 'I','P', 'I']
  let strLength = result.filter((x) => x === arr[i]).length;
  if (answer < strLength) {
    answer = strLength;
    char = arr[i];
  } else if (answer === strLength) {
    char = "?";
  }
}

console.log(char);
