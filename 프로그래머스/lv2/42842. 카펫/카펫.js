function solution(brown, yellow) {
    // 전페 카펫의 크기 [가로, 세로] 구하기
    // 가로 >= 세로
    // yellow 구하기 = yellow 가로 * 세로 => yellow 약수들 구하기
    // 한쪽 길이가 yellow 제곱근이하까지 구해야 brown 보다 크기 않음
    for(let ver = 1; ver <= Math.sqrt(yellow); ver++) {
        // 약수면 실행
        if(yellow % ver === 0) {
            // 가로 * 세로 = yellow
            let hor = yellow / ver
            
            // yellow *2 배에 모서리 4개 더하기
            // totalBrown이 brown과 맞는지 비교하기
            let totalBrown = 2 * (hor + ver) + 4
            if(totalBrown === brown) {
                // yellow 가로, 세로 +2
                return [hor + 2, ver + 2]
            }
        }

    }
    return Math.sqrt(yellow)
}