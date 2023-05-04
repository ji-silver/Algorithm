function solution(t, p) {
    let num = p.length
    let result = 0;
    
    for(let i = 0; i <= t.length - num; i++) { // 0부터 문자길이 만큼 반복
        if(t.substr(i, num) <= p) {
            result++
        }
    }
    return result;
}