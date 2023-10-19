const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim();
let arr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

let count = 0;
for (let i = 0; i < arr.length; i++) {
  while (input != input.replace(arr[i], "")) {
    count++;
    input = input.replace(arr[i], " ");
  }
}
console.log(count + input.split(" ").join("").length);
