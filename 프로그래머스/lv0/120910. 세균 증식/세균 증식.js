function solution(n, t) {
    // 1시간에 두배 (n = 세균 수, t = 시간)
    let result = 0;
    for(let i = 1; i <= t; i++) { // i는 1부터 t시간 까지
        result = n *= 2;
    }
    return result;
}