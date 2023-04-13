function solution(price, money, count) {
    // price = 이용료 -> 2번 이상 타면 * 2
    // money = 처음 가지고 던 금액
    // 횟수
    
    let result = 0;
    for(let i = 1; i <= count; i++) { // 1 ~ 4
        result = result + (price * i);
    }
    return result < money ? 0 : result - money
}