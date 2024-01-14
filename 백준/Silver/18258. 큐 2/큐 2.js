const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let N = parseInt(input[0]);
let arr = input.slice(1);

let result = [];
let queue = [];
let front = 0;
let rear = 0;

arr.forEach((i) => {
  const [a, b] = i.split(" ");

  switch (a) {
    case "push":
      queue[rear++] = parseInt(b);
      break;
    case "pop":
      result.push(front === rear ? -1 : queue[front++]);
      break;
    case "size":
      result.push(rear - front);
      break;
    case "empty":
      result.push(front === rear ? 1 : 0);
      break;
    case "front":
      result.push(front === rear ? -1 : queue[front]);
      break;
    case "back":
      result.push(front === rear ? -1 : queue[rear - 1]);
      break;
    default:
      break;
  }
});

console.log(result.join("\n"));
