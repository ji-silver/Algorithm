function solution(A,B){
    let result = 0;
    const minArr = A.sort((a ,b) => a - b)
    const maxArr = B.sort((a,b) => b -a)
    for (let i = 0; i < minArr.length; i++) {
        result += minArr[i] * maxArr[i]
    }
    return result
}