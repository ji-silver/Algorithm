function solution(number, k) {
    let stack = [];
    
    for(let i = 0; i < number.length; i++) {
        let current = number[i]
        
        // k가 0보다크고, stack이 비어있지 않고, 현재 stack이 현재 숫자보다 작으면 pop하기
        while(k > 0 && stack.length > 0 && stack[stack.length - 1] < current) {
            stack.pop();
            k--
        }
        stack.push(current)
    }
    while(k > 0) {
        stack.pop();
        k--
    }
    
    return stack.join('')
}