const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let queue = [];
let answer = [];

for (let i = 1; i < input.length; i++) {
  const [command, arg] = input[i].split(" ");
  if (command === "push") {
    queue.push(parseInt(arg));
  } else if (command === "pop") {
    if (queue.length > 0) {
      answer.push(queue.shift());
    } else answer.push(-1);
  } else if (command === "size") {
    answer.push(queue.length);
  } else if (command === "empty") {
    if (queue.length === 0) {
      answer.push(1);
    } else answer.push(0);
  } else if (command === "front") {
    if (queue.length === 0) {
      answer.push(-1);
    } else {
      answer.push(queue[0]);
    }
  } else if (command === "back") {
    if (queue.length === 0) {
      answer.push(-1);
    } else {
      answer.push(queue[queue.length - 1]);
    }
  }
}

console.log(answer.join("\n"));
