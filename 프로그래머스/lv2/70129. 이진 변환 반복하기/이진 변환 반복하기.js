function solution(s) {
    // 0을 뺀 1의 개수의 2진수 구하기
    let count = 0;
    let zero = 0;
    
   // s가 "1"만 남을 때 까지 반복하기
    while(s !== "1") {
        let sLength = s.length
        s = s.replace(/0/g, '')
        let zeroLength = s.length;
        s = zeroLength.toString(2)
        zero += sLength - zeroLength
        count++
    }
    return [count, zero];
}