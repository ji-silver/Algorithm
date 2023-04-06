function solution(arr, divisor) {
    let array = arr.map(Number).sort((a,b) => a-b);
    let result = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % divisor == 0) {
            result.push(array[i])
        }
    }
    if(result.length === 0) {
            return [-1]
        } 
    return result;
}