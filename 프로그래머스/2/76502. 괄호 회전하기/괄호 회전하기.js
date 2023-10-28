function solution(s) {
    const isVaild = (str) => {
        const stack = []; // 괄호 저장하기
        const map = {
            '{' : '}',
            '[' : ']',
            '(' : ')'
        }
        
        // 인자값 str 순회
        for(let char of str) {
            // char가 map의 키(여는 괄호)로 존재하는 경우
            if(char in map) {
                stack.push(char)
            } else {
                // 닫는 괄호라면 스택이 비어있거나
                // stack에서 마지막 요소를 pop했을 때의 값이 map의 객체가 될 때 char와 같지 않을 때(닫는괄호) 실행
                if(stack.length === 0 || map[stack.pop()] !== char) {
                    return false;
                }
            }
        }
        // true, false 반환 (스택이 비어있으면(짝이 맞으면) true)
        return stack.length === 0;
    }
    
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        // ture일 때 count++
        if(isVaild(s)) {
            count++
        }
        
        // 문자열 회전하기 (첫번째 문자를 자른 문자열에 첫번째 문자를 뒤에 붙이기)
        s = s.slice(1) + s[0]
    }
    
    return count
}