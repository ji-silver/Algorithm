const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

const str = input.join(" ");
let asc = [...input].sort((a, b) => a - b).join(" ");
let desc = [...input].sort((a, b) => b - a).join(" ");

if (str === asc) {
  console.log("ascending");
} else if (str === desc) {
  console.log("descending");
} else {
  console.log("mixed");
}
