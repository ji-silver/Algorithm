function solution(s){
    let arr = s.split("")
    let stack = []
    for (let i = 0 ; i < arr.length; i++) { // 0부터 s까지 
        if(stack[stack.length - 1 ] !== arr[i]) { // 스택 마지막 문자와 arr 인덱스와 다른것만 push
            stack.push(arr[i])
        } else { // 둘이 같다면 stack에서 빼기
            stack.pop()
        }
    }
    return stack.length === 0 ? 1 : 0
}
