function solution(t, p) {
    let num = p.length - 1
    let result = 0;
    
    for(let i = 0; i < t.length - num; i++) { // 0부터 문자길이 만큼 반복
        if(parseInt(t.substr(i, num + 1)) <= parseInt(p)) {
            result++
        }
    }
    

    return result;
}