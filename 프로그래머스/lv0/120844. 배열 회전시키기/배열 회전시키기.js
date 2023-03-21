function solution(numbers, direction) {
    let arr = [...numbers];
    let num1;
    let num2;
    if(direction === 'right') {
        let num1 = numbers.pop();
        numbers.unshift(num1);
    } else {
        let num2 = numbers.shift();
        numbers.push(num2);
    }
    return numbers;
}