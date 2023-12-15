function solution(numbers) {
    // 정렬 기준을 재정의해서 문자열 숫자를 조합했을 때 큰 수가 되도록 만들기
    
    // 배열안에 있는 요소를 문자로 만든 후 두 문자열끼리 더한 값을 비교해서 정렬하기
    // 예를 들어 a가 '30', b가 '3'이면 (b + a) => 330, (a + b) => 303 이므로 '3'이 '30' 앞으로 오게 만들기
    let sorted = numbers.map(num => num.toString()).sort((a, b) => (b + a) - (a + b))
    
    if(sorted[0] === "0") {
        return "0"
    }
    
    return sorted.join("")
}