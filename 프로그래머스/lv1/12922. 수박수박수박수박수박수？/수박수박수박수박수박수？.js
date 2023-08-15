function solution(n) {
    const su = '수';
    const bak = '박';
    let result = ''
    for(let i = 1; i <=n; i++) {
        if(i % 2 === 0) {
            result = result + bak;
        } else {
            result = result + su
        }
    }
    return result;
}