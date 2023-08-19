function solution(name, yearning, photo) {

    // 2차원 배열을 map으로 순회하는데 순회할 때 reduce로 추억점수 누적하기
    // 추억점수는 photo를 map으로 돌릴 때 name에 포함되는지 여부로
    // 포함 되면 name 배열에서 index 찾고 없으면 0 반환, 초기값은 0
    return photo.map(x => x.reduce((acc, person) =>
        acc + (name.includes(person) ?
            yearning[name.indexOf(person)] : 0), 0))
} 