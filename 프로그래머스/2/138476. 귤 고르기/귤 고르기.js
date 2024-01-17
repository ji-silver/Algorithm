function solution(k, tangerine) {
    const countTangerine = {};

    tangerine.forEach(tan => {
        countTangerine[tan] = (countTangerine[tan] || 0) + 1;
    });

    const tangerineGroup = Object.values(countTangerine).sort((a, b) => b - a);

    let answer = 0;
    for (let i = 0; i < tangerineGroup.length; i++) {
        if (k <= 0) {
            break;
        }
        k -= tangerineGroup[i];
        answer++;
    }

    return answer;
}
