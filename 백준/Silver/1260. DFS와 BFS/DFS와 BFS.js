const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// N: 정점 개수, M: 간선 개수, V: 시작 정점 번호
const [N, M, V] = input[0].split(" ").map(Number);
const graph = Array.from(Array(N + 1), () => new Array(N + 1).fill(0));

for (let i = 1; i <= M; i++) {
  let [start, end] = input[i].split(" ").map(Number);
  graph[start][end] = graph[end][start] = 1; // 양방향
}

// 방문 여부, 탐색 결과
const visitedDFS = new Array(N + 1).fill(false);
const resultDFS = [];
const visitedBFS = new Array(N + 1).fill(false);
const resultBFS = [];

function DFS(vertex) {
  visitedDFS[vertex] = true; // 방문 표시하기
  resultDFS.push(vertex);

  for (let i = 1; i < graph.length; i++) {
    if (graph[vertex][i] && !visitedDFS[i]) {
      DFS(i); // 재귀
    }
  }
}

function BFS(startVertex) {
  const queue = [startVertex];
  visitedBFS[startVertex] = true; // 시작 정정 방문

  while (queue.length) {
    const vertex = queue.shift(); // 큐에서 정점 추출
    resultBFS.push(vertex);

    for (let i = 1; i <= N; i++) {
      if (graph[vertex][i] && !visitedBFS[i]) {
        visitedBFS[i] = true;
        queue.push(i);
      }
    }
  }
}

DFS(V);
BFS(V);

console.log(resultDFS.join(" "));
console.log(resultBFS.join(" "));
