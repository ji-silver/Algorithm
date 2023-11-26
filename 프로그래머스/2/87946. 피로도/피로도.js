function solution(k, dungeons) {
  const n = dungeons.length;
  let answer = 0;

  // 순열 생성 함수
  const permute = (arr, selected, visited) => {
    if (selected.length === n) {
      // 생성된 순열에 대해 탐험 가능한 던전 수 확인
      let currentK = k;
      let count = 0;
      for (let i = 0; i < selected.length; i++) {
        const dungeonIndex = selected[i];
        const [required, consume] = dungeons[dungeonIndex];
        if (required <= currentK) {
          count++;
          currentK -= consume;
        } else {
          break; // 더 이상 진행할 수 없음
        }
      }
      answer = Math.max(answer, count); // 최대 던전 탐험 수 갱신
      return;
    }

    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        visited[i] = true;
        selected.push(i);
        permute(arr, selected, visited);
        selected.pop();
        visited[i] = false;
      }
    }
  };

  permute(dungeons, [], new Array(n).fill(false));

  return answer;
}