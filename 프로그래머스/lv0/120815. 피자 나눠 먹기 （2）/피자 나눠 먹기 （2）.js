function solution(n) {
    // n % 6 === 0
    // 6개 = 1판
    let pizza = 6;
    
    while(pizza % n !== 0) {
        pizza += 6
    }
    return pizza / 6;
}