function solution(n, m) {
    let arr = [];
    let num = 1;
    // 최대공약수
    for(let i = 2; i <= n; i++) {
        if(n % i === 0 && m % i === 0) {
            num = i;
        }
    }
    
    //최소공배수
    

    arr[0] = num;
    arr[1] = (n * m) / num
    return arr;
}