function solution(num, k) {
    let str = num.toString();
    if(str.indexOf(k) === -1) {
        return -1;
    } else {
        return str.indexOf(k) + 1;
    }
}