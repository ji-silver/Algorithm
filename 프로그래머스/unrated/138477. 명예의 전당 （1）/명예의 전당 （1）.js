function solution(k, score) {
    let arr = [];
    let result = [];
    for (let i = 0; i < score.length; i++) {
            arr.push(score[i]) 
            arr.sort((a, b) => b - a)
        // k번째보다 넘치면
         if(arr.length > k) {
             arr.pop(k)
         }
        result.push(arr[arr.length - 1])
    }
    return result;
}