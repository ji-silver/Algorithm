function solution(s) {
    const arr = s.split('').sort().reverse()
    let sum = ''
    for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum;
}