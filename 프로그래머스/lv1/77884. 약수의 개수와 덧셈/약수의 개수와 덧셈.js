function solution(left, right) {
    let result = 0;
    for(let i = left; i <= right; i++) { // 13, 14, 15 ...43
        let count = 0;
        for(let j = 1; j <= i; j++) { // 1~13
           if(i % j === 0) { // 13 % 1
               count+=1;
           }
        }
        if(count % 2 === 0) {
            result = result + i;
        } else {
            result = result - i;
        }
    }
    return result;
}