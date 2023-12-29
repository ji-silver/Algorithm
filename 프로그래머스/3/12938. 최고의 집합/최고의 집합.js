function solution(n, s) {
    
    // n = 자연수 n개, s = n들의 합
    // n들의 합 중 최고의 합을 배열로 return 하기
    
    if(s < n) {
        return [-1]
    }
    
    const a = Math.floor(s / n);
    const b = s % n
    
    const answer = Array(n).fill(a)
    
    for(let i = 0; i < b; i++){
        answer[n - 1 - i]++
    }
    
    return answer
}