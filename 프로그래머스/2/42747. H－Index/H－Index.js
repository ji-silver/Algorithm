function solution(citations) {
    
    // 논문을 인용 횟수에 따라 내림차순으로 정렬
    citations.sort((a, b) => b - a)
    
    // H-Index 찾기. 배열에 각 논문의 인용 횟수와 인덱스를 비교해서 인덱스보다 크거나 같은 값이 H-Index
    for(let i = 0; i < citations.length; i++) {
        if(citations[i] < i + 1) {
            return i;
        }
    }
    
    return citations.length
}