function solution(age) {
    let arr = 'abcdefghij'.split(""); // 영어 배열
    let num =  age.toString();
    let result = "";
    
    for(let i = 0; i < num.length; i++) {
        result = result + arr[num[i]]
    }
    
    return result;
}