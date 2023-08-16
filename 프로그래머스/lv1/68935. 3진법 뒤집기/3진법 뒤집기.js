function solution(n) {
    let arr = [];
    let result = 0;
    let j = 0
    
    while (n >= 1) {
        let num = n % 3;
        arr.push(num);
        n = Math.floor(n / 3);
    }
    for(let i = arr.length-1 ; i >= 0; i--) {
       let cal = Math.pow(3, j)
       if(cal === 0) cal = 1
        result = result + arr[i] * cal
        j++
    }
    return result;
}