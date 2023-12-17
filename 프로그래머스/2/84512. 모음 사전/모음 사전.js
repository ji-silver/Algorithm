function solution(word) {
    
     // word가 사전에 몇번째 단어인지 A부터 UUUUU까지
    const arr = ['A', 'E', 'I', 'O', 'U'];
    let answer = 0;

    for (let i = 0; i < word.length; i++) {
        const index = arr.indexOf(word[i]); // 현재 알파벳이 arr 배열에서 몇번째 위치 하는지 
        
        // 5 - i는 현재자리에서 끝까지의 자리수로 index와 곱해서 현재 자리의 경우의 수 계산
        // 등차수열 합을 구하기 (1을 빼고 4로 나누는 이유는 처음부터 끝까지 합을 구하고 현재 합에서 이전까지의 합 빼주기)
        // +1은 1부터 시작하기 위해 더해주기
        answer += index * (Math.pow(5, 5 - i) - 1) / (5 - 1) + 1;
    }

    return answer;
}
