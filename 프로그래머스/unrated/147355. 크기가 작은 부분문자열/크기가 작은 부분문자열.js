function solution(t, p) {
    let num = p.length
    let result = 0;
    
    for(let i = 0; i < t.length - (num - 1); i++) { // 0부터 문자길이 만큼 반복
        if(parseInt(t.substr(i, num)) <= parseInt(p)) {
            result++
        }
    }
    return result;
}