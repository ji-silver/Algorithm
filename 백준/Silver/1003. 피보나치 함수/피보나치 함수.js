const fs = require("fs");

let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function countZero(n, memo) {
  memo = memo || {};
  let zero = 0;
  let one = 0;

  function fibo(m) {
    if (m === 0) {
      zero++;
      return 0;
    } else if (m === 1) {
      one++;
      return 1;
    } else if (memo[m] !== undefined) {
      zero += memo[m][0];
      one += memo[m][1];
      return memo[m][2];
    } else {
      let result = fibo(m - 1) + fibo(m - 2);
      memo[m] = [zero, one, result];
      return result;
    }
  }
  fibo(n);
  return [zero, one];
}

let T = input[0];
let result = [];

for (let i = 1; i <= T; i++) {
  let N = input[i];
  let [zero, one] = countZero(N);
  result.push(`${zero} ${one}`);
}

console.log(result.join("\n"));
