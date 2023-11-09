const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = parseInt(input[0]);
let m = parseInt(input[1]);

let com = input.slice(2).map((i) => i.split(" ").map(Number));

let graph = {};

// 1부터 컴퓨터 수만큼 빈 배열 만들기
for (let i = 1; i <= n; i++) {
  graph[i] = [];
}

for (let i = 0; i < m; i++) {
  let [a, b] = com[i];
  // 양방향 연결
  graph[a].push(b);
  graph[b].push(a);
}

let count = 0;
let visit = Array(n + 1).fill(0);
function dfs(node) {
  visit[node] = true; // 현재 노드 방문
  count++;

  for (let x of graph[node]) {
    if (!visit[x]) {
      dfs(x);
    }
  }
}
dfs(1);

console.log(count - 1);
