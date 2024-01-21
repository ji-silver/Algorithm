const fs = require("fs");

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function reduceFraction(numerator, denominator) {
  const common = gcd(numerator, denominator);
  return `${numerator / common}/${denominator / common}`;
}

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0]);
const radii = input[1].split(" ").map(Number);

const result = [];
for (let i = 1; i < N; i++) {
  const common = gcd(radii[0], radii[i]);
  result.push(reduceFraction(radii[0], radii[i]));
}

console.log(result.join("\n"));
