function solution(want, number, discount) {
    let answer = 0;
    const wants = [];

    // 원하는 제품들을 wants 배열에 저장
    want.forEach((meal, idx) => {
        for (let i = 0; i < number[idx]; i++) {
            wants.push(meal);
        }
    });

    // wants 배열을 정렬
    wants.sort();

    // discount 배열을 순회하며 원하는 제품과 수량이 일치하는 경우 answer 증가
    for (let i = 0; i <= discount.length - 10; i++) {
        const discountTarget = discount.slice(i, i + 10);
        discountTarget.sort();

        if (JSON.stringify(wants) === JSON.stringify(discountTarget)) {
            answer++;
        }
    }

    return answer;
}