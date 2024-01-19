function solution(n, left, right) {
    const result = [];
    const offset = Math.min(left % n, right % n);  // 각 행의 시작값을 계산

    for (let i = 0; i <= right - left; i++) {
        const value = Math.max(Math.floor((left + i) / n), (left + i) % n) + 1;
        result.push(value);
    }

    return result;
}