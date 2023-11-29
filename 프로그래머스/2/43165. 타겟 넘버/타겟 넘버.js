function solution(numbers, target) {
    var answer = 0; // target을 만들 수 있는 경우의 수
    
    // 깊이 우선 탐색하기(현재 인덱스, 누적 합)
    function dfs(index, sum) {
        // 인덱스가 배열 끝(number.length)까지 탐색했으면 실행
        if(index === numbers.length) {
            // 누적합이 target과 같다면 answer 경우의 수 증가
            if(sum === target) {
                answer++
            }
            return
        }
        
        // 재귀 호출 (인덱스 1씩 증가시키기, 인덱스 숫자를 빼거나 더하는 경우)
        dfs(index + 1, sum + numbers[index])
        dfs(index + 1, sum - numbers[index])
    }
    
    dfs(0, 0); // 0부터 깊이 우선 탐색 시작
    return answer;
    
}