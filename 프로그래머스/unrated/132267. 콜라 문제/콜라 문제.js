function solution(a, b, n) {
    let cola = 0; // 총 받은 콜라의 수
    let bin = n; // 처음에 가지고 있는 빈 병의 수

    while (bin >= a) {
        const col = Math.floor(bin / a) * b; // 받은 콜라 수 계산
        cola += col; // 받은 콜라 수 누적
        bin = col + (bin % a); // 총 빈 병의 수 계산
    }

    return cola;
}