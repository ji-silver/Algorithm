function solution(numbers) {
    let x = numbers.sort((a, b) => b - a).slice(0,2);
    let y = numbers.sort((a, b) => a - b).slice(0,2);
    if(x[0] * x[1] > y[0]  * y[1]) {
        return x[0] * x[1];
    } else return y[0]  * y[1];
}