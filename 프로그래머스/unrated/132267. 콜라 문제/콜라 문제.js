function solution(a, b, n) {
    let sum = 0; // 총 받은 콜라의 수
    let cola = n; // 처음에 가지고 있는 빈 병의 수

    while (cola >= a) {
        let col = Math.floor(cola / a) * b; // 받은 콜라 수 계산
        sum += col; // 받은 콜라 수 누적
        cola = col + (cola % a); // 총 빈 병의 수 계산
    }

    return sum;
}