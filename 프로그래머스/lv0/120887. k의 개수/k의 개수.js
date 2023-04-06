function solution(i, j, k) {
    let arr = [];
    for(let num = i; num <=j; num++) {
        arr.push(num)
    }
    let newArr = arr.map(String).join("").split("").map(Number);
    return newArr.filter(x => x === k).length
}