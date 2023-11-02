const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let deque = [];
let answer = [];

for (let i = 1; i < input.length; i++) {
  const [command, arg] = input[i].split(" ");
  if (command === "push_front") {
    deque.unshift(arg);
  } else if (command === "push_back") {
    deque.push(arg);
  } else if (command === "pop_front") {
    if (deque.length === 0) {
      answer.push(-1);
    } else answer.push(deque.shift());
  } else if (command === "pop_back") {
    if (deque.length === 0) {
      answer.push(-1);
    } else answer.push(deque.pop());
  } else if (command === "size") {
    answer.push(deque.length);
  } else if (command === "empty") {
    if (deque.length === 0) {
      answer.push(1);
    } else answer.push(0);
  } else if (command === "front") {
    if (deque.length === 0) {
      answer.push(-1);
    } else answer.push(deque[0]);
  } else if (command === "back") {
    if (deque.length === 0) {
      answer.push(-1);
    } else answer.push(deque[deque.length - 1]);
  }
}
console.log(answer.join("\n"));
