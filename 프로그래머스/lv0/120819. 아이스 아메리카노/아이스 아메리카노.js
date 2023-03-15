function solution(money) {
    
    let result = parseInt(money / 5500);
    let answer = money % 5500;
    let arr = [result, answer]
    return arr;
}