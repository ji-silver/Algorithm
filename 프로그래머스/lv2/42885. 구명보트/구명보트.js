function solution(people, limit) {
    let sorted = people.sort((a, b) => a - b); // 오름차순으로 정렬해서 가벼운사람과 무거운 사람이 타기
    let count = 0;
    let left = 0;
    let right = sorted.length - 1; // 마지막 인덱스
    
    while(left <= right) {
        if(sorted[left] + sorted[right] <= limit) {
            left++
        }
        count++
        right--
    }

    return count;
}