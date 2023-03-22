function solution(order) {
    let result = 0;
    let num = order.toString().split("").map(Number)
    for(let i = 0; i < num.length; i++) {
        if(num[i] !== 0) {
            if(num[i] % 3 === 0) {
            result+=1;
            }
        }   
    }
    return result;
}