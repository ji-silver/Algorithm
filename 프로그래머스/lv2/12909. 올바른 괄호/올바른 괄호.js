function solution(s){
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if(s[i] === '(') { // '(' 여는 괄호면 stack에 넣기
            stack.push(s[i])
        } else if(s[i] === ')') { // 닫는 괄호라면 stack 마지막이 여는 괄호일 때만 빼기
            if(stack.length !== 0 && stack[stack.length - 1] === '(') {
                stack.pop()
            } else return false
        }
    }
    return stack.length === 0 ? true : false
}