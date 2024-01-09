const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let sizeA = input[0].split(" ")[0];
let sizeB = input[0].split(" ")[1];
let setA = new Set(input[1].split(" ").map(Number));
let setB = new Set(input[2].split(" ").map(Number));

let setA_B = new Set([...setA].filter((x) => !setB.has(x)));
let setB_A = new Set([...setB].filter((x) => !setA.has(x)));

console.log(setA_B.size + setB_A.size);
