function solution(n) {

    if(n === 0) return 0
    if(n === 1) return 1
    
    let a = 0;
    let b = 1;
    let result = 0;
    
    // i는 2부터 n까지
    for(let i = 2; i <= n; i++) {
        result = (a + b) % 1234567;
        
        // 뒤로 가기
        a = b
        b = result
    }
    
    return result;
}