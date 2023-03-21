function solution(array) {
    let num = 0;
    let arr = [];
    for(let i = 0; i < array.length; i++) {
        if(num < array[i]) {
            num = array[i];
        }
    }
    arr[0] = num;
    arr[1] = array.indexOf(num);
    return arr;
}