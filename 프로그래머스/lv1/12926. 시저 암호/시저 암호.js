function solution(s, n) {
    let str1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.repeat(3)
    let str2 = 'abcdefghijklmnopqrstuvwxyz'.repeat(3)
    let arr = s.split('')
    let result = [];
    
    for(let i = 0; i < s.length; i++) {
        if(arr[i] === ' ') {
            result.push(' ')
        }else if(arr[i] === arr[i].toUpperCase()) {
            let num = str1.indexOf(arr[i]);
            result.push(str1[num + n])
        } else if(arr[i] === arr[i].toLowerCase()) {
            let num = str2.indexOf(arr[i]);
            result.push(str2[num + n])
        }
    }
    return result.join('')
}