function solution(arr1, arr2) {
    let answer = [];
    // arr1행
    for(let i = 0; i < arr1.length; i++) {
        let row = [];
        // arr2열
        for(let j = 0; j < arr2[0].length; j++) {
            let sum = 0;
            
            // arr1열과 arr2행 곱하기 
            for(let k = 0; k < arr1[0].length; k++) {
                sum += arr1[i][k] * arr2[k][j]
            }
            row.push(sum)
        }
        answer.push(row)
    }
    return answer
}