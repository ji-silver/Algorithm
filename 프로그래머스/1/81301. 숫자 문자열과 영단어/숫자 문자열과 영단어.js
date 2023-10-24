function solution(s) {
    const num = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    }
    
    let result = '';
    let str = '';
    
    for(let i = 0; i < s.length; i++) {
        if(!isNaN(s[i])) { // !isNaN = 숫자인것 판별 (true, false)
            result+=s[i];
        } else {
            // 문자인 경우
            str+=s[i];
            if(num[str] !== undefined) {
                result+=num[str];
                str = '';
            }
        }
    }
    return parseInt(result);
}