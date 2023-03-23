function solution(n) {
    let num = 0;
    let count = 0;
    
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= i; j++) {
            if(i % j === 0) num+=1;
        }
        if(num >= 3) count+=1
        num = 0;
    }
    return count;
}