function solution(my_str, n) {
    let arr = [];
    let count = 0;
    for(let i = 0; i < my_str.length / n; i++) {
        arr.push(my_str.substr(count, n))
        count+=n
    }
    return arr;
}