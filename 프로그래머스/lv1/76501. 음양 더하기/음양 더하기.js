function solution(absolutes, signs) {
    let result = 0;
    for(let i = 0; i < absolutes.length; i++) {
        if(signs[i] > 0) {
            result = result + absolutes[i];
        } else {
            result = result - absolutes[i];
        }
    }
    return result;
}