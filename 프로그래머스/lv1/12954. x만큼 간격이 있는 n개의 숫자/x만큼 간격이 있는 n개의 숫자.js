function solution(x, n) {
    let arr = [];
    let numArr = 'x'.repeat(n).split("")
    let num = x;
    for(let i = 0; i < numArr.length; i++) {
        arr[i] = num;
        num+=x;
    }
    return arr;
}