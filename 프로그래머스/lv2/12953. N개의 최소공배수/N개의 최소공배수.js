function solution(arr) {
    // 배열 숫자의 공통된 배수를 구하는데 가장 작은 값 찾기
    // 최소 공배수 구하는 법 -> arr 숫자 중 가장 작은 숫자 찾기
    // arr 배열 순회 하면서 현재 숫자가 minNum으로 나누어 떨어지지 않으면 minNum 증가시키기
    // minNum이 모든 모든 숫자들의 공배수가 될 때 까지 반복
    
    let minNum = Math.min(...arr)
    
    let num = minNum
    
    while(true) {
        // every: 모든 조건을 만족하는지
        if(arr.every(i => num % i === 0)) {
            return num
        }
        num += minNum
    }
    
}