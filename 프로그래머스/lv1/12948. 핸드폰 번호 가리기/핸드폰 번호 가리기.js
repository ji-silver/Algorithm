function solution(phone_number) {
    let arr = [...phone_number];
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr.length - 4 > i) {
            result+='*';
        } else {
            result+=arr[i]
        }
    }
    // return [...phone_number].length - 4
    return result;
}