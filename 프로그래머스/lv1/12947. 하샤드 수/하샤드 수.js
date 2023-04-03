function solution(x) {
    let arr = String(x).split("").map(Number);
    let num = arr.reduce((a, b) => (a + b))
    if(x % num === 0) {
        return true;
    } else {
        return false;
    }
}