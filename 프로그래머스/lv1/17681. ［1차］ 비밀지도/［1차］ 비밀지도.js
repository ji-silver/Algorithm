function solution(n, arr1, arr2) {
    // 한 변의 길이 = n, 공백 = " " / 0, 벽 = # / 1
    // 하나라도 벽이면 벽, 모두 공백이면 공백
    // 이진수 배열 합치기
    let result = [];
    let first = [];
    let second = [];

    for(let i = 0; i < n; i++) {
        // n길이까지 앞자리를 0으로 채우기
        first = arr1[i].toString(2).padStart(n, '0')
        second = arr2[i].toString(2).padStart(n, '0')
        let str = ''
        
        for(let j = 0; j < n; j++) {
            if(first[j] === '1' || second[j] === '1') {
                str = str + "#"
            } else if(first[j] === '0' && second[j] === '0') {
                str = str + " "
            }
        }
        result.push(str)
    }
    return result
}