function solution(my_string, letter) {
    let arr = [];
    for (let i = 0; i < my_string.length; i++) {
        if(my_string[i] !== letter) {
            arr.push(my_string[i]);
        }
    }
    return arr.join("");
}