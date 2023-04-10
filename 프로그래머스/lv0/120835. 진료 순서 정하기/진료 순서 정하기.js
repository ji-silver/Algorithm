function solution(emergency) {
    let arr = [...emergency].sort((a, b) => b - a); // 오름차순
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        result.push(arr.indexOf(emergency[i]) + 1)
    }
    return result;
}