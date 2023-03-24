function solution(my_string) {
    let result = '';
    for (let i = 0; i < my_string.length; i++) {
        if(i === my_string.indexOf(my_string[i])) { // 일치하는 문자 검색 후 인덱스를 출력!
            result+=my_string[i];
        }
    }
    return result;
}