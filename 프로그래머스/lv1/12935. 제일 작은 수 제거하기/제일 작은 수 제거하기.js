function solution(arr) {
    let minNum = Math.min.apply(null, arr);
    let result = arr.filter(x => x !== minNum)
    return result.length > 0 ? result : [-1];
    // let result = arr.sort((a, b) => a - b).splice(0, 1)
    // return result;
}