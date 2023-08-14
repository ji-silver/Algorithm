function solution(numbers) {
    let sum = 0
    for(let i = 0; i < 10; i++) {
        let result = numbers.includes(i)
        if(!result) {
            sum = sum + i
        }
    }
    return sum;
}