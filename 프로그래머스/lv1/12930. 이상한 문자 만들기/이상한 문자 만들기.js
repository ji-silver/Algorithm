function solution(s) {
    // 문자열 기준이 아니라 띄어쓰기 기준으로 짝수는 대문자, 홀수는 소문자 (첫번째 인덱스는 짝수번째로 처리)
    let words = s.split(' ')
    let result = ''
    for(let i = 0; i < words.length; i++) {
        let word = words[i];
        for (let j = 0; j < word.length; j++) {
            if(j % 2 === 0) {
                result += word[j].toUpperCase()
            } else {
                result += word[j].toLowerCase()
            }
        }
        if(i < words.length - 1) {
            result += ' '
        }
    }
    return result;
}