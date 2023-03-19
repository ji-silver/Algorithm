function solution(cipher, code) {
    let arr = cipher.split("");
    let str = '';
    for(let i = code - 1; i < arr.length; i+=code) {
        str+=arr[i];
    }
    return str;
}