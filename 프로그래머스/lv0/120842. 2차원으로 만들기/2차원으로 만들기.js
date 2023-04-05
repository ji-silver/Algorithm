function solution(num_list, n) {
    let arr = [[]];
    let length = num_list.length
    for(let i = 0; i < length / n; i++) {
        arr[i] = num_list.splice(0, n);
    }
    return arr;
}