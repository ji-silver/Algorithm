function solution(n, computers) {
    let visited = Array(n).fill(false); // 방문여부 저장
    let answer = 0; // 네트워크 개수 저장
    
    function dfs(node) {
        visited[node] = true;
        
        for(let i = 0; i < n; i++) {
            // 연결되어있고, 방문하지 않은 컴퓨터에 재귀 호출
            if(computers[node][i] === 1 && !visited[i]) {
                dfs(i)
            }
        }
    }
    
    // 모든 컴퓨터 dfs
    for(let i = 0; i < n; i++) {
        if(!visited[i]) {
            dfs(i)
            answer++
        }
    }
    return answer;
}