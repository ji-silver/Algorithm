function solution(elements) {
    const n = elements.length;
    let sums = [];
    
    // 원형 수열을 두 배로 늘려줌
    elements = elements.concat(elements);

    // 가능한 모든 연속 부분 수열을 찾아 합을 구함
    for (let i = 0; i < n; i++) {
        for (let j = i; j < i + n; j++) {
            let sum = 0;
            for (let k = i; k <= j; k++) {
                sum += elements[k];
            }
            sums.push(sum);
        }
    }

    // 중복 제거를 위해 Set을 이용하여 유일한 값만 남김
    const uniqueSums = new Set(sums);

    // 중복을 제외한 유일한 값의 개수를 반환
    return uniqueSums.size;
}

// 예시 실행
const elements = [7, 9, 1, 1, 4];
console.log(solution(elements)); // 출력 결과: 18
